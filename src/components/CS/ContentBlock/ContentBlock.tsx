import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

// components
import { Button } from "../../Button";

// styles
import styles from "./ContentBlock.module.scss";

// props
interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  quote?: string;
  content?: any;
  extraContent?: any;
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
  fullHeight?: boolean;
  className?: string;
}

export default function ContentBlock({
  title,
  subtitle,
  quote,
  content,
  extraContent,
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
  fullHeight,
  className,
}: ContentBlockProps) {
  return (
    <div className="container">
      <div
        className={cx(
          styles.contentBlock,
          !title && styles.noTitle,
          row && styles.split,
          flipped && styles.flipped,
          fullHeight && styles.fullHeight,
          className && className
        )}
      >
        <div className={styles.details}>
          {tag && <span className={styles.tag}>{tag}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          <div className={styles.content}>
            <h3>{subtitle}</h3>
            {quote && <em className={styles.quote}>&#34;{quote}&#34;</em>}
            {content && <p>{content}</p>}
            {extraContent && <p>{extraContent}</p>}
          </div>
          {url && (
            <div className={styles.actions}>
              <Button arrow url={url} label={label} />
            </div>
          )}
        </div>

        {imgSrc && (
          <figure className={styles.img}>
            <Image
              src={imgSrc}
              width={width}
              height={height}
              alt={altText}
              layout="responsive"
            />
            {caption && (
              <figcaption className={styles.caption}>
                {captionTitle && <strong>{captionTitle}&nbsp;</strong>}
                {caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </div>
  );
}
