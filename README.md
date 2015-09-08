# gulp-ng-recipes

A collection of gulp tasks to share with all your projects.

When gulp 4 is released, gulp-ng-recipes will be rewritten to support [custom registries](https://github.com/phated/undertaker#custom-registries).

Sample App : [ng-starter-kit](https://github.com/xmlking/ng-starter-kit)

This module assumes you are using typescript with JSPM. 

SASS: for windows install `gulp-ruby-sass` npm module, for linux and Mac use `gulp-sass`.

  ```bash
  # install prerequisite globe npm modules 
  npm install -g gulp tsd jspm
  # install this npm modules 
  npm install gulp-ng-recipes --save-dev --no-optional
  # install optional sass npm modules 
  npm install gulp-ruby-sass --save-dev # or npm install gulp-sass --save-dev
  # install optional eslint npm module if you are using ES6/babel. 
  npm install gulp-eslint --save-dev
  ```

### gulpfile.babel.js

```js
import 'gulp-ng-recipes/dist/globals.js';
import 'gulp-ng-recipes/dist/server.js';
import 'gulp-ng-recipes/dist/typescript.js';
import 'gulp-ng-recipes/dist/sass.js';
import 'gulp-ng-recipes/dist/images.js';
import 'gulp-ng-recipes/dist/offline.js';
import 'gulp-ng-recipes/dist/build.js';
import 'gulp-ng-recipes/dist/gpdeploy.js';
```
PS: add either `import 'gulp-ng-recipes/dist/sass.ruby.js';` or `import 'gulp-ng-recipes/dist/sass.js';` to your `gulpfile.babel.js`

###  Issues 
* browser-sync  2.9.3 errors with iojs 3.3.0. Even with errors, it still works. expecting a fix soon. 
* if you have issues with gulp-sass (on windows!), manually install `gulp-ruby-sass` and use `sass.ruby.js` recipe provided.  
