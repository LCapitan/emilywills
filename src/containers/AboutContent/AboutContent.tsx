import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from './AboutContent.module.scss';

const AboutContent = () => {
  return (
    <div className={styles.AboutContent}>
      <h1>about</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1649430320/about-img-1_lrhim8.jpg" alt="hon's buns nft image" layout="responsive" width="584" height="877" />
        </div>
        <div className={styles.homeContentCopy}>
          <p>Hi, I'm <span className={styles.name}>emily</span></p>
          <p>Ask me to tell you the story of how I discovered I could write legibly with my toes. Or the time I was offered my own reality show. Or the one where I tackled a robber barefoot at 3AM. Or the time I was a mom to 14 bunnies at once. Or the night I pitched my startup to Marcus Lemonis from tv series The Profit.</p>
        </div>
      </div>
      <div className={styles.contentWrapperFlipped}>
        <div className={styles.image}>
          <Image src="https://res.cloudinary.com/austinmel/image/upload/v1649430320/about-img-2_gjdv42.jpg" alt="hon's buns nft image" layout="responsive" width="584" height="877" />
        </div>
        <div className={styles.homeContentCopy}>
          <p>As a storyteller, an entrepreneur, and an experience designer, I leverage the stories and experiences of myself and others to tackle big problems and create meaningful solutions that aim to leave the greatest impact possible. Empathy is my superpower and I use it to understand what is and is not working for people today so that I can design for a better tomorrow.</p>

          <p>In my free time I love eating toast, carrying my bunnies around in socks, playing tennis, and discovering my problems aren’t real problems while scrolling through Reddit.</p>

          <div className={styles.actions}>
            <Link href="/work">
              see my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;