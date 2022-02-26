///<----Global Imports--->
import React from "react";
import { NextRouter, useRouter } from "next/router";
import Link from "@/components/Link";

///<----Local Imports--->
//Styles
import styles from "styles/layout/breadcrumbs.module.scss";
import Utilities from "@/src/utils";

interface IPathnames {
  name: string;
  as: string;
  href: string;
}

const BreadCrumbs = () => {
  //Router
  const router = useRouter();
  const pathName = getPathNames(router);

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/" className={styles["list-item"]} passHref>
        Home
      </Link>
      {pathName.map((path, index) => (
        <Link
          key={`Link-Breadcrumb-${index * 98}`}
          href={path.href}
          as={path.as}
          passHref
          className={styles["list-item"]}
        >
          {path.name}
        </Link>
      ))}
    </div>
  );
};

//Function to get the current routes
const getPathNames = (router: NextRouter): IPathnames[] => {
  const pathNames: IPathnames[] = [];
  const pathName = router.asPath;
  const hrefs = router.route;
  const hrefSplit = hrefs.split("/");
  const splitPathname = pathName.split("/");
  splitPathname.shift();
  hrefSplit.shift();

  const finalPath = splitPathname.map((path) => {
    if (path.includes("?")) {
      return path.substr(0, path.indexOf("?"));
    }
    return path;
  });

  finalPath.forEach((path, index) => {
    const as = `${pathName.substring(0, pathName.indexOf(`${path}`))}${path}`;
    const href = `${hrefs.substring(0, hrefs.indexOf(`${hrefSplit![index]}`))}${
      hrefSplit![index]
    }`;
    pathNames.push({
      name: Utilities.startCase(path),
      as,
      href,
    });
  });

  return pathNames;
};

export default BreadCrumbs;
