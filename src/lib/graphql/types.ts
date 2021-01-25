import { UploadFile, Maybe } from "./generated/graphql-frontend";

export interface IsliderData {
  index: number;
  __typename?: "Package" | undefined;
  title?: string | undefined;
  description?: string | undefined;
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
