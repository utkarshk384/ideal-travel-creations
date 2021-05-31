import { ApolloError, ServerParseError } from "@apollo/client";
import { ApolloErrorType } from "./types/helperTypes";

let errorTypes = [
  { code: 400, message: "Error 400: Bad Request" },
  { code: 401, message: "Error 401: Unauthorized" },
  { code: 402, message: "Error 402: Payment Required" },
  { code: 403, message: "Error 403: Forbidden" },
  { code: 404, message: "Error 404: Not Found" },
  { code: 405, message: "Error 405: Method not allowed" },
  { code: 406, message: "Error 406: Not acceptable" },
  { code: 407, message: "Error 407: Proxy Authentication Required" },
  { code: 408, message: "Error 408: Request Timeout" },
  { code: 409, message: "Error 409: Conflict" },
  { code: 410, message: "Error 410: Gone" },
  { code: 415, message: "Error 415: Unsupported Media Type" },
  { code: 429, message: "Error 429: Too Many Requests" },
  { code: 500, message: "Error 500: Internal Server Error" },
  { code: 501, message: "Error 501: Not Implemented" },
  { code: 502, message: "Error 502: Bad Gateway" },
  { code: 503, message: "Error 503: Service Unavailable" },
  { code: 504, message: "Error 504: Gateway Timeout" },
  { code: 505, message: "Error 505: HTTP Version NOT Supported" },
  { code: 511, message: "Error 511: Network Authentication Required" },
];

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

export function handleErrorResp(statusCode: number, stackTrace?: any) {
  let errors: string[] = [];

  errorTypes.forEach((err) => {
    if (statusCode === err.code) errors.push(err.message);
    else errors.push("Unknown Error.");
  });

  if (typeof stackTrace !== "undefined") errors.push(stackTrace);

  return errors;
}
