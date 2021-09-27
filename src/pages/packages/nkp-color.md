---
layout: ../../layouts/package.astro
name: '@nkp/color'
date: 2021

description: |
  Scans text and transforms hex and RGB colors.

links:
  npm: https://www.npmjs.com/package/@nkp/color
  repository:
    type: github
    url: https://github.com/NickKelly1/nkp-color

badges:
  -
    alt: npm
    image: https://badge.fury.io/js/%40nkp%2Fcolor.svg
    link: https://www.npmjs.com/package/@nkp/color

  -
    alt: Node.JS package
    image: https://github.com/NickKelly1/nkp-color/actions/workflows/release.yml/badge.svg
    link: https://github.com/NickKelly1/nkp-color/actions/workflows/release.yml

  -
    name: vulnerabilities
    image: https://snyk.io/test/github/nickkelly1/nkp-color/badge.svg
---

Extracts and transforms colors in within text blocks.

`@nkp/color` handles:

- **hex3**: hex shorthand
- **hex4**: hex shorthand with alpha
- **hex6**: hex
- **hex8**: hex with alpha

```ts
import { parseText } from '@nkp/color';

const text = `
this #aabbcc is text rgba(25, 125, 225, 50%) with
colors rgb(255 155 55) strewn throughout #abc.
`;

// map all colours to rgb/rgba
const modified: string = parseText(text)
  .mapColors((match) => match
    .color
    .toRgbx({ useCommas: true, })
  );

// text becomes
//
// this rgb(170, 187, 204) is text rgba(25, 125, 225, 50%) with
// colors rgb(255, 155, 55) strewn throughout rgb(170, 187, 204).
```
