import { IPackageable } from "./package.interface";

export const nkpMaybe: IPackageable = {
  name: '@nkp/maybe',
  date: '2021',
  description: `
Maybe represents a value that may not exist. It provides a fluent information for transforming the maybe value that allows the caller to avoid excessive type checks..
`.trim(),

  snippet: `
import { Maybe } from ‘@nkp/maybe’;

const maybe = Maybe.some(‘index.js’);

maybe
  .matching(/\.js$/)
  .filter((value) => value.startsWith(‘index’)
  .map((value) => \`public/\${value}\`)
  .unwrap()
`.trim()
};