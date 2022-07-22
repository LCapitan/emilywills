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

const HonsBunsContent = () => {
  return (
    <>
      <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651105326/hbbanner_oisa6m.png' />

      <div className={styles.csWrapper}>
        <CSHeader
          title="hon's buns"
          tags={[
            'ui/ux',
            'branding',
            'strategy',
            'design for good',
            'crypto',
            'web3'
          ]}
          forWhat='Passion Project'
          timeline='10 weeks'
          tools='Figma'
          role='UX/UI, Branding, Social Media'>
          <p>A collection of 10,000 unique, bunny-themed, NFTs, minting on Ethereum.</p>
        </CSHeader>

        <div className={styles.divider}></div>

        <div className={styles.heading}>
          <h2>background</h2>
        </div>

        <div className={styles.contentWrapperFlipped}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651105773/emily-bunnies_gwplge.png" alt="image of emily with her bunnies" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <p>I was once the mom of 14 bunnies. Yes, you read that correctly. And no I did not plan for it, though through unique circumstances the bunny life chose me. While it was certainly unexpected, raising these bunnies has been one of life's greatest joys and brought me a great deal of happiness.</p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651105963/bunny_fmaezv.png" alt="image of one of emily's bunnies" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <p>Bunnies are unique creatures and very different from one another. From their genetic makeup to their treat preferences to their personalities- no two of them are alike! Just like other pets, losing one can be difficult especially after you've developed such a close bond with them. You consider them family.</p>
          </div>
        </div>

        <ContentBlock>
          <p>After mourning the sudden loss of three of my bunnies over quarantine, my partner and I decided to start a project together that honored them and their memory. This was how Hon's Buns NFTs were born. We made a collection of 10,000 unique bunny-themed NFTs and as we continue to grow, are using some of the funds we&#39;ve raised to give back to nonprofits to help keep bunnies in loving homes. </p>
        </ContentBlock>

        <div className={styles.heading}>
          <h2>branding</h2>
        </div>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651108444/branding_urpgh8.png'
          imgAlt=''
        />

        <div className={styles.contentWrapperFlipped}>
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
        </div>
      </div>
    </>
  )
}

export default HonsBunsContent;
