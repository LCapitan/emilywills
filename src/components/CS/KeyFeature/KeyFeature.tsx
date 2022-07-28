import Image from "next/image";
import cx from "classnames";

// styles
import styles from './KeyFeature.module.scss'

// props
interface KeyFeatureProps {
  imgSrc: string;
  tag?: string;
  altText?: string;
  title?: string;
  children?: any;
  flipped?: boolean;
  width?: string;
  height?: string;
  test?: boolean;
  bgBeige?: boolean;
}

export function KeyFeature({
  imgSrc,
  tag,
  altText,
  title,
  children,
  flipped,
  width,
  height,
  test,
  bgBeige
}: KeyFeatureProps) {
  return (
    <div className={cx(styles.keyFeature, flipped && styles.flipped, test && styles.test, bgBeige && styles.bgBeige)}>
      <div className='container'>
        <div className={styles.inner}>
          <div className={styles.details}>
            <div className={styles.blockHeading}>
              <span className={styles.featNum}>{tag}</span>
              <h2 className={styles.title}>
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
