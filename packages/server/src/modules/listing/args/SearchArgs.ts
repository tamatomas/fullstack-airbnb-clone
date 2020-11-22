import { Location } from "@airbnb/common";
import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class SearchArgs {
  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  location?: Location;

  @Field({ nullable: true })
  guests?: number;
}
