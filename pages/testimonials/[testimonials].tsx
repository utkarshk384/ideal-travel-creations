///<----Global Imports--->
import React from "react";
import { useRouter } from "next/router";
import Link from "@/components/Link";
import axios, { AxiosRequestConfig } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { gql } from "@apollo/client";

///<----Local Imports--->
import { getSEOConfig } from "@/api/helperFunc";
import Image from "@/components/ImageWrapper";
import withSEO from "@/components/withSEO";

//Types
import { imageType } from "@/src/types/helperTypes";

//Styles
import styles from "styles/pages/testimonials.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import testimonailsQuery from "@/graphql/testimonialsQuery.graphql";
import type {
  GetTestimonialsQuery as IQuery,
  GetTestimonialsQueryVariables as IVars,
} from "@/src/types/generated/graphql-frontend";

interface IData {
  __typename?: string;
  guestName: string;
  comments: string;
  image: imageType;
}

const SEO_URL = "/testimonials";

type StaticPathsProps = { testimonials: string };

type Props = {
  data?: IQuery;
  pages?: string[];
  itemCount?: number;
  revalidateKey?: string;
};
type StaticProps = GetStaticProps<Props, StaticPathsProps>;

const Testimonials: React.FC<Props> = (props) => {
  const { data, pages, itemCount, revalidateKey } = props;

  /* Check if page needs to be revalidateda */
  const checkNewContent = async () => {
    /* Gets current testimonials count */
    const newItemCount = await getPages();

    if (newItemCount === itemCount) return;

    /* remove the loop and data attributes when unstable_revalidate supports dynamic page revalidation */
    pages?.forEach(async (item) => {
      const config: AxiosRequestConfig = {
        method: "post",
        url: "/api/revalidate",
        headers: {
          "Content-Type": "application/json",
          "revalidate-token": revalidateKey,
        },
        data: { pageNo: item.replace("/testimonials/", "") },
      };

      const response = await axios.request(config);

      if (response.status !== 200)
        console.warn({
          message: "Error in revalidating the page",
          status: response.status,
        });
    });
  };

  React.useEffect(() => {
    checkNewContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Router
  const router = useRouter();

  // Current Page Number
  let query: number = 0;

  try {
    query = parseInt(router.query.testimonials as string);
  } catch (err) {}
  return (
    <div className={styles.testimonials}>
      <div className={styles.tst}>
        {data?.testimonials!.map((card, index) => (
          <Card
            data={card as IData}
            key={`testimonials-card-${index * 342}`}
            flip={index % 2 === 0 ? false : true}
          />
        ))}
      </div>
      <div className={styles["tst-nav"]}>
        <Link
          href="/testimonials/[testimonials]"
          as={`/testimonials/${query - 1}`}
        >
          <button
            className={query === 1 ? styles["btn-fill-disabled"] : ""}
            disabled={query === 1}
          >
            Prev
          </button>
        </Link>
        {pages?.map((url, index) => (
          <Link
            href="/testimonials/[testimonials]"
            as={`${url}`}
            key={`testimonials-nav-btn-${index * 5668}`}
          >
            <button
              className={query === index + 1 ? styles["btn-active"] : ""}
              disabled={query === index + 1}
            >
              {index + 1}
            </button>
          </Link>
        ))}
        <Link
          href="/testimonials/[testimonials]"
          as={`/testimonials/${query + 1}`}
        >
          <button
            className={
              query === pages!.length ? styles["btn-fill-disabled"] : ""
            }
            disabled={query === pages!.length}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

const Card: React.FC<{ data?: IData; flip?: boolean }> = ({ data, flip }) => {
  const CardImage = () => (
    <div className={`${styles["card-img-container"]}`}>
      <Image
        layout="fill"
        src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247534/Happiness_Travel_be433cc261.jpg"
      />
    </div>
  );

  const CardContent = () => (
    <div className={styles["card-content"]}>
      <div className={styles["card-title"]}>
        <h3>{data?.guestName}</h3>
      </div>
      <div className={styles["card-comment"]}>
        <p>{data?.comments}</p>
      </div>
    </div>
  );

  return (
    <div className={`${styles.card} ${flip ? styles["card-flip"] : ""}`}>
      {flip ? (
        <>
          <div className={`${styles["flip"]} ${styles["flip-img"]}`}>
            <CardImage />
          </div>
          <div className={`${styles["flip"]} ${styles["flip-content"]}`}>
            <CardContent />
          </div>
        </>
      ) : (
        <>
          <CardImage />
          <CardContent />
        </>
      )}
    </div>
  );
};

export const getStaticProps: StaticProps = async (ctx) => {
  //This constant holds the value of how many items can be rendered on the page. The way it works is that with the help of this number apollo fetches only a limited amount of data which will be rendered by the render method in react.
  const ITEM_PER_PAGE = 4;

  const { testimonials: pageNo } = ctx.params as StaticPathsProps;

  //This constant holds the current page that the user is on.
  const PAGE: number = ctx.params ? parseInt(pageNo) : -1;

  if (PAGE === -1) {
    return {
      notFound: true,
    };
  }

  // //The value of this variable is the value that is passed to the `start` offset in the query.
  const offset = PAGE === 1 ? 0 : ITEM_PER_PAGE * PAGE - ITEM_PER_PAGE;

  const client = initializeApollo();

  const { data } = await client.query<IQuery, IVars>({
    query: testimonailsQuery,
    variables: { offset, limit: ITEM_PER_PAGE },
  });

  if (data.testimonials?.length === 0)
    return {
      notFound: true,
    };

  const testimonialsCount = await getPages();
  const pageCount = Math.ceil(testimonialsCount / ITEM_PER_PAGE);

  const urls: string[] = [];

  for (let i = 0; i < pageCount; i++) urls.push(`/testimonials/${i + 1}`);

  const { data: seoConfig, error } = await getSEOConfig(SEO_URL);
  if (error) return { props: { error } };

  return {
    props: {
      seoConfig,
      data,
      pages: urls,
      itemCount: testimonialsCount,
      revalidateKey: process.env.REVALIDATE_TOKEN as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const testimonialsCount = await getPages();
  const paths = [];

  if (testimonialsCount)
    for (let i = testimonialsCount; i > 0; i--)
      paths.push({
        params: { testimonials: `${i}` },
      });

  return {
    fallback: false,
    paths,
  };
};

const getPages = async () => {
  return new Promise<number>(async (resolve, reject) => {
    const client = initializeApollo();

    const query = gql`
      query GetTestimonialsCount {
        testimonialsCount
      }
    `;
    try {
      const { data } = await client.query<{ testimonialsCount: number }>({
        query,
      });
      resolve(data.testimonialsCount);
    } catch (err) {
      reject(err);
    }
  });
};

export default withSEO(Testimonials);
