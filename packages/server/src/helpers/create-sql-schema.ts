import { MikroORM } from '@mikro-orm/core';
import 'reflect-metadata';
import { entities } from '../entities';

export const createSQLSchema = async () => {
  const orm = await MikroORM.init({
    entities,
    type: 'postgresql',
    clientUrl:
      process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432',
    logger: console.log.bind(console),
    debug: true,
  });
  const generator = orm.getSchemaGenerator();

  await generator.getCreateSchemaSQL(false);
  await generator.getUpdateSchemaSQL(false);
  await generator.generate();

  await generator.dropSchema(false);
  await generator.createSchema(false);
  await generator.updateSchema(false);

  await orm.close(true);
};