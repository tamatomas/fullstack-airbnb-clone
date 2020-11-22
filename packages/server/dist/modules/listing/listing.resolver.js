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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingResolver = void 0;
const type_graphql_1 = require("type-graphql");
const main_1 = require("../../main");
const entity_1 = require("../../entity");
const SearchArgs_1 = require("./args/SearchArgs");
const ListingInput_1 = require("./args/ListingInput");
let ListingResolver = class ListingResolver {
    async search({ city, guests, location }) {
        const list = await main_1.DI.em.find(entity_1.Listing, {
            city,
            location,
            nguests: guests,
        });
        return list;
    }
    async find(id) {
        const list = await main_1.DI.em.findOne(entity_1.Listing, { id });
        if (!list)
            throw new Error("listing not founded");
        return list;
    }
    async createListing({ kind, location, nguests, ownerid }) {
        const list = new entity_1.Listing();
        const user = await main_1.DI.em.findOne(entity_1.User, { id: ownerid });
        if (!user)
            throw new Error("user not founded");
        list.owner = user;
        list.kind = kind;
        list.location = location;
        list.nguests = nguests;
        await main_1.DI.em.persist(list).flush();
        if (!user.listings.isInitialized()) {
            await user.listings.init();
        }
        user.listings.add(list);
        return list;
    }
    async updateListing(updateListingData) {
        const list = await main_1.DI.em.findOne(entity_1.Listing, { id: updateListingData.id });
        if (!list)
            throw new Error("Listing not founded");
        list.bedrooms = updateListingData.bedrooms;
        list.amenities = updateListingData.amenities;
        list.city = updateListingData.city;
        list.country = updateListingData.country;
        list.currency = updateListingData.currency;
        list.dedicated = updateListingData.dedicated;
        list.description = updateListingData.description;
        list.kind = updateListingData.kind;
        list.location = updateListingData.location;
        list.nguests = updateListingData.nguests;
        list.price = updateListingData.price;
        list.proptype = updateListingData.proptype;
        list.state = updateListingData.state;
        list.street = updateListingData.street;
        list.title = updateListingData.title;
        list.zip = updateListingData.zip;
        await main_1.DI.em.flush();
        return list;
    }
    async deleteListing(id) {
        const list = await main_1.DI.em.findOne(entity_1.Listing, { id });
        if (!list)
            return false;
        list.owner.listings.remove(list);
        await main_1.DI.em.flush();
        await main_1.DI.em.remove(list).flush();
        return true;
    }
};
__decorate([
    type_graphql_1.Query(() => [entity_1.Listing]),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchArgs_1.SearchArgs]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "search", null);
__decorate([
    type_graphql_1.Query(() => entity_1.Listing),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "find", null);
__decorate([
    type_graphql_1.Mutation(() => entity_1.Listing),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListingInput_1.ListingInput]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "createListing", null);
__decorate([
    type_graphql_1.Mutation(() => entity_1.Listing),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ListingInput_1.ListingInput]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "updateListing", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "deleteListing", null);
ListingResolver = __decorate([
    type_graphql_1.Resolver()
], ListingResolver);
exports.ListingResolver = ListingResolver;
//# sourceMappingURL=listing.resolver.js.map