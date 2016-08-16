const stylus = require('stylus')

module.exports = function sheetifyStylus(filename, source, options, cb) {
  options = Object.assign({}, options, {
    filename
  })
  stylus.render(source, options, cb)
}
