"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfirmationUrl = void 0;
const uuid_1 = require("uuid");
const redis_1 = require("../redis");
const constants_1 = require("../constants");
exports.createConfirmationUrl = async (userId) => {
    const token = uuid_1.v4();
    await redis_1.redis.set(constants_1.confirmUserPrefix + token, userId, "ex", 60 * 60 * 24);
    return `http://localhost:3000/user/confirm/${token}`;
};
//# sourceMappingURL=createConfirmationOnUrl.js.map