module.exports = function(grunt) {

  grunt.config('jshint', {

    options: {
      reporter: require('jshint-stylish')
    },

    tools: '<%= config.tools %>',


    project: '<%= config.project.js %>'

  });

};
