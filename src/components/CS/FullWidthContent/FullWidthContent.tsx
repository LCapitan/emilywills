import Image from "next/image";
import cx from "classnames";

// components
import { Button } from "../../Button";

// styles
import styles from "./FullWidthContent.module.scss";

interface FullWidthContentProps {
  title?: string;
  tag?: string;
  content?: any;
  imgSrc: string;
  width?: string;
  height?: string;
  altText?: string;
  flipped?: boolean;
  moreText?: boolean;
  url?: string;
  label?: string;
  bgOlive?: boolean;
  bgSand?: boolean;
  btnScnd?: boolean;
  featWork?: boolean;
}

export default function FullWidthContent({
  imgSrc,
  width,
  height,
  altText,
  title,
  content,
  flipped,
  moreText,
  url,
  label,
  tag,
  bgOlive,
  bgSand,
  btnScnd,
  featWork,
}: FullWidthContentProps) {
  return (
    <>
      {featWork ? (
        <div className={styles.featuredWork}>
          <div
            className={cx(
              styles.fullWidthContent,
              flipped && styles.flipped,
              moreText && styles.moreText,
              bgOlive && styles.bgOlive,
              bgSand && styles.bgSand
            )}
          >
            <div className="container">
              <figure className={styles.img}>
                <Image
                  src={imgSrc}
                  width={width}
                  height={height}
                  alt={altText}
                  layout="responsive"
                />
              </figure>
              <div className={styles.inner}>
                {tag && <span className={styles.tag}>{tag}</span>}
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.content}>{content}</div>
                {url && (
                  <div className={styles.actions}>
                    {btnScnd ? (
                      <Button arrow white label={label} url={url} />
                    ) : (
                      <Button arrow label={label} url={url} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cx(
            styles.fullWidthContent,
            flipped && styles.flipped,
            moreText && styles.moreText,
            bgOlive && styles.bgOlive,
            bgSand && styles.bgSand
          )}
        >
          <div className="container">
            <figure className={styles.img}>
              <Image
                src={imgSrc}
                width={width}
                height={height}
                alt={altText}
                layout="responsive"
              />
            </figure>
            <div className={styles.inner}>
              {tag && <span className={styles.tag}>{tag}</span>}
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.content}>{content}</div>
              {url && (
                <div className={styles.actions}>
                  {btnScnd ? (
                    <Button arrow white label={label} url={url} />
                  ) : (
                    <Button arrow label={label} url={url} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
