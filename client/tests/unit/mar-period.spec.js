import PeriodEntity from '../../src/inside/components/mar/period-entity'
import PeriodDefs from '../../src/inside/components/mar/period-defs'
const should = require('should')

describe('PeriodEntity', () => {
  it('PeriodEntity', () => {
    let obj = new PeriodEntity()
    should.exist(obj)
  })
})

describe('PeriodDefs', () => {
  it('PeriodDefs', () => {
    let obj = new PeriodDefs()
    should.exist(obj)

    obj.should.have.property('periodKeys')
    let periodKeys = obj.periodKeys
    should.exist(periodKeys)
    // console.log(periodKeys)

    obj.should.have.property('periodList')
    let periodDefs = obj.periodList
    should.exist(periodDefs)
    // console.log(periodDefs)
    periodKeys.forEach( key => {
      let pd = periodDefs[key]
      should.exist(pd)
    })
  })
})
