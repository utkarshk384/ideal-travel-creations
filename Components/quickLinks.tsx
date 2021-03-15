import React from "react";
import Link from "next/link";
import _ from "lodash";

import styles from "styles/pages/dync-bhutan.module.scss";

const QuickLinks: React.FC<{ data?: { packageTypes: string[] } }> = ({
  data,
}) => (
  <div className={`${styles["r-container"]} ${styles["container-item"]}`}>
    <h3 className={styles["r-heading"]}>Travel Packages</h3>
    <div className={styles.links}>
      {data?.packageTypes.map((link, index) => (
        <Link
          key={`about-bht-quickLinks-${index}`}
          href="/packages/[name]"
          as={`/packages/${link}`}
        >
          {_.startCase(link)}
        </Link>
      ))}
    </div>
  </div>
);

export default QuickLinks;
