import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { imageType } from "./apiResponse";

export type urlType = { name: string; href: string; as: string };
export interface IErrors {
  [key: string]: string;
}

export type { imageType };

export type setBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

export type ApolloClientType = ApolloClient<NormalizedCacheObject>;

export type ApolloErrorType = {
  statusCode: number;
  message: string;
  error: boolean;
};

export interface ISliderData {
  __typename?: "Package";
  index: number;
  title: string;
  description: string;
  url: string;
  images: imageType[];
}

export interface DataWithError<T, K = string[]> {
  data: T;
  error: K;
}

export interface homeData<T = string> {
  heading: string;
  body: T;
}
export interface homeAffilationData {
  id: string;
  image: Pick<imageType, "url" | "alternativeText">;
  url: string;
}
