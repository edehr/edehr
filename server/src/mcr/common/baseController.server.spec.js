import EhrApp from '../../server/app'
import BaseController from './base'
import SeedData from '../seed/seed-data'
import Helper from '../common/test-helper'
import { logError } from '../../helpers/log-error'
import { applicationConfiguration } from '../../config/config'

var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectId
const request = require('supertest')
const configuration = applicationConfiguration('test')
const ehrApp = new EhrApp(configuration)
const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)

const helper = new Helper()

const modelName = 'Seed'
const zeroPad = (num, places=4) => String(num).padStart(places, '0')

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe('BaseController controller testing', function () {
  let aSeedData
  let consumerId = new ObjectID('56955ca46063c5600627f393')
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('BaseController be valid with model and key', function (done) {
    let m = new BaseController(SeedData, 'user_id')
    m.should.have.property('baseFindOneQuery')
    m.should.have.property('read')
    m.should.have.property('delete')
    m.should.have.property('list')
    m.should.have.property('create')
    m.should.have.property('route')
    done()
  })

  it(`BaseController create a ${modelName}`, function (done) {
    let m = new BaseController(SeedData, 'name')
    let data = {
      toolConsumer: new ObjectID('56955ca46063c5600627f393'),
      name: '1234',
      description: 'a test seed',
      ehrData: { foo: 'bar' }
    }
    m.create(data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        aSeedData = doc
        done()
      })
      .catch(err => {
        logError(`BaseController create one ${modelName} error ${err}`)
        done()
      })
  })

  it('BaseController use findOne', function (done) {
    let m = new BaseController(SeedData, 'name')
    m.findOne({ name: '1234' })
      .then(doc => {
        // debug('results', doc)
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        done()
      })
      .catch(e => {
        logError('find one error', e)
      })
  })

  it('BaseController create, read, findOneById, then delete model', async () => {
    let m = new BaseController(SeedData, '_id')
    let key = 'testing2'
    let data = {
      name: key,
      toolConsumer: consumerId,
      description: 'a test seed',
      ehrData: { foo: 'bar' }
    }
    let id
    let doc = await m.create(data)
    should.exist(doc)
    should.exist(doc.ehrData)
    doc.ehrData.should.have.property('foo')
    id = doc._id
    let doc2 = await m.read(id)
    should.exist(doc2)
    should.exist(doc2.seeddata)
    let model = doc2.seeddata
    model.should.have.property('ehrData')
    let doc3 = await m.findOneById(id)
    should.exist(doc3)
    let dList = await m.list()
    should.exist(dList)
    // console.log(dList)

    let dList2 = await m.listForTool(data.toolConsumer)
    should.exist(dList2)
    await m.update(id, data)
    await m.delete(id)
  })

  it('BaseController use baseFindOneQuery', async () => {
    let m = new BaseController(SeedData, '_id')
    let doc = await m.baseFindOneQuery(aSeedData._id)
    should.exist(doc)
    doc.should.have.property('ehrData')
    doc.ehrData.should.have.property('foo')
  })

  it('BaseController use clearConsumer', async () => {
    let m = new BaseController(SeedData, '_id')
    await m.clearConsumer(consumerId)
  })

  it('BaseController test baseFilter with invalid id', async () => {
    let m = new BaseController(SeedData, '_id')
    should.throws(() => {
      return m.baseFilter('foobar')
    })
  })

})

function pageOptions (consumerId, offset, limit, sortKey = 'name', sortDir = 'asc') {
  return {
    toolConsumerId: consumerId,
    offset: offset,
    limit: limit,
    sortKey: sortKey,
    sortDir: sortDir
  }
}

let CNT = 30
let consumerId = new ObjectID('56955ca46063c5600627f393')

