import React from "react";
import Link from "next/link";

import styles from "styles/pages/404.module.scss";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.container}>
        <h1>Opps!</h1>
        <hr />
        <p>
          We <b>couldn't</b> find the page that your looking for.
        </p>
        <Link href="/">
          <a>Back Home?</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
