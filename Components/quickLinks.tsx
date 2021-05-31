///<----Global Imports--->
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import _ from "lodash";

///<----Local Imports--->
import utils from "@/src/utils";

import { FourDots } from "@/components/SVGS/Spinners";

//Types
import type { urlType } from "@/src/types/helperTypes";

//Styles
import styles from "styles/components/quickLinks.module.scss";

//Custom Hooks
import useHideNav from "@/src/Hooks/useHideNav";
import { getAboutBhtPaths, getPackagesPaths } from "@/api/helperFunc";

const QuickLinks: React.FC = () => {
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

const Links: React.FC<{ data: urlType[]; error: string[] }> = ({
  data,
  error,
}) => {
  if (error.length > 0) return <p>{error}</p>;
  return (
    <>
      {data?.map((link, index) => (
        <Link key={`quick-links-map-1-${index}`} href={link.href} as={link.as}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

const useGetPaths = () => {
  ///<----States--->
  const [loading, setLoading] = useState(true);

  ///<----Refs--->
  const PkgsPaths = useRef<urlType[]>([]);
  const abtBhtPaths = useRef<urlType[]>([]);
  const error = useRef<string[]>([]);

  useEffect(() => {
    if (PkgsPaths.current.length === 0 && abtBhtPaths.current.length === 0) {
      Promise.all([getPackagesPaths(), getAboutBhtPaths()])
        .then((values) => {
          if (values[0].error.length > 0) {
            values[0].error.forEach((err) => error.current.push(err));
            return;
          }
          const pkgPaths = values[0].data;
          pkgPaths.map((url) =>
            PkgsPaths.current.push({
              name: utils.startCase(url),
              href: "/packages/[name]",
              as: `/packages/${url}`,
            })
          );
          if (values[1].error.length > 0) {
            values[1].error.forEach((err) => error.current.push(err));
            return;
          }
          const bhtPaths = values[1].data;
          bhtPaths.map((url) =>
            abtBhtPaths.current.push({
              name: utils.startCase(url.url),
              href: "/bhutan/[bhutan]",
              as: `/bhutan/${url.url}`,
            })
          );
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
