import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";

interface IProps {
  [key: string]: any;
  seoConfig: NextSeoProps;
}

const withSEO = (Component: React.FC<any>) => {
  const seoComponent: React.FC<IProps> = ({ seoConfig, ...rest }) => {
    return (
      <>
        <NextSeo {...seoConfig} />
        <Component {...rest} />
      </>
    );
  };

  return seoComponent;
};

export default withSEO;
