---
layout: ../../layouts/package.astro
name: '@nkp/either'
date: 2021

description: |
  todo: description

tags:
  - TypeScript
---

```ts
const input = '0.5';

const result: string =
  // read the input
  toNumber(input)
    // if failed to parse, default to 50
    .orElse(() => 50)
    // must be less-than or equal-to 100
    .flatMap((number) => number <= 100
      ? Either.right(number)
      : Either.left(new Error('must be lte 100')))
    // transform to percentage
    .map(number => number * 100)
    // transform to string
    .map(percent => `the parsed value is: ${percent}%`)
    // throw if on a failure path
    .throwLeft()
    // extract the value
    .unwrap();

function toNumber(unknown: unknown): Either<number, string> {
  switch (typeof unknown) {
  case 'bigint': return Either.right(Number(unknown));
  case 'number': return Either.right(unknown);
  case 'string': {
    const num = Number(unknown);
    if (!Number.isFinite(num))
      return Either.left('Failed to parse number: string value is not numeric');
    return Either.right(num);
  }
  default: return Either.left(`Failed to parse number: unhandled type "${typeof unknown}""`);
  }
}
```
