///<----Global Imports--->
import React, { useRef } from "react";
import { GetStaticProps } from "next";

///<----Local Imports--->
import Nav from "@/components/Navbar";
import Affiliations from "./home/_affiliations";
import Card from "./home/_card";
import Hero from "./home/_hero";
import Parallex from "./home/_parallex";
import Slider from "../Components/homeSlider";
import Testimonials from "./home/_testimonials";

//Styles
import "../styles/pages/home.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import {
  PackageDetailsQuery as IQuery,
  PackageDetailsQueryVariables as Ivar,
  HomeTestimonialsQuery as IHomeQuery,
} from "@/graphql/generated/graphql-frontend";
import packageQuery from "@/graphql/packageQuery.graphql";
import homeTestimonialsQuery from "@/graphql/HomeTestimonials.graphql";
import { IsliderData } from "@/graphql/types";
import WhyUs from "./home/why-us";

const Home: React.FC<{
  sliderData: IsliderData[];
  testimonialsData: IHomeQuery;
}> = (props) => {
  ///<----Refs--->
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home" ref={homeRef}>
      <Nav className="home-nav" ref={homeRef} />
      <Hero />
      <WhyUs />
      <Card />
      <Parallex />
      <Slider data={props.sliderData} />
      <Testimonials data={props.testimonialsData} />
      <Affiliations />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const _ = require("lodash");
  const client = initializeApollo();

  const slider = await client.query<IQuery, Ivar>({
    query: packageQuery,
    variables: { limit: 5 },
  });

  const sliderData = slider?.data.packages!.map((card, index) => {
    const pkgType = _.kebabCase(card?.packageType);

    const url = `/packages/${pkgType}/${card?.title}`;
    return {
      ...card,
      index,
      url,
    };
  });

  const { data } = await client.query<IHomeQuery>({
    query: homeTestimonialsQuery,
  });

  return {
    props: {
      sliderData,
      testimonialsData: data,
    },
  };
};

export default Home;
