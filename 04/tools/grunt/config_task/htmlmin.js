module.exports = function(grunt) {

  grunt.config('htmlmin', {

    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        '<%= config.paths.dist %>/index.html': '<%= config.paths.dist %>/index.html'
      }
    }

  });

};
