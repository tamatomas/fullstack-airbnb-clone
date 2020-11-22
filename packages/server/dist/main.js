"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.DI = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const connect_redis_1 = __importDefault(require("connect-redis"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
require("reflect-metadata");
const redis_1 = require("./redis");
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const entities_1 = require("./entities");
const create_sql_schema_1 = require("./helpers/create-sql-schema");
const createSchema_1 = require("./helpers/createSchema");
exports.DI = {};
exports.main = async () => {
    if (process.env.CREATE_DB === "true")
        await create_sql_schema_1.createSQLSchema();
    const schema = await createSchema_1.createSchema();
    exports.DI.orm = await core_1.MikroORM.init({
        entities: entities_1.entities,
        type: "postgresql",
        clientUrl: process.env.DATABASE_URL || "postgres://postgres:root@localhost:5432",
        logger: console.log.bind(console),
        debug: true,
    });
    exports.DI.em = exports.DI.orm.em;
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => ({
            req,
            res,
        }),
        subscriptions: {
            path: "/subscriptions",
        },
        formatError: (err) => {
            if (err.path && err.path[0] === "login") {
                return {
                    message: "Incorrect email or password.",
                };
            }
            return err;
        },
    });
    const app = express_1.default();
    app.use(cors_1.default({
        origin: [
            "https://fullstack-counter.netlify.app",
            "http://127.0.0.1:4200",
        ],
        credentials: true,
    }));
    const RedisStore = connect_redis_1.default(express_session_1.default);
    app.set("trust proxy", 1);
    app.use(express_session_1.default({
        store: new RedisStore({
            client: redis_1.redis,
        }),
        name: "qid",
        secret: "aslkdfjoiq12312",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 900000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        },
    }));
    const port = process.env.PORT || 4001;
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(port, () => {
        console.log(`server started on ${port}`);
    });
};
exports.main().catch((err) => console.log(err));
//# sourceMappingURL=main.js.map