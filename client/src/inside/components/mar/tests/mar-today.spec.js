import should from 'should'
import MarToday, { isTimeValid, getSchedule } from '../mar-today'
import { getMedOrders, getExpectedSchedule } from './mar-test-helper'

const medOrders = getMedOrders(true)
const expectedScheduleTimes = getExpectedSchedule()

let marRecords = []
let marToday

describe('mar-today tests', () => {
  it('getSchedule', () => {
    should.doesNotThrow(() => {
      const result = getSchedule(medOrders)
      marRecords = result.map(r => r.marRecord)
      should.exist(result)
      expectedScheduleTimes.map(time => {
        const filter = result.filter(sch => sch.hour24 === time)
        filter.length.should.be.greaterThan(0)
      })
    })
  })
  
  it('isTimeValid - valid times', () => {
    isTimeValid('08:00').should.equal(true)
    isTimeValid('23:00').should.equal(true)
    isTimeValid('00:00').should.equal(true)
    isTimeValid('23:59').should.equal(true)
    isTimeValid('04:00').should.equal(true)
    isTimeValid('00:59').should.equal(true)
    isTimeValid('11:59').should.equal(true)
    isTimeValid('04:59').should.equal(true)
  })
  
  it('isTimeValid - invalid times', () => {
    isTimeValid('24:00').should.equal(false)
    isTimeValid('00:60').should.equal(false)
    isTimeValid('0800').should.equal(false)
    isTimeValid('99:99').should.equal(false)
    isTimeValid('11:99').should.equal(false)
    isTimeValid('00:60').should.equal(false)
    isTimeValid('00:00:00').should.equal(false)
    isTimeValid('11;11').should.equal(false)
  })

  it('properly instantiates the class', () => {
    marToday = new MarToday()
    should.exist(marToday)
  })

  it('properly gets the schedule and it', () => {
    const schedule = marToday.getTodaysSchedule(marRecords, medOrders)
    expectedScheduleTimes.map(time => {
      const filter = schedule.filter(sch => sch.hour24 === time)
      filter.length.should.be.greaterThan(0)
    })
  })

})