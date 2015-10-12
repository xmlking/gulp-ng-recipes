declare module 'sw-precache' {
  interface SwPrecacheOptions {
    cacheId?: string;
    directoryIndex?: string;
    dynamicUrlToDependencies?: [{dynamicUR:string, files:string[]}];
    handleFetch?: boolean;
    ignoreUrlParametersMatching?: RegExp[];
    importScripts?: string[];
    logger?: Function;
    maximumFileSizeToCacheInBytes?: number;
    navigateFallback?: string;
    stripPrefix?: string;
    replacePrefix?: string;
    staticFileGlobs?: string[];
    templateFilePath?: string;
    verbose?: boolean;
  }

  export function generate(options: SwPrecacheOptions, callback: Function): void;
  export function write(filePath: string, options: SwPrecacheOptions, callback: Function): void;
}
