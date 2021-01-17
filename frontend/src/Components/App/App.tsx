import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Books from "../Books/Books";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
}

export default App;
