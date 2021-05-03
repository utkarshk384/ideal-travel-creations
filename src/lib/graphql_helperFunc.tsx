import { ApolloQueryResult, gql } from "@apollo/client";
import _ from "lodash";
import { initializeApollo } from "./apolloClient";

//Types

export interface IstaticPathQuery {
  aboutBhutanSections: staticPathType[];
}

export type staticPathType = {
  _id: string;
  url: string;
  navURL: boolean;
};

export interface IpkgType {
  name: string;
}

export const getallPaths = async () => {
  return new Promise<{ packageTypes: string[] }>(async (resolve, reject) => {
    try {
      const client = initializeApollo();
      const query = gql`
        query {
          packageTypes {
            name
          }
        }
      `;

      const queryRes = await client.query<{ packageTypes: IpkgType[] }>({
        query,
      });
      const kebab = queryRes.data.packageTypes.map((url) =>
        _.kebabCase(url.name)
      );
      resolve({ packageTypes: kebab });
    } catch (err) {
      reject(err);
    }
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
              _id
              url
              navURL
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
