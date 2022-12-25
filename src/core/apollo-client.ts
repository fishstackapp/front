import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "./config";

export const apolloClient = new ApolloClient({
  uri: config.hasuraEndpoint,
  cache: new InMemoryCache()
})