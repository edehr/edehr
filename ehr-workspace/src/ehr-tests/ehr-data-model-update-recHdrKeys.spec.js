import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { EhrPages } from '../ehr-definitions/ehr-models'
// eslint-disable-next-line no-unused-vars
const should = require('should')
import * as fs from 'fs'
import { updateRecHeaderElementKeys } from '../ehr-definitions/ehr-data-model-utils'

function generateEhrDataWithRecHdrs () {
  const eData = {}
  const pages = new EhrPages()
  const pageList = pages.pageList
  pageList.forEach(page => {
    const nPg = {}
    const pageKey = page.pageKey
    page.pageTables.forEach(table => {
      if (table.hasRecHeader) {
        const tKey = table.elementKey
        nPg[tKey] = [
          { name: 'foo', profession: 'RN', day: 0, time: '0900' },
          { name: 'bar', profession: 'MD', day: 1, time: '1900' },
        ]
      }
    })
    eData[pageKey] = nPg
  })
  const updatedStr = JSON.stringify(eData, null, 2)
  fs.writeFileSync('./src/resources/allRecHdrOldKeyTables.json', updatedStr)
}

describe ('Ehr data model update to new element keys for rec hdr.', () => {

  it.skip ('skip test unless needed to generate test data', () => {
    generateEhrDataWithRecHdrs()
  })

  // before name, profession, day, time
  // new <tableKey>.name, etc.
  it ('Update all table rows new record header key names using updateRecHeaderElementKeys ', () => {
    const eData = require('../resources/allRecHdrOldKeyTables.json')
    const updatedData = updateRecHeaderElementKeys(eData, {})
    should.exist(updatedData)
    // console.log('--------------------', JSON.stringify(updatedData, null,1))
    let row, newKey, oldKey, tableKey, pageKey, pageData, tableData, expected
    pageKey = 'visit'
    tableKey = 'diagnosisTable'
    oldKey = 'name'
    newKey = tableKey + '_' + oldKey
    should.exist(eData)
    should.exist(eData[pageKey])
    should.exist(eData[pageKey][tableKey])
    should.exist(eData[pageKey][tableKey][0])
    should.exist(eData[pageKey][tableKey][0][oldKey])
    expected = eData[pageKey][tableKey][0][oldKey]
    updatedData.should.have.property(pageKey)
    pageData = updatedData[pageKey]
    pageData.should.have.property(tableKey)
    tableData = pageData[tableKey]
    tableData.should.have.length(2)
    row = tableData[0]
    row.should.have.property(newKey)
    row[newKey].should.equal(expected)
  })

})
