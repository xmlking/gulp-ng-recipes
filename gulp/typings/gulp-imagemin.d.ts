declare module 'gulp-imagemin' {

  interface ImageminOptions {
    optimizationLevel?: number;
    progressive?: boolean;
    interlaced?: boolean;
    multipass?: boolean;
    svgoPlugins?: [{}];
    use?: string[];
  }

  //export function imagemin(Options?: ImageminOptions): NodeJS.ReadWriteStream;
  function imagemin(Options?: ImageminOptions): NodeJS.ReadWriteStream;
  module imagemin {
  }
  export = imagemin;
}
