import { Resolvers } from "../../generated/graphql";

export const Query: Resolvers["Query"] = {
  hello: () => "World",
  books: () => []
};
