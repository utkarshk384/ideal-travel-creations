import _ from "lodash";
import { Router } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import $clamp from "clamp-js";
import { gql } from "@apollo/client";

import { initializeApollo } from "@/apolloClient";
import filteredPackageQuery from "@/graphql/packageQuery_WithFilter.graphql";
import {
  PackagesFilterQuery as IQuery,
  PackagesFilterQueryVariables as Ivars,
} from "@/graphql/generated/graphql-frontend";

interface Ipaths {
  params: {
    name: string;
  };
}
const PackagePage: React.FC<{ data?: IQuery }> = (props) => {
  //Refs
  const paragraphRef = useRef<null | HTMLParagraphElement[]>([]);

  //useEffects
  useEffect(() => {
    paragraphRef.current?.forEach((paragraph) => {
      $clamp(paragraph as HTMLParagraphElement, { clamp: 4 });
    });
  }, []);

  return (
    <div className="dync-name">
      <div className="items">
        {props.data?.packages?.map((item) => (
          <>
            <div className="item">
              <div className="item-img-container flex-item">
                {/* <Link> */}
                <Image
                  src="/images/travel-packages/Happiness-Travel.jpg"
                  layout="intrinsic"
                  width="1920"
                  height="1080"
                  objectFit="fill"
                />
                {/* <Image
                  src={item?.images![0]?.url as string}
                  layout="intrinsic"
                  width={item?.images![0]?.width as number}
                  height={item?.images![0]?.height as number}
                  objectFit="fill"
                /> */}
                {/* </Link> */}
              </div>
              <div className="item-text-container flex-item">
                <div className="text-heading-wrapper">
                  <h2>{_.startCase(item?.title)}</h2>
                </div>
                <div className="text-body-wrapper">
                  <p
                    ref={(el) =>
                      paragraphRef.current?.push(el as HTMLParagraphElement)
                    }
                  >
                    {item?.description}
                  </p>
                </div>
                <div className="cta-wrapper">
                  <button>
                    {/* <Link> */}
                    Read More
                    {/* </Link> */}
                  </button>
                </div>
              </div>
            </div>
            <hr className="items-hr" />
          </>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const client = initializeApollo();
  const url = ctx.params?.name as string;
  const startCaseUrl: string = _.startCase(url);
  const formattedUrl = startCaseUrl.split(" ").join("");

  const { data } = await client.query<IQuery, Ivars>({
    query: filteredPackageQuery,
    variables: { packageType: formattedUrl },
  });

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: Ipaths[] = [];
  const data = await getallPaths();

  if (data.packageTypes) {
    data.packageTypes.forEach((path) => paths.push({ params: { name: path } }));
  }
  return {
    fallback: false,
    paths,
  };
};

const getallPaths = async () => {
  return new Promise<{ packageTypes: string[] }>(async (resolve, reject) => {
    const client = initializeApollo();
    const query = gql`
      query {
        packageTypes
      }
    `;

    const { data } = await client.query<{ packageTypes: string[] }>({ query });
    const kebab = data.packageTypes.map((url) => _.kebabCase(url));
    resolve({ packageTypes: kebab });
  });
};

export default PackagePage;
