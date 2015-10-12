declare module 'gulp-replace-task' {

  interface Pattern {
    match:string | RegExp;
    replacement:string | Function | Object;
    json?: Object;
    yaml?: string;
    cson?: string;
    variables?: Object;
    prefix?: string;
    usePrefix?: boolean;
    preservePrefix?: boolean;
    delimiter?: string;
    preserveOrder?: boolean;
    detail?: boolean;
  }
  interface IOptions {
    patterns:Pattern[];
  }
  //export default function replace(options: IOptions)
  function replace(options: IOptions)
  module replace {
  }
  export = replace;
}
