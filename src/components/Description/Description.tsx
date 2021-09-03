import clsx from 'clsx';
import { FC, useMemo } from 'react';
import styles from './Description.module.scss';

export interface DescriptionProps {
  className?: string;
  text: string;
}

export const Description: FC<DescriptionProps> = (props) => {
  const {
    text,
    className,
  } = props;

  const lines = useMemo(() => text.trim().split('\n'), [text,]);

  return (
    <div className={clsx(styles.description, className)}>
      {lines.map((line, i) => (
        <p key={i}>
          {line}
        </p>
      ))}
    </div>
  );
};
