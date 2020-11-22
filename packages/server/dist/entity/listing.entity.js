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
exports.Listing = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const graphql_type_json_1 = require("graphql-type-json");
const common_1 = require("@airbnb/common");
const user_entity_1 = require("./user.entity");
let Listing = class Listing {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    core_1.PrimaryKey(),
    __metadata("design:type", Number)
], Listing.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Listing.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "currency", void 0);
__decorate([
    type_graphql_1.Field(() => common_1.KindOfPlace),
    core_1.Enum(),
    __metadata("design:type", Number)
], Listing.prototype, "kind", void 0);
__decorate([
    type_graphql_1.Field(() => common_1.PropertyType),
    core_1.Enum(),
    __metadata("design:type", Number)
], Listing.prototype, "proptype", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Listing.prototype, "nguests", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Boolean)
], Listing.prototype, "dedicated", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Listing.prototype, "beds", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", Number)
], Listing.prototype, "bedrooms", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "amenities", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "state", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "street", void 0);
__decorate([
    type_graphql_1.Field(),
    core_1.Property(),
    __metadata("design:type", String)
], Listing.prototype, "zip", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.GraphQLJSONObject),
    core_1.Property(),
    __metadata("design:type", Object)
], Listing.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(() => user_entity_1.User),
    core_1.ManyToOne(),
    __metadata("design:type", user_entity_1.User)
], Listing.prototype, "owner", void 0);
Listing = __decorate([
    core_1.Entity(),
    type_graphql_1.ObjectType()
], Listing);
exports.Listing = Listing;
type_graphql_1.registerEnumType(common_1.KindOfPlace, {
    name: "KindOfPlace",
});
type_graphql_1.registerEnumType(common_1.PropertyType, {
    name: "PropertyType",
});
var common_2 = require("@airbnb/common");
Object.defineProperty(exports, "KindOfPlace", { enumerable: true, get: function () { return common_2.KindOfPlace; } });
Object.defineProperty(exports, "PropertyType", { enumerable: true, get: function () { return common_2.PropertyType; } });
//# sourceMappingURL=listing.entity.js.map