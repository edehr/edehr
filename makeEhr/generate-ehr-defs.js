const fs = require('fs')
const moment = require('moment')
const pathUtil = require('path')
const RawInputToDef = require('./generators/raw-input-to-def')
const transformer = new RawInputToDef()
const destination = pathUtil.join(process.cwd(), 'generated', 'ehrDefs')
const timestampsFile = pathUtil.join(process.cwd(), 'timestampsFile.json')

const source = pathUtil.join(process.cwd(), 'raw_data')
const sourceFiles = ['patient-profile', 'current-visit-1','current-visit-2', 'patient-chart', 'external-resources']
// const sourceFiles = ['current-visit-1']
// const sourceFiles = ['patient-profile']

main()

function main () {
  let timeStamps = {}
  if(fs.existsSync(timestampsFile)) {
    let timeStampContent = fs.readFileSync(timestampsFile, 'utf8')
    try {
      timeStamps = JSON.parse(timeStampContent)
    } catch (err) {
      console.log('GenerateEhr Error parsing content of timestamp tracking file')
    }
  }
  sourceFiles.forEach(fName => convertFile(fName, timeStamps))
  fs.writeFileSync(timestampsFile, JSON.stringify(timeStamps, null, 2))
}

function convertFile (fName, timeStamps) {
  let fSrc = pathUtil.join(source, fName) + '.txt'
  // console.log('read file ', fSrc)
  let stats = fs.statSync(fSrc)
  let lastModifiedTime = stats.mtime
  let previousMTime = timeStamps[fName]
  if (!moment(lastModifiedTime).isSame(previousMTime)) {
    console.log('GenerateEhr convert file. Process', fName)
    processFile(fSrc, fName, lastModifiedTime, timeStamps)
  } else {
    console.log('GenerateEhr convert file. Skip', fName)
  }
}

function processFile (fSrc, fName, lastModifiedTime, timeStamps) {
  let contents = fs.readFileSync(fSrc, 'utf8')
  // console.log('transform file ', fName)
  var pages = transformer.getDefinitions(contents, lastModifiedTime)
  var results = JSON.stringify(pages, null, 2)
  results = results.replace(/'/g, '\\\'')
  // results = results.replace(/"/g, "'")
  results = _fixBooleans(results)
  var modDef = []
  modDef.push('/* eslint-disable quotes */')
  modDef.push('export default function () {')
  modDef.push('  return ' + results)
  modDef.push('}')
  let fDest = pathUtil.join(destination, fName) + '.js'
  // console.log('write file ', fDest)
  fs.writeFileSync(fDest, modDef.join('\n'))
  timeStamps[fName] = lastModifiedTime
}

function _fixBooleans (contents) {
  let newContents = contents.replace(/'FALSE'/g, 'false')
  return newContents.replace(/'TRUE'/g, 'true')
}
