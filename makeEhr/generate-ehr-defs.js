const fs = require('fs')
const pathUtil = require('path')
const RawInputToDef = require('./generators/raw-input-to-def')
const transformer = new RawInputToDef()
const destination = pathUtil.join(process.cwd(), 'generated', 'ehrDefs')
const source = pathUtil.join(process.cwd(), 'raw_data')
const sourceFiles = ['current-visit', 'patient-profile', 'patient-chart', 'external-resources']
// const sourceFiles = ['current-visit']

main()

function main () {
  sourceFiles.forEach(fName => convertFile(fName))
}

function convertFile(fName) {
  let fSrc = pathUtil.join(source, fName) + '.txt'
  let fDest = pathUtil.join(destination, fName)  + '.js'
  console.log('read file ', fSrc)
  fs.readFile(fSrc, 'utf8', function (err, contents) {
    console.log('transform file ', fName)
    var pages = transformer.getDefinitions(contents)
    var results = JSON.stringify(pages, null, 2)
    results = results.replace(/'/g, "\\'")
    // results = results.replace(/"/g, "'")
    results = _fixBooleans(results)
    var modDef = [];
    modDef.push('/* eslint-disable quotes */')
    modDef.push('export default function () {')
    modDef.push('  return ' + results)
    modDef.push('}')
    console.log('write file ', fDest)
    fs.writeFileSync(fDest, modDef.join('\n'))
  })
}

function _fixBooleans(contents) {
  let newContents = contents.replace(/'FALSE'/g, 'false')
  return newContents.replace(/'TRUE'/g, 'true')
}
