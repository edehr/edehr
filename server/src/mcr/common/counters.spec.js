import mongoose from 'mongoose'
import Helper from '../common/test-helper'
import Counters from './counters'
import { getNextSequence } from './counter-controller'

const helper = new Helper()

describe('Counters testing', function () {
  before(async function () {
    await helper.beforeTestDbDropNoDone(mongoose)
    await Counters.syncIndexes()
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('do counter', async function () {
    let tc = 'abcdefgh'
    let tt = await getNextSequence(tc,'LOBJ', 4)
    tt = await getNextSequence(tc,'LOBJ', 4)
    tt.should.equal('0002')
    tt = await getNextSequence(tc, 'LOBJ', 4)
    tt.should.equal('0003')
  })

})
