import React from "react";

// components
import { ContentBlock } from "../../components";

// styles
import styles from "./IntroContent.module.scss";

export function IntroContent() {
  return (
    <ContentBlock
      className="intro"
      row
      flipped
      imgSrc="https://res.cloudinary.com/austinmel/image/upload/v1658491492/em-3_qzsdta.png"
      width="584"
      height="584"
      label="more about me"
      url="/about"
    >
      <em className="quote">
        &#34;Leave everything and everyone better than you found them. The rest
        will work itself out.&#34;
      </em>
      <p>
        As a designer, entrepreneur, and empath studying Experience Design at
        the VCU Brandcenter, I am passionate about solving problems, removing
        barriers, creating meaningful solutions, and disrupting for good. Oh-
        and cute bunnies. Can&#39;t forget about the bunnies.
      </p>
    </ContentBlock>
  );
}
