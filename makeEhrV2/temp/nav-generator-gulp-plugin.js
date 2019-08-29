'use strict'
/* eslint-disable no-eval */
const through = require('through2')
const path = require('path')
const PluginError = require('plugin-error')
const modName = 'Navigation Generator'

module.exports = () => {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }
    if (file.isStream()) {
      cb(new PluginError(modName, 'Streaming not supported'))
      return
    }
    try {
      var aModule = require(file.path)
      console.log('mod ', aModule)

      // var fileBaseName = path.basename(file.path, '.js')
      // var schemaModule = df.getDefinitions(contents, fileBaseName)
      // file.contents = Buffer.from(schemaModule)
      // this.push(file)
    } catch (err) {
      this.emit('error', new PluginError(modName, err, { fileName: file.path }))
    }
    cb()
  })
}
