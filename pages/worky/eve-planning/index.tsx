import type { NextPage } from 'next';
import Head from 'next/head';

import { EveContent } from '../../../src/containers/CaseStudy';
import { Footer } from '../../../src/components/Footer';

import styles from '../../styles/Work.module.scss';

const Eve: NextPage = () => {
  return (
    <>
      <main>
        <EveContent />
      </main>
      <Footer />
    </>
  )
}

export default Eve;
