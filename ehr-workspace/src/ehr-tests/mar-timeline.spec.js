import { MarTimelineModel, MedOrders } from '../ehr-definitions/med-definitions/mar-model'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
import ehrData from '../resources/sampleMedsForTimeline.json'
import should from 'should'

const ehrModel = new EhrDataModel(ehrData)

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
    timelineModel.should.have.property('days')
    timelineModel.should.have.property('timeLine')
    timelineModel.should.have.property('numberOfDays')
    timelineModel.should.have.property('medOrders')
    timelineModel.should.have.property('schedOrders')
    timelineModel.should.have.property('statOrders')
  })
})
describe('timeline', () => {
  const timelineModel = new MarTimelineModel(ehrModel)

  it('numberOfDays', () => {
    timelineModel.numberOfDays.should.equal(4)
  })
})

describe('medOrders', () => {
  const timelineModel = new MarTimelineModel(ehrModel)
  const medOrders = timelineModel.medOrders
  it('medOrders', () => {
    medOrders.should.be.instanceof(MedOrders)
    medOrders.should.have.property('findByMedication')
    medOrders.should.have.property('findById')
    medOrders.should.have.property('getList')
  })
  it('find metformin', () => {
    medOrders.should.be.instanceof(MedOrders)
    const metformin = medOrders.findByMedication('metformin')
    should.exist(metformin)
    metformin.should.have.property('sTime')
    metformin.should.have.property('id')
    metformin.should.have.property('isScheduled')
    metformin.should.have.property('tsList')
    metformin.should.have.property('isSchedulable')
    metformin.should.have.property('isStat')
    metformin.should.have.property('day')
    metformin.should.have.property('dose')
    metformin.should.have.property('id')
    metformin.should.have.property('instructions')
    metformin.should.have.property('location')
    metformin.should.have.property('maxDose')
    metformin.should.have.property('medName')
    metformin.should.have.property('name')
    metformin.should.have.property('profession')
    metformin.should.have.property('reason')
    metformin.should.have.property('route')
    metformin.should.have.property('time')
    metformin.should.have.property('timing')
    metformin.should.have.property('time1')
    metformin.should.have.property('time6')
    metformin.should.have.property('inDbFormat')

    metformin.id.should.equal('met_id')
    metformin.day.should.equal(1)
    metformin.dose.should.equal('500mg')
    metformin.time1.should.equal('0800')
    metformin.time2.should.equal('2000')
    metformin.tsList().should.have.length(2)
    metformin.tsList()[0].should.equal('0800')
    metformin.tsList()[1].should.equal('2000')
    metformin.isSchedulable().should.equal(true)
    metformin.isStat().should.equal(false)

    metformin.isScheduled(0,'0800').should.be.equal(false,'day too soon')
    metformin.isScheduled(1,'0800').should.be.equal(true)
  })

  it('acetaminophen', () => {
    const acetaminophen = medOrders.findByMedication('acetaminophen')
    acetaminophen.id.should.equal('acte_id')
    acetaminophen.isScheduled(2,'0000').should.equal(false, '2 0000')
    acetaminophen.isScheduled(3,'0000').should.equal(false, '3 0000')
    acetaminophen.isScheduled(3,'0300').should.equal(false, '3 0300')
    acetaminophen.isScheduled(3,'0600').should.equal(false, '3 0600 is past day time and is first matching schedule')

  })
  it('medOrders', () => {
    medOrders.should.have.property('getContinuousMedOrders')
    medOrders.should.have.property('getOnceMedOrders')
    medOrders.should.have.property('getOnceADayMedOrders')
    medOrders.should.have.property('getPrnMedOrders')
    medOrders.should.have.property('getScheduledMedOrders')
    medOrders.should.have.property('getStatMedOrders')
  })

  it ('getOnceMedOrders', () => {
    const mos = medOrders.getOnceMedOrders()
    mos.should.have.length(2)
    mos[0].medName.should.equal('somethingOnce1')
  })
  it ('getPrnMedOrders', () => {
    const mos = medOrders.getPrnMedOrders()
    mos.should.have.length(2)
    mos[0].medName.should.equal('somethingPrn1')
  })
  it ('getScheduledMedOrders', () => {
    const mos = medOrders.getScheduledMedOrders()
    mos.should.have.length(5)
  })
  it ('getStatMedOrders', () => {
    const mos = medOrders.getStatMedOrders()
    mos.should.have.length(2)
    mos[0].medName.should.equal('somethingStat1')
  })
  it ('getContinuousMedOrders', () => {
    const mos = medOrders.getContinuousMedOrders()
    mos.should.have.length(2)
    mos[0].medName.should.equal('somethingIv')
  })
})

describe('timeline get lists', () => {
  const timelineModel = new MarTimelineModel(ehrModel)

  it('numberOfDays', () => {
    timelineModel.should.have.property('contOrders')
    timelineModel.should.have.property('onceADayOrders')
    timelineModel.should.have.property('onceOrders')
    timelineModel.should.have.property('prnOrders')
    timelineModel.should.have.property('schedOrders')
    timelineModel.should.have.property('statOrders')
  })
})
