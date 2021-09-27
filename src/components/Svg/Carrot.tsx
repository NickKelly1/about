import type { SVGProps } from "react";
import { h, FunctionComponent } from "preact";
import { Path } from './Svg';

export interface CarrotProps extends SVGProps<SVGPathElement> { width: number , height: number }
export const Carrot: FunctionComponent<CarrotProps> = (props) => {
  const { width, height, ...rest } = props;
  return (
    <Path
      {...rest}
      d={`
        M 00, 00
        L ${width}, ${height}
        M 00, 00
        L ${width}, -${height}
      `}
    />
  );
}
