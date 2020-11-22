import { Location } from "@airbnb/common";
import { ArgsType, Field } from "type-graphql";
import { GraphQLJSONObject } from "graphql-type-json";

@ArgsType()
export class SearchArgs {
  @Field({ nullable: true })
  city?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  location?: Location;

  @Field({ nullable: true })
  guests?: number;
}
