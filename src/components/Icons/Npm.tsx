import { h, FunctionComponent } from "preact";
import styles from "./Npm.module.scss";

// from https://github.com/prplx/svg-logos

interface NpmProps {
  //
  height?: string;
  width?: string;
}

const naturalWidth = 518;
const naturalHeight = 202;

export const Npm: FunctionComponent<NpmProps> = (props) => {
  const { height, width } = props;

  if ((!height && !width) || (height && width)) {
    console.warn('WARNING: must provide eitehr "height" OR "width" to Npm.tsx');
  }

  let _height: undefined | string;
  let _width: undefined | string;
  if (height) {
    _height = height;
    _width = `calc(${height} * ${(naturalWidth / naturalHeight).toFixed(2)})`;
  }
  else if (width) {
    _width = width;
    _height = `calc(${width} * ${(naturalHeight / naturalWidth).toFixed(2)})`;
  }
  else {
    // undefined
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox={`0 0 ${naturalWidth} ${naturalHeight}`}
      height={_height}
      width={_width}
    >
      <polygon
        points="0 0 0 173 144 173 144 202 259 202 259 173 518 173 518 0"
        fill="#CB3837"
      />
      <g fill="#fff">
        <polygon
          points="86 29 29 29 29 58 29 144 86 144 86 58 115 58 115 144 144 144 144 58 144 29"
        />
        <path
          d="m173 29v144h58v-29h57v-115h-115zm86 86h-28v-57h28v57z"
        />
        <polygon
          points="374 29 317 29 317 58 317 144 374 144 374 58 403 58 403 144 432 144 432 58 461 58 461 144 490 144 490 58 490 31 490 29"
        />
      </g>
    </svg>
  );
};
