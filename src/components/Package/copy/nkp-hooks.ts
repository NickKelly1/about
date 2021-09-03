import { IPackageable } from './package.interface';

export const nkpHooks: IPackageable = {
  name: '@nkp/hooks',
  date: '2021',
  description: `
Common react utility hooks
`.trim(),


  snippet: `
import {
  useValueRef,
  useHaveLayoutsMounted,
  useHaveEffectsMounted,
  useOnResize,
} from ‘@nkp/hooks’;
`.trim(),
};