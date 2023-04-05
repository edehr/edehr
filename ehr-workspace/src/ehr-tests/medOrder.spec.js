import {
  MarTimelineModel, MED_GROUP_CONT,
  MED_GROUP_OD,
  MED_GROUP_ONCE, MED_GROUP_PRN,
  MED_GROUP_SCHED, MED_GROUP_STAT
} from '../ehr-definitions/med-definitions/mar-model'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { MedOrders } from '../ehr-definitions/med-definitions/medOrder-model'

const initialData = require('../resources/sampleMedsForTimeline.json')
const ehrModel = new EhrDataModel(initialData)
const ehrData = ehrModel.ehrData

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
    should.exist(metformin, 'sample data should have a medication order for metformin')
    metformin.should.have.property('sTime')
    metformin.should.have.property('id')
    metformin.should.have.property('isScheduled')
    metformin.should.have.property('scheduledHours')
    metformin.should.have.property('isSchedulable')
    metformin.should.have.property('day')
    metformin.should.have.property('dose')
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
    // metformin.should.have.property('inDbFormat')
    metformin.id.should.equal('medicationOrders.medicationOrdersTable.0')
    metformin.day.should.equal(0, 'expect med record day to be number 0')
    metformin.dose.should.equal('500mg')
    metformin.time1.should.equal('0800')
    metformin.time2.should.equal('2000')
    metformin.scheduledHours.should.have.length(2)
    metformin.scheduledHours[0].should.equal(8, '0800')
    metformin.scheduledHours[1].should.equal(20, '2000')
    metformin.isSchedulable().should.equal(true, 'isSchedulable')

    metformin.isScheduled(0,'0800').should.be.equal(false,'day too soon')
    metformin.isScheduled(1,'0800').should.be.equal(true, '1, 8000')
  })

  it('acetaminophen', () => {
    const {simTime} = ehrData.meta
    simTime.visitDay.should.equal(1, 'expect the test data to have sim day = 1')
    simTime.visitTime.should.equal('2130', 'expect the test data to have sim time = 2130')
    const ramipril = medOrders.findByMedication('ramipril')
    ramipril.day.should.equal(0, 'med order day should be 0')
    ramipril.time.should.equal('1900', 'med order time should be 1900')
    // console.log('tsLscheduledHoursist', ramipril.scheduledHours)
    // tsList [ 8, 20 ]
    should.exist(ramipril,'expect to find medication ramipril')
    ramipril.id.should.equal('medicationOrders.medicationOrdersTable.4')
    ramipril.isScheduled(0,'0000').should.equal(false, '0 0000')
    ramipril.isScheduled(0,'0800').should.equal(false, '0 0800 false because the med was ordered at 1900')
    ramipril.isScheduled(0,'2000').should.equal(true, '0 2000')
    ramipril.isScheduled(1,'0600').should.equal(false, '1 0600')
    ramipril.isScheduled(1,'0800').should.equal(true, '1 0800')
  })

  it ('getOnceMedOrders', () => {
    const mos = medOrders.getOrdersByGroup(MED_GROUP_ONCE)
    mos.should.have.length(0)
    // mos[0].medName.should.equal('somethingOnce1')
  })
  it ('getPrnMedOrders', () => {
    const mos = medOrders.getOrdersByGroup(MED_GROUP_PRN)
    mos.should.have.length(8)
    // mos[0].medName.should.equal('somethingPrn1')
  })
  it ('getScheduledMedOrders', () => {
    const mos = medOrders.getOrdersByGroup(MED_GROUP_SCHED)
    mos.should.have.length(3)
  })
  it ('getStatMedOrders', () => {
    const mos = medOrders.getOrdersByGroup(MED_GROUP_STAT)
    mos.should.have.length(1)
    mos[0].medName.should.equal('clopidogrel')
  })
  it ('getContinuousMedOrders', () => {
    const mos = medOrders.getOrdersByGroup(MED_GROUP_CONT)
    mos.should.have.length(1)
    mos[0].medName.should.equal('heparin')
  })
})
