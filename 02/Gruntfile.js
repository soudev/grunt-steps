module.exports = function(grunt) {

  require('time-grunt')(grunt);

  //----------------------------------------------------------------------------
  // @begin: grunt plugins

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // @begin: grunt plugins
  //----------------------------------------------------------------------------
  // @begin: grunt tasks config

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['.local/build', '.tmp'],
      dist: ['dist'],
      bower: ['.local/bower']
    }, // @end: clean

    copy: {
      bower_jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: '**',
        dest: '.local/bower/vendor/jquery/'
      },

      bower_dist: {
        expand: true,
        cwd: '.local/bower/',
        src: '**',
        dest: 'dist/'
      },

      build_index: {
        src: 'src/index.html',
        dest: '.local/build/index.html'
      },

      builded2dist: {
        expand: true,
        cwd: '.local/build/',
        src: '**',
        dest: 'dist/'
      }
    }, // @end: copy

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },

      tools: ['Gruntfile.js'],


      project: ['src/**/*.js']
    }, // @end: jshint

    lintspaces: {
      options: {
        editorconfig: '../.editorconfig'
      },

      tools: {
        src: ['Gruntfile.js']
      },

      project_js: {
        src: ['src/**/*.js']
      },

      project_styles: {
        src: ['src/**/*.css']
      },

      project_html: {
        src: ['src/**/*.html']
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
          '.local/build/scripts/*.js',
          '.local/build/styles/*.css'
        ]
      }
    }, // @end: filerev

    useminPrepare: {
      html: 'src/index.html',
      options: {
        dest: '.local/build'
      }
    }, // @end: useminPrepare

    usemin: {
      html: '.local/build/index.html',
      options: {
        assetsDirs: [
          '.local/build',
          '.local/build/styles',
          '.local/build/scripts'
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
          'dist/index.html': 'dist/index.html'
        }
      }
    }, // @end: htmlmin

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'src/**/*.{html,css,js}'
          ]
        },
        options: {
          port: 1337,
          server: {
            baseDir: ['src', '.local/bower']
          },
          watchTask: true
        }
      },

      dist: {
        options: {
          ui: false,
          port: 1337,
          server: {
            baseDir: ['dist']
          }
        }
      }
    }, // @end: browserSync

    watch: {
      project_html: {
        files: ['src/**/*.html'],
        tasks: ['lintspaces:project_html']
      },

      project_styles: {
        files: ['src/**/*.css'],
        tasks: ['lintspaces:project_styles']
      },

      project_js: {
        files: ['src/**/*.js'],
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
