import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from './ContentBlock.module.scss'

interface ContentBlockProps {
  title?: string,
  subtitle?: string
  children?: any,
  tag?: string,
  imgSrc?: string,
  width?: string,
  height?: string,
  altText?: string,
  caption?: string,
  captionTitle?: string,
  layout?: string,
  row?: boolean
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  children,
  tag,
  imgSrc,
  width,
  height,
  altText,
  caption,
  captionTitle,
  layout,
  row
}) => {
  return (
    <div className="container">
      <div className={cx(styles.contentBlock, !title && styles.noTitle, row && styles.split)}>
        <div className={styles.details}>
          <span className={styles.tag}>{tag}</span>
          {title && <h2 className={styles.blockHeading}>{title}</h2>}
          <div className={styles.content}>
            <h3>{subtitle}</h3>
            {children}
          </div>
        </div>

        {imgSrc &&
          <figure className={styles.img}>
            <Image src={imgSrc} width={width} height={height} alt={altText} layout="responsive" />
            {caption &&
              <figcaption className={styles.caption}>
                {captionTitle &&
                  <strong>{captionTitle}&nbsp;</strong>
                }
                {caption}
              </figcaption>
            }
          </figure>
        }
      </div>
    </div>
  )
}

export default ContentBlock;
