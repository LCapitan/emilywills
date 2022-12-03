import type { NextPage } from 'next';
import Head from 'next/head';

import { EveProcess } from '../../../src/containers/Process';
import { Footer } from '../../../src/components/Footer';

import styles from '../../styles/Process.module.scss';

const Process: NextPage = () => {
  return (
    <>
      <main>
        <EveProcess />
      </main>
      <Footer />
    </>
  )
}

export default Process;