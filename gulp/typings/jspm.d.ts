
declare module 'jspm' {
  namespace jspm {
    interface IOptions {
      minify?: boolean;
      mangle?: boolean;
      lowResSourceMaps?: boolean;
      sourceMaps?: boolean;
    }
    interface Jspm {
       setPackagePath(packagePath?:string): void;
       bundle(expression:string, fileName:string, options:IOptions): Promise<any>;
    }
  }

  var jspm: jspm.Jspm;

  export = jspm;
}


