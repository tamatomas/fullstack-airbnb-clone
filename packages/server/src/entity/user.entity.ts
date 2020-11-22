import {
  Collection,
  DateType,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ID, ObjectType } from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";
import { Listing } from "./listing.entity";

@Entity()
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property()
  firstname!: string;

  @Field()
  @Property()
  lastname!: string;

  @Field()
  @Property()
  email!: string;

  @Field()
  @Property()
  password!: string;

  @Property()
  confirmed!: boolean;

  @Field({ nullable: true })
  @Property({ nullable: true })
  phone?: number;

  @Field(() => GraphQLJSONObject)
  @Property({ type: DateType, nullable: true })
  born!: Date;

  @Field(() => [Listing])
  @OneToMany(() => Listing, (list) => list.owner)
  listings: Collection<Listing> = new Collection<Listing>(this);
}
