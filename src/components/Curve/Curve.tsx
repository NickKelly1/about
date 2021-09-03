import { FC } from "react";
import styles from './Curve.module.scss';
import clsx from 'clsx';

export interface CurveProps {
  height: number;
}

export const Curve: FC<CurveProps> = (props) => {
  const { 
    height,
  } = props;

  return (
    <div
      style={{
        marginTop: `-${height}px`,
        transform: 'rotate(180deg)',
      }}
      className={clsx(styles.curve)}
    >
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width="100%"
        height={`${height}px`}
        viewBox="0 0 100 100"
        // enableBackground="new 0 0 100 100"
        // xmlSpace="preserve"
        preserveAspectRatio="none"
      >
        <path
          stroke="none"
          strokeWidth="0"
          d="
            m 0 0
            h 100
            v 50
            c -50, -150 -50, 150 -100 0
            z
          "
        />
        {/* border barrier */}
        {/* <path
          fill="none"
          stroke="#66ee77"
          strokeWidth="1"
          strokeLinejoin="round"
          d="
            m 0 0
            h 100
            v 100
            h -100
            z
          "
        /> */}
      </svg>
    </div>
  );
}