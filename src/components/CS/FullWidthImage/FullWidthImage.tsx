import cx from "classnames";
import Image from "next/image";

import styles from './FullWidthImage.module.scss'

interface FullWidthImageProps {
  imgSrc: string;
  imgAlt: string;
  contained?: boolean;
}

export function FullWidthImage({
  imgSrc,
  imgAlt,
  contained
}: FullWidthImageProps) {
  return (
    <>
      {
        contained ? (
          <div className="container">
            <div className={cx(styles.fullWidthImage, styles.contained)}>
              <Image src={imgSrc} width="1200" height="600" alt={imgAlt} layout="responsive" />
            </div>
          </div>
        ) : (
          <div className={styles.fullWidthImage}>
            <Image src={imgSrc} width="1200" height="600" alt={imgAlt} layout="responsive" />
          </div >
        )
      }
    </>
  )
}
