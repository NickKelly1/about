import { h, FunctionComponent } from 'preact';
import styles from './Ellipse.module.scss';
import clsx from 'clsx';
import { Color } from '../../utils/colors';
import type { CSSProperties } from 'react';
import { Svg } from './Svg';

export interface EllipseProps {
  uniq: string,
  xpery: number,
  size: string,
  color?: Color,
  class?: string,
  transform: string,
  style?: CSSProperties,
}

export const Ellipse: FunctionComponent<EllipseProps> = (props) => {
  const {
    uniq,
    style,
    xpery,
    size,
    color = 'blue',
    class: className,
    transform,
  } = props;

  let rx: number;
  let ry: number;
  let width: string;
  let height: string;
  if (xpery >= 1) {
    // width > height
    rx = 100;
    ry = rx / xpery;
    width = size;
    height = `calc(${(1 / xpery).toFixed(2)} * ${size})`;
  } else {
    // height < width
    ry = 100;
    rx = ry * xpery;
    width = `calc(${xpery.toFixed(2)} * ${size})`;
    height = size;
  }

  return (
    <Svg
      transform={transform}
      className={clsx(
        styles.ellipse,
        className,
        styles[color],
      )}
      style={{
        width: width,
        height: height,
        ...style
      }}
      viewBox={`0 0 ${rx} ${ry}`}
    >
      <ellipse
        fill={`url(#${uniq}-grad)`}
        cx="50%" cy="50%" rx="50%" ry="50%"
      />
      <defs>
        <linearGradient id={`${uniq}-grad`}>
          <stop offset="0%" className={styles.from} />
          <stop offset="100%" className={styles.to}/>
        </linearGradient>
      </defs>
    </Svg>
  );
};

Ellipse.displayName = 'Ellipse';
