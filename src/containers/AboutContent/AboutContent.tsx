import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import { Button, ContentBlock } from '../../components';

// styles
import styles from './AboutContent.module.scss';

const AboutContent = () => {
  return (
    <div className={styles.AboutContent}>
      <h1 className="srOnly">about</h1>
      <ContentBlock
        row
        tag="Hi"
        title="I&#39;m Emily"
        imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1658490967/em-1_mumhic.jpg"
        width="584"
        height="608"
      >
        <p>Ask me to tell you the story of how I discovered I could write legibly with my toes. Or the time I was offered my own reality show. Or the one where I tackled a robber barefoot at 3AM. Or the time I was a mom to 14 bunnies at once. Or the night I pitched my startup to Marcus Lemonis from tv series The Profit.</p>
      </ContentBlock>

      <ContentBlock
        row
        flipped
        imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1658490967/em-2_ty7rvz.jpg"
        width="584"
        height="608"
      >
        <p>As a storyteller, an entrepreneur, and an experience designer, I leverage the stories and experiences of myself and others to tackle big problems and create meaningful solutions that aim to leave the greatest impact possible. Empathy is my superpower and I use it to understand what is and is not working for people today so that I can design for a better tomorrow.</p>

        <p>In my free time I love eating toast, carrying my bunnies around in socks, playing tennis, and discovering my problems aren&#39;t real problems while scrolling through Reddit.</p>

        <Button
          arrow
          label="see my work"
          url="/work"
        />
      </ContentBlock>
    </div>
  );
}

export default AboutContent;