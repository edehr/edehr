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

function sampleDefs() {
  // return       { breakfast: PeriodEntity { _data: { key: 'breakfast' } },
  // midmorning: PeriodEntity { _data: { key: 'midmorning' } },
  // lunch: PeriodEntity { _data: { key: 'lunch' } },
  // midafternoon: PeriodEntity { _data: { key: 'midafternoon' } },
  // dinner: PeriodEntity { _data: { key: 'dinner' } },
  // bedtime: PeriodEntity { _data: { key: 'bedtime' } } }
}