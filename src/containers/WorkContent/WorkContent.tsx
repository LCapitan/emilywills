import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Parallax } from 'react-scroll-parallax';
import { WorkCard } from "../../components";

import styles from './WorkContent.module.scss';

const WorkContent = () => {
  return (
    <div className={styles.workContent}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>my work</h1>
        <div className={styles.subtitle}>here are some of the projects I&#39;ve worked on recently.</div>
      </div>

      <ul className={styles.workList}>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
            imgAlt="an illustration of people cleaning up the Earth"
            cardLink="/work/eve-planning"
            title="eve"
            content="a digital platform that makes the journey for death more approachable and sustainable"
            tags={[
              'sustainability',
              'service design',
              'accessibility',
              'machine learning',
              'human-centered design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
            imgAlt="photo of Haven watches"
            cardLink="/work/haven"
            title="haven"
            content="using wearable technology to provide personal safety for young women"
            tags={[
              'ui/ux',
              'product design',
              'branding',
              'strategy',
              'human-centered design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
            imgAlt="an illustration of beautiful bunny"
            cardLink="/work/honsbuns"
            title="hon's buns"
            content="the baddest bunny-themed NFTs on the scene"
            tags={[
              'ui/ux',
              'web3',
              'crypto',
              'branding',
              'strategy',
              'illustration',
              'accessibility',
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
            imgAlt="a photo of an acai bowl from RVA Bowls"
            cardLink="/work/rvabowls"
            title="rva bowls"
            content="a restaurant, studio, and art gallery that gives back to the local community"
            tags={[
              'ui/ux',
              'product design',
              'strategy',
              'branding',
              'web design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405756/IMG_3115_doe4qp.jpg"
            imgAlt="a photo of a piece of a homemade peanut butter and chocolate toast"
            cardLink="/work/toast"
            title="totally toast"
            content="a passion project centered around my love for toast"
            tags={[
              'branding',
              'product design',
              'photography'
            ]}
          />
        </li>
        {/* <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404790/cairo_ratyrd.png"
            imgAlt="a photo of the Cairo Olympics logo prototype"
            cardLink="/work/cairo"
            title="cairo olympics"
            content="olympics for Good"
            tags={[
              'branding',
              'product design',
              '3D',
              'experience design',
              'sustainability'
            ]}
          />
        </li> */}
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
            imgAlt="a photo of 3M creating their post it note mural"
            cardLink="/work/3m"
            title="3M pride"
            content="3M partners with twin cities pride festival"
            tags={[
              'ui/ux',
              'environmental design'
            ]}
          />
        </li>
      </ul>
    </div>
  );
}

export default WorkContent;