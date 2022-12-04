import cx from "classnames";
import { useState, useRef, useEffect } from "react";

// components
import { CSHero, CSFooter, CSHeader, Button } from "../../../components/index";
import { Content } from "./Content";

// styles
import styles from "../CaseStudy.module.scss";

export function PrideContent() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const heroHeightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef?.current;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsSticky(e.isIntersecting);
      },
      {
        threshold: [0, 1],
      }
    );

    if (hero) {
      observer.observe(hero);
    }

    return () => {
      if (hero) {
        observer.unobserve(hero);
      }
    };
  }, [heroRef]);

  useEffect(() => {
    if (heroHeightRef?.current?.clientHeight) {
      setHeroHeight(heroHeightRef.current.clientHeight);
      console.log("height: ", heroHeightRef.current.clientHeight);

      console.log("width: ", heroHeightRef.current.clientWidth);
    }
  }, []);

  return (
    <>
      <Button backButton className={cx(isSticky ? "" : "showBackButton")} />

      <CSHeader
        rightRail
        title="3M Pride"
        overview="Uplifting the voices of the LGBTQ+ community."
        forWhat="Client Work"
        timeline="3 Weeks"
        tools={["Figma", "Illustrator", "Photoshop"]}
        roles={["Branding", "UX/UI", "Social Media"]}
      />

      <div id="top" className={styles.csWrapper}>
        <div ref={heroRef} className={styles.stickyref}></div>

        <div
          ref={heroHeightRef}
          className={isSticky ? "unStuckHero" : "stuckHero"}
        >
          <CSHero imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670110360/portfolio/PrideBooth_WallPrompt_yyqohf_yn6aha.webp" />
        </div>

        <div
          className={styles.stickySpacer}
          style={{ marginTop: isSticky ? "0" : heroHeight }}
        ></div>

        <div className={styles.blockWrapper}>
          <Content />

          <CSFooter />
        </div>
      </div>
    </>
  );
}
