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

export function EveProcess() {
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
          <Content />

          <CSFooter />
        </div>
      </div>
    </>
  )
}
