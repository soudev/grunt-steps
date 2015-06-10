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

    config: require('./grunt/config'),


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
            '<%= config.paths.build %>/**/*.{html,css,js}'
          ]
        },
        options: {
          port: '<%= config.webserver.port %>',
          server: {
            baseDir: ['<%= config.paths.build %>', '<%= config.paths.bower.toUse %>']
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
        tasks: [
          'newer:lintspaces:project_html',
          'newer:copy:src_html2build'
        ]
      },

      project_styles: {
        files: '<%= config.project.styles %>',
        tasks: [
          'newer:lintspaces:project_styles',
          'newer:copy:src_styles2build'
        ]
      },

      project_js: {
        files: '<%= config.project.js %>',
        tasks: [
          'newer:jshint:project',
          'newer:lintspaces:project_js',
          'newer:copy:src_js2build'
        ]
      },
    } // @end: watch

  });

  // load tasks config per file
  grunt.loadTasks('grunt/config_task');

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

  grunt.registerTask('validate', ['newer:jshint', 'newer:lintspaces']);

  //----------------------------------------------------------------------------
  // @begin: bower

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

  grunt.registerTask('build', [
    'clean:dist',
    'validate',
    'build:index',
    'bower:dist'
  ]);

  // @end: build
  //----------------------------------------------------------------------------
  // @begin: main

  grunt.registerTask('default', [
    'clean',
    'validate',
    'bower:dev',
    'copy:src2build',
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
