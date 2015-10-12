
declare module 'gulp-gh-pages' {

  interface IOptions {
    remoteUrl?: string;
    origin?: string;
    branch?: string;
    cacheDir?: string;
    push?: boolean;
    message?: string;
  }
  //export default function deploy(options?: IOptions): NodeJS.ReadWriteStream;
  function deploy(options?: IOptions): NodeJS.ReadWriteStream;
  module deploy {
  }
  export = deploy;
}
