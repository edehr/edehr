import MarSummary from '../../../src/inside/components/mar/mar-summary'
import { MS } from '../../../src/inside/components/mar/mar-summary'
import MarEntity from '../../../src/inside/components/mar/mar-entity'
import MedOrder from '../../../src/inside/components/mar/med-entity'
import should from 'should'
import { getSampleMedOrderDbDataList } from './med-test-util'
import { getSampleMarDbDataList } from './med-test-util'

describe('MarSummary', () => {
  it('MarSummary', () => {
    let mOrders = []
    let marRecords = []
    let medSample = getSampleMedOrderDbDataList()
    medSample.forEach( mo => {
      let med = new MedOrder(mo)
      mOrders.push(med)
    })
    let marSample = getSampleMarDbDataList()
    marSample.forEach( ms => {
      let mar = new MarEntity(ms)
      marRecords.push(mar)
    })
    let marSummary = new MarSummary()
    should.exist(marSummary)
    marSummary.should.have.property('summaryRefresh')
    marSummary.summaryRefresh(marRecords, mOrders)

    marSummary.should.have.property('tableHeader')
    marSummary.should.have.property('tableBody')

    let tableBody = marSummary.tableBody
    tableBody.should.have.length(medSample.length)

    let row = tableBody[0]
    row.should.have.length(marRecords.length + 1/* for header */)

    let cell, value, content, style
    cell = row[0]
    cell.should.have.property('type')
    cell.type.should.equal(MS.KEY_MED_ORDER)

    cell.should.have.property('value')
    value = cell.value
    value.should.have.property('medication')
    content = marSummary.marCellContent(cell)
    should.ok(content.includes(value.medication))

    cell = row[1]
    cell.should.have.property('type')
    cell.type.should.equal(MS.KEY_MAR)
    content = marSummary.marCellContent(cell)
    should.ok(content.includes(MS.DISPLAYED_WHEN_MAR))

  })
})
