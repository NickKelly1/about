import { IPackageable } from "./package.interface";

export const nkpConfig: IPackageable = {
  name: '@nkp/config',
  date: '2021',
  description: `
Provides a simple TypeScript friendly API for loosely parsing unknown values. Great for working with config files and environment variables
`.trim(),


  snippet: `
import { parse, key, string, number, boolean } from ‘@nkp/config’;

const Env = parse({
  PORT: key(‘PORT’).as(number()),
  HOST: string(‘HOST’).as(string()),
}, process.env);

// TypeScript knows the correct type of Env

// Env: { PORT: number, HOST: string }
`.trim()
};