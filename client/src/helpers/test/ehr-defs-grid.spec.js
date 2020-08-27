const should = require('should')
import EhrDefsGrid from '../ehr-defs-grid'

const DEFAULT_KEY = 'allergies'
const PAGE_TABLE_KEY = 'biopsychosocial'

// console.log('pageKeys >> ', pageKeys)
// console.log('pageKeys >> ', pageKeys.map(k => EhrDefsGrid.getPageDefinition(k) ))
const elemKey = 'text'

describe('testing ehr-defs-grid', () => {
  it('getPageDefinition', done => {
    const result = EhrDefsGrid.getPageDefinition(DEFAULT_KEY)
    // console.log('pageDef >> ', result)
    should.exist(result)
    done()
  })

  it('getAllPageKeys', done => {
    const result = EhrDefsGrid.getAllPageKeys()
    result.length.should.be.greaterThan(0)
    done()
  })

  it('getPageElements', done => {
    const elem = EhrDefsGrid.getPageElements(DEFAULT_KEY)
    should.exists(elem)
    elem.should.have.property('pageForm').which.is.an.Object()
    done()
  })

  it('getPageForms', done => {
    const pageForms = EhrDefsGrid.getPageForms(DEFAULT_KEY)
    should.exists(pageForms)
    pageForms.length.should.be.greaterThan(0)
    done()
  })

  it('getPageTables', done => {
    const pageTables = EhrDefsGrid.getPageTables(PAGE_TABLE_KEY)
    should.exists(pageTables)
    pageTables.length.should.be.greaterThan(0)
    done()
  })

  it('getPageTable', done => {
    const tableKey = 'table'
    const table = EhrDefsGrid.getPageTable(PAGE_TABLE_KEY, tableKey)
    should.exist(table)
    table.should.have.property('tableKey').which.is.a.String()
    table.tableKey.should.equal(tableKey)
    done()
  })

  it('getChildElements', done => {
    const filterKey = 'pageElements'
    const result = EhrDefsGrid.getChildElements(DEFAULT_KEY, filterKey)
    should.exists(result)
    result.length.should.be.greaterThan(0)
    done()
  })

  it('getPageChildElement', done => {
    const key = 'checkbox'
    const result = EhrDefsGrid.getPageChildElement(DEFAULT_KEY, key)
    should.exists(result)
    result.elementKey.should.equal(key)
    done()
  })

  it('getPageChildProperty', done => {
    const prop = 'elementKey'
    const key = 'checkbox'
    const result = EhrDefsGrid.getPageChildProperty(DEFAULT_KEY, key, prop)
    should.exists(result)
    result.should.equal('checkbox')
    done()
  })
  
  it('getValidationRule', done => {
    should.doesNotThrow(() => EhrDefsGrid.getValidationRule(DEFAULT_KEY, elemKey))
    done()
  })

  it('getMandatoryRule', done => {
    should.doesNotThrow(() => EhrDefsGrid.getMandatoryRule(DEFAULT_KEY, elemKey))
    done()
  })

  it('getMedOrderSchedule', done => {
    should.doesNotThrow(() => EhrDefsGrid.getMedOrderSchedule(DEFAULT_KEY))
    done()
  })

})
