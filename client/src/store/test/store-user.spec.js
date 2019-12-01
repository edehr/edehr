import store from '../__mock__/mock-store'
const should = require('should')
jest.mock('../../store')

import {getObjFromFile} from './store-test-helper'

const sample = getObjFromFile('user-data.json')
describe('Test consumer store module', () => {
  it('store sample', () => {
    store.commit('userStore/set', sample)
    let fullName = store.getters['userStore/fullName']
    should.exist(fullName)
  })

})


