import { useMemo } from "react";
import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import fetch from "cross-fetch";

import { QueryOptions } from "@apollo/client";
import { handleError } from "@/src/handleErrors";
import { ApolloErrorType } from "../types/helperTypes";

let apolloClient: ApolloClient<NormalizedCacheObject>;
export const createApolloClient = () => {
  const URI = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/graphql`;
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: URI,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
};

function initializeApollo(initialState: object | null = null) {
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

type queryVars = Record<string, any> | undefined;

type ReturnType<TData> = {
  data: TData | null;
  error: ApolloErrorType | undefined;
};

const apolloQuery = async <
  TData extends any,
  TVars extends queryVars = undefined
>(
  queryOptions: QueryOptions<TVars, TData>
) => {
  return new Promise<ReturnType<TData>>(async (resolve, reject) => {
    const client = initializeApollo();

    await client
      .query<TData, TVars>({ ...queryOptions })
      .then((res) => {
        resolve({ data: res.data, error: undefined });
      })
      .catch((err) => {
        const error = handleError(err);
        resolve({ data: null, error });
      });
  });
};

export { apolloQuery };
