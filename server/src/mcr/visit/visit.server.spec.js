import { ObjectId } from 'mongodb'

var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Visit from './visit'
import SeedData from '../seed/seed-data'
import Role from '../roles/roles'

/* global describe it */
describe('Visit mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('Visit create ', function (done) {
    let m = new Visit()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })

  let theConsumer
  let theAssignment
  let theActivity1
  let theCourse
  let theUser
  let theStudentUser

  it('Create a tool consumer for testing consumers with assignment, user and activity', async () => {
    theConsumer = await Helper.createSampleConsumer()
    let seedSpec = Helper.sampleSeedDataSpec()
    seedSpec.toolConsumer = theConsumer._id
    let model = new SeedData(seedSpec)
    let seed = await model.save()
    theAssignment = await Helper.createAssignment(theConsumer._id, seed._id)
    theCourse = await Helper.createSampleCourse(theConsumer._id)
    theUser = await Helper.createUser(theConsumer)
    theActivity1 = await Helper.createActivity(theConsumer, theCourse, theAssignment, 'resource_link_id1')
    let studentUserSpec = {
      toolConsumer: theConsumer._id,
      consumerKey: theConsumer.oauth_consumer_key,
      user_id: '0987654321',
      fullName: 'Student Tester'
    }
    theStudentUser = await Helper.createUserFromSpec(studentUserSpec)
    should.exist(theStudentUser)
    // console.log('theStudentUser', theStudentUser)
  })

  let newVisitId

  it('Visit can save one', async function () {
    let roleS = new Role('student')
    let visitData = Helper.sampleVisit( theConsumer, theUser, theActivity1, theAssignment, roleS)
    let newVisit = new Visit(visitData)
    newVisit = await newVisit.save()
    newVisitId = newVisit._id
  })

  it('Visit can save sign on data', async function () {
    let vlist = await Visit.find( { _id: new ObjectId(newVisitId)})
    let v = vlist[0]
    v.simulationSignOn = { personaName: 'Heather', personaProfession: 'RN' }
    let uv = await v.save()
    let signOn = uv.simulationSignOn
    signOn.personaName.should.equal('Heather')
  })

  it('Visit set and get sim day time', async function () {
    let vlist = await Visit.find( { _id: new ObjectId(newVisitId)})
    let v = vlist[0]
    v.simulationDateTime = { cDate: '2', cTime: '1030' }
    let uv = await v.save()
    let simDT = uv.simulationDateTime
    simDT.cDate.should.equal('2')
  })

})
