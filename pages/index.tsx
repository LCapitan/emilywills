import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { Footer } from '../src/components/index';
import { HomeHero, IntroContent, FeaturedWork } from '../src/containers/index';

import styles from '../styles/Home.module.scss';


const Home: NextPage = () => {

  return (
    <>
      <NextSeo
        title="Home | Emily Wills"
        description="Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US."
        defaultTitle="Welcome to Emily Wills' Portfolio"
        canonical="https://www.emilywills.com/"
        openGraph={{
          url: 'https://www.emilywills.com/',
          title: "Emily's Portfolio",
          description: "Emily Wills is an experience designer, entrepreneur, and empath from Virginia, US.",
          images: [
            { url: 'https://emilywills.com/assets/img/em.png' }
          ],
          site_name: 'Emily Wills',
        }}
      // twitter={{
      //   handle: '@EmilyWills',
      //   site: '@EmilyWills',
      //   cardType: 'summary_large_image',
      // }}
      />

      <main>
        <HomeHero />
        <IntroContent />
        <FeaturedWork />
      </main>

      <Footer />
    </>
  )
}

export default Home;
