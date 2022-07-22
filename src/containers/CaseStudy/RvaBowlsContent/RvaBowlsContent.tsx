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

const RvaBowlsContent = () => {
  return (
    <>
      <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651109678/rvabowls-banner_ib6iyo.png' />
      <div className={styles.csWrapper}>

        <CSHeader
          title="rva bowls"
          tags={[
            'ui/ux',
            'branding',
            'strategy',
            'web design',
            'product design',
          ]}
          forWhat='Student Project 2020'
          timeline='8 weeks'
          tools='Figma, Illustrator, Photoshop, After Effects'
          role='UX/UI, Branding, Strategy, Product Design'>
          <p>A restaurant + pottery studio + art gallery focused on serving delicious acai and giving back to the RVA community</p>
        </CSHeader>

        <div className={styles.divider}></div>

        <ContentBlock title='the ask'>
          <p>Design an original brand and business idea of your choosing, focusing in on design and user experience.</p>
        </ContentBlock>

        <ContentBlock title='the challenge'>
          <p>What can we do to make our brand stand out in an already saturated industry? How can we incorporate user feedback into our design and branding choices?</p>
        </ContentBlock>

        <ContentBlock title='the solution'>
          <p>An acai restaurant + pottery studio + art gallery combination that offers a fusion of digital and physical experiences which allow customers a creative way to interact with the brand, each other, and give back to the local community.</p>
        </ContentBlock>

        <ContentBlock title='01' subtitle='branding that is bold and vibrant with a flare of quirk and personality.'>
        </ContentBlock>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651119131/branding_hpetov.png'
          imgAlt=''
        />

        <ContentBlock title='02' subtitle='life-sized interactive displays for a superior in-store ordering experience '>
          <p>Customers will be able to build a custom bowl to their liking and visualize what it could look like through the interactive in-store display. This provides them the ability to truly have a part in creating their perfect acai bowl while allowing them as many modifications as they please and avoiding the hassle of waiting in line.</p>
        </ContentBlock>

        <FullWidthImage
          imgSrc='/assets/img/rvabowls-animation.gif'
          imgAlt=''
        />

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651120035/start-ordering-small_nfa1im.png" alt="image of emily with her bunnies" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <h3>start creating</h3>
            <p>Upon walking into the restaurant, customers are met with this interactive screen which encourages them to start creating their perfect bowl of goodness.</p>
          </div>
        </div>

        <div className={styles.contentWrapperFlipped}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651120228/instructions_gmpmp1.png" alt="" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <h3>instructions screen</h3>
            <p>Customers are next met with an instructions screen that breaks down the steps to customize their bowl in a simplified way.</p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651120353/select-base_ogvnig.png" alt="" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <h3>select your base</h3>
            <p>Customers are then prompted to select their bowl&#39;s base. They have the option to choose between Acai, Pitaya, Spirulina, and an Oatmeal base.</p>
          </div>
        </div>

        <div className={styles.contentWrapperFlipped}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651120556/toppings_lh5vfe.png" alt="" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <h3>adorn with toppings</h3>
            <p>Customers have the freedom to choose what kind of toppings they would like on their bowl, with a range of fully customizable fruit and nut options.</p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1651120639/drizzle_xwftnt.png" alt="" layout="responsive" width="522" height="530" />
          </div>
          <div className={styles.homeContentCopy}>
            <h3>embellish with drizzle</h3>
            <p>Lastly, customers can add on the final touches to their bowl by selecting a drizzle type of their choosing.</p>
          </div>
        </div>

        <div className={styles.fullWidthImage}>
          <Image src='/assets/img/digital-touchpoints.gif' width="1522" height="924" alt='a video walkthrough of the rva bowls website design' layout="responsive" />
        </div>

        <ContentBlock title='03' subtitle='A physical experience that fosters connection with eachother while giving back to the local RVA community'>
        </ContentBlock>

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651121322/restaurant1_wg5ydj.png'
          imgAlt=''
        />

        <FullWidthImage
          imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651121640/restaurant2_p4wioh.png'
          imgAlt=''
        />

        <div className={styles.contentWrapperFlipped}>
          <div className={styles.image}>
            <Image src="/assets/img/bowlsgiveback.gif" alt="image of emily with her bunnies" layout="responsive" width="522" height="530" />
          </div>

          <div className={styles.homeContentCopy}>
            <p>Rvabowls gives back to the local community through our #bowlsgiveback program. This includes donating a percentage of all sales to a different local charity each month, and an in-store as well as online gallery that features local artists’ work for sale.</p>

            <p>On a quarterly basis, rvabowls will host a gallery night with a live auction event that allows locals to bid on artists’ featured work, with 100% of the profits going back into artists’ pockets.</p>

            {/* <div className={styles.actions}>
            <a href="https://www.honsbuns.com" target="_blank">
              visit hon's buns
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default RvaBowlsContent;
