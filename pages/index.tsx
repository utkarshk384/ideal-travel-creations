/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { GetStaticProps } from "next";

//Components
import Nav from "@/components/Navbar";
import Affiliations from "./home/_affiliations";
import Card from "./home/_card";
import Hero from "./home/_hero";
import Parallex from "./home/_parallex";
import Slider from "./home/_slider";

//Graphql
import { initializeApollo } from "@/apolloClient";
import {
  GetBasicPackagesQuery,
  GetBasicPackagesQueryVariables,
} from "@/graphql/generated/graphql-frontend";
import basicPackageQuery from "@/graphql/packageQuery.graphql";
import { IsliderData } from "@/graphql/types";

const Home: React.FC<{ sliderData: IsliderData[] }> = (props) => {
  //Refs

  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home" ref={homeRef}>
      <Nav className="home-nav" ref={homeRef} />
      <Hero />
      <Card />
      <Parallex />
      <Slider data={props.sliderData} />
      <Affiliations />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  const slider = await client.query<
    GetBasicPackagesQuery,
    GetBasicPackagesQueryVariables
  >({
    query: basicPackageQuery,
    variables: { limit: 5 },
  });

  const sliderData = slider?.data.packages!.map((card, index) => {
    return {
      ...card,
      index,
    };
  });

  return {
    props: {
      sliderData,
    },
  };
};

export default Home;