describe('BaseController controller testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => {
      done()
    })
  })

  it('BaseController create many for pagination testing', async () => {
    let m = new BaseController(SeedData)
    for (let i = 0; i < CNT; i++) {
      let data = {
        name: 'aModel' + zeroPad(i),
        toolConsumer: consumerId,
        description: 'a test seed',
        ehrData: { foo: 'bar' }
      }
      await m.create(data)
    }
  })

  it('BaseController pagination', async () => {
    let m = new BaseController(SeedData)
    const limit = 2
    const offset = 2
    const options = pageOptions(consumerId, offset, limit)
    const results = await m.paginate(options)
    should.exist(results)
    should.exist(results.list)
    results.list.should.be.array
    results.list.length.should.equal(limit)
    // console.log('Paginate', results)
    const elem = results.list[0]
    elem.should.have.property('name')
    const expected = 'aModel' + zeroPad(offset)
    elem.name.should.equal(expected)
  })

})
describe('BaseController pagination error testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => {
      done()
    })
  })

  it('BaseController offset too big', async () => {
    let m = new BaseController(SeedData)
    const limit = 2
    const offset = CNT + 1 // too big
    const options = pageOptions(consumerId, offset, limit)
    await m.paginate(options)
      .catch(err => {
        should.exist(err)
        err.should.have.property('name')
        err.name.should.equal('ParameterError')
        err.should.have.property('message')
        err.message.should.be.String
        err.message.includes('offset').should.equal(true)
      })
  })

  it('BaseController bad consumer id', async () => {
    let m = new BaseController(SeedData)
    const limit = 2
    const offset = 1
    const options = pageOptions('badId', offset, limit)
    await m.paginate(options)
      .catch(err => {
        should.exist(err)
        err.should.have.property('name')
        err.name.should.equal('ParameterError')
        err.should.have.property('message')
        err.message.should.be.String
        err.message.includes('consumer').should.equal(true)
      })
  })

  it('BaseController bad sort direction', async () => {
    let m = new BaseController(SeedData)
    const limit = 2
    const offset = 1
    const options = pageOptions(consumerId, offset, limit, 'name', undefined)
    await m.paginate(options)
      .catch(err => {
        should.exist(err)
        err.should.have.property('name')
        err.name.should.equal('ParameterError')
      })
  })
})
describe('BaseController api pagination testing', function () {
  let app
  before(function (done) {
    helper.beforeTestAppAndDbDrop(ehrApp, configuration, mongoose)
      .then(() => {
        app = ehrApp.application
        done()
      })
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => {
      done()
    })
  })

  it('BaseController create many for pagination testing', async () => {
    let m = new BaseController(SeedData)
    for (let i = 0; i < CNT; i++) {
      let data = {
        name: 'aModel' + zeroPad(i),
        toolConsumer: consumerId,
        description: 'a test seed',
        ehrData: { foo: 'bar' }
      }
      await m.create(data)
    }
  })

  it('api pagination', function (done) {
    const BASE = '/api/seed-data'
    let qs = `toolConsumerId=${consumerId}&offset=10&limit=2&sortKey=name&sortDir=desc`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        // should.exist(err)
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        // console.log('results ', res.body)
        res.body.should.be.object
        let obj = res.body
        obj.should.have.property('list')
        let results = obj.list
        results.should.be.array
        results.should.have.length(2)
        done()
      })
  })

  it('api pagination with bad parameter', function (done) {
    const BASE = '/api/seed-data'
    const badConsumer = 'foobar'
    let qs = `toolConsumerId=${badConsumer}&offset=10&limit=2&sortKey=name&sortDir=desc`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400)
      .end(function (err, res) {
        should.exist(res)
        should.exist(res.text)
        res.text.should.equal('ParameterError Invalid consumer id: foobar')
        done()
      })
  })
  it('api pagination with bad offset', function (done) {
    const BASE = '/api/seed-data'
    let qs = `toolConsumerId=${consumerId}&offset=foo&limit=2&sortKey=name&sortDir=desc`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400)
      .end(function (err, res) {
        should.exist(res)
        should.exist(res.text);
        (res.text.includes('Invalid offset for pagination')).should.ok()
        done()
      })
  })
  it('api pagination with bad limit', function (done) {
    const BASE = '/api/seed-data'
    let qs = `toolConsumerId=${consumerId}&offset=10&limit=foo&sortKey=name&sortDir=desc`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400)
      .end(function (err, res) {
        should.exist(res)
        should.exist(res.text);
        (res.text.includes('Invalid limit for pagination')).should.ok()
        done()
      })
  })

  it('api pagination with bad sort direction', function (done) {
    const BASE = '/api/seed-data'
    let qs = `toolConsumerId=${consumerId}&offset=10&limit=2&sortKey=name&sortDir=foo`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400)
      .end(function (err, res) {
        should.exist(res)
        should.exist(res.text);
        // console.log('-----------------res.text', res.text);
        (res.text.includes('Invalid sort direction')).should.ok()
        done()
      })
  })

  it('api pagination with offest to large', function (done) {
    const BASE = '/api/seed-data'
    let qs = `toolConsumerId=${consumerId}&offset=1000&limit=2&sortKey=name&sortDir=asc`
    let url = BASE + '/paginate?' + qs
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(400)
      .end(function (err, res) {
        should.exist(res)
        should.exist(res.text);
        (res.text.includes('is larger than result set size')).should.ok()
        done()
      })
  })

})
