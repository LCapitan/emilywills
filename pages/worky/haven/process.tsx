import type { NextPage } from 'next';
import Head from 'next/head';

import { HavenProcess } from '../../../src/containers/Process';
import { Footer } from '../../../src/components/Footer';

import styles from '../../styles/Process.module.scss';

const Process: NextPage = () => {
  return (
    <>
      <main>
        <HavenProcess />
      </main>
      <Footer />
    </>
  )
}

export default Process;