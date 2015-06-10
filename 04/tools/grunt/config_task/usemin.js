module.exports = function(grunt) {

  grunt.config('useminPrepare', {

    html: '<%= config.project.index %>',
    options: {
      dest: '<%= config.paths.build %>'
    }

  });


  grunt.config('usemin', {

    html: '<%= config.paths.build %>/index.html',
    options: {
      assetsDirs: [
        '<%= config.paths.build %>',
        '<%= config.paths.build %>/styles',
        '<%= config.paths.build %>/scripts'
      ]
    }

  });

};
