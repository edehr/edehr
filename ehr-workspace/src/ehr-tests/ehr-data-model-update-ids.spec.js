import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { EhrPages } from '../ehr-definitions/ehr-models'
// eslint-disable-next-line no-unused-vars
const should = require('should')
import * as fs from 'fs'
import eData from '../resources/allRecHdrTables.json'

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
  eData.visit.diagnosisTable[0]._id = 'pre existing id'
  const updatedStr = JSON.stringify(eData, null, 2)
  fs.writeFileSync('./src/resources/allRecHdrTables.json', updatedStr)
}

describe ('Ehr data model update all rows of tables with rec header to insert ids, if needed', () => {

  it.skip ('skip test unless needed to generate test data', () => {
    generateErDataWithIds()
  })

  it ('update ehr data with ids. use EhrDataModel.UpdateIdsInModel ', () => {
    const eData = require('../resources/allRecHdrTables.json')
    eData.visit.diagnosisTable[0].should.have.property('_id')
    eData.visit.diagnosisTable[1].should.not.have.property('_id')
    eData.visit.diagnosisTable[0]._id.should.equal('pre existing id')
    const updatedData = EhrDataModel.UpdateIdsInModel(eData)
    // console.log('--------------------', JSON.stringify(updatedData, null,1))
    updatedData.visit.diagnosisTable[0]._id.should.equal('pre existing id')
    updatedData.visit.diagnosisTable[1]._id.should.equal('visit.diagnosisTable.1')
    updatedData.hematology.tableCbcAnalysis[0]._id.should.equal('hematology.tableCbcAnalysis.0')
    updatedData.hematology.tableCbcAnalysis[1]._id.should.equal('hematology.tableCbcAnalysis.1')
  })

  it ('update ehr data with ids. use EhrDataModel.PrepareForDb ', () => {
    const eData = require('../resources/allRecHdrTables.json')
    eData.visit.diagnosisTable[0].should.have.property('_id')
    eData.visit.diagnosisTable[1].should.not.have.property('_id')
    eData.visit.diagnosisTable[0]._id.should.equal('pre existing id')
    const updatedData = EhrDataModel.PrepareForDb(eData)
    // console.log('--------------------', JSON.stringify(updatedData, null,1))
    updatedData.visit.diagnosisTable[0]._id.should.equal('pre existing id')
    updatedData.visit.diagnosisTable[1]._id.should.equal('visit.diagnosisTable.1')
    updatedData.hematology.tableCbcAnalysis[0]._id.should.equal('hematology.tableCbcAnalysis.0')
    updatedData.hematology.tableCbcAnalysis[1]._id.should.equal('hematology.tableCbcAnalysis.1')
  })

  it ('After using PrepareForDb add more data rows and prepare again', () => {
    const eData = require('../resources/allRecHdrTables.json')
    const updatedData = EhrDataModel.PrepareForDb(eData)
    updatedData.hematology.tableCbcAnalysis.push({name:'fff'})
    const d2 = EhrDataModel.PrepareForDb(updatedData)
    let inx = d2.hematology.tableCbcAnalysis.length -1 // index to last element of table
    let newId = 'hematology.tableCbcAnalysis.' + inx
    d2.hematology.tableCbcAnalysis[inx]._id.should.equal(newId)
  })

})
