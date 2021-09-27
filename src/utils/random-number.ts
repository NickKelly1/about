/**
 * Generate a pseudo random number from a seed
 *
 * shamelessly copied from
 * @see {@link https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript}
 *
 * @param seed
 * @returns
 */
export function randomNumber(seed: number): number {
  var t = seed += 0x6D2B79F5;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
