// components
import { Button } from '../Button';

// styles
import styles from './WorkDetails.module.scss';

// props
interface WorkDetailsProps {
  classes?: any;
  title: string;
  subTitle: string;
  tags?: Array<string>;
  url: string;
  label?: string;
}

export function WorkDetails({
  classes,
  title,
  subTitle,
  tags,
  url,
  label
}: WorkDetailsProps) {

  return (
    <div className={classes}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subTitle}</div>
      <div className={styles.actions}>
        <Button
          arrow
          secondary
          url={url}
          label={label}
        />
      </div>
      <div className={styles.tags}>
        {tags && tags.map((tag, i) =>
          <span key={tags[i]}>{tag}</span>
        )}
      </div>
    </div>
  )
}
