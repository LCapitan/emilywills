import Image from 'next/image';
import Link from 'next/link';

// styles
import styles from './WorkCard.module.scss';

// props
interface WorkCardProps {
  imgSrc: string,
  imgAlt?: string,
  cardLink: string,
  title?: string,
  content?: string,
  tags?: Array<string>,
  refId?: any
}

export function WorkCard({
  imgSrc,
  imgAlt,
  cardLink,
  title,
  content,
  tags,
  refId
}: WorkCardProps) {

  return (
    <Link href={cardLink} passHref>
      <div className={styles.wrapper}>
        <div className={styles.workItem}>
          <Image src={imgSrc} width='1200' height='1200' alt={imgAlt} layout='responsive' />
          <div className={styles.content}>
            {title && <h2>{title}</h2>}
            {content &&
              <div className={styles.popUp}>
                {content}
              </div>
            }
            {tags &&
              <div className={styles.tags}>
                {tags && tags.map((tag, i) =>
                  <span key={tags[i]}>{tag}</span>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </Link>
  )
}
