import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './HomeHero.module.scss'

const HomeHero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>emily<span>wills</span></h1>
      <div className={styles.heroContent}>
        <figure className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1658544744/brown-bunny_rfztzt.png" alt="bunny" width="600" height="525" layout="fill" objectFit="cover" />
        </figure>
      </div>
      <div className={styles.heroSub}>
        <ul>
          <li>experience designer</li>
          <li>entrepreneur</li>
          <li>empath</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHero;