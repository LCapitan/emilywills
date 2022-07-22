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
      <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651867850/PrideBooth_WallPrompt_yyqohf.jpg' />

      <div className={styles.csWrapper}>
        <CSHeader
          title="3M pride"
          forWhat='3M Pride Month'
          timeline='3 weeks'
          tools={[
            'Figma',
            'Illustrator',
            'Photoshop',
            'After Effects'
          ]}
          roles={[
            'Branding',
            'UX/UI',
            'Social Media'
          ]}
          overview="Uplifting the voices of the LGBTQ+ community."
        />

        <div className={styles.divider}></div>

        <ContentBlock>
          <div className={styles.childHeading}>
            <h2>Background</h2>
          </div>

          <p>As a brand with a longstanding history of celebrating the power of the written word, Post-it® Brand knows you don’t have to speak to be heard. This year at Twin Cities Pride, we’re celebrating the many Voices of Pride – from leaders in our local communities to each individual. Everyone has a unique story to tell, and there is a Post-it Note ready to help tell it.</p>
        </ContentBlock>

        <ContentBlock title="the ask">
          <p>Design two brand activations for the Twin Cities Pride Festival using 3M post-it notes honoring LGBTQ+ people in the community.</p>
        </ContentBlock>

        <ContentBlock title="01" subtitle='First Ave Mural'>
          <p>Mural of over 13,000 post it notes honoring Roxanne Anderson, Phillipe Cunningham, and Andrea Jenkins for the impact they’ve made within the LGBTQ+ community. This mural was accompanied by a placard with a brief bio of the candidates, including a QR code linking out for more information.</p>
        </ContentBlock>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611207/3m-pride-1_mmupxo.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611208/3m-pride-2_auk4nj.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611208/3m-pride-3_ycsjnp.png'
          imgAlt=''
        />

        <ContentBlock title="02" subtitle='Post-it Notes of Pride Interactive Mural'>
          <p>An interactive mural at the 3M booth at the Twin Cities Pride Festival. We decided with the prompt “Who inpsires you to be your true authentic self?” and allowed people attending the festival to answer the prompt and stick it back up on the wall.</p>
        </ContentBlock>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611459/3m-pride-4_mflpe5.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611460/3m-pride-5_e2ubyd.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611459/3m-pride-6_iss59h.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651867847/PrideBooth_WallAlmostComplete_udz7zz.jpg'
          imgAlt=''
        />

        <ContentBlock title="03" subtitle='Post-it Pride Packs'>
          <p>To spread more love and joy during Pride, we provided Post-it Pride Packs to local bars and restaurants to display in their windows and show their support.</p>
        </ContentBlock>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651611459/3m-pride-7_i4yb7v.png'
          imgAlt=''
        />

        <div className={styles.vidWrapper}>
          <VideoPlayer vidSrc='https://res.cloudinary.com/austinmel/video/upload/v1652386827/3M_Pride_2022_Final_umsz9a.mov' />
        </div>
      </div >
    </>
  )
}

export default HavenContent;
