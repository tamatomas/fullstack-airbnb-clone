import {
  Entity,
  Enum,
  JsonType,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";
import { KindOfPlace, PropertyType, Location } from "@airbnb/common";
import { User } from "./user.entity";

@Entity()
@ObjectType()
export class Listing {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  title?: string;

  @Field()
  @Property()
  description?: string;

  @Field()
  @Property()
  price?: number;

  @Field()
  @Property()
  currency?: string;

  @Field(() => KindOfPlace)
  @Enum()
  kind!: KindOfPlace;

  @Field(() => PropertyType)
  @Enum()
  proptype?: PropertyType;

  @Field()
  @Property()
  nguests!: number;

  @Field()
  @Property()
  dedicated?: boolean;

  @Field()
  @Property()
  beds?: number;

  @Field()
  @Property()
  bedrooms?: number;

  @Field()
  @Property()
  amenities?: string;

  @Field()
  @Property()
  country?: string;

  @Field()
  @Property()
  state?: string;

  @Field()
  @Property()
  city?: string;

  @Field()
  @Property()
  street?: string;

  @Field()
  @Property()
  zip?: string;

  @Field(() => GraphQLJSONObject)
  @Property({ type: JsonType })
  location!: Location;

  @Field(() => User)
  @ManyToOne()
  owner!: User;
}

registerEnumType(KindOfPlace, {
  name: "KindOfPlaceEnum", // this one is mandatory
});

registerEnumType(PropertyType, {
  name: "PropertyTypeEnum", // this one is mandatory
});

export { KindOfPlace, PropertyType } from "@airbnb/common";
