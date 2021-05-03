import { ApolloError, ServerParseError } from "@apollo/client";
import { ApolloErrorType } from "./helperTypes";

export function handleError(error: ApolloError): ApolloErrorType {
  console.log(error);
  if (error.graphQLErrors.length >= 1) {
    return {
      statusCode: 400,
      message: error.graphQLErrors[0].message,
      error: true,
    };
  } else {
    const networkError = error.networkError as ServerParseError;
    return {
      statusCode: networkError.statusCode,
      message: networkError.message,
      error: true,
    };
  }
}
