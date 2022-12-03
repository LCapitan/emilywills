import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Builder,
  BuilderComponent,
  withChildren,
  Section,
} from "@builder.io/react";
import cx from "classnames";
import { gsap } from "gsap";
import ReactDOM from "react-dom";
import projectsData from "../../../data/projectsData";

// components
import { WorkCard } from "../../components";
import WorkDetails from "../../../components/WorkDetails";
import { MobileContent } from "./MobileContent";

// styles
import styles from "./WorkContent.module.scss";

// props
interface WorkContentProps {
  data: any;
}

export default function WorkContent({ data }: WorkContentProps) {
  const rootconfig = {
    root: null,
    rootMargin: "-25% 0px",
  };

  useEffect(() => {
    const observerElements = document.querySelectorAll(".workPiece");

    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const fadeEl = entry.target.querySelectorAll(".inView");

        if (entry.intersectionRatio > 0) {
          console.log(entry.target, "in");
          gsap.to(fadeEl, {
            duration: 1,
            rotation: "-12deg",
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
          });
          Observer.unobserve(entry.target);
        }
      });
    }, rootconfig);

    observerElements.forEach((el) => {
      Observer.observe(el);
    });
  }, []);

  return (
    <div className={styles.workContent}>
      <h1 className="srOnly">work</h1>
      <div className={styles.wrapper}>
        <div className={styles.detailList}>
          {/* {projectsData.map((d) => (
            <WorkDetails
              key={d.title}
              title={d.title}
              subtitle={d.subtitle}
              tags={d.tags}
              url={d.url}
              label={d.label}
            />
          ))} */}
        </div>
      </div>

      <ul className={styles.workList}>
        <li className={cx(styles.workPiece, styles.inView)}>
          <div className={styles.cardContainer}>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649249335/eveimage_ldqbep.jpg"
              imgAlt="an illustration of people cleaning up the Earth"
              cardLink="/work/eve-planning"
            />
          </div>
        </li>
        <li className={cx(styles.workPiece, styles.inView)}>
          <div className={styles.cardContainer}>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404890/Haven_watches_qknzk9.png"
              imgAlt="photo of Haven watches"
              cardLink="/work/haven"
            />
          </div>
        </li>
        <li className={cx(styles.workPiece, styles.inView)}>
          <div className={styles.cardContainer}>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649404956/3m_ogowpq.png"
              imgAlt="a photo of 3M creating their post it note mural"
              cardLink="/work/3m-pride"
            />
          </div>
        </li>
        <li className={cx(styles.workPiece, styles.inView)}>
          <div className={styles.cardContainer}>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649263364/honsbuns_hxjmxq.jpg"
              imgAlt="an illustration of beautiful bunny"
              cardLink="/work/honsbuns"
            />
          </div>
        </li>
        <li className={cx(styles.workPiece, styles.inView)}>
          <div className={styles.cardContainer}>
            <WorkCard
              imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1649267493/rvabowls_yn3zpg.jpg"
              imgAlt="a photo of an acai bowl from RVA Bowls"
              cardLink="/work/rvabowls"
            />
          </div>
        </li>
      </ul>
    </div>
    // <div className="vp-xl">
    //   <MobileContent />
    // </div>
  );
}
