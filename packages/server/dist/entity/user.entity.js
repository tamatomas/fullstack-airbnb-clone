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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const graphql_type_json_1 = require("graphql-type-json");
const listing_entity_1 = require("./listing.entity");
let User = class User {
    constructor() {
        this.listings = new core_1.Collection(this);
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    core_1.PrimaryKey(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    core_1.Property(),
    __metadata("design:type", Boolean)
], User.prototype, "confirmed", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    core_1.Property({ nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.GraphQLJSONObject),
    core_1.Property({ type: core_1.DateType, nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "born", void 0);
__decorate([
    type_graphql_1.Field(() => [listing_entity_1.Listing]),
    core_1.OneToMany(() => listing_entity_1.Listing, (list) => list.owner),
    __metadata("design:type", core_1.Collection)
], User.prototype, "listings", void 0);
User = __decorate([
    core_1.Entity(),
    type_graphql_1.ObjectType()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map