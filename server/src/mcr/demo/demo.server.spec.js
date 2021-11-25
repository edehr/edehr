import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const ehrApp = new EhrApp()
const helper = new Helper()
const typeName = 'demo'
const BASE = '/api/demo'
const config = new Config('test')
const configuration = config.config
const _factorTypeName = (description = '') => `${typeName} - ${description}`

describe(_factorTypeName('making server calls'), () => {
  let app, demoToken, demoData, assignments
  before(function(done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        app = ehrApp.application
      })
      .then(() => {
        return helper.before(done, mongoose)
      })
  })

  it(_factorTypeName('Properly creates tool consumer'), (done) => {
    const id = uuid()
    const url = `${BASE}/`
    request(app)
      .post(url)
      .send({ id })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        should.exist(res)
        should.exist(res.body)
        should.exist(res.body.demoToken)
        demoToken = res.body.demoToken
        done()
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })

  it(_factorTypeName('Properly fetches the demoData '), (done) => {
    const url = `${BASE}/fetch`
    request(app)
      .get(url)
      .set('authorization', `Bearer ${demoToken}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(res => {
        should.exist(res.body)
        should.exist(res.body.demoData)
        res.body.demoData.personaList.should.have.length(4)
        demoData = res.body.demoData
      })
      .catch(err => {
        should.not.exist(err)
      })
      .finally(() => done())
  })

  it(_factorTypeName('Properly fetches assignments'), done => {
    const url = `/api/assignments/consumer/${demoData.toolConsumerId}`
    request(app)
      .get(url)
      .set('authorization', `Bearer ${demoToken}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(res => {
        should.exist(res)
        should.exist(res.body)
        assignments = res.body.assignments
        console.log('pfa', assignments)
        should.exist(assignments[0])
      })
      .catch(err => {
        should.not.exist(err)
      })
      .finally(() => done())

  })

  it(_factorTypeName('Set demo data'), (done) => {
    // let assignment = assignments[0]
    const assignment = {
      _id: 'assignmentId',
      toolConsumer: '5eb2b706df6c04d3212355d9',
      externalId: 'testAssignment',
      name: 'Test Assignment',
      description: 'This a default test assignment',
      ehrRoutePath: '',
      seedDataId: '5eb2b706df6c04d3212355db',
      persona: 'Jason',
      profession: 'Doctor',
      time: '08:00',
      day: '0'
    }
    const data = Object.assign({}, {
      toolConsumerKey: demoData.toolConsumerKey,
      toolConsumerId: demoData.toolConsumerId
    }, demoData.personaList[0])
    const [given, family] = data.name.split(' ')
    let theKey = data.toolConsumerKey
    let userId = theKey.slice(-5) + family + '-' + given
    const ltiData = {
      custom_assignment: assignment.externalId,
      context_id: 'Demo-Course',
      context_label: 'L-' + assignment.name,
      context_title: 'T-' + assignment.name,
      context_type: 'Demonstration',
      launch_presentation_return_url: 'http://returnurl.com',
      lis_person_contact_email_primary: data.email,
      lis_person_name_family: family,
      lis_person_name_given: given,
      lis_person_name_full: data.name,
      lti_version: 'LTI-1p0',
      lti_message_type: 'basic-lti-launch-request',
      oauth_consumer_key: theKey,
      oauth_consumer_secret: theKey,
      oauth_nonce: Date.now() + Math.random() * 100,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_version: 'x.y',
      roles: data.role,
      resource_link_title: assignment.name,
      resource_link_id: assignment.externalId,
      tool_consumer_instance_guid: theKey,
      tool_consumer_instance_name: 'Demo',
      tool_consumer_info_version: 'x',
      tool_consumer_info_product_family_code: 'EdEHR Demo',
      tool_consumer_instance_description: 'EdEHR provided LTI tool for launching the EdEHR in a demonstration mode',
      user_id: userId
    }

    const url = `${BASE}/set`
    request(app)
      .post(url)
      .send({ ltiData })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('authorization', `Bearer ${demoToken}`)
      .expect(200)
      .then(res => {
        should.exist(res)
        should.exist(res.body)
        should.exist(res.body.refreshToken)
        should.exist(res.body.url)
        done()
      })
      .catch(err => {
        should.not.exist(err)
      })

  })
})

