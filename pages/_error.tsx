import React from "react";
import Link from "next/link";

import styles from "styles/pages/errors.module.scss";
import { NextPage } from "next";

interface IProps {
  statusCode: number;
  message: string;
}

const CustomErrorPage: NextPage<IProps> = ({ statusCode, message }) => {
  const setErrorMessage = () => {
    switch (statusCode) {
      case 401:
        return "Unauthorized";
      case 403:
        return "Forbidden";
      case 405:
        return "Method Not Allowed";
      case 500:
        return "Internal Server Error";
      case 502:
        return "Bad Gateway";
      case 503:
        return "Service Unavailable";
      default:
        return "Bad Request";
    }
  };

  return (
    <div className={styles["not-found"]}>
      <div className={styles.container}>
        <h2 className={styles["error-code"]}>{statusCode}</h2>
        <h1>Opps! {setErrorMessage()}</h1>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: message }} />
        <Link href="/">
          <a href="/">Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export default CustomErrorPage;
