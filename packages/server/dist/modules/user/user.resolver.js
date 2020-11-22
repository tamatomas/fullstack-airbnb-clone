"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const user_entity_1 = require("../../entity/user.entity");
const type_graphql_1 = require("type-graphql");
const main_1 = require("../../main");
const getId_1 = require("../../helpers/getId");
const redis_1 = require("../../redis");
const constants_1 = require("../../constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const sendEmail_1 = require("../../helpers/sendEmail");
const RegisterInput_1 = require("./register/RegisterInput");
const createConfirmationOnUrl_1 = require("../../helpers/createConfirmationOnUrl");
let UserResolver = class UserResolver {
    async data(ctx) {
        const user = await main_1.DI.em.findOne(user_entity_1.User, { id: getId_1.getId(ctx) }, { populate: true });
        return user;
    }
    async register({ firstname, lastname, email, password, born, phone }) {
        const user = new user_entity_1.User();
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.password = hashedPassword;
        user.born = born;
        user.confirmed = false;
        user.phone = phone;
        await main_1.DI.em.persist(user).flush();
        await sendEmail_1.sendEmail(email, await createConfirmationOnUrl_1.createConfirmationUrl(user.id));
        return user;
    }
    async login(email, password, ctx) {
        const user = await main_1.DI.em.findOne(user_entity_1.User, { email: email });
        if (!user)
            throw new Error("user not found");
        const valid = await bcryptjs_1.default.compare(password, user.password);
        if (!valid)
            throw new Error("invalid password");
        if (!user.confirmed)
            throw new Error("user not confirmed");
        ctx.req.session.userId = user.id;
        const payload = { id: user.id, expiresIn: "7 days" };
        const token = jsonwebtoken_1.default.sign(payload, "some secret");
        ctx.req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 5;
        return token;
    }
    async forgotPassword(email) {
        const user = await main_1.DI.em.findOne(user_entity_1.User, { email });
        if (!user)
            return true;
        const token = uuid_1.v4();
        await redis_1.redis.set(constants_1.forgotPasswordPrefix + token, user.id, "ex", 60 * 60 * 24);
        await sendEmail_1.sendEmail(email, `http://localhost:3000/user/change-password/${token}`);
        return true;
    }
    async confirmUser(token) {
        const userId = await redis_1.redis.get(constants_1.confirmUserPrefix + token);
        if (!userId) {
            return false;
        }
        const user = await main_1.DI.em.findOne(user_entity_1.User, { id: parseInt(userId) });
        if (user) {
            user.confirmed = true;
            await main_1.DI.em.flush();
        }
        else {
            return false;
        }
        await redis_1.redis.del(token);
        return true;
    }
    async changePassword(token, password, ctx) {
        const userId = await redis_1.redis.get(constants_1.forgotPasswordPrefix + token);
        if (!userId) {
            return null;
        }
        const user = await main_1.DI.em.findOne(user_entity_1.User, { id: parseInt(userId) });
        if (!user) {
            return null;
        }
        await redis_1.redis.del(constants_1.forgotPasswordPrefix + token);
        user.password = await bcryptjs_1.default.hash(password, 12);
        await main_1.DI.em.flush();
        ctx.req.session.userId = user.id;
        return user;
    }
};
__decorate([
    type_graphql_1.UseMiddleware(),
    type_graphql_1.Query(() => user_entity_1.User),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "data", null);
__decorate([
    type_graphql_1.Mutation(() => user_entity_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterInput_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => String),
    __param(0, type_graphql_1.Arg("email")),
    __param(1, type_graphql_1.Arg("password")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("token")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "confirmUser", null);
__decorate([
    type_graphql_1.Mutation(() => user_entity_1.User, {
        nullable: true,
    }),
    __param(0, type_graphql_1.Arg("token")),
    __param(1, type_graphql_1.Arg("password")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePassword", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map