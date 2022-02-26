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
import homeData from "./api/home.json";

//Styles
import styles from "../styles/pages/home.module.scss";

//Graphql
import { apolloQuery } from "@/apolloClient";
import * as gqlTYPES from "@/src/types/generated/graphql-frontend";
import packageQuery from "@/graphql/packageQuery.graphql";
import testimonialsQuery from "@/graphql/HomeTestimonials.graphql";

//Types
import { ISliderData } from "@/src/types/helperTypes";
import { getSEOConfig } from "@/api/helperFunc";

//This is the url that is passed to the SEO function of the current page
const SEO_URL = "/";

type IQ = gqlTYPES.PackageDetailsQuery;
type IV = gqlTYPES.PackageDetailsQueryVariables;
type ITQ = gqlTYPES.HomeTestimonialsQuery;
type ITV = gqlTYPES.HomeTestimonialsQueryVariables;

const Home: NextPage<{
  sliderData: ISliderData[];
  testimonialsData: ITQ;
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

  const { data: sData, error: errr } = await apolloQuery<IQ, IV>({
    query: packageQuery,
    variables: { limit: 5 },
  });

  if (errr) {
    console.error(errr);
    return { notFound: true };
  } else if (!sData) return { notFound: true };

  const sliderData = sData.packages!.map((card, index) => {
    const pkgType = _.kebabCase(card?.packageType);

    const url = `/packages/${pkgType}/${card?.title}`;
    return {
      ...card,
      index,
      url,
    };
  });

  const { data: tData, error: err } = await apolloQuery<ITQ, ITV>({
    query: testimonialsQuery,
    variables: { limit: 1 },
  });

  if (err) {
    console.error({
      errorCode: err.statusCode,
      message: err.message,
    });
    return { notFound: true };
  } else if (!tData || tData.testimonials?.length === 0)
    return { notFound: true };

  const { data: seoConfig, error } = await getSEOConfig(SEO_URL);
  if (error) return { props: { error } };

  return {
    props: {
      seoConfig,
      sliderData,
      testimonialsData: tData,
    },
  };
};

export default withSEO(Home);
