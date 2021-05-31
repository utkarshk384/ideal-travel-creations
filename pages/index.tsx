///<----Global Imports--->
import React, { useRef } from "react";
import { GetStaticProps, NextPage } from "next";

///<----Local Imports--->
import Nav from "@/components/Navbar";
import Affiliations from "./home/_affiliations";
import Card from "./home/_card";
import Hero from "./home/_hero";
import Parallex from "./home/_parallex";
import Slider from "../Components/homeSlider";
import Testimonials from "./home/_testimonials";
import WhyUs from "./home/why-us";
import withSEO from "@/components/withSEO";

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

  const { data } = await client.query<ITestimonialsQuery, ITestimonialVars>({
    query: homeTestimonialsQuery,
    variables: { limit: 1 },
  });

  if (data.testimonials && data.testimonials?.length === 0)
    return { notFound: true };

  const { data: seoConfig, error } = await getSEOConfig(SEO_URL);
  if (error.length > 0) return { props: { error } };

  return {
    props: {
      seoConfig,
      sliderData,
      testimonialsData: data,
    },
  };
};

export default withSEO(Home);
