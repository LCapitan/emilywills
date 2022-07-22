import Image from 'next/image';

// components
import { VideoPlayer } from '../../index';

// styles
import styles from './CSHero.module.scss';

interface CSHeroProps {
  vidSrc?: string,
  vidCover?: string,
  imgSrc?: string
}

export function CSHero({
  vidSrc,
  vidCover,
  imgSrc
}: CSHeroProps) {

  return (
    <div className={styles.hero}>
      {vidSrc &&
        <VideoPlayer vidSrc={vidSrc} vidCover={vidCover} />
      }
      {imgSrc &&
        <div className={styles.innerImg}>
          <Image src={imgSrc} width="1728" height="750" alt="" layout="responsive" />
        </div>
      }
    </div>
  )
}
