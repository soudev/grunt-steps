module.exports = (function() {

  var config = {};

  //---

  // paths relative to Gruntfile.js location
  config.paths = {
    editorconfig : '../.editorconfig',
    src          : 'src',
    dist         : 'dist',
    build        : '.local/build',
    bower        : {
      downloaded : 'bower_components',
      toUse      : '.local/bower'
    }
  };

  config.tools = 'Gruntfile.js';

  config.project = {
    index   : config.paths.src + '/index.html',
    html    : [ config.paths.src + '/**/*.html' ],
    styles  : [ config.paths.src + '/**/*.css' ],
    js      : [ config.paths.src + '/**/*.js' ]
  };

  config.webserver = {
    port: 1337
  };

  //---

  return config;

})();
