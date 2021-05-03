import { ApolloErrorType } from "@/src/helperTypes";
import React from "react";
import ErrorPage from "../pages/_error";

interface IProps {
  [key: string]: any;
  error: ApolloErrorType;
}

const withError = (Component: React.FC) => {
  const ErrorComponent: React.FC<IProps> = ({ error, ...rest }) => {
    if (error?.error)
      return (
        <ErrorPage statusCode={error?.statusCode} message={error?.message} />
      );
    return <Component {...rest} />;
  };

  return ErrorComponent;
};

export default withError;
