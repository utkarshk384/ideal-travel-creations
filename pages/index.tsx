/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { GetStaticProps } from "next";

//Components
import Nav from "../Components/Navbar/Nav";
import Affiliations from "./home/_affiliations";
import Card from "./home/_card";
import Footer from "./home/_footer";
import Hero from "./home/_hero";
import Parallex from "./home/_parallex";
import Slider from "./home/_slider";

//Graphql
import { initializeApollo } from "../src/lib/apolloClient";
import {
  GetBasicPackagesQuery,
  GetBasicPackagesQueryVariables,
} from "../src/lib/graphql/generated/graphql-frontend";
import basicPackageQuery from "../src/lib/graphql/basicPackageQuery.graphql";
import { IsliderData } from "../src/lib/graphql/types";

const Home: React.FC<{ sliderData: IsliderData[] }> = (props) => {
  //Refs

  console.log(props.sliderData);

  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home" ref={homeRef}>
      <Nav className="home-nav" ref={homeRef} />
      <Hero />
      <Card />
      <Parallex />
      <Slider data={props.sliderData} />
      <Affiliations />
      <Footer />
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
