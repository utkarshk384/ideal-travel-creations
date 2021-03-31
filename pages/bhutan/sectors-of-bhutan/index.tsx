/* eslint-disable jsx-a11y/anchor-is-valid */
///<----Global Imports--->
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import _ from "lodash";
import Image from "next/image";
import ClampLines from "react-clamp-lines";

///<----Local Imports--->

//Types
import { imageType } from "@/src/helperTypes";

//Graphql
import { initializeApollo } from "@/apolloClient";
import { gql } from "@apollo/client";

//Styles
import styles from "styles/pages/parts-of-bhutan.module.scss";

type DzongkhagType = {
  title: string;
  description: string;
  coverImage: imageType;
  sectors: string;
};

const SectionBhutan: React.FC<{
  data?: { dataForDzongkhags: DzongkhagType[] };
}> = ({ data }) => {
  return (
    <>
      <div className={styles.pob}>
        <div className={styles.western}>
          <div className={styles["main-heading"]}>
            <h1>Western Bhutan</h1>
          </div>
          <div className={styles.cards}>
            {data?.dataForDzongkhags.map(
              (card, index) =>
                card.sectors === "WesternBhutan" && (
                  <Card
                    key={`western-bhutan-iteration-${index * 234}`}
                    data={card}
                  />
                )
            )}
          </div>
        </div>
        <div className={styles.central}>
          <div className={styles["main-heading"]}>
            <h1>Central Bhutan</h1>
          </div>
          <div className={styles.cards}>
            {data?.dataForDzongkhags.map(
              (card, index) =>
                card.sectors === "CentralBhutan" && (
                  <Card
                    key={`central-bhutan-iteration-${index * 987}`}
                    data={card}
                  />
                )
            )}
          </div>
        </div>
        <div className={styles.eastern}>
          <div className={styles["main-heading"]}>
            <h1>Eastern Bhutan</h1>
          </div>
          <div className={styles.cards}>
            {data?.dataForDzongkhags.map(
              (card, index) =>
                card.sectors === "EasternBhutan" && (
                  <Card
                    key={`eastern-bhutan-iteration-${index * 328}`}
                    data={card}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Card: React.FC<{ data?: DzongkhagType }> = ({ data }) => {
  return (
    <Link
      href="/bhutan/parts-of-bhutan/[dzongkhag]"
      as={`/bhutan/parts-of-bhutan/${data?.title}`}
    >
      <a className={styles.card}>
        <div className={styles["card-cover"]}>
          <div className={styles["card-cover-heading"]}>
            <h2>{_.startCase(data?.title)}</h2>
            <Image
              src="/images/travel-packages/Happiness-Travel.jpg"
              layout="fill"
            />
            {/* <Image src={data!.coverImage.url} layout="fill" /> */}
          </div>
        </div>
        <div className={styles["card-description"]}>
          <ClampLines
            id={`${data?.title.length! * 23}`}
            text={data?.description as string}
            innerElement="p"
            buttons={false}
            lines={4}
          />
        </div>
      </a>
    </Link>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  const query = gql`
    query dzongkhagData {
      dataForDzongkhags {
        title
        description
        sectors
        coverImage {
          width
          height
          url
        }
      }
    }
  `;

  const { data } = await client.query<{ dataForDzongkhags: DzongkhagType[] }>({
    query,
  });

  return {
    props: { data },
  };
};

export default SectionBhutan;
