declare module 'gulp-scss-lint' {

  interface IOptions {
    config?: string;
    bundleExec?: boolean;
    reporterOutput?: string;
    reporterOutputFormat?: string;
    filePipeOutput?: string;
    maxBuffer?: number | boolean;
    endless?: boolean;
    sync?: boolean;
    verbose?: boolean;
    customReport?: Function;
  }

  interface IScssLintStream extends NodeJS.ReadWriteStream {
    failReporter():void;
  }

  function scsslint(options?: IOptions): IScssLintStream;
  module scsslint {
  }
  export = scsslint;

}
