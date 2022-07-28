import cx from "classnames";
import { useState, useRef, useEffect } from 'react';

// components
import {
  CSHero,
  CSFooter,
  CSHeader,
  Button
} from '../../../components/index';
import { Content } from './Content'

// styles
import styles from '../CaseStudy.module.scss';

export function EveContent() {
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
    function handleResize() {
      if (heroHeightRef?.current?.clientHeight) {
        setHeroHeight(heroHeightRef.current.clientHeight);
      }
    }

    if (heroHeightRef?.current?.clientHeight) {
      setHeroHeight(heroHeightRef.current.clientHeight);
      window.addEventListener('resize', handleResize);
      // console.log('height: ', heroHeightRef.current.clientHeight);
      // console.log('width: ', heroHeightRef.current.clientWidth);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <Button backButton className={cx(isSticky ? '' : 'showBackButton')} />

      <CSHeader
        rightRail
        title='Eve Planning'
        overview='Eve is a digital platform designed to make planning for death easier on you, your loved ones, and the earth.'
        forWhat='Independent Project'
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
        ]}
        btnUrl="/work/eve-planning/process"
      />

      <div id="top" className={styles.csWrapper}>
        <div ref={heroRef} className={styles.stickyref}></div>

        <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
          <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657846173/eve-hero_hebnjj.png' />
        </div>

        <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>

        <div className={styles.blockWrapper}>
          <Content />

          <CSFooter processUrl='/work/eve-planning/process' />
        </div>
      </div>
    </>
  )
}
