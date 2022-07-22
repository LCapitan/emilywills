import '../styles/globals.scss'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import UIContextProvider from '../src/providers/UIContextProvider'
import { Header, Footer } from '../src/components'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content="https://emilywills.com/assets/img/em.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1400" />
          <meta property="og:image:height" content="755" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <DefaultSeo
          openGraph={{
            url: 'https://www.emilywills.com/',
            title: "Emily's Portfolio",
            description: "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
            images: [
              {
                url: 'https://emilywills.com/assets/img/em.png',
                width: 1400,
                height: 755,
                alt: 'Emily Wills and a Bunny',
                type: 'image/jpeg',
              }
            ],
          }}
        />
        <Header />
        <Component {...pageProps} />
      </>
    </UIContextProvider>
  )
}

export default MyApp
