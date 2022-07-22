import Link from "next/link";

// components
import { Button, Arrow } from '../../index';

// styles
import styles from './CSFooter.module.scss'

// props
interface CSFooterProps {
  processUrl?: string | null
}

export function CSFooter({ processUrl }: CSFooterProps) {
  return (
    <>
      <div className="desktop">
        <div className={styles.csFooter}>
          <div className={styles.inner}>
            <Link href='/work'>
              <div className={styles.workButton}>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
                <div className={styles.content}>
                  <span className={styles.label}>
                    View more work
                  </span>
                  <span className={styles.text}>
                    Check out my other projects
                  </span>
                </div>
              </div>
            </Link>

            {processUrl &&
              <a href={processUrl}>
                <div className={styles.processButton}>
                  <div className={styles.content}>
                    <span className={styles.label}>
                      View the process
                    </span>
                    <span className={styles.text}>
                      Dive into my thought process
                    </span>
                  </div>
                  <span className={styles.arrow}>
                    <Arrow />
                  </span>
                </div>
              </a>}
          </div>
        </div>
      </div>

      <div className="mobile">
        <div className={styles.csFooter}>
          <div className={styles.inner}>
            <Button
              url="/work"
              label="View more work"
            />
            {processUrl &&
              <Button
                arrow
                url={processUrl}
                label="View the process"
              />
            }
          </div>
        </div>
      </div>
    </>
  )
}
