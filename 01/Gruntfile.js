module.exports = function(grunt) {
  //----------------------------------------------------------------------------
  // @begin: grunt plugins

    // TODO: define

  // @begin: grunt plugins
  //----------------------------------------------------------------------------
  // @begin: grunt tasks config

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json')

    // TODO: review and define grunt tasks config

  });

  // @end: grunt tasks config
  //============================================================================
  // @begin: grunt tasks =======================================================
  //============================================================================

 // Default task(s).
  grunt.registerTask('default', 'Grunt.js default task', function() {
    grunt.log.write('Hello World... ').ok();
  });

  //============================================================================
  // @end: grunt tasks =========================================================
  //============================================================================
};
