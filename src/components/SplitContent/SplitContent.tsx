import Image from "next/image";

// styles
import styles from './SplitContent.module.scss'

interface SplitContentProps {
  imgSrc: string,
  width?: string,
  height?: string,
  altText?: string,
  title?: string,
  children?: any
}

export function SplitContent({
  imgSrc,
  width,
  height,
  altText,
  title,
  children
}: SplitContentProps) {
  return (
    <div className={styles.splitContent}>
      <div className='container'>
        <div className={styles.inner}>
          <figure className={styles.img}>
            <Image src={imgSrc} width={width} height={height} alt={altText} layout="responsive" />
          </figure>
          <div className={styles.details}>
            <div className={styles.wrapper}>
              <h2 className={styles.blockHeading}>
                {title}
              </h2>
              <div className={styles.content}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
