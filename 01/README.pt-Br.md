# grunt-steps : 01 - básico ([en](README.md))

> Uso básico do Grunt
> - os plugins do grunt são carregados nas [linhas 3-18 do Gruntfile.js](Gruntfile.js#L3-L18)
> - as configurações das tarefas do grunt estão definidas nas [linhas 20-184 do Gruntfile.js](Gruntfile.js#L20-L184)
> - as principais tarefas e a default(padrão) do grunt estão definidas nas [linhas 227-242 do Gruntfile.js](Gruntfile.js#L227-L242)


## Pré-requisitos

* Necessário ter o [Git](http://git-scm.com/) instalado

* Necessário ter o [node.js (v0.10.x ou superior)](http://nodejs.org/) instalado com o npm (Node Package Manager)

* Necessário ter o [Grunt.js CLI](http://gruntjs.com/getting-started#installing-the-cli) instalado como pacote global do node. `sudo npm install -g grunt-cli`

* Necessário ter o [bower](http://bower.io/) instalado como pacote global do node. `sudo npm install -g bower`


## Guia de Instalação

Digite os comandos abaixo no terminal

```bash
git clone https://github.com/soudev/grunt-steps.git
cd grunt-steps/01
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


## Licença

- [MIT](../LICENSE)
