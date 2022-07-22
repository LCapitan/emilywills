import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import { Arrow } from '../index';

import styles from './CSFooter.module.scss'

interface CSFooterProps {
  processUrl?: string | null
}

const CSFooter: React.FC<CSFooterProps> = ({ processUrl }) => {
  return (
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
  )
}

export default CSFooter;
