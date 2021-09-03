/* eslint-disable max-len */
import { IPackageable } from './package.interface';

export const nkpIterable: IPackageable = {
  name: '@nkp/iterable',
  date: '2021',
  description: `
Collection helpers for the iterable types in JavaScript.

Exposes methods to help transform and aggregate collections.

Has both synchronous and lazy collections.
`.trim(),

  snippet: `
import { collect } from '@nkp/iterable';

const collection = collect([
  'contact/index.html',
  'contact/script.js',
  'contact/style.css',
  'about/index.html',
  'about/script.js',
  'about/style.css',
]);

collection.mapSome((file) => Maybe
    .some(file)
    // match the file extension
    .match(/\\.[^.]*$/)
    // extract the file extension
    .at(0)
    // return the file and its extension
    .map((ext) => ({ file, ext, }))
  )
  // group elements by their extension
  .forkOn(({ ext }) => ext)
  // map file extension and the list of files
  .mapSome((group) => group
    .at(0)
    .map((first) => ({
      ext: first.ext,
      items: group.map(item => item.file),
    }))
  );
/**
 * Collection [
 *    {
 *      ext: '.html',
 *      items: Collection [
 *        'contact/index.html',
 *        'about/index.html',
 *      ]
 *    },
 *    {
 *      ext: '.css',
 *      items: Collection [
 *        'contact/script.js',
 *        'about/script.js',
 *      ]
 *    },
 *    {
 *      ext: '.js',
 *      items: Collection [
 *        'contact/style.css',
 *        'about/style.css',
 *      ]
 *    },
 * ]
 */
`.trim(),
};
