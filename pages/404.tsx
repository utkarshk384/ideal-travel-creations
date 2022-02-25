///<----Global Imports--->>
import React from "react";
import Link from "@/components/Link";
import { GetStaticProps, NextPage } from "next";

///<----Local Imports--->>
import { getSEOConfig } from "@/api/helperFunc";
import withSEO from "@/components/withSEO";

//Styles
import styles from "styles/pages/errors.module.scss";

interface IProps {
  seoData?: any;
}

const SEO_URL = "/404";

const NotFound: NextPage<IProps> = ({ seoData }) => {
  return (
    <div className={styles["error-wrapper"]}>
      <div className={styles["error-container"]}>
        <h2 className={styles["error-code"]}>404</h2>
        <h1>Opps! Not Found!</h1>
        <hr />
        <p>
          <b>Sorry, </b>
          Couldn't find the page that your looking for.
        </p>
        <Link href="/">Back Home?</Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await getSEOConfig(SEO_URL);
  if (error) return { props: { error } };

  return { props: { data } };
};

export default withSEO(NotFound);
