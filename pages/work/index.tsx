import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../../src/components/index';
import { WorkContent } from '../../src/containers/index';

import styles from '../../styles/Home.module.scss';

const Work: NextPage = () => {
  return (
    <>
      {/* <Header/> */}
      <main>
        <WorkContent />
      </main>
    </>
  )
}

export default Work;
