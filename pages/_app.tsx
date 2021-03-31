///<----Global Imports--->
import Head from "next/head";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ApolloProvider } from "@apollo/client";

///<----Local Imports--->
import { LoaderOverlay } from "@/components/Spinners-and-Loaders/NextNProgress";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/breadcrumbs";

//contexts
import OverlayProvider from "@/src/Contexts/overlayContext";

//Styles
import "styles/global.scss";

//Graphql
import { useApollo } from "@/apolloClient";

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  //Router
  const router = useRouter();

  ///<----States--->
  const [history, setHistory] = useState<string[]>([]); //State for Router history
  const [routerState, setRouter] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  }); //State that is used by NProgress to render itself

  //Initiate Graphql in the app
  const client = useApollo(pageProps.initialApolloState);

  ///<----Use Effects--->

  useEffect(() => {
    const asPath = router.asPath;

    if (history[history.length - 1] !== asPath)
      setHistory((prev) => [...prev, asPath]);
  }, [router, history]);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouter((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setRouter((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]); //useEffect straight from the next js example of @tanem/react-nprogress

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
      <OverlayProvider>
        <div className="overlay" />
        <ApolloProvider client={client}>
          <LoaderOverlay
            key={routerState.loadingKey}
            isRouteChanging={routerState.isRouteChanging}
          />
          {router.pathname !== "/" && (
            <Nav routerHistory={history} disableAnimation />
          )}
          {router.pathname !== "/" && <BreadCrumbs />}
          <Component {...pageProps} />
          <Footer />
        </ApolloProvider>
      </OverlayProvider>
    </>
  );
};

export default App;
