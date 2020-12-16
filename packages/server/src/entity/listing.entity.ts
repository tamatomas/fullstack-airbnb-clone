import {
  ArrayType,
  Entity,
  Enum,
  JsonType,
  ManyToOne,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ID, ObjectType, registerEnumType, Root } from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";
import { KindOfPlace, PropertyType } from "@airbnb/common";
import { User } from "./user.entity";

export type Coords = {
  lat: number;
  lon: number;
};

@ObjectType()
@Entity()
export class Listing {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  price?: number;

  @Field(() => KindOfPlace)
  @Enum()
  kind!: KindOfPlace;

  @Field(() => PropertyType, { nullable: true })
  @Enum({ nullable: true })
  proptype?: PropertyType;

  @Field()
  @Property()
  nguests!: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  dedicated?: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  beds?: number;

  @Field({ nullable: true })
  @Property({ nullable: true })
  bedrooms?: number;

  @Field(() => [String], { nullable: true })
  @Property({ type: ArrayType, nullable: true })
  amenities?: string[];

  @Field({ nullable: true })
  @Property({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  street?: string;

  @Field({ nullable: true })
  @Property({ nullable: true })
  zip?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  @Property({ type: JsonType, nullable: true })
  location?: Coords;

  @Field(() => Boolean)
  finished(@Root() parent: Listing): boolean {
    return !Object.entries(parent).find(
      ([_, v]) => v === null || v === undefined
    );
  }

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
