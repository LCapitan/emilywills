import Image from "next/image";

// styles
import styles from './MoodBoard.module.scss'

// props
interface MoodBoardProps {
  title?: string;
  imgSrc?: string;
  width?: string;
  height?: string;
  altText?: string;
  content?: string;
}

export function MoodBoard({
  title,
  imgSrc,
  width,
  height,
  altText,
  content
}: MoodBoardProps) {

  return (
    <div className={styles.moodboard}>
      <figure className={styles.img}>
        <Image src={imgSrc} width={width} height={height} alt={altText} layout="responsive" />
      </figure>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
