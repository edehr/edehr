import PeriodEntity from '../../../src/inside/components/mar/period-entity'
import MarEntity from '../../../src/inside/components/mar/mar-entity'
import should from 'should'
import { getSampleMarDbDataList } from './med-test-util'

let key = 'breakfast'
let aPeriod = new PeriodEntity(key,'Breakfast')

describe.skip('MarEntity', () => {
  it('MarEntity', () => {
    let mar = new MarEntity()
    should.exist(mar)
    let errs = mar.validate()
    should.exist(errs)
    errs.length.should.be.greaterThan(3)
  })

  it('MarEntity valid', () => {
    let mar, errs
    mar = new MarEntity('me', 0, '1:00','comment', aPeriod)
    errs = mar.validate()
    errs.length.should.be.equal(1)

    mar = new MarEntity('me', 0, '1:00')
    errs = mar.validate()
    errs.length.should.be.equal(2)
  })

  it('MarEntity set by object', () => {
    let marSample = getSampleMarDbDataList()
    let mar = new MarEntity(marSample[0])
    let errs = mar.validate()
    errs.length.should.be.equal(0)
  })

  it('MarEntity various invalid', () => {
    let mar = new MarEntity('', 0, '1:00','comment', aPeriod)
    let errs = mar.validate()
    errs.length.should.be.equal(2)

    mar = new MarEntity('me', 0, '31:00','comment', aPeriod)
    errs = mar.validate()
    errs.length.should.be.equal(2)

    mar = new MarEntity('me', 'foo', '1:00','comment', aPeriod)
    errs = mar.validate()
    errs.length.should.be.equal(2)
  })

  it('MarEntity data', () => {
    let mar = new MarEntity('me', 0, '1:00','comment', aPeriod)
    should.exist(mar)
    let errs = mar.validate()
    errs.length.should.be.equal(1)
    let obj = mar.data
    should.exist(obj)
    obj.should.have.property('scheduledTime')
    obj.scheduledTime.should.be.equal(aPeriod.key)
  })

  it('MarEntity sort', () => {
    let m1, m2, d
    m1 = new MarEntity('me', 0, '1:00','comment', aPeriod)
    m2 = new MarEntity('me', 0, '1:00','comment', aPeriod)
    d = MarEntity.compare(m1, m2)
    d.should.be.equal(0)

    m1 = new MarEntity('me', 0, '1:00','comment', aPeriod)
    m2 = new MarEntity('me', 1, '1:00','comment', aPeriod)
    d = MarEntity.compare(m1, m2)
    d.should.be.lessThan(0)

    m1 = new MarEntity('me', 1, '1:00','comment', aPeriod)
    m2 = new MarEntity('me', 0, '1:00','comment', aPeriod)
    d = MarEntity.compare(m1, m2)
    d.should.be.greaterThan(0)

    m1 = new MarEntity('me', 0, '1:00','comment', aPeriod)
    m2 = new MarEntity('me', 0, '11:00','comment', aPeriod)
    d = MarEntity.compare(m1, m2)
    d.should.be.lessThan(0)
  })


  it('MarEntity asObjectForApi', () => {
    let marSample = getSampleMarDbDataList()
    let mar = new MarEntity(marSample[0])
    let obj = mar.asObjectForApi()
    should.exist(obj)
    console.log(obj)
  })


})
