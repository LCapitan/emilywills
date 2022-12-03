import Head from "next/head";
import UIContextProvider from "../src/providers/UIContextProvider";
import { useState } from "react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { animations } from "../lib/animations";
import { builder } from "@builder.io/react";
builder.init("c1b80d2fa81e4146ab6e58293a95c87e");
import "../builder.config";

// components
import { Header } from "../src/components";

// styles
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);
  return (
    <UIContextProvider>
      <>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:image"
            content="https://emilywills.com/assets/img/em.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1400" />
          <meta property="og:image:height" content="755" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <DefaultSeo
          openGraph={{
            url: "https://www.emilywills.com/",
            title: "Emily's Portfolio",
            description:
              "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
            images: [
              {
                url: "https://emilywills.com/assets/img/em.png",
                width: 1400,
                height: 755,
                alt: "Emily Wills and a Bunny",
                type: "image/jpeg",
              },
            ],
          }}
        />
        <Header />
        <Component {...pageProps} />
      </>
    </UIContextProvider>
  );
}

export default MyApp;
