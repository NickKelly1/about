import { h, FunctionComponent } from 'preact';
import styles from './Project.module.scss';
import clsx from 'clsx';
import type { CSSProperties } from 'react';
import { randomElement } from '../../utils/random-element';
import { randomNumber } from '../../utils/random-number';
import { TextualColor, TEXTUAL_COLORS } from '../../utils/colors';
import { G, Line, Rect, Svg } from './Svg';
import { Carrot } from './Carrot';

// (b)order (r)adius
const br = 3;
// (s)troke (w)idth
const sw = 5;

const cssVars = {
  '--sw': sw,
  '--br': br,
} as CSSProperties;

export interface ProjectProps {
  class?: string;
  style?: CSSProperties;
}

export const Project: FunctionComponent<ProjectProps> = (props) => {
  const {
    class: className,
    style,
  } = props;

  return (
    <Svg
      style={{ ...cssVars, ...style, }}
      className={clsx(styles.project, className)}
      viewBox="0 0 100 100"
    >
    <G>
      <Rect
        className={styles.screen}
        width="100%"
        height="100%"
        rx={br} ry={br}
      />

      {/* page */}
      <Svg
        x="5%" width="42.5%"
        y="5%" height="90%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* page border */}
        <Rect
          className={styles.border}
          x={1} width={98}
          y={1} height={98}
          vectorEffect="non-scaling-stroke"
          rx={br} ry={br}
        />
          <Svg
            x="0" width="100%"
            y="0%" height="30%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <G transform="translate(0, 10)">
              {/* left-carrot */}
              <Carrot
                vectorEffect="non-scaling-stroke"
                className={clsx(styles.word, styles.orange)}
                transform="translate(20, 50)"
                width={15} height={20}
              />

              {/* slash */}
              <Line
                vectorEffect="non-scaling-stroke"
                className={clsx(styles.word, styles.orange)}
                x1={55} x2={45}
                y1={30} y2={70}
              />

              {/* right-carrot */}
              <Carrot
                vectorEffect="non-scaling-stroke"
                className={clsx(styles.word, styles.orange)}
                transform="translate(80, 50) rotate(180)"
                width={15} height={20}
              />
            </G>
          </Svg>
          <Svg
            x="0" width="100%"
            y="30%" height="70%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <Sentence y={10} xmin={20} xmax={80} />
            <Rect
              className={styles.border}
              vectorEffect="non-scaling-stroke"
              x={20} width={20}
              y={20} height={20}
            />
            <Sentence y={20} xmin={50} xmax={80} />
            <Sentence y={30} xmin={50} xmax={80} />
            <Sentence y={40} xmin={50} xmax={80} />
            <Sentence y={50} xmin={20} xmax={80} />
            <Rect
              className={styles.border}
              vectorEffect="non-scaling-stroke"
              x={60} width={20}
              y={60} height={20}
            />
            <Sentence y={60} xmin={20} xmax={50} />
            <Sentence y={70} xmin={20} xmax={50} />
            <Sentence y={80} xmin={20} xmax={50} />
            <Sentence y={90} xmin={20} xmax={80} />
          </Svg>
      </Svg>

      {/* ide */}
      <Svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        x="52.5%" width="42.5%"
        y="5%" height="90%"
      >

        <Rect
          className={styles.border}
          x={1} width={98}
          y={1} height={98}
          vectorEffect="non-scaling-stroke"
          rx={br} ry={br}
        />

        {/* separate explorer and files */}
        <Line
          className={styles.separator}
          vectorEffect="non-scaling-stroke"
          x1={40} x2={40}
          y1={2} y2={78}
        />

        <Svg
          className={styles.explorer}
          preserveAspectRatio="none"
          x={2} width={36}
          y={2} height={76}
          viewBox="0 0 100 100"
        >
          <Word color={'green'} y={5} x1={20} x2={50} />
          <Word color={'blue'} y={10} x1={40} x2={70} />
          <Word color={'blue'} y={15} x1={40} x2={70} />
          <Word color={'blue'} y={20} x1={40} x2={70} />
          <Word color={'green'} y={25} x1={40} x2={70} />
          <Word color={'blue'} y={30} x1={60} x2={90} />
          <Word color={'blue'} y={35} x1={60} x2={90} />
          <Word color={'blue'} y={40} x1={60} x2={90} />
          <Word color={'blue'} y={45} x1={40} x2={70} />
          <Word color={'blue'} y={50} x1={40} x2={70} />
          <Word color={'blue'} y={55} x1={20} x2={50} />
          <Word color={'blue'} y={55} x1={20} x2={50} />
          <Word color={'green'} y={60} x1={20} x2={50} />
          <Word color={'green'} y={65} x1={20} x2={50} />
          <Word color={'blue'} y={70} x1={20} x2={50} />
          <Word color={'blue'} y={75} x1={20} x2={50} />
          <Word color={'green'} y={80} x1={20} x2={50} />
          <Word color={'blue'} y={85} x1={40} x2={70} />
          <Word color={'blue'} y={90} x1={40} x2={70} />
          <Word color={'blue'} y={95} x1={40} x2={70} />
        </Svg>

        <Svg
          className={styles.file}
          preserveAspectRatio="none"
          x={42} width={56}
          y={2} height={76}
          viewBox="0 0 100 100"
        >
          <Sentence y={5} wordmin={5} wordmax={35} />
          <Sentence y={10} wordmin={5} wordmax={35} />
          <Sentence y={15} wordmin={5} wordmax={35} />

          <Sentence y={25} wordmin={5} wordmax={35} />
          <Sentence y={30} wordmin={5} wordmax={35} />
          <Sentence y={35} wordmin={5} wordmax={35} />

          <Sentence y={45} wordmin={5} wordmax={35} />
          <Sentence y={50} wordmin={5} wordmax={35} />
          <Sentence y={55} wordmin={5} wordmax={35} />
          <Sentence y={60} wordmin={5} wordmax={35} />

          <Sentence y={70} wordmin={5} wordmax={35} />
          <Sentence y={75} wordmin={5} wordmax={35} />

          <Sentence y={85} wordmin={5} wordmax={35} />
          <Sentence y={90} wordmin={5} wordmax={35} />
          <Sentence y={95} wordmin={5} wordmax={35} />
        </Svg>

        {/* separate terminal from explorer & files*/ }
        <Line
          className={styles.separator}
          vectorEffect="non-scaling-stroke"
          x1={2} x2={98}
          y1={78} y2={78}
        />

        {/* terminal */}
        <Svg
          className={styles.file}
          preserveAspectRatio="none"
          x={2} width={94}
          y={80} height={18}
          viewBox="0 0 100 100"
        >
          <Word y={20} x1={10} x2={30} color="blue" />
          <Sentence y={20} xmin={40} xmax={90} color="green" />

          <Word y={40} x1={10} x2={30} color="blue" />
          <Sentence y={40} xmin={40} xmax={90} color="green" />

          <Word y={60} x1={10} x2={30} color="blue" />
          <Sentence y={60} xmin={40} xmax={90} color="green" />

          <Word y={80} x1={10} x2={30} color="blue" />
          <Sentence y={80} xmin={40} xmax={90} color="green" />
        </Svg>
      </Svg>
    </G>
  </Svg>
  );
};

