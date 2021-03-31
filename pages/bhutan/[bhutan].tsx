///<----Global Imports--->
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import _ from "lodash";
import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";

///<----Local Imports--->

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
} from "@/graphql/generated/graphql-frontend";
import { getAboutBhtPaths, getallPaths } from "@/graphql/../graphql_helperFunc";

interface Ipaths {
  params: {
    bhutan: string;
  };
}

const SsgBhutan: React.FC<{
  mainData?: IQuery;
  quickLinks?: { packageTypes: string[] };
}> = (props) => {
  ///Router
  const router = useRouter();
  return (
    <>
      <div className={styles["ssg-bht"]}>
        <div className={styles.container}>
          <div
            className={`${styles["l-container"]} ${styles["container-item"]}`}
          >
            <div className={styles["l-img-container"]}>
              <div className={styles["img-heading"]}>
                <h1>
                  {_.startCase(props.mainData?.aboutBhutanSections![0]?.title)
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
              <div className="table-container">
                <ReactMarkdown
                  plugins={[[gfm, { tableCellPadding: true }]]}
                  allowDangerousHtml
                  source={
                    props.mainData?.aboutBhutanSections![0]?.content as string
                  }
                />
              </div>
              {router.asPath === "/bhutan/location" && (
                <Map
                  lat={27.5002}
                  lng={90.5081}
                  zoom={7}
                  className={styles.map}
                />
              )}
            </div>
          </div>
          <QuickLinks data={props.quickLinks} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo();

  const { data } = await client.query<IQuery, IVars>({
    query: ssgBhutanQuery,
    variables: { url: ctx.params!.bhutan as string },
  });

  return {
    props: { mainData: data, quickLinks: await getallPaths() },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths: Ipaths[] = [];

  const path = await getAboutBhtPaths();

  if (path.data.aboutBhutanSections.length !== 0)
    path.data.aboutBhutanSections.map((item) =>
      paths.push({ params: { bhutan: item.url } })
    );
  return {
    paths,
    fallback: false,
  };
};

export default SsgBhutan;
