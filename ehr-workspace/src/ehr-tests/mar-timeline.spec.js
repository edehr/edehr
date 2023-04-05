import { MarTimelineModel } from '../ehr-definitions/med-definitions/mar-model'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { MedOrders } from '../ehr-definitions/med-definitions/medOrder-model'

const initialData = require('../resources/sampleMedsForTimeline.json')
const ehrModel = new EhrDataModel(initialData)
const ehrData = ehrModel.ehrData

describe('Mar Time Line', () => {

  it('construct MarTimelineModel without giving it an EhrDataModel fails', () => {
    should.throws(() => {
      const timeline = new MarTimelineModel(ehrData)
      should.not.exist(timeline)
    })
  })
  it('construct MarTimelineModel with an EhrDataModel succeeds', () => {
    should.doesNotThrow(() => {
      const timeline = new MarTimelineModel(ehrModel)
      should.exist(timeline)
    })
  })

  it('check mar time line props', () => {
    const timelineModel = new MarTimelineModel(ehrModel)
    timelineModel.should.have.property('timeLineDays')
    timelineModel.should.have.property('timeLine')
    timelineModel.should.have.property('numberOfDays')
    timelineModel.should.have.property('medOrders')
  })
})
describe('timeline', () => {
  const timelineModel = new MarTimelineModel(ehrModel)

  it('numberOfDays', () => {
    timelineModel.numberOfDays.should.equal(2)
  })
})
describe('timeline get lists', () => {
  const timelineModel = new MarTimelineModel(ehrModel)

  it('time line properties', () => {
    timelineModel.should.have.property('getOrdersByGroup')
  })
})
