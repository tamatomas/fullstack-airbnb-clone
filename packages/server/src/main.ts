import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import session from 'express-session';
import 'reflect-metadata';
import redis from 'redis';
import Express from 'express';
import { MikroORM, EntityManager } from '@mikro-orm/core';
import { entities } from './entities';
import { createSQLSchema } from './helpers/create-sql-schema';
import { createSchema } from './helpers/createSchema';

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
};

export const main = async () => {
  if (process.env.CREATE_DB === 'true') await createSQLSchema();

  const schema = await createSchema();

  DI.orm = await MikroORM.init({
    entities,
    type: 'postgresql',
    clientUrl:
      process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432',
    logger: console.log.bind(console),
    debug: true,
  });

  DI.em = DI.orm.em;

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
    subscriptions: {
      path: '/subscriptions',
    },
    formatError: (err) => {
      if (err.path && err.path[0] === 'login') {
        return {
          message: 'Incorrect email or password.',
        };
      }

      return err;
    },
  });

  /*process.env.REACT_WEB_URL
    ? process.env.REACT_WEB_URL
    : 'http://127.0.0.1:4200';*/

  const app = Express();
  app.use(
    cors({
      origin: [
        'https://fullstack-counter.netlify.app',
        'http://127.0.0.1:4200',
      ],
      credentials: true,
    })
  );
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient(
    process.env.REDIS_URL ? process.env.REDIS_URL : ''
  );

  // fixes setting cookies in heroku
  // refer to express-session documentation
  app.set('trust proxy', 1);

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      name: 'qid',
      secret: 'aslkdfjoiq12312',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 900000,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      },
    })
  );

  const port = process.env.PORT || 4001;
  apolloServer.applyMiddleware({ app, cors: false });
  app.listen(port, () => {
    console.log(`server started on ${port}`);
  });
};

main().catch((err) => console.log(err));