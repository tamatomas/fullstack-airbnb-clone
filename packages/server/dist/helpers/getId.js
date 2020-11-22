"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.getId = (ctx) => {
    let id = ctx.req.session.userId;
    if (!id && ctx.req.headers.authorization) {
        var decoded = jsonwebtoken_1.default.verify(ctx.req.headers.authorization.toString(), 'some secret');
        id = decoded.id;
    }
    return id;
};
//# sourceMappingURL=getId.js.map