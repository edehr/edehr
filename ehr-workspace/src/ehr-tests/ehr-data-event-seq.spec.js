import EhrDataModel from '../ehr-definitions/EhrDataModel'
import { convertToEventSequence } from '../ehr-definitions/ehr-data-model-utils'
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

  it('convertToEventSequence', () => {
    // const initialData = require('../resources/ralphPiper_2.0_25 Oct 2023.json')
    const seed = require('../resources/tseq-data.json')
    const seedData = seed.ehrData
    // const ehrModel = new EhrDataModel(seedData)
    // const eData = ehrModel.ehrData
    // const model = new EhrDataModel(eData)
    // const ehrData = model.ehrData
    // console.log('seedData', seedData)
    const cData = convertToEventSequence(seedData)
    console.log('convertToEventSequence WIP:', cData)
  })
})

