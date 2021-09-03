import clsx from "clsx";
import { FC } from "react";
import styles from './Fresh.module.scss';

interface IFreshProps {
  className?: string
  backgroundColor?: string;
}
export const Fresh: FC<IFreshProps> = (props) => {
  const {
    className,
    backgroundColor,
    children,
  } = props;
  //

  return (
    <span
      className={clsx(styles.fresh, className)}
      style={{ backgroundColor }}
    >
      {children}
    </span>
  );
}