import { randomNumber } from "./random-number";

export function randomBetween(low: number, high: number, seed: number): number {
  return low + (high - low) * randomNumber(seed);
}
