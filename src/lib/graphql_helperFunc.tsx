import { ApolloQueryResult, gql } from "@apollo/client";
import _ from "lodash";
import { initializeApollo } from "./apolloClient";
import SEOQuery from "@/graphql/SEOConfigQuery.graphql";
import {
  SeoConfigQuery,
  SeoConfigQueryVariables as SEOConfigQueryVars,
} from "@/graphql/generated/graphql-frontend";
import { NextSeoProps } from "next-seo";

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

type SEOReturnType = { seoConfig?: NextSeoProps; seoError?: any[] };

export const getSEOConfig = async (url: string, extraData?: NextSeoProps) => {
  const client = initializeApollo();

  const errors: any[] = [];

  const { data, error } = await client.query<
    SeoConfigQuery,
    SEOConfigQueryVars
  >({
    query: SEOQuery,
    variables: { url },
  });

  if (data.seoOfPages?.length === 0)
    errors.push("ErrorSEO: Data coudln't be fetched");

  if (error) errors.push(error);

  const seoConfig = mapSEOConfig(data, extraData);

  if (typeof seoConfig === "string") errors.push(JSON.parse(seoConfig));

  if (errors.length > 0)
    return new Promise<SEOReturnType>(async (resolve) =>
      resolve({ seoConfig: undefined, seoError: errors })
    );

  return new Promise<SEOReturnType>(async (resolve) =>
    resolve({ seoConfig: seoConfig as NextSeoProps, seoError: undefined })
  );
};

const mapSEOConfig = (
  _config: SeoConfigQuery,
  extraData?: NextSeoProps
): NextSeoProps | string => {
  try {
    const config = _config.seoOfPages![0];

    const twitterCard = config?.TwitterCard
      ? {
          cardType: config.TwitterCard?.cardType || "summary",
          handle: config.TwitterCard?.handle! || "",
          site: config.TwitterCard?.site! || "",
        }
      : {};
    const openGraph = config?.OpenGraphTags
      ? {
          title: config.OpenGraphTags!.ogTitle,
          description: config.OpenGraphTags!.ogDescription,
          ogType: config.OpenGraphTags!.ogType,
          images: [
            {
              url: config.OpenGraphTags!.ogImage!.url || "",
              alt: config.OpenGraphTags!.ogImage!.alternativeText!,
              width: config.OpenGraphTags!.ogImage!.width!,
              height: config.OpenGraphTags!.ogImage!.height!,
            },
          ],
        }
      : {};

    return {
      title: config?.title,
      description: config?.description,
      twitter: twitterCard,
      openGraph: openGraph,
      canonical: config?.canonical,
      ...extraData,
    };
  } catch (err) {
    return JSON.stringify(err);
  }
};
