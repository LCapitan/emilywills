import Image from 'next/image';
import Link from 'next/link';
import cx from "classnames";
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {
  CSHero,
  CSFooter,
  CSHeader,
  ContentBlock,
  SplitContent,
  FullWidthContent,
  SectionHeading,
  KeyFeature,
  FullWidthImage,
  TwoColImg,
  VideoPlayer,
  Arrow
} from '../../../components/index';

import styles from '../Process.module.scss';

const EveProcess = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const heroHeightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef?.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.isIntersecting)
      },
      {
        threshold: [0, 1]
      }
    )

    if (hero) {
      observer.observe(hero)
    }

    return (() => {
      if (hero) {
        observer.unobserve(hero)
      }
    })

  }, [heroRef])

  useEffect(() => {
    if (heroHeightRef?.current?.clientHeight) {
      setHeroHeight(heroHeightRef.current.clientHeight);
      console.log('height: ', heroHeightRef.current.clientHeight);

      console.log('width: ', heroHeightRef.current.clientWidth);
    }
  }, []);

  return (
    <>
      <div className={cx(styles.backButton, isSticky ? '' : styles.show)}>
        <AnchorLink href="#top" offset="">
          back to top
        </AnchorLink>
      </div>

      <CSHeader
        process
        title='Eve Planning Process'
        overview='Eve is a digital platform designed to make planning for death easier on you, your loved ones, and the earth.'
        sections={[
          'empathize',
          'define',
          'ideation',
          'design',
          'prototype',
          'testing'
        ]}
        csTitle="eve-planning"
      />

      <div id="top" className={styles.csWrapper}>
        <div ref={heroRef} className={styles.stickyref}></div>

        <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
          <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658453174/eve-process-hero_xe7rrn.jpg' />
        </div>

        <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>
        <div className={styles.blockWrapper}>
          <div id="define"></div>
          <SectionHeading id="empathize" title='Empathize &amp; Define' />

          <ContentBlock title="Background">
            <p>I had initially learned about the environmental effects that traditional burials had on our planet years ago from a colleage whose family owned a funeral practice. My original goal was to solve an environmental problem. However, when the COVID19 pandemic hit I watched the world scramble in utter chaos as we all suddenly faced death and loss at an alarming rate while simultaneously being forced to grieve our loved ones in isolation. There was nothing normal about the way we dealt with death prior to and during the pandemic, therefore I saw an additional opportunity to create a platform that allowed people to discuss, plan for, and process death and the things surrounding it in a healthy and approachable way.</p>
          </ContentBlock>

          <ContentBlock
            tag="Primary &amp; Secondary"
            title="Research"
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658460425/Research_Image_zxgvam.png'
            width='1200'
            height='453'
          >
            <p>My data was based on primary and secondary research I collected including user feedback I gathered from people who had recently lost a loved one during the pandemic as well as experts in the industry (funeral directors, morticians and death doulas). My goal with interviewing multiple kinds of users was to understand the needs, wants, and specific pain points surrounding end-of-life care for all people involved in order to create a truly holistic solution that would leave the greatest impact.</p>
          </ContentBlock>

          <ContentBlock
            row
            tag="Initial Findings"
            title="User Interviews"
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658460832/user-interviews-img_rmf91c.png'
            width='593'
            height='585'
            captionTitle='User Interview:'
            caption='Mimi Mythen (she/her), Student Mortician, Deathcare Advocate, Green Burial Enthusiast'
          >
            <p>My data was based on primary and secondary research I collected including user feedback I gathered from people who had recently lost a loved one during the pandemic as well as experts in the industry (funeral directors, morticians and death doulas). My goal with interviewing multiple kinds of users was to understand the needs, wants, and specific pain points surrounding end-of-life care for all people involved in order to create a truly holistic solution that would leave the greatest impact.</p>
          </ContentBlock>

          <ContentBlock
            tag="Mapping"
            title="Opportunity &amp; Empathy Mapping"
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658461612/Opporunitity_Empathy_Mapping_Image_czehs7.png'
            width='1200'
            height='571'
          >
            <p>I created both an opportunity map and empathy map to understand trends and market conditions as well where my solution fits into the competitive landscape. I used mapping to identify user frustrations and painpoints and ways I could improve upon current solutions that exist. Both maps were then used to decide which problems I should focus on solving now and areas for caution/potential to be aware of for the future.</p>
          </ContentBlock>

          <ContentBlock
            row
            tag="Problem Identification"
            title="4 Key Focus Areas"
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658462418/focus-areas_py2zbj.png'
            width='359'
            height='350'
          >
            <p>My research and mapping revealed that there is a definite need for improvement within this space. I organized my findings into 4 major areas for improvement in order to narrow my focus on which problems specifically I wanted my solution to address.</p>
          </ContentBlock>

          <SectionHeading id="ideation" title='Ideation' />

          <ContentBlock
            tag="Early Adopters"
            title="User Journey"
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658463096/Eve_User_Journey_qxwfvt.png'
            width='1363'
            height='696'
          >
            <p>While Eve&#39;s users could be any human that is currently walking the planet, I decided to focus in on a specific user and journey that aims to address the problem of people planning too late in life.</p>

            <p>I brainstormed how to get Eve in front of people earlier on in life and came up with the solution of partnering with sustainable b2b companies who will offer Eve to new employees as a part of their benefits package. </p>
          </ContentBlock>

          <SectionHeading id="design" title='Design' />

          <FullWidthContent
            flipped
            imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658464585/wireframes_sb2n3c.png'
            width='1285'
            height='1533'
            altText=''
            title='Wireframes'
            content={<><p>Using mid-fidelity wireframes, I created a skeleton of how I wanted the platform to look and feel while also incorporating modern design best practices. I focused on simplicity and minimalism with both my design and user flows to create a seamless experience for the user.</p><p>My wireframes walked through key features of the platform- from onboarding, to filling out your preferences, to scrolling through features on your profile dashboard, to completing your your end-of-life plan.</p></>}
          />

          <CSFooter />
        </div>
      </div>
    </>
  )
}

export default EveProcess;
