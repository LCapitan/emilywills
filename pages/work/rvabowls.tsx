import type { NextPage } from 'next';
import Head from 'next/head';

import { RvaBowlsContent } from '../../src/containers/CaseStudy';

import styles from '../../styles/Work.module.scss';

const RvaBowls: NextPage = () => {
  return (
    <>
      <main className="container">
        <RvaBowlsContent />
      </main>
    </>
  )
}

export default RvaBowls;
