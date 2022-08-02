import cx from "classnames";
import { useState, useRef, useEffect } from 'react';

// components
import {
  CSHero,
  CSFooter,
  CSHeader,
  Button
} from '../../../components/index';
import { Content } from './Content';

// styles
import styles from '../Process.module.scss';

export function HavenProcess() {
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
      <Button backButton className={cx(isSticky ? '' : 'showBackButton')} />

      <CSHeader
        process
        title='Haven Process'
        overview='Creating fashion-forward, wearable technology that provides personal safety and peace of mind for young women.'
        sections={[
          'empathize',
          'define',
          'ideation',
          'design',
          'prototype',
          'testing'
        ]}
        csTitle="haven"
      />

      <div id="top" className={styles.csWrapper}>
        <div ref={heroRef} className={styles.stickyref}></div>

        <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
          <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659411104/haven-process-hero_fyelnn.jpg' />
        </div>

        <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>
        <div className={styles.blockWrapper}>
          <Content />

          <CSFooter />
        </div>
      </div>
    </>
  )
}
