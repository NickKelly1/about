import { randomNumber } from "./random-number";

/**
 * Make a unique id
 *
 * @param seed
 * @returns
 */
export function mkdir(seed: number): string {
  return randomNumber(seed).toString();
}
