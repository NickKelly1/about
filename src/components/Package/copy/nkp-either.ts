import { IPackageable } from "./package.interface";

export const nkpEither: IPackageable = {
  name: '@nkp/either',
  date: '2021',
  description: `
Either represents one of two possible values. It provides a fluent interface for transforming between a success and fail path.
`.trim(),


  snippet: `
import { Either } from ‘@nkp/either’;

const either = Either.right(‘index.js’);

maybe
  .map((value) => \`public/\${value}\`)
  .unwrapRight()
`.trim()
};