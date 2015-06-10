# grunt-steps : 02 - intermediário ([en](README.md))

> Uso intermediário do Grunt
> - os plugins do grunt são carregados com o [jit-grunt](https://github.com/shootaroo/jit-grunt) na [linha 8 do Gruntfile.js](Gruntfile.js#L8)
> - as configurações das tarefas do grunt estão definidas nas [linhas 54-260 do Gruntfile.js](Gruntfile.js#L54-L260)
>   - as principais configurações do projeto estão centralizadas nas [linhas 14-52 do Gruntfile.js](Gruntfile.js#L14-L52) e adicionada as configurações do grunt na [linha 60 do Gruntfile.js](Gruntfile.js#L60)
> - tarefas customizadas do grunt definidas nas [linhas 262-326 do Gruntfile.js](Gruntfile.js#L262-L326)
> - principais tarefas e tarefa default(padrão) do grunt definidas nas [linhas 308-324 do Gruntfile.js](Gruntfile.js#L308-L324)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalado

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Grunt.js CLI](http://gruntjs.com/getting-started#installing-the-cli) instalado como pacote global do node. `sudo npm install -g grunt-cli`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/grunt-steps.git
cd grunt-steps/02
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
