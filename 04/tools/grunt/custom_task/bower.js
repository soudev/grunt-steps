module.exports = function(grunt) {

  grunt.registerTask('bower:dev', ['clean:bower', 'copy:bower_jquery']);

  grunt.registerTask('bower:dist', ['bower:dev', 'copy:bower_dist']);

};
