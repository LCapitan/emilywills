import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  title?: string,
  id?: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  id
}) => {
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

export default SectionHeading;
