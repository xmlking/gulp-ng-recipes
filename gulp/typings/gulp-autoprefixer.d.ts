declare module 'gulp-autoprefixer' {
    interface IOptions {
        browsers?: string[];
        cascade?: boolean;
        remove?: boolean;
    }

  // export default function autoPrefixer(options?: IOptions): NodeJS.ReadWriteStream;
  function autoPrefixer(options?: IOptions): NodeJS.ReadWriteStream;
  module autoPrefixer {
  }
  export = autoPrefixer;
}
