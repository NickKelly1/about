import { h, FunctionComponent } from 'preact';
import styles from './Corner.module.scss';
import clsx from 'clsx';
import { Color } from '../../utils/colors';
import { Svg, G, Path } from './Svg';

export interface CornerProps {
  color?: Color,
  class?: string,
}

export const Corner: FunctionComponent<CornerProps> = (props) => {
  const {
    color = 'blue',
    class: className,
  } = props;


  /**
   * 3 cubic bezier curves
   * outer: 100%
   * mid: ~66%
   * inner: ~33%
   *
   * @see [svg pathing]({@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d})
   */

  return (
    <Svg
    className={clsx(styles.corner, styles[color], className)}
    viewBox="0 0 100 100"
  >
    <G>
      <Path
        className={styles.outer}
        d="
          m 0,0
          c
            20, 50
            80, 50
            100, 100
          V 0
          l -100, 0
        "
      />
      <Path
        className={styles.mid}
        d="
          m 33,0
          c
            13, 33
            54, 33
            67, 66
          V 0
          l -67, 0
        "
      />
      <Path
        className={styles.inner}
        d="
          m 66,0
          c
            13, 16
            23, 16
            34, 33
          V 0
          l -67, 0
        "
      />
    </G>
  </Svg>
  );
};

Corner.displayName = 'Corner';
