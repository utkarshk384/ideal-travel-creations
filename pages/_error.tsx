import React from "react";
import Link from "next/link";

import styles from "styles/pages/errors.module.scss";
import { NextPage } from "next";
import { handleErrorResp } from "@/src/handleErrors";

interface IProps {
  statusCode: number;
  message: string;
}

const CustomErrorPage: NextPage<IProps> = ({ statusCode, message }) => {
  const statusMessage = handleErrorResp(statusCode);

  return (
    <div className={styles["error-wrapper"]}>
      <div className={styles["error-container"]}>
        <h2 className={styles["error-code"]}>{statusCode}</h2>
        <h1>Opps! {statusMessage}</h1>
        <hr />
        <p dangerouslySetInnerHTML={{ __html: message }} />
        <Link passHref href="/">
          <a href="/test">Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export default CustomErrorPage;
