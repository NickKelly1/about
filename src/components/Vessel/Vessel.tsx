import clsx from "clsx";
import { Children, FC } from "react";
import styles from './Vessel.module.scss';

export interface VesselProps {
  className?: string;
}

export const Vessel: FC<VesselProps> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={clsx(styles.vessel, className)}>
      {children}
    </div>
  )
}