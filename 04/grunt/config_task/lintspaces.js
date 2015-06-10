module.exports = function(grunt) {

  grunt.config('lintspaces', {

    options: {
      editorconfig: '<%= config.paths.editorconfig %>'
    },

    tools: {
      src: '<%= config.tools %>'
    },

    project_js: {
      src: '<%= config.project.js %>'
    },

    project_styles: {
      src: '<%= config.project.styles %>'
    },

    project_html: {
      src: '<%= config.project.html %>'
    }

  });

};
