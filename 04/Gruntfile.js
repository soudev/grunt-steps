module.exports = function(grunt) {

  require('time-grunt')(grunt);

  //----------------------------------------------------------------------------
  // @begin: load grunt plugins and custom tasks

  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  })({
    customTasksDir: 'tools/grunt/custom_task'
  });

  // @begin: load grunt plugins and custom tasks
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
