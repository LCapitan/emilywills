import { useState, useRef, useEffect } from 'react';

// components
import {
  CSHero,
  CSHeader,
  CSFooter
} from '../../../components/index';
import { Content } from './Content';

// styles
import styles from '../CaseStudy.module.scss';

export function HonsBunsContent() {
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
      <div className={styles.csWrapper}>
        <CSHeader
          rightRail
          title="Hon&#39;s Buns"
          forWhat='Passion Project'
          timeline='12 weeks'
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
          overview="A collection of 10,000 unique, bunny-themed, NFTs, minting on Ethereum."
          btnUrl='https://www.honsbuns.com/'
          label='visit Hon&#39;s Buns'
          externalLink
        />

        <div id="top" className={styles.csWrapper}>
          <div ref={heroRef} className={styles.stickyref}></div>

          <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
            <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658488557/hb-hero_mdkggo.jpg' />
          </div>

          <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>

          <div className={styles.blockWrapper}>
            <Content />

            <CSFooter />
          </div>
        </div>
      </div >
    </>
  )
}
