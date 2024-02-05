import { MarTimelineModel } from '../ehr-definitions/med-definitions/mar-model'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { MarRecord, MarRecords } from '../ehr-definitions/med-definitions/marRecord-model'

const initialData = require('../resources/sampleMedsForTimeline.json')
const ehrModel = new EhrDataModel(initialData)
const ehrData = ehrModel.ehrData

describe('marRecords', () => {
  const timelineModel = new MarTimelineModel(ehrModel)
  const medOrders = timelineModel.medOrders

  const marRecords = timelineModel.marRecords
  it('marRecords', () => {
    marRecords.should.be.instanceof(MarRecords)
    marRecords.should.have.property('getMars')
    const mars = marRecords.getMars()
    should.exist(mars, 'MarRecords get mars should return something')
    mars.should.be.instanceOf(Array)
    mars.length.should.greaterThanOrEqual(5, 'expect sample data to more than 5 MARs')
    for(let i = 0; i< mars.length; i++) {
      const mar = mars[i]
      mar.should.be.instanceof(MarRecord)
    }
  })

  function makeData () {
    return {
      marTable_name: 'Dorothea',
      marTable_day: 1,
      marTable_time: '2130',
      med_order_embedded: 'medicationOrders.medicationOrdersTable.4',
      mar_status: 'Administered',
      mar_dose: '2.5mg',
      mar_comments: 'scheduled for day 1 2000 but administered at 2130',
      mo_schedDay: '0',
      mo_schedTime: '2300',
      mo_medOrder: 'Metformin  500mg oral BID / Q12H',
      marTable_id: 'medAdminRec.marTable.4'
    }
  }
  it('a MedAdmin record', () => {
    const eData = makeData()
    const aMar = new MarRecord(eData, medOrders)
    // console.log('aMar', JSON.stringify(aMar, null, 2))
    aMar.should.have.property('id')
    aMar.should.have.property('recordDate')
    aMar.should.have.property('recordTime')
    aMar.should.have.property('name')
    aMar.should.have.property('status')
    aMar.should.have.property('dose')
    aMar.should.have.property('medId')
    aMar.should.have.property('medicationSummary')
    aMar.should.have.property('schedDay')
    aMar.should.have.property('schedTime')

    aMar.id.should.equal(eData.marTable_id)
    aMar.recordDate.should.equal(eData.marTable_day)
    aMar.recordTime.should.equal(eData.marTable_time)
    aMar.name.should.equal(eData.marTable_name)
    aMar.dose.should.equal(eData.mar_dose)
    aMar.status.should.equal(eData.mar_status)
    aMar.schedDay.should.equal(eData.mo_schedDay)
    aMar.schedTime.should.equal(eData.mo_schedTime)
    aMar.medicationSummary.should.equal(eData.mo_medOrder)
  })

  it ('validate valid', () => {
    const eData = makeData()
    const aMar = new MarRecord(eData, medOrders)
    const errs = aMar.validate()
    should.not.exist(errs)
  })

  it ('validate missing dose', () => {
    const eData = makeData()
    delete eData.mar_dose
    const aMar = new MarRecord(eData, medOrders)
    const errs = aMar.validate()
    errs.should.have.length(1)
  })

  it ('validate missing status', () => {
    const eData = makeData()
    delete eData.mar_status
    const aMar = new MarRecord(eData, medOrders)
    const errs = aMar.validate()
    errs.should.have.length(1)
  })
})
