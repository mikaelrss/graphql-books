import { BookResolvers } from "../../generated/graphql";

export const Book: BookResolvers = {
  title: () => "Lord of the rings",
  description: () => "An extraordinary journey",
};