Project.displayName = 'Corner';

interface WordProps {
  y: number,
  x1: number,
  x2: number,
  color: TextualColor,
}

const Word: FunctionComponent<WordProps> = (props) => {
  const { x1, x2, y, color, } = props;

  return (
    <Line
      vectorEffect="non-scaling-stroke"
      x1={x1} x2={x2} y1={y} y2={y}
      className={clsx(styles.word, styles[color])}
    />
  );
}

interface SentenceProps {
  y: number;
  xmin?: number;
  xmax?: number;
  wordmin?: number;
  wordmax?: number;
  gap?: number;
  color?: TextualColor;
}
const Sentence: FunctionComponent<SentenceProps> = (props) => {
  const {
    y,
    xmin = 5,
    xmax = 90,
    wordmin = 10,
    wordmax = 20,
    gap = 10,
    color,
  } = props;

  const wordlen = (seed: number) => wordmin + (randomNumber(seed) * (wordmax - wordmin));

  let words: [x1: number, x2: number, color: TextualColor][] = [];
  // create an array of x1, x2's
  let i = xmin;
  while (i < xmax) {
    const seed = (1000 * y) + i;
    const len = wordlen(seed);
    const x1 = i;
    const x2 = Math.min(i + len, xmax);
    i = x2 + gap;
    words.push([x1, x2, color ?? randomElement(TEXTUAL_COLORS, seed)]);
  }

  return (
    <>
      {words.map(([x1, x2, color], i) =>
        <Word key={i} x1={x1} x2={x2} y={y} color={color} />
      )}
    </>
  )
}

