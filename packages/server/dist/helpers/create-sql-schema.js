"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSQLSchema = void 0;
const core_1 = require("@mikro-orm/core");
require("reflect-metadata");
const entities_1 = require("../entities");
exports.createSQLSchema = async () => {
    const orm = await core_1.MikroORM.init({
        entities: entities_1.entities,
        type: 'postgresql',
        clientUrl: process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432',
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
//# sourceMappingURL=create-sql-schema.js.map