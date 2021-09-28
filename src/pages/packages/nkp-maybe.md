---
order: 1
layout: ../../layouts/package.astro
name: '@nkp/maybe'
date: 2021

description: |
  Utility class for working with values that may or may not exist.

links:
  npm: https://www.npmjs.com/package/@nkp/maybe
  repository:
    type: github
    url: https://github.com/NickKelly1/nkp-maybe

badges:
  -
    alt: npm
    image: https://badge.fury.io/js/%40nkp%2Fmaybe.svg
    link: https://www.npmjs.com/package/@nkp/maybe

  -
    alt: Node.JS package
    image: https://github.com/NickKelly1/nkp-maybe/actions/workflows/release.yml/badge.svg
    link: https://github.com/NickKelly1/nkp-maybe/actions/workflows/release.yml

  -
    name: vulnerabilities
    image: https://snyk.io/test/github/nickkelly1/nkp-maybe/badge.svg
---

Utility class for working with values that may not exist.

Provides a fluent interface with methods to transform the underlying value.

```ts
// example: transform a hexidecimal number to a rgb number

import { Maybe } from '@nkp/maybe';

const hex = /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?/i;

// transform hex color to rgb
const result: Maybe<Rgb> = Maybe
  .some('#ffaa11')
  .match(hex)
  .all(self => [
    /* red */   () => self.at(1).parseInt(16),
    /* green */ () => self.at(2).parseInt(16),
    /* blue */  () => self.at(3).parseInt(16),
    /* alpha */ () => self
      .at(4)
      .parseInt(16)
      .mapNone(() => null),
  ])
  .map(([red, green, blue, alpha]) => ({ red, green, blue, alpha, }))

// { red: 255, green: 170, blue: 17, alpha: null }
console.log(result.value);

interface Rgb {
  red: number;
  green: number;
  blue: number;
  alpha: null | number;
}
```
