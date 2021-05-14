///<----Global Imports--->
import React from "react";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps } from "next";

///<----Local Imports--->
import Image from "@/components/ImageWrapper";
import QuickLinks from "@/components/quickLinks";
import Utilities from "@/src/utils";

//Styles
import styles from "styles/pages/dync-dzongkhag.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import { gql } from "@apollo/client";
import { getallPaths, getSEOConfig } from "src/lib/graphql_helperFunc";
import dzongkhagQuery from "@/graphql/dzongkhagQuery.graphql";
import type {
  DzongkhagQuery as IQuery,
  DzongkhagQueryVariables as IVars,
} from "@/graphql/generated/graphql-frontend";
import withSEO from "@/components/withSEO";

type pathType = { params: { dzongkhag: string } };

const SEO_URL_BASE = "/bhutan/sectors-of-bhutan/[dzongkhag]";

//This variable would be later used to populate the data required to render the SEO tags for the page.
let seoData = {};

const Dzongkhag: React.FC<{
  data: IQuery;
  quickLinks: {
    packageTypes: string[];
  };
}> = ({ data, quickLinks }) => {
  return (
    <div className={styles["ssg-dzongkhags"]}>
      <div className={styles.container}>
        <div className={`${styles["l-container"]} ${styles["container-item"]}`}>
          <div className={styles["l-img-container"]}>
            <div className={styles["img-heading"]}>
              <h1>
                {_.startCase(data?.dataForDzongkhags![0]?.title)
                  .replace("And", "and")
                  .replace("In", "in")}
              </h1>
            </div>
            <Image
              src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247534/Happiness_Travel_be433cc261.jpg"
              layout="fill"
              alt={
                data.dataForDzongkhags![0]?.coverImage?.alternativeText || ""
              }
            />
          </div>
          <div className={styles["l-content"]}>
            <div className={styles.description}>
              <h1>Overview</h1>
              <hr />
              <ReactMarkdown
                source={data?.dataForDzongkhags?.[0]?.description as string}
              />
            </div>
            {data?.dataForDzongkhags?.[0]?.InterestedPlaces && (
              <div className={styles["interested-places"]}>
                <h1>Interested places</h1>
                <hr />
                <ReactMarkdown
                  source={
                    data?.dataForDzongkhags[0]?.InterestedPlaces as string
                  }
                />
              </div>
            )}
          </div>
        </div>
        <QuickLinks data={quickLinks} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = ctx.params?.dzongkhag;
  if (typeof url !== "string") return { notFound: true };

  const client = initializeApollo();

  const quickLinks = await getallPaths();

  const { data } = await client.query<IQuery, IVars>({
    query: dzongkhagQuery,
    variables: { title: Utilities.startCase(url as string) },
  });

  if (
    data.dataForDzongkhags &&
    data.dataForDzongkhags.length === 0 &&
    quickLinks.packageTypes.length === 0
  )
    return { notFound: true };

  seoData = {
    title: `${data.dataForDzongkhags![0]!.title} | Ideal Travel Creations`,
    description: data.dataForDzongkhags![0]!.description,
    canonical: `https://www.idealtravelcreations.bt/bhutan`,
    openGraph: {
      images: [
        {
          url: data.dataForDzongkhags![0]?.coverImage?.url,
          alt: data.dataForDzongkhags![0]?.coverImage?.alternativeText,
          height: data.dataForDzongkhags![0]?.coverImage?.height,
          width: data.dataForDzongkhags![0]?.coverImage?.width,
        },
      ],
    },
  };

  const { seoConfig, seoError } = await getSEOConfig(SEO_URL_BASE, seoData);
  if (seoError) {
    console.log(seoError);
    return { notFound: true };
  }
  return {
    props: { seoConfig, data, quickLinks },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: pathType[] = [];
  const client = initializeApollo();
  const query = gql`
    query dzongkhags {
      dataForDzongkhags {
        title
      }
    }
  `;

  type queryType = {
    title: string;
  };

  const { data } = await client.query<{ dataForDzongkhags: queryType[] }>({
    query,
  });

  if (data) {
    data.dataForDzongkhags.map((url) => {
      return paths.push({ params: { dzongkhag: _.kebabCase(url.title) } });
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export default withSEO(Dzongkhag);
