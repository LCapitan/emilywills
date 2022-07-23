import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

// components
import { Button } from '../../Button';

// styles
import styles from './ContentBlock.module.scss'

// props
interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  children?: any;
  tag?: string;
  imgSrc?: string;
  width?: string;
  height?: string;
  altText?: string;
  caption?: string;
  captionTitle?: string;
  row?: boolean;
  flipped?: boolean;
  url?: string;
  label?: string;
  className?: string;
}

export function ContentBlock({
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
  row,
  flipped,
  url,
  label,
  className
}: ContentBlockProps) {

  return (
    <div className="container">
      <div className={cx(styles.contentBlock, !title && styles.noTitle, row && styles.split, flipped && styles.flipped, className && className)}>
        <div className={styles.details}>
          {tag && <span className={styles.tag}>{tag}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          <div className={styles.content}>
            <h3>{subtitle}</h3>
            {children}
          </div>
          {url && <div className={styles.actions}>
            <Button arrow url={url} label={label} />
          </div>}
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
