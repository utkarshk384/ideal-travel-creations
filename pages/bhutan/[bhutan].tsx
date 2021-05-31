///<----Global Imports--->
import React from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";

///<----Local Imports--->
import withSEO from "@/components/withSEO";
import Image from "@/components/ImageWrapper";

import Map from "@/components/Map";
import QuickLinks from "@/components/quickLinks";

//Styles
import styles from "styles/pages/dync-bhutan.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import ssgBhutanQuery from "@/graphql/ssgBhutan.graphql";
import {
  DataAboutBhutanQuery as IQuery,
  DataAboutBhutanQueryVariables as IVars,
} from "@/src/types/generated/graphql-frontend";
import { getAboutBhtPaths, getSEOConfig } from "@/api/helperFunc";
import Utilities from "@/src/utils";

interface Ipaths {
  params: {
    bhutan: string;
  };
}

//This is the base of the SEO URL that will used in the getStaticProps via the getStaticPaths method of next js
const SEO_URL_BASE = "/bhutan";

const SsgBhutan: React.FC<{
  mainData: IQuery;
}> = (props) => {
  ///Router
  const router = useRouter();

  const data = props.mainData.aboutBhutanSections![0];
  return (
    <>
      <div className={styles["ssg-bht"]}>
        <div className={styles.container}>
          <div
            className={`${styles["l-container"]} ${styles["container-item"]}`}
          >
            <div className={styles["l-img-container"]}>
              <div className={styles["img-heading"]}>
                <h1>{Utilities.startCase(data!.title)}</h1>
              </div>
              <Image src={data?.coverImage?.url as string} layout="fill" />
            </div>
            <div className={styles["l-content"]}>
              <div className="table-container">
                <ReactMarkdown
                  plugins={[[gfm, { tableCellPadding: true }]]}
                  allowDangerousHtml
                  source={data?.content as string}
                />
              </div>
              {router.asPath === "/bhutan/location-and-geography" && (
                <Map
                  lat={27.5002}
                  lng={90.5081}
                  zoom={7}
                  className={styles.map}
                />
              )}
            </div>
          </div>
          <QuickLinks />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo();
  const url = ctx.params?.bhutan;

  if (typeof url !== "string") return { notFound: true };

  const { data } = await client.query<IQuery, IVars>({
    query: ssgBhutanQuery,
    variables: { url },
  });

  if (data.aboutBhutanSections && data.aboutBhutanSections.length === 0)
    return { notFound: true };

  const { data: seoConfig, error } = await getSEOConfig(
    `${SEO_URL_BASE}/${url}`
  );
  if (error.length > 0) return { props: { error } };

  return {
    props: { seoConfig, mainData: data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Ipaths[] = [];
  const payload = await getAboutBhtPaths();

  if (payload.error.length > 0) return { paths: [], fallback: false };

  payload.data.map((item) => paths.push({ params: { bhutan: item.url } }));
  return {
    paths,
    fallback: false,
  };
};

export default withSEO(SsgBhutan);
