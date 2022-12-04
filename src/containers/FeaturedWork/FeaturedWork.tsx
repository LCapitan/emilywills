import React from "react";

// components
import { FullWidthContent } from "../../components/index";

// styles
import styles from "./FeaturedWork.module.scss";

export function FeaturedWork() {
  return (
    <div className={styles.featuredWork}>
      <FullWidthContent
        // btnScnd
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107847/portfolio/eve-screens_osozmo_drsle3.png"
        width="1200"
        height="1372"
        altText="a screenshot of the Eve profile page"
        tag="Featured Work"
        title="Eve Planning"
        content="Eve is a digital platform designed to make planning for death easier on you, your loved ones, and the earth."
        url="/work/eve-planning"
        label="view project"
      />
    </div>
  );
}
