import clsx from "clsx";
import { FC } from "react";
import styles from './Progress.module.scss';

export interface ProgressProps {
  max: number;
  value: number;
  className?: string,
  color?: string;
}

export const Progress: FC<ProgressProps> = (props) => {
  const {
    max,
    value,
    className,
    color,
  } = props;

  return (
    <div className={clsx(styles.progress, className)}>
      <span
        style={{
          width: `${100 * value / max}%`,
          backgroundColor: `${color}`,
        }}
      />
    </div>
  );
}
