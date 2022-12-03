import classnames from "classnames";
import Image from "next/image";

// styles
import styles from "./TwoColImg.module.scss";

interface TwoColImgProps {
  weird?: boolean;
  flipped?: boolean;
  imgSrc: string;
  imgAlt: string;
  title?: string;
  subtitle?: string;
  children?: any;
  imgSrc2?: string;
  imgAlt2?: string;
  imgWidth?: string;
  imgHeight?: string;
}

export function TwoColImg({
  weird,
  flipped,
  imgSrc,
  imgAlt,
  title,
  subtitle,
  children,
  imgSrc2,
  imgAlt2,
  imgWidth,
  imgHeight,
}: TwoColImgProps) {
  return (
    <>
      {title && (
        <div
          className={classnames(styles.imageContent, flipped && styles.flipped)}
        >
          <div className={styles.image}>
            <Image
              src={imgSrc}
              width="675"
              height="602"
              alt={imgAlt}
              layout="responsive"
            />
          </div>

          <div className={styles.content}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            {children}
          </div>
        </div>
      )}
      {imgSrc2 && (
        <div className={styles.twoColImage}>
          <div className={styles.image}>
            <Image
              src={imgSrc}
              width="575"
              height="600"
              alt={imgAlt}
              layout="responsive"
            />
          </div>
          <div className={styles.image}>
            <Image
              src={imgSrc2}
              width="575"
              height="600"
              alt={imgAlt2}
              layout="responsive"
            />
          </div>
        </div>
      )}
    </>
  );
}
