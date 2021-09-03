import clsx from 'clsx';
import { Children, FC } from 'react';
import styles from './Container.module.scss';

export interface ContainerProps {
  className?: string;
}

export const Container: FC<ContainerProps> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};
