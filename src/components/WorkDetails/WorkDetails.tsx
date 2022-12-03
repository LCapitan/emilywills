// components
import { Button } from "../Button";

// styles
import styles from "./WorkDetails.module.scss";

// props
interface WorkDetailsProps {
  classes?: any;
  title: string;
  subtitle: string;
  tags?: Array<string>;
  url: string;
  label?: string;
  secondary?: boolean;
}

export default function WorkDetails({
  classes,
  title,
  subtitle,
  tags,
  url,
  label,
  secondary,
}: WorkDetailsProps) {
  return (
    <div className={styles.workDetails}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.actions}>
        {secondary ? (
          <Button arrow secondary url={url} label={label} />
        ) : (
          <Button arrow url={url} label={label} />
        )}
      </div>
      <div className={styles.tags}>
        {tags && tags.map((tag, i) => <span key={tags[i]}>{tag}</span>)}
      </div>
    </div>
  );
}
