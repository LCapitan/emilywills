// styles
import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  title?: string,
  id?: string
}

export function SectionHeading({
  title,
  id
}: SectionHeadingProps) {
  return (
    <>
      {
        id ? (
          <div id={id} className={styles.sectionHeading} >
            <h2 className={styles.title}>{title}</h2>
          </div >
        ) : (
          <div id={title} className={styles.sectionHeading} >
            <h2 className={styles.title}>{title}</h2>
          </div >
        )

      }
    </>
  )
}
