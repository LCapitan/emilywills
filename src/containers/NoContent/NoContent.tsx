import Link from "next/link";

// styles
import styles from './NoContent.module.scss'

export function NoContent() {
  return (
    <div className={styles.noContent}>
      <h1>whoops</h1>

      <div className={styles.content}>
        This content isn&#39;t available for viewing at the moment, but check back soon for an update!
      </div>

      <div className={styles.actions}>
        <Link href="/work">
          see my work
        </Link>
      </div>
    </div>
  )
}
