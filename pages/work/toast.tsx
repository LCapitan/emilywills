import type { NextPage } from 'next';
import Head from 'next/head';

import { ToastContent } from '../../src/containers/CaseStudy';

import styles from '../../styles/Work.module.scss';

const TotallyToast: NextPage = () => {
  return (
    <>
      <main className="container">
        <ToastContent />
      </main>
    </>
  )
}

export default TotallyToast;
