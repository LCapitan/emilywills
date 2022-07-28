import classnames from "classnames";
import Link from "next/link";
import React, { useContext } from 'react';
import UIContext from "../../context/UIContext";

// Styles
import styles from './Menu.module.scss'

export default function Menu() {
  const { menuOpen, setMenuOpen } = useContext(UIContext);

  return (
    <nav className={classnames(styles.menu, menuOpen && styles.open)}>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/">home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/about" passHref>about</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <Link href="/work">work</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};
