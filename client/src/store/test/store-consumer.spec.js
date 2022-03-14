import store from '../__mock__/mock-store'
const should = require('should')
jest.mock('../../store')

import {getObjFromFile} from './store-test-helper'

const sample = getObjFromFile('consumer-data.json')
describe('Test consumer store module', () => {
  it('store sample', () => {
    store.commit('consumerStore/setDataStore', sample)
    let lmsName = store.getters['consumerStore/lmsName']
    should.exist(lmsName)
  })

})


