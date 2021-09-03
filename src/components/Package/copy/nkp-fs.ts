/* eslint-disable max-len */
import { IPackageable } from './package.interface';

export const nkpFs: IPackageable = {
  name: '@nkp/fs',
  date: '2021',
  description: `
Simplify the writing and reading of nested file structures.
`.trim(),


  snippet: `
import * as fsn from ‘@nkp/fsn’;

const structure = fsn.parse(__dirname, [
  ‘about’, [
    ‘about.css’,
    ‘about.js’,
    ‘about.html’,
  ],
  ‘contact’, [
    ‘contact.css’,
    ‘contact.html’,
  ],
]);

await fsn.write(structure);
`.trim(),
};
