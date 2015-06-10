module.exports = function(grunt) {

  grunt.registerTask('preview', ['release', 'browserSync:dist']);

};
