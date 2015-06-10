module.exports = function(grunt) {

  grunt.registerTask('validate', ['newer:jshint', 'newer:lintspaces']);

};
