import type { NextPage } from 'next';
import Head from 'next/head';

import { HavenContent } from '../../../src/containers/CaseStudy';
import { Footer } from '../../../src/components/Footer';

import styles from '../../styles/Work.module.scss';

const Haven: NextPage = () => {
  return (
    <>
      <main>
        <HavenContent />
      </main>
      <Footer />
    </>
  )
}

export default Haven;
