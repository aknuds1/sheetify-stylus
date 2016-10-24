const stylus = require('stylus')

module.exports = function sheetifyStylus(filename, source, options, cb) {
  if (/\.styl$/.test(filename)) {
    options = Object.assign({}, options, {
      filename
    })
    stylus.render(source, options, cb)
  } else {
    cb(null, source)
  }
}
