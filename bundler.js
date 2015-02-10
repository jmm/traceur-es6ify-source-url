var
  browserify = require('browserify'),
  es6ify = require('es6ify'),
  fs = require('fs'),
  path = require('path'),
  b;

b = browserify({
  entries: ['./src/entry'],
  debug: true
})
  .transform(es6ify)
  .bundle()
  .pipe(fs.createWriteStream(path.join(
    __dirname,
    'dist',
    'with-source-url',
    'bundle.js'
  )));
