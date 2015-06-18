// Giving Sass some Autoprefixer love...

var sass = require('node-sass');
var autoprefixer = require('autoprefixer-core');
var postcss = require('postcss');

module.exports = function(compiler) {
  compiler.register({
    lang: 'scss',
    type: 'style',
    compile: function(content, cb) {
      sass.render({
        data: content
      }, function (err, res) {
        if (err) return err;
        var css = res.css.toString();
        var prefixed = postcss([autoprefixer]).process(css);
        cb(err, prefixed);
      });
    }
  });
};
