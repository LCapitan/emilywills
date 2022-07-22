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
      <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651609459/toast-banner_r2cpfy.jpg' />

      <div className={styles.csWrapper}>
        <CSHeader
          title="Totally Toast"
          tags={[
            'branding',
            'product design',
            'photography',
          ]}
          forWhat='Passion Project'
          timeline='4 weeks'
          tools='Illustrator, Photoshop, Photography'
          role='Branding, Product Design, Toast Enthusiast'>
          <p>A passion project centered around my love for toast.</p>
        </CSHeader>

        <div className={styles.divider}></div>

        <ContentBlock>
          <div className={styles.childHeading}>
            <h2>Background</h2>
          </div>

          <p>My love for toast started when I was a young girl. My dad used to make it for my siblings and me before we set out on long road trips. It is something that bonded my family together and to this day I can’t eat it without thinking of home.</p>

          <p>Toast is such an underrated food, yet there are so many fun ways to enjoy it! I hope through this book you are inspired to make your own creations and memories surrounding it just like I have. Here’s Totally Toast ッ</p>
        </ContentBlock>

        <div className={styles.vidWrapper}>
          <VideoPlayer vidSrc='https://res.cloudinary.com/austinmel/video/upload/v1651518644/flipbook-video_i09oes.mov' />
        </div>
      </div >
    </>
  )
}

export default HavenContent;
