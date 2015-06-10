module.exports = function(grunt) {

  grunt.config('browserSync', {

    dev: {
      bsFiles: {
        src: [
          '<%= config.paths.build %>/**/*.{html,css,js}'
        ]
      },
      options: {
        port: '<%= config.webserver.port %>',
        server: {
          baseDir: ['<%= config.paths.build %>', '<%= config.paths.bower.toUse %>']
        },
        watchTask: true
      }
    },


    dist: {
      options: {
        ui: false,
        port: '<%= config.webserver.port %>',
        server: {
          baseDir: ['<%= config.paths.dist %>']
        }
      }
    }

  });

};
