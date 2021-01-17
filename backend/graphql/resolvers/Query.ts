import { Resolvers } from "../../generated/graphql";
import { getBooks } from "book";

export const Query: Resolvers["Query"] = {
  hello: () => "World",
  books: () => getBooks(),
};
