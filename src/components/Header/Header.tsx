import React from 'react';
import Link from 'next/link';

// components
import Menu from "../Menu/Menu";
import Hamburger from './HamburgerButton';
import { Logo } from '../Icons';

// styles
import styles from './Header.module.scss'

export function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <Link href="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <Hamburger />
      </div>
      <Menu />
    </header>
  )
}
