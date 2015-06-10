module.exports = function(grunt) {

  grunt.config('clean', {

    build: ['<%= config.paths.build %>', '.tmp'],
    dist: ['<%= config.paths.dist %>'],
    bower: ['<%= config.paths.bower.toUse %>']

  });

};
