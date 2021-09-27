/**
 * Sum the string
 *
 * Useful to generate a weakly unique number for strings
 *
 * @param string
 * @returns
 */
export function sumString(string: string): number {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    count += string.charCodeAt(i);
  }
  return count;
}
