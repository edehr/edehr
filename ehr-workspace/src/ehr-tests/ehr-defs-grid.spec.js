import EhrDefs from '../ehr-definitions/ehr-defs-grid'

const should = require('should')

const DEFAULT_KEY = 'allergies'
const PAGE_TABLE_KEY = 'biopsychosocial'

// See https://github.com/edehr/edehr/issues/1063
const REC_HEADER_KEYS = ['name', 'profession', 'day', 'time']
const KNOWN_DUPS_INTEGUMENTARY = ['exudateAmount', 'exudateType', 'incisionLabel', 'woundLabel']
const KNOW_DUPS_PAST_APPT = ['diagnosis', 'site']
const EXCLUDE_KEYS = [
  ... KNOWN_DUPS_INTEGUMENTARY,
  ... KNOW_DUPS_PAST_APPT
]
describe ('testing calculation supports', () =>{

  it('wbcEstimate has product calculationType', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcEstimate'
    const filterKey = 'elementKey'
    const desiredProperty = 'calculationType'
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
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
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
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
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
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
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    // console.log(result)
    should.exists(result)
    result.length.should.equal(10)
    result[0].should.equal('wbc-1')
    done()
  })
  it('wbcLowRange has 1 source', done => {
    const pageDataKey = 'hematology'
    const filterValue = 'wbcLowRange'
    const filterKey = 'passToFunction'
    const desiredProperty = 'elementKey'
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
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
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue)
    should.exists(result)
    result.length.should.equal(1)
    // console.log(result)
    done()
  })
  it('get dob', done => {
    const pageDataKey = 'demographics'
    const filterValue = 'dateOfBirth'
    const filterKey = 'elementKey'
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue)
    should.exists(result)
    result.length.should.equal(1)
    // console.log(result)
    done()
  })
})

describe('testing ehr-defs-grid', () => {
  it('getPageDefinition', done => {
    const result = EhrDefs.getPageDefinition(DEFAULT_KEY)
    // console.log('pageDef >> ', result)
    should.exist(result)
    done()
  })

  it('getPageElements', done => {
    const elem = EhrDefs.getPageElements(DEFAULT_KEY)
    should.exists(elem)
    elem.should.have.property('pageForm').which.is.an.Object()
    done()
  })

  it('getPageForms', done => {
    const pageForms = EhrDefs.getPageForms(DEFAULT_KEY)
    should.exists(pageForms)
    pageForms.length.should.be.greaterThan(0)
    done()
  })

  it('getPageTables', done => {
    const pageTables = EhrDefs.getPageTables(PAGE_TABLE_KEY)
    should.exists(pageTables)
    pageTables.length.should.be.greaterThan(0)
    done()
  })

  it('getPageTable', done => {
    const tableKey = 'table'
    const table = EhrDefs.getPageTable(PAGE_TABLE_KEY, tableKey)
    should.exist(table)
    table.should.have.property('tableKey').which.is.a.String()
    table.tableKey.should.equal(tableKey)
    done()
  })

  it('getPageChildElement', done => {
    const key = 'checkbox'
    const result = EhrDefs.getPageChildElement(DEFAULT_KEY, key)
    should.exists(result)
    result.elementKey.should.equal(key)
    done()
  })

  it('check page children are unique', () => {
    const pageKeys = EhrDefs.getAllPageKeys()
    pageKeys.forEach(pKey => {
      if ('testPage' === pKey) {
        console.log('SKIP unique check on testPage')
        return
      }
      const children = EhrDefs.getPageChildren(pKey)
      const cNames = children.map(e => e.elementKey)
      const filtered = cNames.filter( cn => !EXCLUDE_KEYS.includes(cn))
      const uniqKeys = [... (new Set(filtered))]
      const setLen = uniqKeys.length
      if (filtered.length !== setLen) {
        filtered.sort()
        console.log('Duplicate keys found in page', pKey, filtered)
      }
      filtered.length.should.equal(setLen, `${pKey} has duplicates in children`)
      // }
    })
  })

  it('getPageChildProperty', done => {
    const prop = 'elementKey'
    const key = 'checkbox'
    const result = EhrDefs.getPageChildProperty(DEFAULT_KEY, key, prop)
    should.exists(result)
    result.should.equal('checkbox')
    done()
  })

  it('getMedOrderScheduleTypes', () => {
    const expected = {
      sched: 'Scheduled',
      prn: 'PRN (as needed)',
      once: 'Once',
      stat: 'Stat',
      od: 'OD (Once a Day)',
      set: 'Set times'
    }
    const types = EhrDefs.getMedOrderScheduleTypes()
    should.exists(types)
    Object.keys(types).length.should.equal(Object.keys(expected).length)
    types.should.have.property('sched')
    types.should.have.property('prn')
    types.should.have.property('once')
    types.should.have.property('stat')
    types.should.have.property('od')
    types.should.have.property('set')
  })

})

describe ( 'Check table rec headers', () => {

  it('check tables with rec header', () => {
    const pageKeys = EhrDefs.getAllPageKeys()
    pageKeys.forEach(pKey => {
      const pageTables = EhrDefs.getPageTables(pKey)
      pageTables.forEach( tbl => {
        if (tbl.hasRecHeader) {
          REC_HEADER_KEYS.forEach(key => {
            const nKey = tbl.elementKey + '_' + key
            const has = tbl.tableChildren.includes(nKey)
            has.should.equal(true, `${pKey}.${tbl.elementKey} has rec hdr flag without ${key} child`)

          })
        }
      })
    })
  })

  // no longer need to worry about tables with the old record header keys because we now update the database and definitions to ensure that all record headers have unique record header element keys
  it.skip('check tables without rec hdr flag', () => {
    const pageKeys = EhrDefs.getAllPageKeys()
    pageKeys.forEach(pKey => {
      if ('careTeam' === pKey) {
        console.log('SKIP table check on careTeam because it has name and profession elements without a rec header')
        return
      }
      const pageTables = EhrDefs.getPageTables(pKey)
      pageTables.forEach( tbl => {
        if (!tbl.hasRecHeader) {
          REC_HEADER_KEYS.forEach(key => {
            const hasName = tbl.tableChildren.includes(key)
            hasName.should.equal(false, `${pKey}.${tbl.elementKey} has ${key} but not rec hdr`)
          })
        }
      })
    })
  })

})
