import React from "react";
import Image from "next/image";

// components
import { Name } from '../../components';

// styles
import styles from './HomeHero.module.scss'

export function HomeHero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.name}>
        <span className="srOnly">emily wills</span>
        <figure className={styles.nameMark}>
          <Name />
        </figure>
      </h1>
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