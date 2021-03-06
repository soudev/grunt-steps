# grunt-steps : 04 - aprimorado ([en](README.md))

> Uso aprimorado do Grunt
> - os plugins do grunt são carregados com o [jit-grunt](https://github.com/shootaroo/jit-grunt) na [linha 8 do Gruntfile.js](Gruntfile.js#L8)
> - configurações para o grunt
>   - as configurações das tarefas do grunt estão definidas no [diretório ./tools/grunt/config_task](tools/grunt/config_task) e carregadas na [linha 28 do Gruntfile.js](Gruntfile.js#L28)
>   - as principais configurações do projeto estão centralizadas no [./tools/config.js](tools/config.js) e adicionadas as configurações do grunt na [linha 23 do Gruntfile.js](Gruntfile.js#L23)
> - as tarefas customizadas do grunt estão definidas no [diretório ./tools/grunt/custom_task](tools/grunt/custom_task) e carregadas na [linha 11 do Gruntfile.js](Gruntfile.js#L11)
>   - principais tarefas do grunt
>     - tarefa `default` no [./tools/grunt/custom_task/default.js](tools/grunt/custom_task/default.js)
>     - tarefa `release` no [./tools/grunt/custom_task/release.js](tools/grunt/custom_task/release.js)
>     - tarefa `preview` no [./tools/grunt/custom_task/preview.js](tools/grunt/custom_task/preview.js)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalado

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Grunt.js CLI](http://gruntjs.com/getting-started#installing-the-cli) instalado como pacote global do node. `sudo npm install -g grunt-cli`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/grunt-steps.git
cd grunt-steps/04
npm install
```


## Comandos

> Executa o grunt

```bash
npm start
```

### Grunt.js

* fluxo de desenvolvimento

```bash
grunt
```

* construção (versão para produção)

```bash
grunt release
```

* visualiza a versão construída

```bash
grunt preview
```


## Comandos no Mac

### Lista de comandos que criaram o projeto

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


## Licença

- [MIT](../LICENSE)
