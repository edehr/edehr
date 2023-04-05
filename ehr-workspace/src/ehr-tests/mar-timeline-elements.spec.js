import { MarTimelineModel, MedOrders } from '../ehr-definitions/med-definitions/mar-model'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'

const initialData = require('../resources/sampleMedsForTimeline.json')
const ehrModel = new EhrDataModel(initialData)
const ehrData = ehrModel.ehrData


describe.skip('timeline get timeline elements', () => {
  const timelineModel = new MarTimelineModel(ehrModel)

  it('The med orders in the time line model have mar records', () => {
    const medOrders = timelineModel.medOrders
    const mo = medOrders.findById('medicationOrders.medicationOrdersTable.4')
    mo.marRecords.length.should.equal(3)
  })

  it ('dayMedSchedule', () => {
    const d = timelineModel.days
    const day0 = d[1]
    day0.dayNum.should.equal(1)
    const dayMedSchedule = day0.getTimeElements('sched')
    console.log('dayMedSchedule', dayMedSchedule[1])

    true.should.equal(false)
  })
})
