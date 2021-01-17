import { Resolvers } from "../../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "World",
  },
  // Book: {},
  // Author: {},
};
