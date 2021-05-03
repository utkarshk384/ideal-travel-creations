///<----Global Imports--->
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import _ from "lodash";

///<----Local Imports--->

import { FourDots } from "@/components/SVGS/Spinners";

//Types
import type { urlType } from "@/src/helperTypes";

//Styles
import styles from "styles/components/quickLinks.module.scss";

//Custom Hooks
import useHideNav from "@/src/Hooks/useHideNav";
import { getAboutBhtPaths, getallPaths } from "@/src/lib/graphql_helperFunc";

const QuickLinks: React.FC<{ data?: { packageTypes: string[] } }> = (props) => {
  ///<----Custom Hooks--->
  const visible = useHideNav(false); // Used to hide the navbar

  const { loading, data, error } = useGetPaths(); // Custom Graphql hook that fetches data similar to the useQuery hook from apollo

  return (
    <div
      className={`${styles["r-container"]} ${
        visible ? "visible-nav" : "hidden-nav"
      }`}
    >
      <h3 className={styles["r-heading"]}>Travel Packages</h3>
      <div className={styles.links}>
        {loading ? (
          <div className={`${styles["loader-container"]}`}>
            <FourDots height={80} />
          </div>
        ) : (
          <Links data={data.packagePaths} error={error} />
        )}
      </div>
      <h3 className={styles["r-heading"]}>About Bhutan</h3>
      <div className={styles.links}>
        {loading ? (
          <div className={`${styles["loader-container"]}`}>
            <FourDots height={80} />
          </div>
        ) : (
          <Links data={data.aboutBhutanPaths} error={error} />
        )}
      </div>
    </div>
  );
};

const Links: React.FC<{ data: urlType[]; error: string }> = ({
  data,
  error,
}) => {
  if (!error)
    return (
      <>
        {data?.map((link, index) => (
          <Link
            key={`quick-links-map-1-${index}`}
            href={link.href}
            as={link.as}
          >
            {link.name}
          </Link>
        ))}
      </>
    );
  return <p>{error}</p>;
};

const useGetPaths = () => {
  ///<----States--->
  const [loading, setLoading] = useState(true);

  ///<----Refs--->
  const PkgsPaths = useRef<urlType[]>([]);
  const abtBhtPaths = useRef<urlType[]>([]);
  const error = useRef<string>("");

  useEffect(() => {
    if (PkgsPaths.current.length === 0 && abtBhtPaths.current.length === 0) {
      Promise.all([getallPaths(), getAboutBhtPaths()])
        .then((values) => {
          const pkgPaths = values[0].packageTypes;
          pkgPaths.map((url) =>
            PkgsPaths.current.push({
              name: _.startCase(url).replace("And", "and").replace("In", "in"),
              href: "/packages/[name]",
              as: `/packages/${url}`,
            })
          );
          const bhtPaths = values[1].data.aboutBhutanSections;
          bhtPaths.map((url) =>
            abtBhtPaths.current.push({
              name: _.startCase(url.url)
                .replace("And", "and")
                .replace("In", "in"),
              href: "/bhutan/[bhutan]",
              as: `/bhutan/${url.url}`,
            })
          );
        })
        .catch((err) => {
          error.current = err;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading]);

  return {
    loading,
    error: error.current,
    data: {
      packagePaths: PkgsPaths.current,
      aboutBhutanPaths: abtBhtPaths.current,
    },
  };
};

export default QuickLinks;
