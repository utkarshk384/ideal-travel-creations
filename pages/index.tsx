/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { GetStaticProps } from "next";

//Components
import Nav from "@/components/Navbar";
import Affiliations from "./home/_affiliations";
import Card from "./home/_card";
import Hero from "./home/_hero";
import Parallex from "./home/_parallex";
import Slider from "../Components/homeSlider";

//Graphql
import { initializeApollo } from "@/apolloClient";
import {
  PackagesQuery as IQuery,
  PackagesQueryVariables as Ivar,
} from "@/graphql/generated/graphql-frontend";
import packageQuery from "@/graphql/packageQuery.graphql";
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

  const slider = await client.query<IQuery, Ivar>({
    query: packageQuery,
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
