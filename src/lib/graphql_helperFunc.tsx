import { ApolloQueryResult, gql } from "@apollo/client";
import _ from "lodash";
import { initializeApollo } from "./apolloClient";

//Types

export interface IstaticPathQuery {
  aboutBhutanSections: staticPathType[];
}

export type staticPathType = {
  url: string;
};

export const getallPaths = async () => {
  return new Promise<{ packageTypes: string[] }>(async (resolve, reject) => {
    const client = initializeApollo();
    const query = gql`
      query {
        packageTypes
      }
    `;

    const queryRes = await client.query<{ packageTypes: string[] }>({ query });
    const kebab = queryRes.data.packageTypes.map((url) => _.kebabCase(url));
    resolve({ packageTypes: kebab });
    reject(queryRes.error || queryRes.errors);
  });
};

export const getAboutBhtPaths = async () => {
  return new Promise<ApolloQueryResult<IstaticPathQuery>>(
    async (resolve, reject) => {
      try {
        const client = initializeApollo();

        const query = gql`
          query titlesOfBhutan {
            aboutBhutanSections {
              url
            }
          }
        `;

        const paths = await client.query<IstaticPathQuery>({ query });

        resolve(paths);
      } catch (err) {
        reject(err);
      }
    }
  );
};
