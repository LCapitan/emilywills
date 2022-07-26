import React from "react";
import { useState, useRef, useEffect } from 'react';
import cx from "classnames";

// components
import { WorkCard, WorkDetails } from "../../components";
import { MobileContent } from "./MobileContent";

// styles
import styles from './WorkContent.module.scss';

export function WorkContent() {
  const [ref1IsInView, setRef1IsInView] = useState<boolean>(false);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const [ref2IsInView, setRef2IsInView] = useState<boolean>(false);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const [ref3IsInView, setRef3IsInView] = useState<boolean>(false);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const [ref4IsInView, setRef4IsInView] = useState<boolean>(false);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const [ref5IsInView, setRef5IsInView] = useState<boolean>(false);
  const ref5 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const workCard1 = ref1?.current
    const workCard2 = ref2?.current
    const workCard3 = ref3?.current
    const workCard4 = ref4?.current
    const workCard5 = ref5?.current

    const observer1 = new IntersectionObserver(
      ([e]) => {
        setRef1IsInView(e.isIntersecting)
      }
    )

    const observer2 = new IntersectionObserver(
      ([e]) => {
        setRef2IsInView(e.isIntersecting)
      }
    )

    const observer3 = new IntersectionObserver(
      ([e]) => {
        setRef3IsInView(e.isIntersecting)
      }
    )

    const observer4 = new IntersectionObserver(
      ([e]) => {
        setRef4IsInView(e.isIntersecting)
      }
    )

    const observer5 = new IntersectionObserver(
      ([e]) => {
        setRef5IsInView(e.isIntersecting)
      }
    )

    if (workCard1) {
      observer1.observe(workCard1)
    }

    if (workCard2) {
      observer2.observe(workCard2)
    }

    if (workCard3) {
      observer3.observe(workCard3)
    }

    if (workCard4) {
      observer4.observe(workCard4)
    }

    if (workCard5) {
      observer5.observe(workCard5)
    }

    return (() => {
      if (workCard1) {
        observer1.unobserve(workCard1)
      }

      if (workCard2) {
        observer2.unobserve(workCard2)
      }

      if (workCard3) {
        observer3.unobserve(workCard3)
      }

      if (workCard4) {
        observer4.unobserve(workCard4)
      }

      if (workCard5) {
        observer5.unobserve(workCard5)
      }
    })

  }, [ref1, ref2, ref3, ref4, ref5])

  return (
    <>
      <div className="desktop">
        <div className={styles.workContent}>
          <h1 className="srOnly">work</h1>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <WorkDetails
                classes={cx(styles.workDetails, ref1IsInView && !ref2IsInView ? styles.show : '')}
                title="Eve"
                subTitle="A digital platform that makes the journey for death more approachable and sustainable."
                tags={[
                  'sustainability',
                  'service design',
                  'accessibility',
                  'machine learning',
                  'human-centered design'
                ]}
                secondary
                url="/work/eve-planning"
                label="view case study"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref2IsInView && !ref3IsInView ? styles.show : '')}
                title="Haven"
                subTitle="Wearable technology that provides personal safety and peace of mind for young women."
                tags={[
                  'ui/ux',
                  'product design',
                  'branding',
                  'strategy',
                  'human-centered design'
                ]}
                secondary
                url="/work/haven"
                label="view project"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref3IsInView && !ref4IsInView ? styles.show : '')}
                title="3M Pride"
                subTitle="3M partners with twin cities pride festival"
                tags={[
                  'ui/ux',
                  'environmental design'
                ]}
                secondary
                url="/work/3m-pride"
                label="view project"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref4IsInView && !ref5IsInView ? styles.show : '')}
                title="Hon&#39;s Buns"
                subTitle="The baddest bunny-themed NFTs on the scene."
                tags={[
                  'ui/ux',
                  'web3',
                  'crypto',
                  'branding',
                  'strategy',
                  'illustration',
                  'accessibility',
                ]}
                secondary
                url="/work/honsbuns"
                label="view project"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref5IsInView ? styles.show : '')}
                title="RVA Bowls"
                subTitle="A restaurant, studio, and art gallery that gives back to the local community."
                tags={[
                  'ui/ux',
                  'product design',
                  'strategy',
                  'branding',
                  'web design'
                ]}
                secondary
                url="/work/rvabowls"
                label="view project"
              />
            </div>
          </div>

          <ul className={styles.workList}>
            <li className={cx(styles.workPiece, ref1IsInView && !ref2IsInView ? styles.inView : '')}>
              <div className={styles.cardContainer} ref={ref1} id="ref1">
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
                  imgAlt="an illustration of people cleaning up the Earth"
                  cardLink="/work/eve-planning"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref2IsInView && !ref3IsInView ? styles.inView : '')}>
              <div className={styles.cardContainer} ref={ref2} id="ref2">
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
                  imgAlt="photo of Haven watches"
                  cardLink="/work/haven"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref3IsInView && !ref4IsInView ? styles.inView : '')}>
              <div className={styles.cardContainer} ref={ref3} id="ref3">
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
                  imgAlt="a photo of 3M creating their post it note mural"
                  cardLink="/work/3m-pride"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref4IsInView && !ref5IsInView ? styles.inView : '')}>
              <div className={styles.cardContainer} ref={ref4} id="ref4">
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
                  imgAlt="an illustration of beautiful bunny"
                  cardLink="/work/honsbuns"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref5IsInView ? styles.inView : '')}>
              <div className={styles.cardContainer} ref={ref5} id="ref5">
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
                  imgAlt="a photo of an acai bowl from RVA Bowls"
                  cardLink="/work/rvabowls"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="vp-xl">
        <MobileContent />
      </div>
    </>
  );
}