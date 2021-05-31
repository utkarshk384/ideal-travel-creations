import React from "react";
import _Router from "next/router";

import { breakpoints as bp } from "@/src/Hooks/useWindow";

import { NextSeo, NextSeoProps as _NextSeoProps } from "next-seo";

interface NextSeoProps extends _NextSeoProps {
  title: string;
  description: string;
}

const SEOWrapper: React.FC<{ config: NextSeoProps }> = ({ config }) => {
  return (
    <>
      <NextSeo {...config} />
    </>
  );
};

export const SEOConfig = (_config: NextSeoProps) => {
  const config = {
    additionalLinkTags: [
      {
        rel: "apple-touch-icon",
        //PROD: Change this Logo
        href:
          "https://res.cloudinary.com/ideal-travel-creations/image/upload/v1620365649/logo_icon_da8dddbab4.png",
        sizes: "76x76",
      },
    ],
    twitter: { cardType: "summary" },
    mobileAlternate: {
      media: `only screen and (max-width: ${bp.xs}px)`,
      href: `${_config.canonical}`,
    },
    openGraph: {
      url: _config.canonical,
      type: "basic",
      title: _config.title.replace("/[| ]+/g", ", "),
      images: [
        {
          url:
            "https://res.cloudinary.com/djujm0tsp/image/upload/v1617247554/Hero_5f80e23af2.jpg",
          alt: "Taktshang Dzong",
          height: 1920,
          width: 1079,
        },
      ],
    },
    ..._config,
  };

  return config;
};

export const Router = _Router;

export const breakpoints = bp;

export default SEOWrapper;
