import cx from "classnames";
import { useState, useRef, useEffect } from "react";

// components
import { CSHero, CSFooter, CSHeader, Button } from "../../../components/index";
import { Content } from "./Content";

// styles
import styles from "../CaseStudy.module.scss";

export function HavenContent() {
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

      <div className={styles.csWrapper}>
        <CSHeader
          rightRail
          title="Haven"
          overview="Creating fashion-forward, wearable technology that provides personal safety and peace of mind for young women."
          tools={["Figma", "Illustrator", "Photoshop", "After Effects"]}
          roles={[
            "User Research",
            "Strategy",
            "Branding",
            "UX/UI",
            "Product Design",
          ]}
          teams={[
            "Emily Wills (XD)",
            "Gracy Geary (AD)",
            "Erin Philips (XD)",
            "Annie Balint (ST)",
            "Nikki Norris (ID)",
          ]}
          btnUrl="/work/haven/process"
        />

        <div id="top" className={styles.csWrapper}>
          <div ref={heroRef} className={styles.stickyref}></div>

          <div
            ref={heroHeightRef}
            className={isSticky ? "unStuckHero" : "stuckHero"}
          >
            <CSHero imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107842/portfolio/haven-hero_z079oc_bxeeck.png" />
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
      </div>
    </>
  );
}
