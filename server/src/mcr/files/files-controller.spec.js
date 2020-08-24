import fs from 'fs'
import path from 'path'
import { formElementNameForFileUpload } from './files-controller'
import { Text } from '../../config/text'
import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'

const debug = require('debug')('server')
const should = require('should')
const request = require('supertest')

const BASE = '/api/files'
const tokenData = Helper.sampleTokenData()
tokenData.isInstructor = true
const token = Helper.generateToken(tokenData)
const config = new Config('test')
const configuration = config.config

const url = BASE +'/upload'
const dataDirectory = 'test-data'
const ehrApp = new EhrApp()

function shouldUpload (application, testFileName, done) {
  const testFilePath = path.join(__dirname, dataDirectory, testFileName)
  const expectedPath = path.join(configuration.ehrFilesDirectory, tokenData.toolConsumerId, testFileName)
  request(application)
    .post(url)
    .attach(formElementNameForFileUpload, testFilePath)
    .set('Authorization', `Bearer ${token}`)
    .end((err, res) => {
      should.exist(res)
      should.equal(res.status, 200)
      should.exist(res.body)
      res.body.should.have.property('path')
      res.body.path.should.equal(expectedPath)
      done()
    })
}

describe.skip('Make server calls on files controller', function () {

  before(function (done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        done()
      })
  })

  it('File upload setup', function (done) {
    const testFileName = 'test.json'
    const testFilePath = path.join(__dirname, dataDirectory, testFileName)
    should.equal(fs.existsSync(testFilePath), true, 'test file should exist')
    should.exist(configuration.ehrFilesDirectory, 'Expect configuration to have ehrFilesDirectory')
    done()
  })

  it('File upload public get maxsize ', function (done) {
    let getUrl = BASE + '/public/maxFileSize'
    request(ehrApp.application)
      .get(getUrl)
      .end( (err, res) => {
        should.exist(res)
        console.log(res.status, res.text)
        // {"message":"Maximum file size is 3 MB","value":3145728}
        should.equal(res.status, 200)
        should.exist(res.text)
        const result = JSON.parse(res.text)
        result.should.have.property('value')
        result.value.should.equal(configuration.ehrMaxFileSize, 'Too big message should say what is expected')
        done()
      })
  })

  it('File upload first should work test', function (done) {
    const testFileName = 'test.json'
    shouldUpload(ehrApp.application, testFileName, done)
  })

  it('File upload without auth', function (done) {
    request(ehrApp.application)
      .post(url)
      .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
        { contentType: 'application/text', filename: 'justText.text' })
    // .set('Authorization', `Bearer ${token}`)
      .end( (err, res) => {
        should.exist(res)
        should.equal(res.status, 401)
        should.exist(res.text)
        res.text.should.containEql('required')
        done()
      })
  })

  it('File upload test send buffer', function (done) {
    request(ehrApp.application)
      .post(url)
      .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
        {contentType: 'application/text', filename: 'justText.text'})
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        should.exist(res)
        should.equal(res.status, 200)
        should.exist(res.body)
        res.body.should.have.property('path')
        res.body.path.should.containEql('just')
        done()
      })
  })

  it('File upload test send no file', function (done) {
    request(ehrApp.application)
      .post(url)
      .attach(formElementNameForFileUpload, null,
        {contentType: 'application/text', filename: 'justText.text'})
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        should.exist(res)
        should.equal(res.status, 400)
        should.exist(res.text)
        res.text.should.containEql(Text.PROVIDE_FILE)
        done()
      })
  })
  
  it('File upload test file with all unsupported characters', function (done) {
    request(ehrApp.application)
      .post(url)
      .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
        {contentType: 'application/text', filename: 'colon:infilename.text'})
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        should.exist(res)
        should.equal(res.status, 200)
        should.exist(res.body)
        res.body.should.have.property('path')
        res.body.path.should.containEql('!')
        done()
      })
  })
  
  it('File upload testFileWithoutExtPath', function (done) {
    request(ehrApp.application)
      .post(url)
      .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
        { contentType: 'application/text', filename: 'justText' })
      .set('Authorization', `Bearer ${token}`)
      .end( (err, res) => {
        should.exist(res)
        should.equal(res.status, 400)
        should.exist(res.text)
        res.text.should.containEql('filetypes')
        done()
      })
  })

  it('File upload incorrect field name', function (done) {
    const testFileName = 'test.json'
    const testFilePath = path.join(__dirname, dataDirectory, testFileName)
    request(ehrApp.application)
      .post(url)
      .attach('wrong', testFilePath)
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, res) {
        should.equal(res.status, 400)
        should.exist(res.text)
        res.text.should.containEql(formElementNameForFileUpload)
        done()
      })
  })

  it('File upload PNG', function (done) {
    const testFileName = 'test.png'
    shouldUpload(ehrApp.application, testFileName, done)
  })

  it('File upload JPEG', function (done) {
    const testFileName = 'test.jpg'
    shouldUpload(ehrApp.application, testFileName, done)
  })

})

describe.skip('File upload with configuration changes', () => {

  it('File upload file too big', function (done) {
    const configDelta = new Config('test')
    const configurationDelta = configDelta.config
    const testFileName = 'test.json'
    const testFilePath = path.join(__dirname, dataDirectory, testFileName)
    const testFileSizeInBytes = fs.statSync(testFilePath)['size']
    configurationDelta.ehrMaxFileSize = testFileSizeInBytes - 1 // something smaller than the file
    debug('Set configuration to use max file size of ', configurationDelta.ehrMaxFileSize)
    const ehrAppDelta = new EhrApp()
    ehrAppDelta
      .setup(configurationDelta)
      .then(() => {
        request(ehrAppDelta.application)
          .post(url)
          .attach(formElementNameForFileUpload, testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end(function (err, res) {
            should.equal(res.status, 400)
            should.exist(res.text)
            res.text.should.containEql('Maximum')
            done()
          })
      })
  })

  it('File upload config is missing ehr directory', function () {
    const configDelta = new Config('test')
    const configurationDelta = configDelta.config
    delete configurationDelta.ehrFilesDirectory

    const ehrAppDelta = new EhrApp()
    ehrAppDelta
      .setup(configurationDelta)
      .then(() => {
        throw new Error('Should not get here')
      })
      .catch((err) => {
        console.log('Good the constructor failed without the ehr directory')
        done()
      })
  })

})

describe.skip('File upload with invalid auth', () => {
  it('No tool consumer', (done) => {

    const tokenData = Helper.sampleTokenData()
    tokenData.isInstructor = true
    tokenData.toolConsumerId = undefined
    const token = Helper.generateToken(tokenData)

    const configDelta = new Config('test')
    const configurationDelta = configDelta.config
    const ehrAppDelta = new EhrApp()
    ehrAppDelta
      .setup(configurationDelta)
      .then(() => {
        request(ehrAppDelta.application)
          .post(url)
          .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
            { contentType: 'application/text', filename: 'justText.text' })
          .set('Authorization', `Bearer ${token}`)
          .end(function (err, res) {
            should.equal(res.status, 400)
            should.exist(res.text)
            res.text.should.containEql('consumer')
            done()
          })
      })
  })
})
