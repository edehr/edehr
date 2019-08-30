const fs = require('fs')
const md5Hex = require('md5-hex')
const moment = require('moment')
const pathUtil = require('path')
const getDefinitions = require('./input-to-def')
const destination = pathUtil.join(process.cwd(), 'generated', 'ehrDefs')
const hashMapFile = pathUtil.join(process.cwd(), 'hashMapFile.json')

const source = pathUtil.join(process.cwd(), 'raw_data')
const sourceFiles = []
sourceFiles.push('patient-profile')
sourceFiles.push('current-visit-1')
// sourceFiles.push('current-visit-2')
// sourceFiles.push('patient-chart')
// sourceFiles.push('external-resources')
sourceFiles.push('test-page')

main()

function main () {
  let timeStamps = {}
  if(fs.existsSync(hashMapFile)) {
    let timeStampContent = fs.readFileSync(hashMapFile, 'utf8')
    try {
      timeStamps = JSON.parse(timeStampContent)
    } catch (err) {
      console.log('GenerateEhr Error parsing content of timestamp tracking file')
    }
  }
  sourceFiles.forEach(fName => convertFile(fName, timeStamps))
  fs.writeFileSync(hashMapFile, JSON.stringify(timeStamps, null, 2))
}

function convertFile (fName, hashMap) {
  let fSrc = pathUtil.join(source, fName) + '.txt'
  let contents = fs.readFileSync(fSrc, 'utf8')
  let hash = 2//md5Hex(contents)
  let previousHash = hashMap[fName]
  if (hash != previousHash) {
    let stats = fs.statSync(fSrc)
    let lastModifiedTime = stats.mtime
    console.log('GenerateEhr convert file. Process', fName)
    processFile(contents, fName, lastModifiedTime)
    // TODO uncomment to restore storage of hash
    // hashMap[fName] = hash
  } else {
    console.log('GenerateEhr convert file. Skip', fName)
  }
}

function processFile (contents, fName, lastModifiedTime) {
  // console.log('transform file ', fName)
  var pages = getDefinitions(contents, lastModifiedTime)
  var results = JSON.stringify(pages, null, 2)
  results = results.replace(/'/g, '\\\'')
  results = results.replace(/"/g, '\'')
  results = _fixBooleans(results)
  var modDef = []
  // modDef.push('/* eslint-disable quotes */')
  modDef.push('export default function () {')
  modDef.push('  return ' + results)
  modDef.push('}')
  let fDest = pathUtil.join(destination, fName) + '.js'
  console.log('write file ', fDest)
  fs.writeFileSync(fDest, modDef.join('\n'))
}

function _fixBooleans (contents) {
  let newContents = contents.replace(/'FALSE'/g, 'false')
  return newContents.replace(/'TRUE'/g, 'true')
}
