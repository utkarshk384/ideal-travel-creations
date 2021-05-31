import _ from "lodash";
import { NextSeoProps } from "next-seo";
import fetch from "cross-fetch";
import {
  IPackageType,
  IAboutBhutanPaths,
  ISeoOfPageArray,
} from "../../src/types/apiResponse";
import { handleErrorResp } from "../../src/handleErrors";
import { DataWithError } from "../../src/types/helperTypes";
import { configOptions } from "final-form";

//Types

type AboutBhtPathsType = Pick<IAboutBhutanPaths, "_id" | "navURL" | "url">;
export interface IpkgType {
  name: string;
}

export const getPackagesPaths = async () => {
  let error: string[] = [];
  return new Promise<DataWithError<string[]>>(async (resolve) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/packages/types`
      );
      if (res.status >= 400) {
        let err = handleErrorResp(res.status);
        if (err.length > 0) {
          err.forEach((err) => error.push(err));
          resolve({ data: [], error });
        }
      }

      const data: IPackageType[] = await res.json();

      const kebab = data.map((url) => _.kebabCase(url.name));
      resolve({ data: kebab, error });
    } catch (err) {
      error.push(`Error: ${err}`);
      resolve({ data: [], error });
    }
  });
};

export const getAboutBhtPaths = async () => {
  let error: string[] = [];

  return new Promise<DataWithError<AboutBhtPathsType[]>>(async (resolve) => {
    try {
      const paths: AboutBhtPathsType[] = [];
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/about-bhutan-sections`,
        {
          cache: "force-cache",
          headers: { "Content-Type": "application/json" },
          method: "GET",
        }
      );
      if (res.status >= 400) {
        let err = handleErrorResp(res.status);
        if (err.length > 0) {
          err.forEach((err) => error.push(err));
          resolve({ data: [], error });
        }
      }

      const data: IAboutBhutanPaths[] = await res.json();

      data.forEach((item) =>
        paths.push({ _id: item._id, navURL: item.navURL, url: item.url })
      );

      resolve({ data: paths, error });
    } catch (err) {
      error.push(`Error: ${err}`);
      resolve({ data: [], error });
    }
  });
};

export const getSEOConfig = async (url: string, extraData?: NextSeoProps) => {
  return new Promise<DataWithError<NextSeoProps | undefined>>(
    async (resolve) => {
      let error: string[] = [];
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/seo-of-pages?pageURL=${url}`
      );

      if (res.status >= 400) {
        let err = handleErrorResp(res.status);
        if (err.length > 0) {
          err.forEach((err) => error.push(err));
          resolve({ data: undefined, error });
        }
      }
      const data: ISeoOfPageArray = await res.json();

      if (Object.keys(data).length === 0) {
        error.push("Error: Data not found");
        resolve({ data: undefined, error });
      }

      const seoConfig = mapSEOConfig(data, extraData);

      if (seoConfig.error) error.push(seoConfig.error);

      resolve({ data: seoConfig.data, error });
    }
  );
};

const mapSEOConfig = (
  _config: ISeoOfPageArray,
  extraData?: NextSeoProps
): DataWithError<NextSeoProps, string | undefined> => {
  let error;
  const config = _config[0];
  try {
    const twitterCard = config?.TwitterCard
      ? {
          cardType: config.TwitterCard.cardType || "summary",
          handle: config.TwitterCard.handle! || "",
          site: config.TwitterCard.site! || "",
        }
      : {};
    const openGraph = config?.OpenGraphTags
      ? {
          title: config.OpenGraphTags!.ogTitle,
          description: config.OpenGraphTags!.ogDescription,
          ogType: config.OpenGraphTags!.ogType,
          images: [
            {
              url: config.OpenGraphTags!.ogImage!.url || "",
              alt: config.OpenGraphTags!.ogImage!.alternativeText!,
              width: config.OpenGraphTags!.ogImage!.width!,
              height: config.OpenGraphTags!.ogImage!.height!,
            },
          ],
        }
      : {};

    const seoConfig = {
      title: config.title,
      description: config.description,
      twitter: twitterCard,
      openGraph: openGraph,
      canonical: config.canonical,
      ...extraData,
    };

    return { data: seoConfig, error };
  } catch (err) {
    return { data: {}, error: err };
  }
};
