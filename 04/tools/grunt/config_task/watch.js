module.exports = function(grunt) {

  grunt.config('watch', {

    project_html: {
      files: '<%= config.project.html %>',
      tasks: [
        'newer:lintspaces:project_html',
        'newer:copy:src_html2build'
      ]
    },

    project_styles: {
      files: '<%= config.project.styles %>',
      tasks: [
        'newer:lintspaces:project_styles',
        'newer:copy:src_styles2build'
      ]
    },

    project_js: {
      files: '<%= config.project.js %>',
      tasks: [
        'newer:jshint:project',
        'newer:lintspaces:project_js',
        'newer:copy:src_js2build'
      ]
    }

  });

}
