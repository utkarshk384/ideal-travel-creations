import React from "react";
import _ from "lodash";
import { GetStaticProps } from "next";
import Image from "next/image";

//Graphql
import { initializeApollo } from "@/apolloClient";
import { gql } from "@apollo/client";

import styles from "styles/pages/parts-of-bhutan.module.scss";

type DzongkhagType = {
  title: string;
  description: string;
  coverImage: {
    width: number;
    height: number;
    url: string;
  };
  sectors: string;
};

interface IDzongkhagType {
  dataForDzongkhags: DzongkhagType[];
}

const SectionBhutan: React.FC<{
  data?: IDzongkhagType;
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
                  <Card key={`western-bhutan-iteration-${index}`} data={card} />
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
                  <Card key={`central-bhutan-iteration-${index}`} data={card} />
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
                  <Card key={`eastern-bhutan-iteration-${index}`} data={card} />
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
    <button className={styles.card}>
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
        <p>{data?.description.substring(0, 115)}</p>
      </div>
    </button>
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

  const { data } = await client.query<IDzongkhagType>({
    query,
  });

  return {
    props: { data },
  };
};

export default SectionBhutan;
