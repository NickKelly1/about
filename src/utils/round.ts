/**
 * round to this many decimal points
 *
 * @param value
 * @param to
 * @returns
 */
export function round(value: number, to: number) {
  const mult = Number('1' + '0'.repeat(to - 1));
  return Math.round(value * mult) / mult;
}
