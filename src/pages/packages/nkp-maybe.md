---
layout: ../../layouts/package.astro
name: '@nkp/maybe'
date: 2021

description: |
  Utility class for working with values that may or may not exist.

tags:
  - TypeScript
---

```ts
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
