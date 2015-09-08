# gulp-ng-recipes

A collection of gulp tasks to share with all your projects.

When gulp 4 is released, gulp-ng-recipes will be rewritten to support [custom registries](https://github.com/phated/undertaker#custom-registries).

Sample App : [ng-starter-kit](https://github.com/xmlking/ng-starter-kit)

This module comes with `gulp-sass`. if you prefer `gulp-ruby-sass` then install:

```bash
npm install gulp-ruby-sass --save-dev 
```
and add `import 'gulp-ng-recipes/dist/sass.js';` to your `gulpfile.babel.js`


###  Issues 
* browser-sync  2.9.3 error with iojs 3.3.0
* if you have issues with gulp-sass (on windows!), manually install 'gulp-ruby-sass' and use sass.ruby.js recipe provided.  
