import { useState, useRef, useEffect } from 'react';

// components
import {
  CSHero,
  CSFooter,
  CSHeader,
  ContentBlock,
  VideoPlayer
} from '../../../components/index';

// styles
import styles from '../CaseStudy.module.scss';

export function HavenContent() {
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
          title='Haven'
          overview='Creating wearable technology that provides personal safety for young women while still being fashionable yet incospicuous.'
          forWhat='Independent project'
          timeline='Ongoing'
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
          ]} />

        <div id="top" className={styles.csWrapper}>
          <div ref={heroRef} className={styles.stickyref}></div>

          <div ref={heroHeightRef} className={isSticky ? 'unStuckHero' : 'stuckHero'}>
            <CSHero imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658495563/haven-banner_roeln1.jpg' />
          </div>

          <div className={styles.stickySpacer} style={{ marginTop: isSticky ? '0' : heroHeight }}></div>

          <div className={styles.blockWrapper}>
            <ContentBlock title="Solution Overview">
              <p>This video is one that I made as an individual project for my visual storytelling class. It sums up my passion for Haven and the reason behind why I founded the company, how it has developed over the years, and what I am looking for to continue pushing it forward.</p>

              <p>I am currently working on a rebrand, so my full case study is not available yet for viewing here. However, feel free to ask me about it if you are interested and I&#39;d be happy to share more in depth of what I’ve been working on! </p>
            </ContentBlock >

            <VideoPlayer vidSrc='https://res.cloudinary.com/austinmel/video/upload/v1651202258/haven-video_bh5umo.mov' />

            <CSFooter />
          </div>
        </div>
      </div >
    </>
  )
}
