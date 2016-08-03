const stylus = require('stylus')

function sheetifyStylus(filename, source, options, cb) {
  options = Object.assign({}, options, {
    filename,
    compress: true,
    sourcemap: true
  })
  stylus.render(source, options, cb)
}
