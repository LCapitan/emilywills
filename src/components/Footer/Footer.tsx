import React from "react";

// components
import { LinkedIn, Instagram, Twitter, Facebook } from "../Icons";

// styles
import styles from "./Footer.module.scss";

interface FooterProps {
  linkedInUrl?: string;
  instaUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  contactEmail?: string;
}

export default function Footer({
  linkedInUrl,
  instaUrl,
  twitterUrl,
  facebookUrl,
  contactEmail,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.socialMenu}>
            <li>
              <a href={linkedInUrl}>
                {/* <a href="/"> */}
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href={instaUrl}>
                {/* <a href=""> */}
                <Instagram />
              </a>
            </li>
            <li>
              <a href={twitterUrl}>
                {/* <a href=""> */}
                <Twitter />
              </a>
            </li>
            <li>
              <a href={facebookUrl}>
                {/* <a href=""> */}
                <Facebook />
              </a>
            </li>
          </ul>

          <div className={styles.nameMark}>
            emily<span>wills</span>
          </div>

          <div className={styles.contact}>
            <div>
              <a href={"mailto:" + contactEmail}>get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
