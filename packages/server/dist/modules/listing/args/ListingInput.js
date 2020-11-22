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
exports.ListingInput = void 0;
const graphql_type_json_1 = require("graphql-type-json");
const type_graphql_1 = require("type-graphql");
const listing_entity_1 = require("../../../entity/listing.entity");
let ListingInput = class ListingInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], ListingInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], ListingInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "currency", void 0);
__decorate([
    type_graphql_1.Field(() => listing_entity_1.KindOfPlace),
    __metadata("design:type", Number)
], ListingInput.prototype, "kind", void 0);
__decorate([
    type_graphql_1.Field(() => listing_entity_1.PropertyType, { nullable: true }),
    __metadata("design:type", Number)
], ListingInput.prototype, "proptype", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ListingInput.prototype, "nguests", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Boolean)
], ListingInput.prototype, "dedicated", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], ListingInput.prototype, "beds", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], ListingInput.prototype, "bedrooms", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "amenities", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "state", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "street", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ListingInput.prototype, "zip", void 0);
__decorate([
    type_graphql_1.Field(() => graphql_type_json_1.GraphQLJSONObject),
    __metadata("design:type", Object)
], ListingInput.prototype, "location", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ListingInput.prototype, "ownerid", void 0);
ListingInput = __decorate([
    type_graphql_1.InputType()
], ListingInput);
exports.ListingInput = ListingInput;
//# sourceMappingURL=ListingInput.js.map