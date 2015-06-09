module.exports = function(grunt) {
  //----------------------------------------------------------------------------
  // @begin: grunt plugins

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');

  // @begin: grunt plugins
  //----------------------------------------------------------------------------
  // @begin: grunt tasks config

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
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
      }
    }, // @end: copy


    // TODO: review and define grunt tasks config

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

  //----------------------------------------------------------------------------
  // @begin: bower

  // 'bower:dev'
  grunt.registerTask('bower:dev', ['clean:bower', 'copy:bower_jquery']);

  grunt.registerTask('bower:dist', ['bower:dev', 'copy:bower_dist']);

  // @end: bower
  //----------------------------------------------------------------------------

  // TODO: define tasks

  //----------------------------------------------------------------------------
  // @begin: main
  grunt.registerTask('default', function() {
    grunt.task.run('projectInfoMsg');

    grunt.log.writeln('TODO: define development workflow');
  });

  grunt.registerTask('release', function() {
    grunt.task.run('projectInfoMsg');

    grunt.log.writeln('TODO: define build workflow');
  });

  grunt.registerTask('preview', function() {
    grunt.task.run('projectInfoMsg');

    grunt.log.writeln('TODO: define preview workflow');
  });

  // @end: main
  //============================================================================
  // @end: grunt tasks =========================================================
  //============================================================================
};
