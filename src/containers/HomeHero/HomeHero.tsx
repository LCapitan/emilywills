import React from "react";
import Image from "next/image";

// styles
import styles from './HomeHero.module.scss'

export function HomeHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.namePhoto}>
          <div className={styles.content}>
            <span className={styles.intro}>hello, my name is</span>
            <h1>emily<span>wills</span></h1>
          </div>

          <div className={styles.image}>
            <Image src="https://res.cloudinary.com/austinmel/image/upload/v1648677838/brown-bunny_1_copy_fw2yk2.png" alt="bunny" width="250" height="250" layout="responsive" />
          </div>
        </div>

        <div className={styles.heroSub}>
          <ul>
            <li>experience designer</li>
            <li><span></span></li>
            <li>entrepreneur</li>
            <li><span></span></li>
            <li>empath</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
