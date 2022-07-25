import { useState, useRef, useEffect } from 'react';

// components
import {
  CSHero,
  CSFooter,
  CSHeader
} from '../../../components/index';
import { Content } from './Content';

// styles
import styles from '../CaseStudy.module.scss';

export function RvaBowlsContent() {
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
          title='RVA Bowls'
          overview='A restaurant + pottery studio + art gallery focused on serving delicious acai and giving back to the RVA community'
          forWhat='Student Project 2020'
          timeline='8 Weeks'
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
        />
        <div id="top" className={styles.csWrapper}>
          <div ref={heroRef} className={styles.stickyref}></div>

          <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
            <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658489501/rvabowls-hero_haz4jf.png' />
          </div>

          <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>

          <div className={styles.blockWrapper}>
            <Content />

            <CSFooter />
          </div>
        </div>
      </div>
    </>
  )
}
