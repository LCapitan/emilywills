import Link from "next/link";
import React, { useContext } from 'react';
import { LinkedIn, Instagram, Twitter, Facebook } from '../Icons'

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.socialMenu}>
            <li>
              <a href="https://www.linkedin.com/in/emilyewills/">
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/emmmywills/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/emmyy_wills">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/emma.wills.52">
                <Facebook />
              </a>
            </li>
          </ul>

          <div className={styles.nameMark}>
            emily<span>wills</span>
          </div>

          <div className={styles.contact}>
            <div><a href="mailto:willsee@vcu.edu">willsee@vcu.edu</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
