const should = require('should')
const mongoose = require('mongoose')
import User from './user'
import Helper from '../common/test-helper'
import { logError} from '../../helpers/log-error'
import { ObjectId } from 'mongodb'
const helper = new Helper()
console.log('USS: mongoose.connection.readyState', mongoose.connection.readyState)

/* global describe it */
describe('user mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('user should be invalid if id is empty', function (done) {
    let m = new User()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })

  let sampleUserSpec = Helper.sampleUserSpec()
  let newUserId

  it('can save one ', async function () {
    let newUser = await new User(sampleUserSpec)
    newUser = await newUser.save()
    newUserId = newUser._id
  })

  it('can find one ', function (done) {
    User.findOne({ user_id: sampleUserSpec.user_id }, function (err, doc) {
      // debug('results', err, doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      logError('find one error', e)
    })
  })

  it.skip('User can save sign on', async function () {
    let uList = await User.find( { _id: new ObjectId(newUserId)})
    let user = uList[0]
    user.favouriteSignOns.push({ personaName: 'Heather', personaProfession: 'RN' })
    user = await user.save()
    let signOn = user.favouriteSignOns[0]
    signOn.personaName.should.equal('Heather')
  })

  it.skip('User favouriteSignOns acts like a set using schema presave', async function () {
    let uList = await User.find( { _id: new ObjectId(newUserId)})
    let user = uList[0]
    user.favouriteSignOns.push({ personaName: 'Janet', personaProfession: 'RN' })
    user.favouriteSignOns.push({ personaName: 'Janet', personaProfession: 'RN' })
    user.favouriteSignOns.push({ personaName: 'Janet', personaProfession: 'RN' })
    user = await user.save()
    user.favouriteSignOns.length.should.equal(2)
    let signOn = user.favouriteSignOns[0]
    signOn.personaName.should.equal('Heather')
    signOn = user.favouriteSignOns[1]
    signOn.personaName.should.equal('Janet')
  })
})
