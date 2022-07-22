import Link from "next/link";
import Image from "next/image";

import styles from './FullWidthImage.module.scss'

interface FullWidthImageProps {
  imgSrc: string,
  imgAlt: string
}

export function FullWidthImage({
  imgSrc,
  imgAlt
}: FullWidthImageProps) {
  return (
    <div className={styles.fullWidthImage}>
      <Image src={imgSrc} width="1200" height="600" alt={imgAlt} layout="responsive" />
    </div>
  )
}
