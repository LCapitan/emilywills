import type { NextPage } from 'next';

// components
import { Footer } from '../src/components/index';
import { NoContent } from '../src/containers/index';

const About: NextPage = () => {
  return (
    <>
      {/* <Header/> */}
      <main>
        <NoContent />
      </main>
      <Footer />
    </>
  )
}

export default About;
