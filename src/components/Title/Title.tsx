import clsx from 'clsx';
import { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  className?: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { children, className, } = props;

  return (
    <h3 className={clsx('h3', 'typewriter', styles.title, className)}>
      {children}
    </h3>
  )
}