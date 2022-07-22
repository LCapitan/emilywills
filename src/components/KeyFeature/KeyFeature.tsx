import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from './KeyFeature.module.scss'

interface KeyFeatureProps {
  imgSrc: string,
  tag?: string,
  altText?: string,
  title?: string,
  children?: any,
  flipped?: boolean
  width?: string,
  height?: string,
  test?: boolean
}

const KeyFeature: React.FC<KeyFeatureProps> = ({
  imgSrc,
  tag,
  altText,
  title,
  children,
  flipped,
  width,
  height,
  test
}) => {
  return (
    <div className={cx(styles.keyFeature, flipped && styles.flipped, test && styles.test)}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.details}>
            <div className={styles.title}>
              <span className={styles.featNum}>{tag}</span>
              <h2 className={styles.blockHeading}>
                {title}
              </h2>
            </div>
            <div className={styles.content}>
              {children}
            </div>
          </div>

          <figure className={styles.img}>
            {width ? (
              <Image src={imgSrc} width={width} height={height} alt={altText} layout="responsive" />
            ) : (
              <Image src={imgSrc} width="777" height="1425" alt={altText} layout="responsive" />
            )
            }
          </figure>
        </div>
      </div>
    </div>
  )
}

export default KeyFeature;
