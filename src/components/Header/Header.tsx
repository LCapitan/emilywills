import React, { useContext } from 'react';
import UIContext from '../../context/UIContext';
import Link from 'next/link';

// components
import Menu from "../Menu/Menu";
import Hamburger from './HamburgerButton';
import { Logo } from '../Icons';

// styles
import styles from './Header.module.scss'

export function Header() {
  const { menuOpen, setMenuOpen } = useContext(UIContext);

  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <Link href="/" passHref>
          <div onClick={() => setMenuOpen(!menuOpen)} className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <Hamburger />
      </div>
      <Menu />
    </header>
  )
}
