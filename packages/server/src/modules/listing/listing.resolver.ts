import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { DI } from "../../main";
import { Listing, Coords, User } from "../../entity";
import { ListingInput } from "./args/ListingInput";
import { GraphQLJSONObject } from "graphql-type-json";

@Resolver()
export class ListingResolver {
  @Query(() => [Listing])
  async search(
    @Arg("city") city: string,
    @Arg("guests") guests: number,
    @Arg("location", () => GraphQLJSONObject) location: Coords
  ): Promise<Listing[]> {
    const list = await DI.em.find(Listing, {
      city,
      location,
      nguests: guests,
    });

    return list;
  }

  @Query(() => Listing)
  async find(@Arg("id", () => Int) id: number): Promise<Listing> {
    const list = await DI.em.findOne(Listing, { id });

    if (!list) throw new Error("listing not founded");

    return list;
  }

  @Mutation(() => Listing)
  async createListing(
    @Arg("data") { kind, location, nguests, ownerid }: ListingInput
  ): Promise<Listing> {
    const list = new Listing();
    const user = await DI.em.findOne(User, { id: ownerid });

    if (!user) throw new Error("user not founded");

    list.owner = user;
    list.kind = kind;
    list.location = location;
    list.nguests = nguests;
    await DI.em.persist(list).flush();

    if (!user.listings.isInitialized()) {
      await user.listings.init();
    }
    user.listings.add(list);

    return list;
  }

  @Mutation(() => Listing)
  async updateListing(
    @Arg("data") updateListingData: ListingInput
  ): Promise<Listing> {
    const list = await DI.em.findOne(Listing, { id: updateListingData.id });
    if (!list) throw new Error("Listing not founded");
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

    await DI.em.flush();

    return list;
  }

  @Mutation(() => Boolean)
  async deleteListing(@Arg("id", () => Int) id: number): Promise<Boolean> {
    const list = await DI.em.findOne(Listing, { id });

    if (!list) return false;

    list.owner.listings.remove(list);

    await DI.em.flush();

    await DI.em.remove(list).flush();

    return true;
  }
}
