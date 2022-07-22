import Link from 'next/link';
import cx from 'classnames';

// styles
import styles from './Button.module.scss';

import { Arrow } from '../Icons';

// const styleClass = ['primary', 'secondary'];

interface ButtonProps {
  label: string;
  url?: string;
  secondary?: boolean;
  className?: string;
  onClick?: any;
  external?: boolean;
  arrow?: boolean;
}

export function Button({ label, url, secondary, onClick, className, external, arrow }: ButtonProps) {

  if (url && external) {
    return (
      <a href={url} className={cx(styles.button, secondary ? styles.secondary : styles.primary)} target="blank" rel="noreferrer">
        {label}
      </a>
    );
  } else if (url && arrow) {
    return (
      <a href={url} className={cx(styles.buttonArrow, secondary ? styles.secondary : styles.primary)}>
        {label}
        <span className={styles.arrow}>
          <Arrow />
        </span>
      </a>
    )
  } else if (url) {
    return (
      <a href={url} className={cx(styles.button, secondary ? styles.secondary : styles.primary)}>
        {label}
      </a>
    );
  } else {
    return (
      <button
        className={cx(styles.button, secondary ? styles.secondary : styles.primary, className && styles[className])}
        onClick={onClick}>
        {label}
      </button>
    )
  }

}
