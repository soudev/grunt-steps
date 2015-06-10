# grunt-steps : 03 - advanced ([pt-Br](README.pt-Br.md))

> Advanced usage of Grunt
> - grunt plugins loaded with [jit-grunt](https://github.com/shootaroo/jit-grunt) at [Gruntfile.js line 8](Gruntfile.js#L8)
> - grunt tasks settings defined at [Gruntfile.js lines 14-27](Gruntfile.js#L14-L27)
>   - split grunt config into per-task files on [./grunt/config_task directory](grunt/config_task) and loaded at [Gruntfile.js line 25](Gruntfile.js#L25)
>   - project main settings centralized on [./grunt/config.js](grunt/config.js) and added to grunt settings at [Gruntfile.js line 20](Gruntfile.js#L20)
> - grunt custom tasks defined at [Gruntfile.js lines 29-93](Gruntfile.js#L29-L93)
> - grunt main and default tasks at [Gruntfile.js lines 75-91](Gruntfile.js#L75-L91)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt.js CLI](http://gruntjs.com/getting-started#installing-the-cli) node package installed globally.  `sudo npm install -g grunt-cli`

* Must have [bower](http://bower.io/) node package installed globally. `sudo npm install -g bower`


## Installation Guide

Enter the following commands in the terminal

```bash
git clone https://github.com/soudev/grunt-steps.git
cd grunt-steps/03
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
  time-grunt \
  jit-grunt \
  grunt \
  grunt-contrib-watch \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-concat \
  grunt-contrib-uglify \
  grunt-contrib-htmlmin \
  grunt-contrib-cssmin \
  grunt-contrib-jshint \
  grunt-lintspaces \
  grunt-newer \
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

  * [Grunt.js : Configuring Tasks - templates](http://gruntjs.com/configuring-tasks#templates)

  * [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Display the elapsed execution time of grunt tasks

  * [[GitHub] shootaroo / jit-grunt](https://github.com/shootaroo/jit-grunt) - JIT(Just In Time) plugin loader for Grunt.

  * [[GitHub] gruntjs / grunt](https://github.com/gruntjs/grunt) - Grunt: The JavaScript Task Runner

  * [[GitHub] gruntjs / grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Run tasks whenever watched files change.

  * [[GitHub] gruntjs / grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders.

  * [[GitHub] gruntjs / grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders.

  * [[GitHub] gruntjs / grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - Concatenate files.

  * [[GitHub] gruntjs / grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.

  * [[GitHub] gruntjs / grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify HTML.

  * [[GitHub] gruntjs / grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Compress CSS files.

  * [[GitHub] gruntjs / grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Validate files with JSHint.

  * [[GitHub] schorfES / grunt-lintspaces](https://github.com/schorfES/grunt-lintspaces) - A Grunt task for checking spaces in files.

  * [[GitHub] tschaub / grunt-newer](https://github.com/tschaub/grunt-newer) - Configure Grunt tasks to run with newer files only.

  * [[GitHub] BrowserSync / grunt-browser-sync](https://github.com/BrowserSync/grunt-browser-sync) - Grunt Task for keeping multiple browsers & devices in sync when building websites.

  * [[GitHub] yeoman / grunt-filerev](https://github.com/yeoman/grunt-filerev) - File revving

  * [[GitHub] yeoman / grunt-usemin](https://github.com/yeoman/grunt-usemin) - Replaces references to non-optimized scripts or stylesheets into a set of HTML files (or any templates/views)

    * [grunt-usemin | Grunt Tasks](http://grunt-tasks.com/grunt-usemin/) - Automated optimization of css, js and html files.

      * [[GitHub] kanakiyajay / grunt-tasks](https://github.com/kanakiyajay/grunt-tasks) - This repo is for all the Gruntfile.js for grunt plugins


## License

- [MIT](../LICENSE)
