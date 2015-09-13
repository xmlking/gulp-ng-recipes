# gulp-ng-recipes

A collection of gulp tasks to share with all your projects.

When gulp 4 is released, gulp-ng-recipes will be rewritten to support [custom registries](https://github.com/phated/undertaker#custom-registries).

Sample Project : [ng-starter-kit](https://github.com/xmlking/ng-starter-kit)

Node: this module assumes you are using typescript with JSPM by default. you can use babel with JSPM as well.


### Installation 
Prerequisites: node.js 4.x , ruby , `gem install scss_lint`

**SASS**: for windows install `gulp-ruby-sass` npm module, for linux or Mac use `gulp-sass`.

  ```bash
  # install prerequisite globe npm modules 
  npm install -g gulp tsd jspm
  # install this npm modules 
  npm install gulp-ng-recipes --save-dev --no-optional
  # install optional sass npm module
  npm install gulp-ruby-sass --save-dev # or npm install gulp-sass --save-dev
  # install optional eslint npm module if you are using ES6/babel. 
  npm install gulp-eslint --save-dev
  ```

### gulpfile.babel.js

create `gulpfile.babel.js` file in your project root. 
Add recipes you needed as shown below: 

```js
import 'gulp-ng-recipes/dist/globals';
import 'gulp-ng-recipes/dist/server';
import 'gulp-ng-recipes/dist/typescript';
// if you are using ruby sass, use: import 'gulp-ng-recipes/dist/sass.ruby';
import 'gulp-ng-recipes/dist/sass';
import 'gulp-ng-recipes/dist/images';
import 'gulp-ng-recipes/dist/fonts';
import 'gulp-ng-recipes/dist/html';
import 'gulp-ng-recipes/dist/offline';
import 'gulp-ng-recipes/dist/build';
import 'gulp-ng-recipes/dist/gpdeploy';
```

### gulp config
we support cascaded configuration files with environment specific overwrites based on `NODE_ENV` you pass in command-line i.e., `gulp serve --env=prod`

copy sample config files from `node_modules/gulp-ng-recipes/gulp/config` to your project `gulp/config` folder.
 
 
###  Issues 
* browser-sync  2.9.3 errors with iojs 3.3.0. Even with errors, it still works. expecting a fix soon. 
* if you have issues with gulp-sass (on windows!), manually install `gulp-ruby-sass` and use `sass.ruby.js` recipe provided.  
