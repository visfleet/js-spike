import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { persistCache } from "apollo-cache-persist";
import { withClientState } from "apollo-link-state";

import clientSchema from "./clientSchema";

const cache = new InMemoryCache();

async function initApolloClient() {
  if (process.env.NODE_ENV === "production") {
    await persistCache({
      cache,
      storage: window.localStorage,
    });
  }
}

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    withClientState({
      cache,
      ...clientSchema,
    }),
    new BatchHttpLink({
      fetch,
      batchMax: 50,
    }),
  ]),
  cache,
});

export { initApolloClient };
export default apolloClient;
