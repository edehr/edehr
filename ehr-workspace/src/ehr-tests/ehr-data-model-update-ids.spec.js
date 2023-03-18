import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { EhrPages } from '../ehr-definitions/ehr-models'
// eslint-disable-next-line no-unused-vars
const should = require('should')
import * as fs from 'fs'
import eData from '../resources/allRecHdrTables.json'
import { updateAllRowIds } from '../ehr-definitions/ehr-data-model-utils'

function generateErDataWithIds () {
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
          { name: 'foo' },
          { name: 'bar' }
        ]
      }
    })
    eData[pageKey] = nPg
  })
  eData.visit.diagnosisTable[0].diagnosisTable_id = 'pre existing id'
  const updatedStr = JSON.stringify(eData, null, 2)
  fs.writeFileSync('./src/resources/allRecHdrTables.json', updatedStr)
}

describe ('Ehr data model update all rows of tables with rec header to insert ids, if needed.', () => {

  it.skip ('skip test unless needed to generate test data', () => {
    generateErDataWithIds()
  })

  it ('Update ehr data ids using updateAllRecHeaderIds() ', () => {
    const eData = require('../resources/allRecHdrTables.json')
    eData.visit.diagnosisTable[0].should.have.property('diagnosisTable_id')
    eData.visit.diagnosisTable[1].should.not.have.property('diagnosisTable_id')
    eData.visit.diagnosisTable[0].diagnosisTable_id.should.equal('pre existing id')
    const updatedData = updateAllRowIds(eData)
    // console.log('--------------------', JSON.stringify(updatedData, null,1))
    updatedData.visit.diagnosisTable[0].diagnosisTable_id.should.equal('pre existing id')
    // note that the first row has a nonstandard id (intentional test) so it does not
    // contribute to the indexing used to make a rowId. Hence, the next rowId is 0
    updatedData.visit.diagnosisTable[1].diagnosisTable_id.should.equal('visit.diagnosisTable.0')
    updatedData.hematology.tableCbcAnalysis[0].tableCbcAnalysis_id.should.equal('hematology.tableCbcAnalysis.0')
    updatedData.hematology.tableCbcAnalysis[1].tableCbcAnalysis_id.should.equal('hematology.tableCbcAnalysis.1')
  })

  it ('Update ehr data with ids. Using EhrDataModel.PrepareForDb ', () => {
    const eData = require('../resources/allRecHdrTables.json')
    eData.visit.diagnosisTable[0].should.have.property('diagnosisTable_id')
    eData.visit.diagnosisTable[1].should.not.have.property('diagnosisTable_id')
    eData.visit.diagnosisTable[0].diagnosisTable_id.should.equal('pre existing id')
    const updatedData = EhrDataModel.PrepareForDb(eData)
    // console.log('--------------------', JSON.stringify(updatedData, null,1))
    updatedData.visit.diagnosisTable[0].diagnosisTable_id.should.equal('pre existing id')
    updatedData.visit.diagnosisTable[1].diagnosisTable_id.should.equal('visit.diagnosisTable.0')
    updatedData.hematology.tableCbcAnalysis[0].tableCbcAnalysis_id.should.equal('hematology.tableCbcAnalysis.0')
    updatedData.hematology.tableCbcAnalysis[1].tableCbcAnalysis_id.should.equal('hematology.tableCbcAnalysis.1')
  })

  it ('After using PrepareForDb add more data rows and prepare again', () => {
    const eData = require('../resources/allRecHdrTables.json')
    // console.log('before prep eData',eData.hematology)
    const updatedData = EhrDataModel.PrepareForDb(eData)
    updatedData.hematology.tableCbcAnalysis.push({name:'fff'})
    // console.log('after prep and insrt updatedData',updatedData.hematology)
    const d2 = EhrDataModel.PrepareForDb(updatedData)
    let inx = d2.hematology.tableCbcAnalysis.length -1 // index to last element of table
    let newId = 'hematology.tableCbcAnalysis.' + inx
    should.exist(d2)
    // console.log('after 2nd prep d2',d2.hematology, inx)
    should.exist(d2.hematology.tableCbcAnalysis)
    should.exist(d2.hematology.tableCbcAnalysis[inx])
    should.exist(d2.hematology.tableCbcAnalysis[inx].tableCbcAnalysis_id)
    d2.hematology.tableCbcAnalysis[inx].tableCbcAnalysis_id.should.equal(newId)
  })

})
