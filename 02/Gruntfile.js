module.exports = function(grunt) {

  require('time-grunt')(grunt);

  //----------------------------------------------------------------------------
  // @begin: grunt plugins

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // @begin: grunt plugins
  //----------------------------------------------------------------------------
  // @begin: configs

  var config = (function() {

    var config = {};

    //---

    config.paths = {
      editorconfig : '../.editorconfig',
      src          : 'src',
      dist         : 'dist',
      build        : '.local/build',
      bower        : {
        downloaded : 'bower_components',
        toUse      : '.local/bower'
      }
    };

    config.tools = 'Gruntfile.js';

    config.project = {
      index   : config.paths.src + '/index.html',
      html    : [ config.paths.src + '/**/*.html' ],
      styles  : [ config.paths.src + '/**/*.css' ],
      js      : [ config.paths.src + '/**/*.js' ]
    };

    config.webserver = {
      port: 1337
    };

    //---

    return config;

  })();

  // @end: configs
  //----------------------------------------------------------------------------
  // @begin: grunt tasks config

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    config: config,

    clean: {
      build: ['<%= config.paths.build %>', '.tmp'],
      dist: ['<%= config.paths.dist %>'],
      bower: ['<%= config.paths.bower.toUse %>']
    }, // @end: clean

    copy: {
      bower_jquery: {
        expand: true,
        cwd: '<%= config.paths.bower.downloaded %>/jquery/dist/',
        src: '**',
        dest: '<%= config.paths.bower.toUse %>/vendor/jquery/'
      },

      bower_dist: {
        expand: true,
        cwd: '<%= config.paths.bower.toUse %>/',
        src: '**',
        dest: '<%= config.paths.dist %>/'
      },

      build_index: {
        src: '<%= config.paths.src %>/index.html',
        dest: '<%= config.paths.build %>/index.html'
      },

      builded2dist: {
        expand: true,
        cwd: '<%= config.paths.build %>/',
        src: '**',
        dest: '<%= config.paths.dist %>/'
      }
    }, // @end: copy

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      tools: '<%= config.tools %>',


      project: '<%= config.project.js %>'
    }, // @end: jshint

    lintspaces: {
      options: {
        editorconfig: '<%= config.paths.editorconfig %>'
      },

      tools: {
        src: '<%= config.tools %>'
      },

      project_js: {
        src: '<%= config.project.js %>'
      },

      project_styles: {
        src: '<%= config.project.styles %>'
      },

      project_html: {
        src: '<%= config.project.html %>'
      }

    }, // @end: lintspaces

    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 20
      },
      source: {
        src: [
          '<%= config.paths.build %>/scripts/*.js',
          '<%= config.paths.build %>/styles/*.css'
        ]
      }
    }, // @end: filerev

    useminPrepare: {
      html: '<%= config.project.index %>',
      options: {
        dest: '<%= config.paths.build %>'
      }
    }, // @end: useminPrepare

    usemin: {
      html: '<%= config.paths.build %>/index.html',
      options: {
        assetsDirs: [
          '<%= config.paths.build %>',
          '<%= config.paths.build %>/styles',
          '<%= config.paths.build %>/scripts'
        ]
      }
    }, // @end: usemin

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= config.paths.dist %>/index.html': '<%= config.paths.dist %>/index.html'
        }
      }
    }, // @end: htmlmin

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            '<%= config.paths.src %>/**/*.{html,css,js}'
          ]
        },
        options: {
          port: '<%= config.webserver.port %>',
          server: {
            baseDir: ['<%= config.paths.src %>', '<%= config.paths.bower.toUse %>']
          },
          watchTask: true
        }
      },

      dist: {
        options: {
          ui: false,
          port: '<%= config.webserver.port %>',
          server: {
            baseDir: ['<%= config.paths.dist %>']
          }
        }
      }
    }, // @end: browserSync

    watch: {
      project_html: {
        files: '<%= config.project.html %>',
        tasks: ['lintspaces:project_html']
      },

      project_styles: {
        files: '<%= config.project.styles %>',
        tasks: ['lintspaces:project_styles']
      },

      project_js: {
        files: '<%= config.project.js %>',
        tasks: ['jshint:project', 'lintspaces:project_js']
      },
    } // @end: watch

  });

  // @end: grunt tasks config
  //============================================================================
  // @begin: grunt tasks =======================================================
  //============================================================================

  grunt.registerTask('projectInfoMsg', function() {
    var pkg = grunt.config.get('pkg');

    grunt.log.writeln('');
    grunt.log.writeln('project: ' + pkg.name + ' v' + pkg.version);
    grunt.log.writeln('description: ' + pkg.description);
  });

  grunt.registerTask('validate', ['jshint', 'lintspaces']);

  //----------------------------------------------------------------------------
  // @begin: bower

  // 'bower:dev'
  grunt.registerTask('bower:dev', ['clean:bower', 'copy:bower_jquery']);

  grunt.registerTask('bower:dist', ['bower:dev', 'copy:bower_dist']);

  // @end: bower
  //----------------------------------------------------------------------------
  // @begin: build

  grunt.registerTask('build:index', [
    'copy:build_index',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'copy:builded2dist',
    'clean:build',
    'htmlmin:dist'
  ]);

  grunt.registerTask('build', ['clean:dist', 'validate', 'build:index', 'bower:dist']);

  // @end: build
  //----------------------------------------------------------------------------
  // @begin: main

  grunt.registerTask('default', [
    'clean',
    'validate',
    'bower:dev',
    'browserSync:dev',
    'projectInfoMsg',
    'watch'
  ]);

  grunt.registerTask('release', ['build', 'projectInfoMsg']);

  grunt.registerTask('preview', ['release', 'browserSync:dist']);

  // @end: main
  //============================================================================
  // @end: grunt tasks =========================================================
  //============================================================================
};
