import { h, FunctionComponent } from 'preact';
import styles from './Blubber.module.scss';
import clsx from 'clsx';
import type { CSSProperties } from 'react';
import { Svg, G, Path } from './Svg';
import { round } from '../../utils/round';
import { at } from '../../utils/at';

export interface BlubberProps {
  uniq: string,
  size: string,
  class?: string,
  transform: string,
  style?: CSSProperties,
}

export const Blubber: FunctionComponent<BlubberProps> = (props) => {
  const {
    uniq,
    style,
    size,
    class: className,
    transform,
  } = props;

  return (
    <Svg
      transform={transform}
      className={clsx(
        styles.blubber,
        className,
      )}
      style={{
        width: size,
        '--blubber-shape-1': cleanPath(path1),
        '--blubber-shape-2': cleanPath(path2),
        '--blubber-color-from-1': 'rgb(var(--c-blue-1))',
        '--blubber-color-from-2': 'rgb(var(--c-red-1))',
        '--blubber-color-from-3': 'rgb(var(--c-yellow-1))',
        '--blubber-color-from-4': 'rgb(var(--c-green-1))',
        '--blubber-color-to-4': 'rgb(var(--c-blue-1))',
        '--blubber-color-to-1': 'rgb(var(--c-red-1))',
        '--blubber-color-to-2': 'rgb(var(--c-yellow-1))',
        '--blubber-color-to-3': 'rgb(var(--c-green-1))',
        ...style
      } as CSSProperties}
      viewBox={`0 0 100 100`}
    >
      <G>
        <Path
          fill={`url(#${uniq}-grad)`}
          style={{
            opacity: 1,
            // fill: '#ff949c',
            fillOpacity: 1,
            stroke: '#070e2e',
            strokeWidth: 0.26458332,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
            paintOrder: 'normal',
          }}
        />
      </G>

      <defs>
        <linearGradient id={`${uniq}-grad`}>
          <stop
            offset="0%"
            className={styles.from}
            style={{
              '--blubber-color-1': 'rgb(var(--c-purple-1))',
              '--blubber-color-2': 'rgb(var(--c-blue-1))',
              '--blubber-color-3': 'rgb(var(--c-blue-3))',
              '--blubber-color-4': 'rgb(var(--c-purple-3))',
            } as CSSProperties}
          />
          <stop
            offset="100%"
            className={styles.to}
            style={{
              '--blubber-color-1': 'rgb(var(--c-blue-1))',
              '--blubber-color-2': 'rgb(var(--c-purple-3))',
              '--blubber-color-3': 'rgb(var(--c-purple-1))',
              '--blubber-color-4': 'rgb(var(--c-blue-3))',
            } as CSSProperties}
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

Blubber.displayName = 'Blubber';

type XY = { x: number, y: number };
interface SmoothCubicBezierPoint { d: number, b: XY, p: XY};
type CubicBezierCurve = { bf: XY, bt: XY, p: XY }

/**
 * Create a closed shape with evenly angular spaced smooth cubic bezier nodes
 *
 * @param nodes
 * @param radius
 * @param strength
 * @returns
 */
function toShape(
  nodes: number,
  radius: (index: number) => number,
  strength: (index: number, coordinate: 'x' | 'y') => number,
): CubicBezierCurve[] {
  // create a bunch of smooth points
  const points: SmoothCubicBezierPoint[] = [];
  function toRad(deg: number) { return deg * Math.PI / 180; }
  const count = nodes;
  const str = 15;
  for (let i = 0; i < count; i += 1) {
    const deg = 360 * i / count;
    const rad = toRad(deg);
    let _radius = radius(i); // i % 2 ? radius : radius / 2;
    const x = round(_radius * Math.cos(rad), 2);
    const y = round(_radius * Math.sin(rad), 2);
    const b0x = round(+ strength(i, 'x') * (- Math.sin(rad)), 2);
    const b0y = round(+ strength(i, 'y') * (+ Math.cos(rad)), 2);
    const point: SmoothCubicBezierPoint = {
      d: deg,
      b: { x: b0x, y: b0y },
      p: { x, y },
    };
    // console.log(`point: ${i}:`, point);
    points.push(point);
  }

  // join them together
  const curves: CubicBezierCurve[] = [];
  for (let i = 0; i < points.length; i += 1) {
    const ptarget = at(points, i);
    const pafter = at(points, i + 1);
    const curve: CubicBezierCurve = {
      bf: { x: ptarget.p.x + ptarget.b.x, y: ptarget.p.y + ptarget.b.y, },
      bt: { x: pafter.p.x - pafter.b.x, y: pafter.p.y - pafter.b.y, },
      p: pafter.p
    };
    curves.push(curve);
  }

  return curves;
}

/**
 * Create human-readable path
 *
 * needs to be cleaned for html / css
 *
 * @param curves
 * @returns
 */
function toPath(curves: CubicBezierCurve[]): string {
  const p =
    '"'
    + `\n\tM\n\t\t${at(curves, -1).p.x} ${at(curves, -1).p.y}\n`
    + curves
      .map((c) => `\tC\n\t\t${c.bf.x}, ${c.bf.y}\n\t\t${c.bt.x}, ${c.bt.y}\n\t\t${c.p.x}, ${c.p.y}`)
      .join('\n\n')
    + ' z"';
  return p;
}

/**
 * Clean a path to prepare for html / css
 *
 * @param p
 * @returns
 */
function cleanPath(p: string): string {
  return p.replace(/\s+/g, ' ').trim();
}

const path1 = toPath(toShape(
  8,
  (i) => {
    switch (i % 2) {
      case 0: return 35;
      case 1: return 50;
    }
  },
  (i, c) => 10,
));
const path2 = toPath(toShape(
  8,
  (i) => {
    switch (i % 2) {
      case 0: return 50;
      case 1: return 35;
    }
  },
  (i, c) => 10,
));
