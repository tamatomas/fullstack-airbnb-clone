"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const type_graphql_1 = require("type-graphql");
const modules_1 = require("../modules");
exports.createSchema = () => {
    return type_graphql_1.buildSchema({
        resolvers: [modules_1.UserResolver, modules_1.ListingResolver],
    });
};
//# sourceMappingURL=createSchema.js.map