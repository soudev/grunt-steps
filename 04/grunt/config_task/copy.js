module.exports = function(grunt) {

  grunt.config('copy', {

    bower_jquery: {
      expand: true,
      cwd: '<%= config.paths.bower.downloaded %>/jquery/dist/',
      src: '**',
      dest: '<%= config.paths.bower.toUse %>/vendor/jquery/'
    },

    bower_dist: {
      expand: true,
      cwd: '<%= config.paths.bower.toUse %>/',
      src: '**',
      dest: '<%= config.paths.dist %>/'
    },

    //---

    build_index: {
      src: '<%= config.paths.src %>/index.html',
      dest: '<%= config.paths.build %>/index.html'
    },

    builded2dist: {
      expand: true,
      cwd: '<%= config.paths.build %>/',
      src: '**',
      dest: '<%= config.paths.dist %>/'
    },

    //---

    src2build: {
      expand: true,
      cwd: '<%= config.paths.src %>/',
      src: '**',
      dest: '<%= config.paths.build %>/'
    },

    src_html2build: {
      expand: true,
      cwd: '<%= config.paths.src %>/',
      src: '**/*.html',
      dest: '<%= config.paths.build %>/'
    },

    src_js2build: {
      expand: true,
      cwd: '<%= config.paths.src %>/',
      src: '**/*.js',
      dest: '<%= config.paths.build %>/'
    },

    src_styles2build: {
      expand: true,
      cwd: '<%= config.paths.src %>/',
      src: '**/*.css',
      dest: '<%= config.paths.build %>/'
    }

  });

};
