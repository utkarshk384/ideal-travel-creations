///<----Global Imports--->>
import React from "react";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

///<----Local Imports--->>
import { getSEOConfig } from "@/src/lib/graphql_helperFunc";
import withSEO from "@/components/withSEO";

//Styles
import styles from "styles/pages/errors.module.scss";

interface IProps {
  statusCode: number;
  message: string;
}

const SEO_URL = "/404";

const NotFound: NextPage<IProps> = ({ statusCode, message }) => {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.container}>
        <h2 className={styles["error-code"]}>404</h2>
        <h1>Opps! Not Found!</h1>
        <hr />
        <p>
          <b>Sorry, </b>
          Couldn't find the page that your looking for.
        </p>
        <Link href="/">
          <a href="/">Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { seoConfig, seoError } = await getSEOConfig(SEO_URL);
  if (seoError) {
    console.log(seoError);
  }

  return { props: { seoConfig } };
};

export default withSEO(NotFound);
