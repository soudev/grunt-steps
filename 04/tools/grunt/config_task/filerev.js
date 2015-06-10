module.exports = function(grunt) {

  grunt.config('filerev', {

    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 20
    },

    source: {
      src: [
        '<%= config.paths.build %>/scripts/*.js',
        '<%= config.paths.build %>/styles/*.css'
      ]
    }

  });

};
