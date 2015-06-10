module.exports = function(grunt) {

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

};
