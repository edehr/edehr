'use strict'
const through = require('through2')
const path = require('path')
const InputToDef = require('./raw-input-to-def')
const PluginError = require('plugin-error')
const modName = 'Schema Generator'

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
      var df = new InputToDef()
      var contents = file.contents.toString()
      var fileBaseName = path.basename(file.path, '.txt')
      var schemaModule = df.getDefinitions(contents, fileBaseName)
      file.contents = Buffer.from(schemaModule)
      this.push(file)
    } catch (err) {
      this.emit('error', new PluginError(modName, err, { fileName: file.path }))
    }
    cb()
  })
}
