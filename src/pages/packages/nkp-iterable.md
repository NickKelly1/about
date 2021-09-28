---
order: 2
layout: ../../layouts/package.astro
name: '@nkp/iterable'
date: 2021

description: |
  Utility classes for synchronous and lazy iterables.

links:
  npm: https://www.npmjs.com/package/@nkp/iterable
  repository:
    type: github
    url: https://github.com/NickKelly1/nkp-iterable

badges:
  -
    alt: npm
    image: https://badge.fury.io/js/%40nkp%2Fiterable.svg
    link: https://www.npmjs.com/package/@nkp/iterable

  -
    alt: Node.JS package
    image: https://github.com/NickKelly1/nkp-iterable/actions/workflows/release.yml/badge.svg
    link: https://github.com/NickKelly1/nkp-iterable/actions/workflows/release.yml

  -
    name: vulnerabilities
    image: https://snyk.io/test/github/nickkelly1/nkp-iterable/badge.svg
---

Utility classes for synchronous and lazy iterables.

Provides a fluent interface with utilities to transform the underlying value.

Often `@nkp/iterable` is faster than native array methods because it does not check for array holes.

```ts
import { collect } from '@nkp/iterate';

const collection = collect([
  'index.html',
  'styles/style.css',
  'styles/normalize.css',
  // ...
  'scripts/main.js',
  'scripts/utils.js',
  // ...
  'favicon.ico',
]);

collection
  .map(file => `public/${file}`)
  .matching(/\.(css|js)^/)
  .tapSelf((self) => console.log(`assets: ${self.toArray()}`);
```
