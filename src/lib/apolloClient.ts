import { useMemo } from "react";
import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import fetch from "cross-fetch";

let apolloClient: ApolloClient<NormalizedCacheObject>;
export const createApolloClient = () => {
<<<<<<< HEAD
  const URI = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/graphql`;
=======
  const URI = `${process.env.BACKEND_ENDPOINT}/graphql`;
>>>>>>> 799c392748433afc52a16b4c8e57e9984cdc5d79
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: URI,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState: object | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: object) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}
