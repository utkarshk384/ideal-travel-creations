import Head from 'next/head';
import React from 'react';
import type { AppProps } from 'next/app';

import { NavigationProvider } from '../Context/NavigationContext';
import '../../styles/main.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no; target-densityDpi=device-dpi"
        />
      </Head>
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
    </>
  );
};

export default App;
