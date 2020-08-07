import should from 'should'
import MedOrder, { ScheduleOptions } from '../med-order'
import StoreHelper from '../../../../helpers/store-helper'
import { dispatchGetter } from '../../../../helpers/test/testHelper'
import { getMedOrder } from './mar-test-helper'

const mockMedOrder = getMedOrder()

const PRN = []
for (let i = 1; i <= 6; i++) {
  PRN.push(`prn${i}`)
}

const mockPRN = {}
PRN.map((prn, ind) => { mockPRN[prn] = `0${ind}:00`})

let medOrder

describe('Properly instantiates the med-order class', () => {
  it('Properly instantiates the class', () => {
    medOrder = new MedOrder(mockMedOrder)
    should.exist(medOrder)
  })
  
  it('has medication', () => {
    should.exist(medOrder.medication)
    medOrder.medication.should.equal(mockMedOrder.medication)
  })

  it('has route', () => {
    should.exist(medOrder.route)  
    medOrder.route.should.equal(mockMedOrder.route)
  })    

  it('has reasons', () => {
    should.exist(medOrder.reason)
    medOrder.reason.should.equal(mockMedOrder.reason)
  })

  it('has notes', () => {
    should.exist(medOrder.notes)
    medOrder.notes.should.equal(mockMedOrder.notes)
  })
  
})

describe('test schedule types functionality', () => {
  Object.keys(ScheduleOptions.OPTIONS).map(k => {
    it(`Test ${k} scheduling`, () => {
      should.doesNotThrow(() => {
        const scheduledMed = Object.assign({}, mockMedOrder, { scheduled: k, administration: 'sched'})
        medOrder = new MedOrder(scheduledMed)        
        medOrder._data.administration.should.equal('sched')
        medOrder.scheduleTimes.should.be.eql(ScheduleOptions.OPTIONS[k])
      })
    })
  })

  it('Invalid scheduling properly throws', () => {
    const key = 'non-existent'
    const nonExistentSch = Object.assign({}, mockMedOrder, { scheduled: key, administration: 'sched'})
    medOrder = new MedOrder(nonExistentSch)
    dispatchGetter('system/apiError').should.equal(`Error: Could not find a medication schedule for key: ${key}`)
  })
})

describe('PRN schedule tests', () => {
  it('is PRN properly scheduled', () => {
    const prnMedOrder = Object.assign({}, mockMedOrder, { administration: 'prn' }, mockPRN)
    medOrder = new MedOrder(prnMedOrder)
    medOrder._data.administration.should.equal('prn')
    medOrder.scheduleTimes.should.be.eql(Object.values(mockPRN))
  })
})

describe('OD schedule', () => {
  it('Properly implements OD to scheduleTimes', () => {
    const odMedOrder = Object.assign({}, mockMedOrder, { administration: 'od'})
    medOrder = new MedOrder(odMedOrder)
    medOrder._data.administration.should.equal('od')
    medOrder.scheduleTimes.includes('od').should.equal(true)
  })
})

describe('testing getSchedule', () => {
  it('getSchedule shouldn\'t throw', () => {
    should.doesNotThrow(() => {
      const sch = ScheduleOptions.getSchedule('TID')
      should.exist(sch)
    })
  })

  it('getSchedule throws', () => {
    should.throws(() => {
      ScheduleOptions.getSchedule('non-existent')
    })
  })
} )

