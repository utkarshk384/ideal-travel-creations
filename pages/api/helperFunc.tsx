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

//Types

type AboutBhtPathsType = Pick<IAboutBhutanPaths, "_id" | "navURL" | "url">;
export interface IpkgType {
  name: string;
}

export const getPackagesPaths = async () => {
  return new Promise<DataWithError<string[]>>(async (resolve) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/packages/types`
      );
      if (res.status >= 400) {
        let error = handleErrorResp(res.status);
        resolve({ data: [], error });
      }

      const data: IPackageType[] = await res.json();

      const kebab = data.map((url) => _.kebabCase(url.name));
      resolve({ data: kebab, error: undefined });
    } catch (err) {
      let error: string = err;
      resolve({ data: [], error });
    }
  });
};

export const getAboutBhtPaths = async () => {
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
      if (res.status >= 400)
        resolve({
          data: [],
          error: handleErrorResp(res.status, res.statusText),
        });

      const data: IAboutBhutanPaths[] = await res.json();

      data.forEach((item) =>
        paths.push({ _id: item._id, navURL: item.navURL, url: item.url })
      );

      resolve({ data: paths, error: undefined });
    } catch (err) {
      resolve({ data: [], error: handleErrorResp(20, err) }); // Custom Error Code Since it's not a HTTP related Error
    }
  });
};

export const getSEOConfig = async (url: string, extraData?: NextSeoProps) => {
  return new Promise<DataWithError<NextSeoProps | undefined>>(
    async (resolve) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/seo-of-pages?pageURL=${url}`
      );

      if (res.status >= 400)
        resolve({
          data: undefined,
          error: handleErrorResp(res.status, res.statusText),
        });

      const data: ISeoOfPageArray = await res.json();

      if (Object.keys(data).length === 0) {
        resolve({ data: undefined, error: handleErrorResp(404) });
      }

      const seoConfig = mapSEOConfig(data, extraData);

      if (seoConfig.error) resolve({ data: undefined, error: seoConfig.error });
      resolve({ data: seoConfig.data, error: undefined });
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
