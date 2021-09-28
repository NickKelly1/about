---
order: 5
layout: ../../layouts/package.astro
name: '@nkp/either'
date: 2021

description: |
  Utility class for working with values of two types.

links:
  npm: https://www.npmjs.com/package/@nkp/either
  repository:
    type: github
    url: https://github.com/NickKelly1/nkp-either

badges:
  -
    alt: npm
    image: https://badge.fury.io/js/%40nkp%2Feither.svg
    link: https://www.npmjs.com/package/@nkp/either

  -
    alt: Node.JS package
    image: https://github.com/NickKelly1/nkp-either/actions/workflows/release.yml/badge.svg
    link: https://github.com/NickKelly1/nkp-either/actions/workflows/release.yml

  -
    name: vulnerabilities
    image: https://snyk.io/test/github/nickkelly1/nkp-either/badge.svg
---

Utility class for working with values of two types.

Provides a fluent interface with methods to transform the underlying value.

Useful for code that has success, failure and recovery paths.

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
      return Either.left(
        'Failed to parse number: '
        + 'string value is not numeric'
      );
    return Either.right(num);
  }
  default: return Either.left(
    `Failed to parse number: '
    + 'unhandled type "${typeof unknown}"`
  );
  }
}
```
