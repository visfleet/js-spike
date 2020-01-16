import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { persistCache } from "apollo-cache-persist";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";

import sleep from "../services/sleep";

import clientSchema, { clientSchemaState } from "./clientSchema";

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
    setContext(async () => {
      if (clientSchemaState.apiRequestDelay)
        await sleep(clientSchemaState.apiRequestDelay);
    }),
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );

      if (networkError) console.error(`[Network error]: ${networkError}`);
    }),
    withClientState({
      cache,
      ...clientSchema,
    }),
    new BatchHttpLink({
      fetch,
      batchMax: 100,
    }),
  ]),
  cache,
});

export { initApolloClient };
export default apolloClient;
