import MarToday from '../../../src/inside/components/mar/mar-today'
import MarEntity from '../../../src/inside/components/mar/mar-entity'
import MedOrder from '../../../src/inside/components/mar/med-entity'
import { getSampleMedOrderDbDataList } from './med-test-util'
import { getSampleMarDbDataList } from './med-test-util'
import should from 'should'

describe.skip('MarToday', () => {
  it('MarToday', () => {
    let mOrders = []
    let marRecords = []
    let medSample = getSampleMedOrderDbDataList()
    medSample.forEach( mo => {
      let med = new MedOrder(mo)
      mOrders.push(med)
    })
    let marSample = getSampleMarDbDataList(2)
    marSample.should.have.length(2)
    marSample.forEach( ms => {
      let mar = new MarEntity(ms)
      marRecords.push(mar)
    })

    let marToday = new MarToday()
    should.exist(marToday)
    marToday.should.have.property('getTodaysSchedule')
    let schedule = marToday.getTodaysSchedule(marRecords, mOrders)
    should.exist(schedule)
    schedule.should.have.length(5)

    let pk
    pk = schedule[0]
    should.ok(pk.hasMar())
    pk = schedule[3]
    should.ok(!pk.hasMar())

    let cDay = marToday.getCurrentDay()
    cDay.should.equal(0)
  })


  it('MarToday full', () => {
    let mOrders = []
    let marRecords = []
    let medSample = getSampleMedOrderDbDataList()
    medSample.forEach( mo => {
      let med = new MedOrder(mo)
      mOrders.push(med)
    })
    let marSample = getSampleMarDbDataList(5)
    marSample.should.have.length(5)
    marSample.forEach( ms => {
      let mar = new MarEntity(ms)
      marRecords.push(mar)
    })
    let marToday = new MarToday()
    let schedule = marToday.getTodaysSchedule(marRecords, mOrders)
    schedule.should.have.length(5)
    schedule.forEach((pk, index) => {
      should.ok(!pk.hasMar())
    })
    let cDay = marToday.getCurrentDay()
    cDay.should.equal(1)
  })

  it('MarToday day 2', () => {
    let mOrders = []
    let marRecords = []
    let medSample = getSampleMedOrderDbDataList()
    medSample.forEach( mo => {
      let med = new MedOrder(mo)
      mOrders.push(med)
    })
    let marSample = getSampleMarDbDataList()
    marSample.should.have.length(6)
    marSample.forEach( ms => {
      let mar = new MarEntity(ms)
      marRecords.push(mar)
    })
    let marToday = new MarToday()
    let schedule = marToday.getTodaysSchedule(marRecords, mOrders)
    schedule.should.have.length(5)

    let pk
    pk = schedule[0]
    should.ok(pk.hasMar())
    pk = schedule[3]
    should.ok(!pk.hasMar())

    let cDay = marToday.getCurrentDay()
    cDay.should.equal(1)

  })
})
