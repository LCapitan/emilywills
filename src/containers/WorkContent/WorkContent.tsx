import React from "react";
import { useState, useRef, useEffect } from 'react';
import cx from "classnames";

import { WorkCard, WorkDetails } from "../../components";

import styles from './WorkContent.module.scss';

const WorkContent = () => {
  const [ref1IsInView, setRef1IsInView] = useState<boolean>(false);
  const ref1 = useRef<HTMLDivElement | null>(null);

  const [ref2IsInView, setRef2IsInView] = useState<boolean>(false);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const [ref3IsInView, setRef3IsInView] = useState<boolean>(false);
  const ref3 = useRef<HTMLDivElement | null>(null);

  const [ref4IsInView, setRef4IsInView] = useState<boolean>(false);
  const ref4 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const workCard1 = ref1?.current
    const workCard2 = ref2?.current
    const workCard3 = ref3?.current
    const workCard4 = ref4?.current

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
    })

  }, [ref1, ref2, ref3, ref4])

  return (
    <div className="container">
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
                url="/work/haven"
                label="view project"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref3IsInView && !ref4IsInView ? styles.show : '')}
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
                url="/work/honsbuns"
                label="view project"
              />

              <WorkDetails
                classes={cx(styles.workDetails, ref4IsInView ? styles.show : '')}
                title="RVA Bowls"
                subTitle="A restaurant, studio, and art gallery that gives back to the local community."
                tags={[
                  'ui/ux',
                  'product design',
                  'strategy',
                  'branding',
                  'web design'
                ]}
                url="/work/rvabowls"
                label="view project"
              />
            </div>
          </div>

          <ul className={styles.workList}>
            <li className={cx(styles.workPiece, ref1IsInView && !ref2IsInView ? styles.inView : '')}>
              <div ref={ref1}>
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
                  imgAlt="an illustration of people cleaning up the Earth"
                  cardLink="/work/eve-planning"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref2IsInView && !ref3IsInView ? styles.inView : '')}>
              <div ref={ref2}>
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
                  imgAlt="photo of Haven watches"
                  cardLink="/work/haven"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref3IsInView && !ref4IsInView ? styles.inView : '')}>
              <div ref={ref3}>
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
                  imgAlt="an illustration of beautiful bunny"
                  cardLink="/work/honsbuns"
                />
              </div>
            </li>
            <li className={cx(styles.workPiece, ref4IsInView ? styles.inView : '')}>
              <div ref={ref4}>
                <WorkCard
                  imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
                  imgAlt="a photo of an acai bowl from RVA Bowls"
                  cardLink="/work/rvabowls"
                />
              </div>
            </li>
            {/* <li>
          <div>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405756/IMG_3115_doe4qp.jpg"
              imgAlt="a photo of a piece of a homemade peanut butter and chocolate toast"
              cardLink="/work/toast"
              title="totally toast"
              content="a passion project centered around my love for toast"
              tags={[
                'branding',
                'product design',
                'photography'
              ]}
            />
          </div>
        </li> */}
            {/* <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404790/cairo_ratyrd.png"
            imgAlt="a photo of the Cairo Olympics logo prototype"
            cardLink="/work/cairo"
            title="cairo olympics"
            content="olympics for Good"
            tags={[
              'branding',
              'product design',
              '3D',
              'experience design',
              'sustainability'
            ]}
          />
        </li> */}
            {/* <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
            imgAlt="a photo of 3M creating their post it note mural"
            cardLink="/work/3m"
            title="3M pride"
            content="3M partners with twin cities pride festival"
            tags={[
              'ui/ux',
              'environmental design'
            ]}
          />
        </li> */}
          </ul>
        </div>
      </div>
      <div className="mobile">
        <div className={styles.workContent}>
          <h1 className="srOnly">work</h1>
          <div className={styles.wrapper}>
            <ul className={styles.workList}>
              <li className={cx(styles.workPiece)}>
                <div>
                  <WorkCard
                    imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
                    imgAlt="an illustration of people cleaning up the Earth"
                    cardLink="/work/eve-planning"
                  />

                  <div className={styles.inner}>
                    <WorkDetails
                      classes={cx(styles.workDetails)}
                      title="Eve"
                      subTitle="A digital platform that makes the journey for death more approachable and sustainable."
                      tags={[
                        'sustainability',
                        'service design',
                        'accessibility',
                        'machine learning',
                        'human-centered design'
                      ]}
                      url="/work/eve-planning"
                      label="view case study"
                    />
                  </div>
                </div>
              </li>
              <li className={cx(styles.workPiece)}>
                <div>
                  <WorkCard
                    imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
                    imgAlt="photo of Haven watches"
                    cardLink="/work/haven"
                  />
                  <WorkDetails
                    classes={cx(styles.workDetails)}
                    title="Haven"
                    subTitle="Wearable technology that provides personal safety and peace of mind for young women."
                    tags={[
                      'ui/ux',
                      'product design',
                      'branding',
                      'strategy',
                      'human-centered design'
                    ]}
                    url="/work/haven"
                    label="view project"
                  />
                </div>
              </li>
              <li className={cx(styles.workPiece)}>
                <div>
                  <WorkCard
                    imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
                    imgAlt="an illustration of beautiful bunny"
                    cardLink="/work/honsbuns"
                  />
                  <WorkDetails
                    classes={cx(styles.workDetails)}
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
                    url="/work/honsbuns"
                    label="view project"
                  />
                </div>
              </li>
              <li className={cx(styles.workPiece)}>
                <div>
                  <WorkCard
                    imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
                    imgAlt="a photo of an acai bowl from RVA Bowls"
                    cardLink="/work/rvabowls"
                  />
                  <WorkDetails
                    classes={cx(styles.workDetails)}
                    title="RVA Bowls"
                    subTitle="A restaurant, studio, and art gallery that gives back to the local community."
                    tags={[
                      'ui/ux',
                      'product design',
                      'strategy',
                      'branding',
                      'web design'
                    ]}
                    url="/work/rvabowls"
                    label="view project"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkContent;