import { ObjectId as ObjectID } from 'mongodb'
const should = require('should')
const mongoose = require('mongoose')
import { updateAllEhrData } from './dbSeeder'
// load the seed data model into mongoose ...
require('../mcr/seed/seed-data')
import SeedData from '../mcr/seed/seed-data'
import Helper from '../mcr/common/test-helper'
import ActivityData from '../mcr/activity-data/activity-data'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
const helper = new Helper()

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
        oriented: true,
        eyeOpening: '4 = Spontaneous',
        verbalResponse: '5 = Oriented',
        bestMotorResponse: '6 = Obeys commands',
        glasgowCalculation: 15,
        loss: 'No',
        leftPupilSize: '2',
        leftPupilResponseToLight: 'Brisk',
        rightPupilSize: '2',
        rightPupilResponseToLight: 'Brisk',
        bothPupils: 'Equal',
        levelOfConciousness: '0 = Alert; keenly responsive',
        levelOfConciousnessQuestions: '0 = Answers two questions correctly',
        levelOfConciousnessCommands: '0 = Performs both tasks correctly',
        motorLeftArm: '0 = No drift',
        motorRightArm: '0 = No drift',
        motorLeftLeg: '0 = No drift',
        motorRightLeg: '0 = No drift',
        limbAtaxia: '0 = Absent',
        bestGaze: '0 = Normal',
        visual: '0 = No visual loss',
        facialPalsy: '0 = Normal symmetric movements',
        sensory: '0 = Normal; no sensory loss',
        bestLanguage: '0 = No aphasia; normal',
        dysarthria: '0 = Normal',
        extinctionAndInattention: '0 = No abnormality',
        strokeAssessmentCalculation: 0,
        createdDate: '2019-05-30T21:50:42-07:00'
      }
    ]
  }
}
let sampleData = {
  toolConsumer: new ObjectID('56955ca46063c5600627f393'),
  name: '1234',
  description: 'a test seed',
  version: '1.0',
  ehrData: ehrData
}
const theVisitId = Helper.sampleObjectId()
const theConsumerId = Helper.sampleObjectId()

const sampleAD = {
  assignmentData: ehrData,
  toolConsumer: theConsumerId,
  visit: theVisitId
}

function verifyVersion (ehrData) {
  const version = EhrDataModel.MetaEhrVersion(ehrData)
  should.exist(version)
  version.major.should.be.greaterThanOrEqual(2)
  version.minor.should.be.greaterThanOrEqual(1)
  version.patch.should.be.greaterThanOrEqual(0)
}

/* global describe it */
describe('DB seeding updating tests....', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('updateAllEhrData', async function () {

    const newActivityData = new ActivityData(sampleAD)
    const newAD = await newActivityData.save()

    const newSeed = new SeedData(sampleData)
    // eslint-disable-next-line no-unused-vars
    const newS =  await newSeed.save()

    await updateAllEhrData()

    const seedDoc = await SeedData.findOne({name: '1234'})
    // debug('============== found seed', seedDoc)
    should.exist(seedDoc)
    seedDoc.should.have.property('ehrData')
    verifyVersion(seedDoc.ehrData)

    const adDoc = await ActivityData.findOne({_id: new ObjectID(newAD._id)})
    // debug('============== found actD', adDoc)
    should.exist(adDoc)
    adDoc.should.have.property('assignmentData')
    verifyVersion(adDoc.assignmentData)

  })

})
