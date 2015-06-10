module.exports = function(grunt) {

  require('time-grunt')(grunt);

  //----------------------------------------------------------------------------
  // @begin: grunt plugins

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  })({
    customTasksDir: 'tools/grunt/custom_task'
  }); // test: grunt helloworld

  // @begin: grunt plugins
  //----------------------------------------------------------------------------
  // @begin: grunt tasks config

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    config: require('./tools/config')

  });

  // load tasks config per file
  grunt.loadTasks('tools/grunt/config_task');

  // @end: grunt tasks config
  //============================================================================
  // @begin: grunt tasks =======================================================
  //============================================================================
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
