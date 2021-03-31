///<----Global Imports--->
import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

///<----Local Imports--->

import { getAboutBhtPaths } from "@/src/lib/graphql_helperFunc";

//Data
import introData from "../api/introData.json";

//Custom Hooks
import useWindowSize, { breakpoints } from "@/src/Hooks/useWindow";

//Types
import type { urlType } from "@/src/helperTypes";

//Styles
import styles from "styles/pages/bhutan.module.scss";
interface IintroData {
  key: string;
  val: string;
}

const BhutanPage: React.FC<{ data?: urlType[] }> = ({ data }) => {
  ///<----Custom Hooks--->
  const windowSize = useWindowSize(); // Used to get the browser window size

  return (
    <>
      <div className={styles.bht}>
        <div className={styles.intro}>
          <div className={`${styles["l-intro"]} ${styles["intro-item"]}`}>
            <div className={`${styles["l-item"]}`}>
              <div className={styles["l-img-container"]}>
                <div className={styles["img-heading"]}>
                  <h1>About Bhutan</h1>
                </div>
                <Image
                  src="/images/travel-packages/Happiness-Travel.jpg"
                  layout="fill"
                />
              </div>
              <div className={styles["l-container-bht"]}>
                {introData.leftData.map((item, index) => (
                  <p key={`intro-left-data${index * 234}`}>{item}</p>
                ))}
              </div>
            </div>
            {windowSize.width! <= breakpoints.lg && (
              <div className={styles["b-nav"]}>
                <h3>Navigation Links</h3>
                {data?.map((url, index) => (
                  <Link
                    key={`secotr-of-bhutan-2-${index * 555}`}
                    href={url.href}
                    as={url.as}
                  >
                    {url.name.replace("And", "and").replace("In", "in")}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className={`${styles["r-intro"]} ${styles["intro-item"]}`}>
            <h2>Country Facts</h2>
            {introData.rightData.map((item, index) => {
              return <IntroRight key={`btn-intro${index}`} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const IntroRight: React.FC<{ data?: IintroData }> = ({ data }) => {
  return (
    <div className={styles["r-item"]}>
      <div className={styles["r-content"]}>
        <p>{`${data?.key}:`}</p>
        <span>{data?.val}</span>
      </div>
      <hr />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const urls: urlType[] = [];

  const { data } = await getAboutBhtPaths();

  data.aboutBhutanSections.forEach((url) =>
    urls.push({
      name: _.startCase(url.url),
      href: "/bhutan/[bhutan]",
      as: `/bhutan/${url.url}`,
    })
  );

  urls.push({
    name: "Sectors of Bhutan",
    href: "/bhutan/parts-of-bhutan",
    as: "/bhutan/parts-of-bhutan",
  });

  return { props: { data: urls } };
};
export default BhutanPage;
