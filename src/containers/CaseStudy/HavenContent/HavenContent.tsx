import Image from 'next/image';
import Link from 'next/link';

import {
  CSHero,
  CSHeader,
  ContentBlock,
  FullWidthImage,
  TwoColImg,
  VideoPlayer
} from '../../../components/index';

import styles from '../CaseStudy.module.scss';

const HavenContent = () => {
  return (
    <>
      <div className={styles.csWrapper}>
        <CSHeader
          title='Haven'
          overview='Creating wearable technology that provides personal safety for young women while still being fashionable yet incospicuous.'
          forWhat='Independent project'
          timeline='16 Weeks'
          tools={[
            'Figma',
            'Illustrator',
            'Photoshop',
            'After Effects'
          ]}
          roles={[
            'User Research',
            'Strategy',
            'Branding',
            'UX/UI',
            'Product Design'
          ]} />

        <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651200965/haven-banner_pmp7ty.jpg' />

        <ContentBlock>
          <div className={styles.childHeading}>
            <h2>Solution Overview</h2>
          </div>

          <p>This video is one that I made as an individual project for my visual storytelling class. It sums up my passion for Haven and the reason behind why I founded the company, how it has developed over the years, and what I am looking for to continue pushing it forward.</p>

          <p>I am currently working on a rebrand, so my full case study is not available yet for viewing here. However, feel free to ask me about it if you are interested and I’d be happy to share more in depth of what I’ve been working on! </p>
        </ContentBlock >

        <div className={styles.vidWrapper}>
          <VideoPlayer vidSrc='https://res.cloudinary.com/austinmel/video/upload/v1651202258/haven-video_bh5umo.mov' />
        </div>

        {/* <FullWidthImage
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651108444/branding_urpgh8.png'
        imgAlt=''
      /> */}

        {/* <div className={styles.contentWrapperFlipped}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651108597/bunnies_icemtj.png" alt="image of emily with her bunnies" layout="responsive" width="522" height="530" />
        </div>

        <div className={styles.homeContentCopy}>
          <p>A portion of the funds raised will be used to support bunny adoption fees, vet bills, and rescues that help provide the quality of life and care that bunnies deserve.</p>

          <p>Rather than committing to a single charity, we want to spread our impact as wide as possible and focus on multiple charities that have the greatest need and are important to our community.
          </p>

          <div className={styles.actions}>
            <a href="https://www.honsbuns.com" target="_blank">
              visit hon's buns
            </a>
          </div>
        </div>
      </div> */}
      </div >
    </>
  )
}

export default HavenContent;
