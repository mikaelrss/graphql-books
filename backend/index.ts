import { ApolloServer } from "apollo-server";
import { addResolversToSchema } from "@graphql-tools/schema";

import { schema } from "./graphql/schemaLoader";
import { resolvers } from "./graphql/resolvers";

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
});

const server = new ApolloServer({
  schema: schemaWithResolvers,
});

server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});
