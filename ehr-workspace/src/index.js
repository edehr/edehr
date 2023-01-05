const fs = require('fs')
const path = require('path')
import { EhrPages } from './ehr-definitions/ehr-models'

const resources = __dirname + '/resources'
const fName = 'simple.json'
// const fName = 'ej0.json'
const source = path.join(resources, fName)

main()

function pageStats (ehrData) {
  const ehrPages = new EhrPages()
  const stats = ehrPages.ehrPagesStats(ehrData)
  console.log('pageStats', JSON.stringify(stats))
  return stats
}

function main () {
  let content = fs.readFileSync(source, 'utf8')
  const seed = JSON.parse(content)
  const ehrData = seed.ehrData
  pageStats(ehrData)
  console.log('done')
}
