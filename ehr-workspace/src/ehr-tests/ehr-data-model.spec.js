import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { updateAllVisitTime } from '../ehr-definitions/ehr-data-model-utils'
import initialData from '../resources/sampleMedsForTimeline.json'

const should = require('should')
const ehrData = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '06:00',
    diagnosis: 'COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'here',
        transferInDay: 0,
        transferInTime: '00:30',
        transferOutDay: 1,
        transferOutTime: '04:00',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '21:31',
        transferOutDay: 2,
        transferOutTime: '23:32',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  },
  neurological: {
    table: [
      {
        name: 'Jason',
        profession: 'RN',
        day: '1',
        time: '21:30',
        alert: true,
        extinctionAndInattention: '0 = No abnormality',
        strokeAssessmentCalculation: 0,
        createdDate: '2019-05-30T21:50:42-07:00'
      },
      {
        name: 'Jason',
        profession: 'RN',
        day: '0',
        time: '19:30',
        alert: true,
        extinctionAndInattention: '0 = No abnormality',
        strokeAssessmentCalculation: 0,
        createdDate: '2019-05-30T21:50:42-07:00'
      }
    ]
  }
}

describe( 'ehr-def-utils work', () => {
  it('EhrDataModel to get sim time', () => {
    const model = new EhrDataModel(ehrData)
    should.exist(model)
    const data = model.ehrData
    should.exist(data)
    // console.log('what', JSON.stringify(data, null, 2))
    // this tests visitTimeInEhrData indirectly
    data.should.have.property('meta')
    data.meta.should.have.property('simTime')
    data.meta.simTime.should.have.property('visitTime')
    data.meta.simTime.visitTime.should.equal('2130')
    data.meta.simTime.should.have.property('visitDay')
    data.meta.simTime.visitDay.should.equal(1)
  })

  it('updateAllVisitTime', () => {
    let eData = ehrData
    const model = new EhrDataModel(eData)
    eData = updateAllVisitTime(model)
    let tData = model.getPageTableData('visit', 'table')
    tData[0].transferInTime.should.equal('0030')
    tData = model.getPageTableData('neurological', 'table')
    // NOTE how the record header time key now contains the tableKey ...
    // console.log('tData',tData)
    tData[1]['table_time'].should.equal('1930')
    let fData = model.getPageFormData('visit', 'admissionTime')
    fData.should.equal('0600')
  })
})
describe( 'visit time on bigger set', () => {

  it('bigger data set', () => {
    const initialData = require('../resources/sampleMedsForTimeline.json')
    const ehrModel = new EhrDataModel(initialData)
    const data = ehrModel.ehrData
    // console.log('data', JSON.stringify(data, null, 2))
    data.should.have.property('meta')
    data.meta.should.have.property('simTime')
    data.meta.simTime.should.have.property('visitDay')
    data.meta.simTime.visitDay.should.equal(1)
    data.meta.simTime.should.have.property('visitTime')
    data.meta.simTime.visitTime.should.equal('2130')


  })
})
