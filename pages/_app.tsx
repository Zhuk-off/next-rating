import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';
// import ym from 'react-yandex-metrika';
// import { YMInitializer } from 'react-yandex-metrika';
// import Router from 'next/router';
// import { useEffect, useState } from 'react';

// Router.events.on('routeChangeComplete', (url: string) => {
//   useEffect(() => ym('hit', url), []);
// });

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        ></meta>
        <meta property="og:locale" content="ru_RU"></meta>
      </Head>
      {/* <YMInitializer
        accounts={[]}
        options={{ webvizor: true, defer: true }}
        version="2"
      /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
