import { QueryOptions } from "@apollo/client";
import { initializeApollo } from "./apolloClient";
import { handleError } from "@/src/handleApolloError";
import { ApolloErrorType } from "../helperTypes";

type queryVars = Record<string, any>;

type ReturnType<TData> = {
  data: TData | null;
  error: ApolloErrorType | undefined;
};

const apolloQuery = async <TData extends any, TVars extends queryVars>(
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
