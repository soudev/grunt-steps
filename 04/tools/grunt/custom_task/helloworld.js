module.exports = function(grunt) {

  grunt.registerTask('helloworld', function() {
    grunt.log.writeln('Hello World [Custom task definition on ./tools/grunt/custom_task]');
  });

};
