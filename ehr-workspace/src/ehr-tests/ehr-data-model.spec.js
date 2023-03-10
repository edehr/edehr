import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { updateAllVisitTime } from '../ehr-definitions/ehr-data-model-utils'

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
  it('visitTimeInEhrData', () => {
    const model = new EhrDataModel(ehrData)
    should.exist(model)
    const data = model.ehrData
    should.exist(data)
    // this tests visitTimeInEhrData indirectly
    data.should.have.property('meta')
    data.meta.should.have.property('simTime')
    data.meta.simTime.should.have.property('visitTime')
    data.meta.simTime.visitTime.should.equal('1930')
    data.meta.simTime.should.have.property('visitDay')
    data.meta.simTime.visitDay.should.equal(0)
  })

  it ('updateAllVisitTime', () => {
    let eData = ehrData
    const model = new EhrDataModel(eData)
    eData = updateAllVisitTime(model)
    let tData = model.getPageTableData('visit', 'table')
    tData[0].transferInTime.should.equal('0030')
    tData = model.getPageTableData('neurological', 'table')
    tData[0].time.should.equal('1930')
    let fData = model.getPageFormData('visit', 'admissionTime')
    fData.should.equal('0600')
  })
})
