import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ApolloQueryResult, gql } from "@apollo/client";

import { initializeApollo } from "../../src/lib/apolloClient";
import getPackageTypeQuery from "../../src/lib/graphql/getImgQuery.graphql";
import type {
  GetPackagesQuery as IQuery,
  GetPackagesQueryVariables as Ivars,
} from "../../src/lib/graphql/generated/graphql-frontend";

import styles from "styles/pages/packages.module.scss";

interface IpackageTypes {
  packageTypes: string[];
}

interface Iheadings {
  kebab: string[];
  title: string[];
}

interface Idata {
  headings: Iheadings[];
  images: Iimages[];
}

interface Iimages {
  url: string;
  width: number;
  height: number;
}

const Packages: React.FC<{ data?: Idata }> = ({ data }) => {
  return (
    <div className={styles.packages}>
      <h1>Travel Packages</h1>
      <div className={styles["packages-cards"]}>
        {data?.images.map(
          (card, index) =>
            card && (
              <Link
                as={`/packages/${data.headings[index].kebab}?page=1`}
                href="/packages/[name]"
              >
                <div
                  className={styles["packages-card"]}
                  key={`packages-card-${index}`}
                >
                  <div className={styles["card-image"]}>
                    <div className={styles["darken-img"]} />
                    <Image
                      src="/images/travel-packages/Happiness-Travel.jpg"
                      layout="fill"
                    />
                    {/* <Image src={`${card.url}`} layout="fill" /> */}
                  </div>
                  <div className={styles["card-text-wrapper"]}>
                    <h3 className={styles["card-heading"]}>
                      {data.headings[index].title}
                    </h3>
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  const query = gql`
    query {
      packageTypes
    }
  `;

  const { data }: ApolloQueryResult<IpackageTypes> = await client.query({
    query,
  });

  const headings = data.packageTypes.map<Iheadings>((item) => {
    const _ = require("lodash");

    const kebabCasedHeadings = _.kebabCase(item);
    const startCased_Headings = _.startCase(kebabCasedHeadings);
    return {
      kebab: kebabCasedHeadings,
      title: startCased_Headings,
    };
  });

  const payload = await fetechData(data.packageTypes);
  return {
    props: {
      data: {
        headings,
        images: payload,
      },
    },
  };
};

const fetechData = async (packages: string[]) => {
  return new Promise<(Iimages | null)[]>(async (resolve, reject) => {
    const client = initializeApollo();
    const data = [];

    for (let i = 0; i < packages.length; i++) {
      const query = await client.query<IQuery, Ivars>({
        query: getPackageTypeQuery,
        variables: { packageType: `${packages[i]}` },
      });
      if (query.data.packages?.length !== 0) {
        data.push(query.data.packages![0]?.images![0] as Iimages);
      } else {
        data.push(null);
      }
    }
    resolve(data);
  });
};
export default Packages;
