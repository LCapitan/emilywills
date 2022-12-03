import React from "react";
import Image from "next/image";

// components
import { Name } from "../../components";

// styles
import styles from "./HomeHero.module.scss";

interface HomeHeroProps {
  tag1: string;
  tag2: string;
  tag3: string;
}

export default function HomeHero({ tag1, tag2, tag3 }: HomeHeroProps) {
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
          <Image
            src="https://res.cloudinary.com/austinmel/image/upload/v1658544744/brown-bunny_rfztzt.png"
            alt="a cute little bunny"
            layout="fill"
            objectFit="cover"
          />
        </figure>
      </div>
      <div className={styles.heroSub}>
        <ul>
          <li>{tag1}</li>
          <li>{tag2}</li>
          <li>{tag3}</li>
        </ul>
      </div>
    </div>
  );
}
