import Head from "next/head";
import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { NavigationProvider } from "../src/Context/NavigationContext";
import "../styles/main.scss";
import { useApollo } from "../src/lib/apolloClient";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=yes" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no; target-densityDpi=device-dpi"
        />
      </Head>
      <ApolloProvider client={client}>
        <NavigationProvider>
          <Component {...pageProps} />
        </NavigationProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
