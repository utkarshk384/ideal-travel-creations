import React from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

const SEOWrapper: React.FC<{ config: object }> = ({ config }) => {
  return (
    <Head>
      <NextSeo {...config} />
    </Head>
  );
};

export default SEOWrapper;
