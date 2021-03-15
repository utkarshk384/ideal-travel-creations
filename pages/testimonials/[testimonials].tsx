import React from "react";
import Image from "next/image";

import styles from "styles/pages/testimonials.module.scss";
import { GetServerSideProps } from "next";
import { initializeApollo } from "@/apolloClient";

import testimonailsQuery from "@/graphql/testimonailsQuery.graphql";
import type {
  GetTestimonialsQuery as IQuery,
  GetTestimonialsQueryVariables as IVars,
} from "@/graphql/generated/graphql-frontend";
import { gql } from "@apollo/client";
import Link from "next/link";
import _ from "lodash";

interface IData {
  __typename?: string;
  guestName: string;
  comments: string;
  image: imageType;
}
type imageType = {
  caption: string;
  url: string;
};

type urlType = { as: string };

const Testimonials: React.FC<{ data?: IQuery; pages?: urlType[] }> = ({
  data,
  pages,
}) => {
  /// Rendering Page Number component in the following way due to an unknown error like the one mentioned below.
  // Excessive stack depth comparing types 'FlatArray<Arr, ?>' and 'FlatArray<Arr, ?>' <--- Error

  const Pages = () => (
    <>
      {pages?.map((url, index) => (
        <Link
          href="/testimonials/[testimonials]"
          as={`${url.as}`}
          key={`${_.uniqueId("testimonials-nav-btn")}`}
        >
          <button className={`${styles["num-btn"]} ${styles["page-btn"]}`}>
            {index + 1}
          </button>
        </Link>
      ))}
    </>
  );

  return (
    <div className={styles.testimonials}>
      <div className={styles.tst}>
        {data?.testimonials!.map((card, index) => (
          <Card
            data={card as IData}
            key={_.uniqueId(`testimonials-card-${new Date().getUTCDate()}`)}
            flip={index % 2 === 0 ? false : true}
          />
        ))}
      </div>
      <div className={styles["tst-nav"]}>
        <button
          className={`${styles["back-btn"]} ${styles["page-btn"]} ${styles["nav-btn"]}`}
        />
        <Pages />
        <button
          className={`${styles["forward-btn"]} ${styles["page-btn"]} ${styles["nav-btn"]}`}
        />
      </div>
    </div>
  );
};

const Card: React.FC<{ data?: IData; flip?: boolean }> = ({ data, flip }) => {
  const CardImage = () => (
    <div className={`${styles["card-img-container"]}`}>
      <Image layout="fill" src="/images/travel-packages/Happiness-Travel.jpg" />
      {/* <Image layout="fill" src={data?.image.url as string} /> */}
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //This constant holds the value of how many items can be rendered on the page. The way it works is that with the help of this number apollo fetches only a limited amount of data which will be rendered by the render method in react.
  const ITEM_PER_PAGE = 4;

  //This constant holds the current page that the user is on.
  const PAGE = parseInt(ctx.resolvedUrl.split("/")[2]);

  if (isNaN(PAGE)) {
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

  const testimonailsCount = await getPages();

  const pageCount = Math.ceil(testimonailsCount / ITEM_PER_PAGE);

  const urls: urlType[] = [];

  for (let i = 0; i < pageCount; i++)
    urls.push({ as: `/testimonials/${i + 1}` });

  return {
    props: {
      data,
      pages: urls,
    },
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

export default Testimonials;
