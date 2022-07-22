import Link from 'next/link';
import cx from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// components
import { Arrow } from '../Icons';

// styles
import styles from './Button.module.scss';

// props
interface ButtonProps {
  label?: string;
  url?: string;
  secondary?: boolean;
  className?: string;
  onClick?: any;
  external?: boolean;
  arrow?: boolean;
  backButton?: boolean;
  white?: boolean;
}

export function Button({ label, url, secondary, onClick, className, external, arrow, backButton, white }: ButtonProps) {

  if (url && external) {
    return (
      <a href={url} className={cx(styles.button, secondary ? styles.secondary : styles.primary)} target="blank" rel="noreferrer">
        {label}
      </a>
    );
  } else if (url && arrow) {
    return (
      <a href={url} className={cx(styles.button, styles.arrow, secondary ? styles.secondary : styles.primary, white && styles.white)}>
        {label}
        <span className={styles.icon}>
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
  } else if (backButton) {
    return (
      <AnchorLink href="#top" offset="">
        <div className={cx('backButton', className)}>
          <Arrow />
          <span className='srOnly'>scroll to top</span>
        </div>
      </AnchorLink>
    )
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
