/* eslint-disable jsx-a11y/anchor-is-valid */
///<----Global Imports--->
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import _ from "lodash";

///<----Local Imports--->
import Image from "@/components/ImageWrapper";
import Utilities from "@/src/utils";
import withSEO from "@/components/withSEO";

//Types
import { imageType } from "@/src/types/helperTypes";

//Graphql
import { initializeApollo } from "@/apolloClient";
import { gql } from "@apollo/client";

//Styles
import styles from "styles/pages/sectors-of-bhutan.module.scss";
import { getSEOConfig } from "@/api/helperFunc";

type DzongkhagType = {
  title: string;
  coverImage: imageType;
  sectors: string;
};

const SEO_URL = "/bhutan/sectors-of-bhutan";

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
                    card={card}
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
                    card={card}
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
                    card={card}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Card: React.FC<{ card: DzongkhagType }> = ({ card }) => {
  return (
    <Link
      href="/bhutan/sectors-of-bhutan/[dzongkhag]"
      as={`/bhutan/sectors-of-bhutan/${_.kebabCase(card?.title)}`}
    >
      <a className={styles.card}>
        <div className={styles["card-cover"]}>
          <div className={styles["card-cover-heading"]}>
            <h2>{Utilities.startCase(card?.title)}</h2>
            <Image src={card.coverImage.url} layout="fill" />
          </div>
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

  const { data: seoConfig, error } = await getSEOConfig(SEO_URL);
  if (error) return { props: { error } };

  if (data.dataForDzongkhags && data.dataForDzongkhags.length === 0)
    return { notFound: true };

  return {
    props: { seoConfig, data },
  };
};

export default withSEO(SectionBhutan);
