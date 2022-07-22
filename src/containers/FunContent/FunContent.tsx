import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Parallax } from 'react-scroll-parallax';
import { WorkCard } from "../../components";

import styles from './FunContent.module.scss';

const FunContent = () => {
  return (
    <div className={styles.workContent}>
      <div className={styles.title}>
        <h1>fun</h1>
      </div>

      <ul className={styles.workList}>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405756/IMG_3115_doe4qp.jpg"
            imgAlt="a photo of a piece of a homemade peanut butter and chocolate toast"
            cardLink="/fun/toast"
            title="totally toast"
            content="a passion project centered around my love for toast"
            tags={[
              'branding',
              'product design',
              'experience design'
            ]}
          />
        </li>
        <li>
          <WorkCard
            imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649405098/Empire_Designs_edit_copy_uj6qvu.jpg"
            imgAlt="a photo of Empire Designs Jean Shorts by Emily Wills"
            cardLink="/fun/empire"
            title="empire designs"
            content="a handcrafted highwaisted shorts company"
            tags={[
              'branding',
              'product design',
              'fashion',
              'social strategy'
            ]}
          />
        </li>
      </ul>
    </div>
  );
}

export default FunContent;