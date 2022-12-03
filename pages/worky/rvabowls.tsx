import type { NextPage } from 'next';

// components
import { RvaBowlsContent } from '../../src/containers/CaseStudy';
import { Footer } from '../../src/components';

// import styles from '../../styles/Work.module.scss';

const RvaBowls: NextPage = () => {
  return (
    <>
      <main>
        <RvaBowlsContent />
      </main>

      <Footer />
    </>
  )
}

export default RvaBowls;
