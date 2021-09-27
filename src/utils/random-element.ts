import { randomNumber } from "./random-number";

/**
 * Get a random element from the array
 *
 * @param arr
 * @param seed
 * @returns
 */
export function randomElement<T>(arr: T[], seed?: number): T {
  const random = seed != null ? randomNumber(seed) : Math.random();
  return arr[Math.floor(arr.length * random)];
}
