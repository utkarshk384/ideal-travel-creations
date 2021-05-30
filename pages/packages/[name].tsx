///<----Global Imports--->
import React, { useRef } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import _ from "lodash";

///<----Local Imports--->
import Image from "@/components/ImageWrapper";
import withError from "@/components/withError";
import withSEO from "@/components/withSEO";
import Utilities from "@/src/utils";

//Styles
import styles from "styles/pages/dync-Name.module.scss";

//Graphql
import { apolloQuery } from "@/apolloQuery";
import filteredPackageQuery from "@/graphql/packageQuery_WithFilter.graphql";
import PkgCountQuery from "@/graphql/filterPkgCont.graphql";
import {
  PackagesFilterQuery as IFilteredQuery,
  PackagesFilterQueryVariables as IFilteredvars,
  FilteredPkgCountQuery as ICountQuery,
  FilteredPkgCountQueryVariables as ICountVars,
} from "@/src/types/generated/graphql-frontend";
import { getPackagesPaths, getSEOConfig } from "@/src/helperFunc";

type PkgCountType = { href: string; page: number };

interface IProps {
  data?: IFilteredQuery;
  pages?: PkgCountType[];
  url?: string;
}

const SEO_URL_BASE = "/packages";

const PackagePage: React.FC<IProps> = (props) => {
  ///Router
  const router = useRouter();
  ///<----Refs--->
  const paragraphRef = useRef<(HTMLParagraphElement | null)[]>([]);

  ///<----Handle Mouse Events--->
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string
  ) => {
    e.preventDefault();

    const PAGE = parseInt(router.query.page as string);
    const asPath = router.asPath.split("/")[2];
    const path = asPath.split("?")[0];

    if (PAGE !== props.pages?.length && type === "next") {
      router.push(
        `/packages/[name]?page=${PAGE + 1}`,
        `${path}?page=${PAGE + 1}`
      );
    } else if (PAGE !== 1 && type === "prev") {
      router.push(
        `/packages/[name]?page=${PAGE - 1}`,
        `${path}?page=${PAGE - 1}`
      );
    }
  };
  return (
    <div className={styles["dync-name"]}>
      <div className={styles.items}>
        {props.data!.packages!.map((item, index) => (
          <React.Fragment key={`name-1-${index * 573}`}>
            <div className={styles.item}>
              <div
                className={`${styles["item-img-container"]} ${styles["flex-item"]}`}
              >
                <Image
                  src={item?.images![0]?.url as string}
                  layout="intrinsic"
                  width={item?.images![0]?.width as number}
                  height={item?.images![0]?.height as number}
                  objectFit="fill"
                />
              </div>
              <div
                className={`${styles["item-text-container"]} ${styles["flex-item"]}`}
              >
                <div className={styles["text-heading-wrapper"]}>
                  <h2>{Utilities.startCase(item!.title)}</h2>
                </div>
                <div className={styles["text-body-wrapper"]}>
                  <p ref={(el) => paragraphRef.current.push(el)}>
                    {`${item?.description.substring(0, 275)}...`}
                  </p>
                </div>
                <div className={styles["cta-wrapper"]}>
                  <Link
                    href="/packages/[name]/[package]"
                    as={`/packages/${props.url}/${item?.title}`}
                  >
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <hr className={styles["items-hr"]} />
          </React.Fragment>
        ))}
        <div className={styles.pagination}>
          <span>
            <button
              onClick={(e) => handleClick(e, "prev")}
              className={
                parseInt(router.query.page as string) === 1
                  ? styles["btn-fill-disabled"]
                  : ""
              }
              disabled={parseInt(router.query.page as string) === 1 && true}
            >
              Prev
            </button>
          </span>
          {props.pages?.map((link, index) => (
            <Link
              href={{
                pathname: "/packages/[name]",
                query: { page: link.page },
              }}
              as={{
                pathname: link.href,
                query: { page: link.page },
              }}
              key={`[name]-btn-${index * 452}`}
            >
              <button
                className={`${
                  parseInt(router.query.page as string) === link.page
                    ? styles["btn-active"]
                    : ""
                }`}
                disabled={parseInt(router.query.page as string) === link.page}
              >
                {link.page}
              </button>
            </Link>
          ))}

          <span>
            <button
              onClick={(e) => handleClick(e, "next")}
              className={
                parseInt(router.query.page as string) === props.pages?.length
                  ? styles["btn-fill-disabled"]
                  : ""
              }
              disabled={
                parseInt(router.query.page as string) === props.pages?.length &&
                true
              }
            >
              Next
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //This constant holds the value of how many items can be rendered on the page. The way it works is that with the help of this number apollo fetches only a limited amount of data which will be rendered by the render method in react.
  const ITEM_PER_PAGE = 4;
  const pages = [];

  //This constant holds the current page that the user is on.
  const PAGE = parseInt(ctx.query.page as string);

  if (!PAGE) {
    return {
      props: {},
      redirect: { destination: `/packages/${ctx.params!.name}?page=1` },
    };
  }

  //The value of this variable is the value that is passed to the `start` offset in the query.
  const dataOffset = PAGE === 1 ? 0 : ITEM_PER_PAGE * PAGE - ITEM_PER_PAGE;
  const paths = await getPackagesPaths();

  if (paths.error.length > 0) return { props: { error: paths.error } };

  const urlExists = { exists: false };

  const url = ctx.params!.name as string;
  const startCaseUrl: string = _.startCase(url);
  const formattedUrl = startCaseUrl.split(" ").join("");

  ///If given path exists then the query is made.
  paths.data.forEach((path) => {
    if (path === url) urlExists.exists = true;
  });

  if (!urlExists.exists) {
    return {
      notFound: true,
    };
  }
  // This is the main data for the page
  const query = await apolloQuery<IFilteredQuery, IFilteredvars>({
    query: filteredPackageQuery,
    variables: {
      packageType: formattedUrl,
      limit: ITEM_PER_PAGE,
      start: dataOffset,
    },
  });

  const countQuery = await apolloQuery<ICountQuery, ICountVars>({
    query: PkgCountQuery,
    variables: { packageType: url },
  });

  if (countQuery.error || query.error) return { props: { error: query.error } };
  else if (query.data?.packages!.length === 0) return { notFound: true };

  const NO_OF_PAGES = Math.ceil(
    countQuery.data?.packagesCount! / ITEM_PER_PAGE
  );

  for (let i = 1; i <= NO_OF_PAGES; i++) {
    pages.push({ href: `/packages/${url}`, page: i });
  }

  const { data: seoConfig, error } = await getSEOConfig(
    `${SEO_URL_BASE}/${ctx.params!.name}`
  );

  if (seoConfig && Object.keys(seoConfig).length == 0)
    return { notFound: true };
  if (error.length > 0) return { props: { error } };

  return {
    props: {
      seoConfig,
      data: query.data,
      pages,
      url,
    },
  };
};

export default withSEO(withError(PackagePage));
