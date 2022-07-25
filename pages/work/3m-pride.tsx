import type { NextPage } from 'next';
import Head from 'next/head';

import { PrideContent } from '../../src/containers/CaseStudy';

import styles from '../../styles/Work.module.scss';

const ThreeM: NextPage = () => {
  return (
    <>
      <main>
        <PrideContent />
      </main>
    </>
  )
}

export default ThreeM;