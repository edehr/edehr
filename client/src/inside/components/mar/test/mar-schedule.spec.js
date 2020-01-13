import MarSchedule from '../../mar/mar-schedule'
import MarEntity from '../../mar/mar-entity'
import MedOrder from '../../mar/med-entity'
import { getSampleMedOrderDbDataList } from './med-test-util'
import { getSampleMarDbDataList } from './med-test-util'
import should from 'should'

describe('MarSchedule', () => {
  let medOrders = []
  let marRecords = []
  const medSample = getSampleMedOrderDbDataList()
  medSample.forEach( mo => {
    const med = new MedOrder(mo)
    medOrders.push(med)
  })
  const marSample = getSampleMarDbDataList(2)
  marSample.sould.have.length(2)
  marSample.forEach(ms => {
    const mar = new MarEntity(ms)
    marRecords.push(mar)
  })

  const marSchedule = new MarSchedule(medOrders)
  should.exist(marSchedule)

  marSchedule.should.have.property('medOrders', medOrders)

})