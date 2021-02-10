import Head from "next/head";
import React from "react";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";

import { NavigationProvider } from "../src/Context/NavigationContext";
import { useApollo } from "@/apolloClient";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const client = useApollo(pageProps.initialApolloState);

  const router = useRouter();

  loadStyles(router);

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
          {router.pathname !== "/" && <Nav disableAnimation />}
          <Component {...pageProps} />
          <Footer />
        </NavigationProvider>
      </ApolloProvider>
    </>
  );
};

const loadStyles = (router: NextRouter) => {
  switch (router.pathname) {
    case "/":
      return require("../styles/pages/home.scss");
    case "/packages":
      return require("../styles/pages/packages.scss");
    case "/packages/[name]":
      return require("../styles/pages/[Name].scss");
    default:
      return require("../styles/_main.scss");
  }
};

export default App;
