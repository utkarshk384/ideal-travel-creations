///<----Global Imports--->
import React, { useRef } from "react";
import { GetStaticProps, NextPage } from "next";

///<----Local Imports--->
import Nav from "@/components/Navbar";
import Affiliations from "../Components/home/affiliations";
import Card from "../Components/home/card";
import Hero from "../Components/home/hero";
import Parallex from "../Components/home/parallex";
import Slider from "../Components/home/homeSlider";
import Testimonials from "../Components/home/testimonials";
import WhyUs from "../Components/home/why-us";
import withSEO from "@/components/withSEO";

//Data
import * as homeData from "./api/home.json";

//Styles
import styles from "../styles/pages/home.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import {
  PackageDetailsQuery as IQuery,
  PackageDetailsQueryVariables as Ivar,
  HomeTestimonialsQuery as ITestimonialsQuery,
  HomeTestimonialsQueryVariables as ITestimonialVars,
} from "@/src/types/generated/graphql-frontend";
import packageQuery from "@/graphql/packageQuery.graphql";
import homeTestimonialsQuery from "@/graphql/HomeTestimonials.graphql";

//Types
import { ISliderData } from "@/src/types/helperTypes";
import { getSEOConfig } from "@/api/helperFunc";

//This is the url that is passed to the SEO function of the current page
const SEO_URL = "/";

const Home: NextPage<{
  sliderData: ISliderData[];
  testimonialsData: ITestimonialsQuery;
}> = (props) => {
  ///<----Refs--->
  const homeRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.home} ref={homeRef}>
      <Nav className={styles["home-nav"]} ref={homeRef} />
      <Hero />
      <WhyUs data={homeData.whyUs} />
      <Card data={homeData.card} />
      <Parallex />
      <Slider data={props.sliderData} />
      <Testimonials data={props.testimonialsData} />
      <Affiliations data={homeData.affiliations} />
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

  const { data } = await client.query<ITestimonialsQuery, ITestimonialVars>({
    query: homeTestimonialsQuery,
    variables: { limit: 1 },
  });

  if (data.testimonials && data.testimonials?.length === 0)
    return { notFound: true };

  const { data: seoConfig, error } = await getSEOConfig(SEO_URL);
  if (error) return { props: { error } };

  return {
    props: {
      seoConfig,
      sliderData,
      testimonialsData: data,
    },
  };
};

export default withSEO(Home);
