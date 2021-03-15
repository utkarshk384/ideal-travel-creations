import React from "react";
import Image from "next/image";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import { GetStaticPaths, GetStaticProps } from "next";
import { initializeApollo } from "@/apolloClient";
import { gql } from "@apollo/client";
import dzongkhagQuery from "@/graphql/dzongkhagQuery.graphql";
import type {
  DzongkhagQuery as IQuery,
  DzongkhagQueryVariables as IVars,
} from "@/graphql/generated/graphql-frontend";
import { getallPaths } from "src/lib/graphql_helperFunc";
import QuickLinks from "@/components/quickLinks";

import styles from "styles/pages/dync-dzongkhag.module.scss";

interface IPaths {
  params: { dzongkhag: string };
}

const Dzongkhag: React.FC<{
  data?: IQuery;
  quickLinks?: {
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
                {_.startCase(data?.dataForDzongkhag?.title)
                  .replace("And", "and")
                  .replace("In", "in")}
              </h1>
            </div>
            <Image
              src="/images/travel-packages/Happiness-Travel.jpg"
              layout="fill"
            />
          </div>
          <div className={styles["l-content"]}>
            <div className={styles.description}>
              <h1>Overview</h1>
              <hr />
              <ReactMarkdown
                source={data?.dataForDzongkhag?.description as string}
              />
            </div>
            <div className={styles["interested-places"]}>
              <h1>Interested places</h1>
              <hr />
              <ReactMarkdown
                source={data?.dataForDzongkhag?.InterestedPlaces as string}
              />
            </div>
          </div>
        </div>
        <QuickLinks data={quickLinks} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const uniqueID = ctx.params?.dzongkhag as string;

  const client = initializeApollo();

  const { data } = await client.query<IQuery, IVars>({
    query: dzongkhagQuery,
    variables: { uniqueID },
  });

  return {
    props: { data, quickLinks: await getallPaths() },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths: IPaths[] = [];
  const client = initializeApollo();

  const query = gql`
    query {
      dzongkhagsCount
    }
  `;

  const { data } = await client.query<{ dzongkhagsCount: number }>({ query });

  if (data) {
    for (let i = 1; i <= data.dzongkhagsCount; i++) {
      paths.push({ params: { dzongkhag: `${i}` } });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export default Dzongkhag;
