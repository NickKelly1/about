import { nkpConfig } from './nkp-config';
import { nkpEither } from './nkp-either';
import { nkpError } from './nkp-error';
import { nkpHooks } from './nkp-hooks';
import { nkpIterable } from './nkp-iterable';
import { nkpMaybe } from './nkp-maybe';

export const packages = [
  nkpIterable,
  nkpMaybe,
  nkpEither,
  nkpConfig,
  nkpHooks,
  nkpError,
];