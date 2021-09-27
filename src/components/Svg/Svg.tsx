// preact doesn't camelCase all svg properties
// so we add a compatibility layer between

import type { SVGProps } from "react"

export function Svg(props: SVGProps<SVGSVGElement>) {
  return <svg {...compat(props)} />
}

export function Path(props: SVGProps<SVGPathElement>) {
  return <path {...compat(props)} />
}

export function Line(props: SVGProps<SVGLineElement>) {
  return <line {...compat(props)} />
}

export function Rect(props: SVGProps<SVGRectElement>) {
  return <rect {...compat(props)} />
}

export function G(props: SVGProps<SVGGElement>) {
  return <g {...compat(props)} />
}

// add properties that must be converted to kebab-case for preact
const compatSet = new Set([
  'vectorEffect',
  'strokeWidth',
]);

function compat(props: Record<string, any>): Record<string, any> {
  const out: Record<string, string | number> = {};
  Object.entries(props).forEach(([k, v]) => {
    let k2 = k;
    let v2 = v;
    if (compatSet.has(k)) {
      k2 = kebabize(k);
    }

    // additional transformations
    // trim all whitespace in "d" paths
    else if (k === 'd') {
      v2 = v.replace(/\s+/g, ' ');
    }

    out[k2] = v2;
  });
  return out;
}

const kebabize = (str: string) => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
    ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
    : letter;
  }).join('');
}
