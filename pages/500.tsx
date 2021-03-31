import React from "react";
import Link from "next/link";

import styles from "styles/pages/404.module.scss";

const ServerErrorPage = () => {
  return (
    <div className={styles["not-found"]}>
      <div className={`${styles.container} ${styles["server-error"]}`}>
        <h1>Opps! Internal Server Error</h1>
        <hr />
        <p>
          <b>Sorry, </b>that wasn't as we expected it to be.
        </p>
        <Link href="/">
          <a>Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export default ServerErrorPage;
