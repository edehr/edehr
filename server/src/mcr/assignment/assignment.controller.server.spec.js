var should = require('should')
const mongoose = require('mongoose')
import AssignmentController from './assignment-controller'
import Helper from '../common/test-helper'
import { applicationConfiguration } from '../../config/config'
import { logError} from '../../helpers/log-error'
const configuration = applicationConfiguration('test')
const helper = new Helper()

const typeName = 'AssignmentController'
const modelName = 'Assignment'

function makeAssignmentController () {
  return new AssignmentController(configuration)
}

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  let key = '1'

  it(`${typeName} create model`, function (done) {
    let m = makeAssignmentController()
    let data = Helper.sampleAssignmentSpec(undefined, key)
    m.create(data)
      .then(doc => {
        should.exist(doc)
        // doc.seedData.should.have.property('foo');
        done()
      })
      .catch(err => {
        logError(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

  it('Assignment (LOBJ) check idForLTI', async () => {
    let m = makeAssignmentController()
    let data = Helper.sampleAssignmentSpec(undefined, key)
    let doc = await m.create(data)
    should.exist(doc)
    should.exist(doc.idForLTI, 'l objs now have property idForLTI')
    doc.idForLTI.should.equal('LP00002')
    // lobj2 because of the create in the previous test

    doc = await m.create(data)
    doc.idForLTI.should.equal('LP00003')
  })

  it('Assignment (LOBJ) sim stage', async () => {
    let m = makeAssignmentController()
    let response, simStagesData
    let data = Helper.sampleAssignmentSpec(undefined, key)
    let doc = await m.create(data)
    should.exist(doc)
    should.exist(doc._id)
    const lobjId = doc._id
    should.exist(doc.simStages, 'l objs now have property simStages')
    doc.simStages.length.should.equal(0)
    simStagesData = [ { simKey: '0003-1111', faculty: 'foo'}]
    response = await m.updateSimStages(lobjId, simStagesData)
    doc = response.assignment
    doc.simStages.length.should.equal(1)
    simStagesData.push({ simKey: '0000-1111', faculty: 'foo'})
    response = await m.updateSimStages(lobjId, simStagesData)
    doc = response.assignment
    doc.simStages.length.should.equal(2)
    // test sort on save
    should(doc.simStages[0].simKey === '0000-1111')
  })
})
