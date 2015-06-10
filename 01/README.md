# grunt-steps : 01 - basic ([pt-Br](README.pt-Br.md))

> Basic usage of Grunt
> - grunt plugins loaded at [Gruntfile.js lines 3-18](Gruntfile.js#L3-L18)
> - grunt tasks settings defined at [Gruntfile.js lines 20-184](Gruntfile.js#L20-L184)
> - grunt main and default tasks at [Gruntfile.js lines 227-243](Gruntfile.js#L227-L242)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt.js CLI](http://gruntjs.com/getting-started#installing-the-cli) node package installed globally.  `sudo npm install -g grunt-cli`

* Must have [bower](http://bower.io/) node package installed globally. `sudo npm install -g bower`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/soudev/grunt-steps.git
cd grunt-steps/01
npm install
```


## Commands

> run grunt

```bash
npm start
```

### Grunt.js

* development workflow

```bash
grunt
```

* build (production version)

```bash
grunt release
```

* preview builded

```bash
grunt preview
```


## Commands on Mac

### Create commands list

```bash
npm init

npm install \
  jshint-stylish \
  grunt \
  grunt-contrib-watch \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-concat \
  grunt-contrib-uglify \
  grunt-contrib-htmlmin \
  grunt-contrib-jshint \
  grunt-contrib-cssmin \
  grunt-lintspaces \
  grunt-browser-sync \
  grunt-filerev \
  grunt-usemin \
  --save-dev

touch Gruntfile.js

bower init

bower install \
  jquery \
  --save
```


## Links

* [jQuery](https://jquery.com/)

--

* [Grunt.js](http://gruntjs.com/)

  * [[GitHub] gruntjs / grunt](https://github.com/gruntjs/grunt) - Grunt: The JavaScript Task Runner

  * [[GitHub] gruntjs / grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run tasks whenever watched files change.

  * [[GitHub] gruntjs / grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders.

  * [[GitHub] gruntjs / grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders.

  * [[GitHub] gruntjs / grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - Concatenate files.

  * [[GitHub] gruntjs / grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.

  * [[GitHub] gruntjs / grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify HTML.

  * [[GitHub] gruntjs / grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Validate files with JSHint.

  * [[GitHub] gruntjs / grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Compress CSS files.

  * [[GitHub] schorfES / grunt-lintspaces](https://github.com/schorfES/grunt-lintspaces) - A Grunt task for checking spaces in files.

  * [[GitHub] BrowserSync / grunt-browser-sync](https://github.com/BrowserSync/grunt-browser-sync) - Grunt Task for keeping multiple browsers & devices in sync when building websites.

  * [[GitHub] yeoman / grunt-filerev](https://github.com/yeoman/grunt-filerev) - File revving

  * [[GitHub] yeoman / grunt-usemin](https://github.com/yeoman/grunt-usemin) - Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views)

    * [grunt-usemin | Grunt Tasks](http://grunt-tasks.com/grunt-usemin/) - Automated optimization of css, js and html files.

      * [[GitHub] kanakiyajay / grunt-tasks](https://github.com/kanakiyajay/grunt-tasks) - This repo is for all the Gruntfile.js for grunt plugins


## License

- [MIT](../LICENSE)
