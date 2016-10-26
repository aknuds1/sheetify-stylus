# sheetify-stylus

Stylus plugin for Sheetify.

[![npm](https://img.shields.io/npm/v/sheetify-stylus.svg?style=flat-square)](https://www.npmjs.com/package/sheetify-stylus)
[![Dependency Status](https://img.shields.io/david/seangenabe/sheetify-stylus.svg?style=flat-square)](https://david-dm.org/seangenabe/sheetify-stylus)

## Deprecation notice

I don't intend to support this plugin anymore, please migrate to [sheetify-jstransformer](https://github.com/seangenabe/sheetify-jstransformer) + jstransformer-stylus.

## Usage

```sh
browserify source.js [ sheetify/transform -u sheetify-stylus ]
```

```javascript
b.transform('sheetify/transform' {
  use: ['sheetify-stylus']
})
```

## License

MIT
