import type { NextPage } from 'next';

// components
import { HonsBunsContent } from '../../src/containers/CaseStudy';
import { Footer } from '../../src/components';

const HonsBuns: NextPage = () => {
  return (
    <>
      <main>
        <HonsBunsContent />
      </main>

      <Footer />
    </>
  )
}

export default HonsBuns;
