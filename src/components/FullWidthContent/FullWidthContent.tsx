import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from './fullWidthContent.module.scss'

interface FullWidthContentProps {
  imgSrc: string,
  width?: string,
  height?: string,
  altText?: string,
  title?: string,
  content?: any,
  flipped?: boolean,
  children?: any
}

const FullWidthContent: React.FC<FullWidthContentProps> = ({
  imgSrc,
  width,
  height,
  altText,
  title,
  content,
  flipped,
  children
}) => {
  return (
    <div className={cx(styles.fullWidthContent, flipped && styles.flipped)}>
      <div className='container'>
        <figure className={styles.img}>
          <Image src={imgSrc} width={width} height={height} alt={altText} layout="responsive" />
        </figure>
        <div className={styles.inner}>
          <h2 className={styles.blockHeading}>
            {title}
          </h2>
          <div className={styles.content}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullWidthContent;
