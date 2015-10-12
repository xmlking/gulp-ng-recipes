# gulp-ng-recipes

A collection of gulp tasks to share with all your projects.

When gulp 4 is released, gulp-ng-recipes will be rewritten to support [custom registries](https://github.com/phated/undertaker#custom-registries).

Sample Project : [spa-starter-kit](https://github.com/xmlking/spa-starter-kit)

Node: this module assumes you are using typescript with JSPM.


### Installation 
Prerequisites: node.js 4.x, ruby, `gem install scss_lint` optionally `gem install scss`

**SASS**: for windows, install `gulp-ruby-sass` npm module, for linux or Mac use `gulp-sass`.

  ```bash
  # install prerequisite globe npm modules 
  npm install -g gulp tsd jspm
  # install this npm modules 
  npm install gulp-ng-recipes --save-dev --no-optional
  # install optional sass npm module
  npm install gulp-sass --save-dev # or npm install gulp-ruby-sass --save-dev
  ```

### gulpfile.ts

create `gulpfile.ts` file in your project root. 
Add recipes you needed as shown below: 

```js
import 'gulp-ng-recipes/gulp/globals';
import 'gulp-ng-recipes/gulp/server';
import 'gulp-ng-recipes/gulp/tslint';
import 'gulp-ng-recipes/gulp/typescript';
import 'gulp-ng-recipes/gulp/sasslint';
// if you are using ruby sass, use: import 'gulp-ng-recipes/gulp/sass.ruby';
import 'gulp-ng-recipes/gulp/sass';
import 'gulp-ng-recipes/gulp/images';
import 'gulp-ng-recipes/gulp/fonts';
import 'gulp-ng-recipes/gulp/html';
import 'gulp-ng-recipes/gulp/offline';
import 'gulp-ng-recipes/gulp/build';
import 'gulp-ng-recipes/gulp/gpdeploy';
```

### gulp config
we support cascaded configuration files with environment specific overwrites based on `NODE_ENV` you pass in command-line i.e., `gulp serve --env=prod`

copy sample config files from `node_modules/gulp-ng-recipes/gulp/config` to your project `gulp/config` folder.
 
 
###  Issues
* if you have issues with gulp-sass (on windows!), manually install `gulp-ruby-sass` and use `sass.ruby.js` recipe provided.  
