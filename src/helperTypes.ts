import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type urlType = { name: string; href: string; as: string };
export interface IErrors {
  [key: string]: string;
}

export type imageType = {
  url: string;
  width: number;
  height: number;
  caption?: string;
};

export type setBooleanState = React.Dispatch<React.SetStateAction<boolean>>;

export type ApolloClientType = ApolloClient<NormalizedCacheObject>;
