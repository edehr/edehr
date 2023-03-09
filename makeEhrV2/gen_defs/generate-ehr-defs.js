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
sourceFiles.push('current-visit-2')
sourceFiles.push('current-visit-3')
sourceFiles.push('current-mar')
sourceFiles.push('med-lab')
sourceFiles.push('patient-chart')
sourceFiles.push('patient-chart-2')
sourceFiles.push('external-resources')
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
  let pages = {}
  sourceFiles.forEach(fName => {
    let pgs = convertFile(fName, timeStamps)
    if (pgs) {
      pages = Object.assign(pgs, pages)
    }
  })
  // sort the definitions
  const pkeys = Object.keys(pages)
  const pa = []
  pkeys.forEach(pk => {
    pa.push(pages[pk])
  })
  pa.sort((a,b) => {
    return a.pIndex - b.pIndex
  })
  pages = {}
  pa.forEach( pdef => {
    pages[pdef.pageDataKey] = pdef
  })
  // push the results into the client side source file
  // step one: convert to string and clean up
  let results = JSON.stringify(pages, null, 2)
  results = results.replace(/'/g, '\\\'')
  results = results.replace(/"/g, '\'')
  results = _fixBooleans(results)
  // wrap defs into a function
  const modDef = []
  modDef.push('/* eslint-disable */')
  modDef.push('const DEFS = ' + results)
  modDef.push('export default DEFS')
  // write to destination file in client source code
  const fDest = pathUtil.join(destination, 'ehr-page-defs') + '.js'
  console.log('write file ', fDest)
  fs.writeFileSync(fDest, modDef.join('\n'))
  fs.writeFileSync(hashMapFile, JSON.stringify(timeStamps, null, 2))
}

function convertFile (fName, hashMap) {
  let fSrc = pathUtil.join(source, fName) + '.txt'
  let contents = fs.readFileSync(fSrc, 'utf8')
  let hash = md5Hex(contents)
  let previousHash = hashMap[fName]
  let results
  if (true || hash !== previousHash) {
    let stats = fs.statSync(fSrc)
    let lastModifiedTime = stats.mtime
    console.log('GenerateEhr convert file. Process', fName)
    results = getDefinitions(contents, lastModifiedTime)
    hashMap[fName] = hash
  } else {
    console.log('GenerateEhr convert file. Skip', fName)
  }
  return results
}

function _fixBooleans (contents) {
  let newContents = contents.replace(/'FALSE'/g, 'false')
  return newContents.replace(/'TRUE'/g, 'true')
}
