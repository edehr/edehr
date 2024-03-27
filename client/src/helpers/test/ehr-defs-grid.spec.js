const should = require('should')
import EhrDefsGrid from '@/ehr-definitions/ehr-defs-grid'

const DEFAULT_KEY = 'allergies'
const PAGE_TABLE_KEY = 'biopsychosocial'

// console.log('pageKeys >> ', pageKeys)
// console.log('pageKeys >> ', pageKeys.map(k => EhrDefsGrid.getPageDefinition(k) ))
const elemKey = 'text'

describe ('testing calculation supports', () =>{

  it('wbcEstimate has product calculationType', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcEstimate'
    const filterKey = 'elementKey'
    const desiredProperty = 'calculationType'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('product')
    done()
  })
  it('wbcLowRange has multiplyBy(0.75, 1) calculationType', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcLowRange'
    const filterKey = 'elementKey'
    const desiredProperty = 'calculationType'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('multiplyBy(0.75, 1)')
    done()
  })
  it('wbcAverage has average calculationType', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcAverage'
    const filterKey = 'elementKey'
    const desiredProperty = 'calculationType'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('average')
    done()
  })

  it('wbcAverage has 10 sources', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcAverage'
    const filterKey = 'passToFunction'
    const desiredProperty = 'elementKey'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    // console.log(result)
    should.exists(result)
    result.length.should.equal(10)
    result[0].should.equal('wbc-1')
    done()
  })
  it('wbcLowRange has 2 sources', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcLowRange'
    const filterKey = 'passToFunction'
    const desiredProperty = 'elementKey'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    // console.log(result)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('wbcAnalysis')
    done()
  })
})

describe ('Important demographic elements', () => {
  it('get phn', done => {
    const pageDataKey = 'demographics'
    const filterValue = 'phn'
    const filterKey = 'elementKey'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue)
    should.exists(result)
    result.length.should.equal(1)
    // console.log(result)
    done()
  })
  it('get dob', done => {
    const pageDataKey = 'demographics'
    const filterValue = 'dateOfBirth'
    const filterKey = 'elementKey'
    const result = EhrDefsGrid.getChildElements(pageDataKey, filterKey, filterValue)
    should.exists(result)
    result.length.should.equal(1)
    // console.log(result)
    done()
  })
})

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


})
