import { serverLogger } from '../server/logger';

interface ILogger {
  info(...args: any[]): void;
  debug(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}

export const logger: ILogger = typeof window === 'undefined'
  ? ({
    info(...args) { args.length <= 1
      ? serverLogger.info(args[0])
      : serverLogger.info(args);
    },
    debug(...args) { args.length <= 1
      ? serverLogger.debug(args[0])
      : serverLogger.debug(args);
    },
    warn(...args) { args.length <= 1
      ? serverLogger.warn(args[0])
      : serverLogger.warn(args);
    },
    error(...args) { args.length <= 1
      ? serverLogger.error(args[0])
      : serverLogger.error(args);
    },
  })
  : ({
    info(arg) { console.info(arg); },
    debug(arg) { console.debug(arg); },
    warn(arg) { console.warn(arg); },
    error(arg) { console.error(arg); },
  });
