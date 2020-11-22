import { buildSchema } from 'type-graphql';

export const createSchema = () => {
  return buildSchema({
    resolvers: [],
  });
};