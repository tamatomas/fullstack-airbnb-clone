import { GraphQLJSONObject } from "graphql-type-json";
import { Field, ID, InputType, Int } from "type-graphql";
import {
  KindOfPlace,
  Listing,
  PropertyType,
  Coords,
} from "../../../entity/listing.entity";

@InputType()
export class ListingInput implements Partial<Listing> {
  @Field(() => ID, { nullable: true })
  id!: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  currency?: string;

  @Field(() => KindOfPlace)
  kind!: KindOfPlace;

  @Field(() => PropertyType, { nullable: true })
  proptype?: PropertyType;

  @Field()
  nguests!: number;

  @Field({ nullable: true })
  dedicated?: boolean;

  @Field({ nullable: true })
  beds?: number;

  @Field({ nullable: true })
  bedrooms?: number;

  @Field({ nullable: true })
  amenities?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  zip?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  location?: Coords;

  @Field(() => Int)
  ownerid: number;
}
