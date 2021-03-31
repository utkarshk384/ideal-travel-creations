import { UploadFile, Maybe } from "./generated/graphql-frontend";

export interface IsliderData {
  index: number;
  __typename?: "Package";
  title?: string;
  description?: string;
  url?: string;
  images?:
    | Maybe<
        Maybe<
          {
            __typename?: "UploadFile" | undefined;
          } & Pick<UploadFile, "url">
        >[]
      >
    | undefined;
}
