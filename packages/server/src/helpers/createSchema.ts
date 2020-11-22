import { buildSchema } from "type-graphql";
import { UserResolver, ListingResolver } from "../modules";

export const createSchema = () => {
  return buildSchema({
    resolvers: [UserResolver, ListingResolver],
  });
};
