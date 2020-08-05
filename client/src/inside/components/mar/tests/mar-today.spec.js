import should from 'should'
import MarToday, { isTimeValid, getSchedule } from '../mar-today'
import MedOrder from '../med-order'
import { ScheduleOptions } from '../med-order'
let marToday

const mockMedOrders = [
  {
    medication: 'ag-amitriptyline',
    reason: 'reason',
    notes: 'notes',
    route: 'Oral',
    administration: 'sched',
    scheduled: 'TID'
  },
  {
    medication: 'acetylcysteine injection',
    reason: 'reason',
    notes: 'notes',
    route: 'Injection',
    administration: 'od'
  },
  {
    medication: 'apo-amitriptyline',
    reason: 'reason',
    notes: 'notes',
    route: 'Oral',
    administration: 'PRN',
    prn1: '08:00',
    prn2: '09:00',
    prn3: '10:00',
    prn4: '11:00',
    prn5: '12:00',
    prn6: '13:00'
  },
]
const expectedScheduleTimes = ['od']
mockMedOrders.filter(mo=> mo.administration === 'sched')
  .map(mo => expectedScheduleTimes.push(...ScheduleOptions.OPTIONS[mo.scheduled]))
const medOrders = mockMedOrders.map(mo => new MedOrder(mo))
let marRecords = []

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
  
  it('isTimeValid', () => {
    isTimeValid('08:00').should.equal(true)
    isTimeValid('0800').should.equal(false)
    isTimeValid('23:00').should.equal(true)
    isTimeValid('00:00').should.equal(true)
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