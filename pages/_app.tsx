import Head from "next/head";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";

import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/breadcrumbs";

import "styles/global.scss";
import { useApollo } from "@/apolloClient";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const client = useApollo(pageProps.initialApolloState);

  const [history, setHistory] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const asPath = router.asPath;

    if (history[history.length - 1] !== asPath)
      setHistory((prev) => [...prev, asPath]);
  }, [router, history]);

  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=yes" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no; target-densityDpi=device-dpi"
        />

        {/* <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        /> */}
      </Head>
      <ApolloProvider client={client}>
        <NextNprogress
          color="#c39462"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        {router.pathname !== "/" && (
          <Nav routerHistory={history} disableAnimation />
        )}
        {router.pathname !== "/" && <BreadCrumbs />}
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
};

export default App;
