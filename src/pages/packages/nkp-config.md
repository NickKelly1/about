---
order: 4
layout: ../../layouts/package.astro
name: '@nkp/config'
date: 2021

description: |
  Parses and coerces config values.

links:
  npm: https://www.npmjs.com/package/@nkp/config
  repository:
    type: github
    url: https://github.com/NickKelly1/nkp-config

badges:
  -
    alt: npm
    image: https://badge.fury.io/js/%40nkp%2Fconfig.svg
    link: https://www.npmjs.com/package/@nkp/config

  -
    alt: Node.JS package
    image: https://github.com/NickKelly1/nkp-config/actions/workflows/release.yml/badge.svg
    link: https://github.com/NickKelly1/nkp-config/actions/workflows/release.yml

  -
    name: vulnerabilities
    image: https://snyk.io/test/github/nickkelly1/nkp-config/badge.svg
---

Provides simple utilities to parse and coerce configuration values.

Plays nicely with TypeScript.

```ts
import * as c from '@nkp/config';

/**
 * the parse function correctly sets the type of `config`
 * {
 *  DEBUG: false;
 *  MAIL: string | undefined;
 *  HOST: string;
 *  PORT: number;
 *  env: 'development' | 'testing' | 'production';
 * }
 */
const config = c.parse({
  // coerces DEBUG is a boolean defaulting to false if not provided
  DEBUG: c.boolean().default(false),

  // coerces MAIL_HOST to string, or leaves undefined if it doesn't exist
  MAIL_HOST: c.string().optional(),

  // coerces process.env.HOST to string
  HOST: c.string(),

  // coerces process.env.PORT to string
  // if not provided, defaults to 3000
  PORT: c.integer().default(3000),

  // ensures procese.env.NODE_ENV is one of the given values
  env: c
    .key('NODE_ENV')
    .oneOf(['development', 'testing', 'production',] as const),
}, process.env);
```
