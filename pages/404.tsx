import React from "react";
import Link from "next/link";

import styles from "styles/pages/errors.module.scss";
import { NextPage } from "next";

interface IProps {
  statusCode: number;
  message: string;
}

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
          <a>Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
