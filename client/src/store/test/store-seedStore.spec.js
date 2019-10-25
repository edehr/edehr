import store from '../__mock__'
const should = require('should')
jest.mock('../../store')

import {getObjFromFile} from './store-test-helper'

const seed = getObjFromFile('seed-data1.json')
describe('Test seed store module', () => {
  it('store _setSeedEhrData', () => {

    store.commit('seedStore/_setSeedEhrData', seed)
    let data = store.getters['seedStore/seedEhrData']
    should.exist(data)
  })

  it('store _setSeedContent', () => {
    store.commit('seedStore/_setSeedContent', seed)
    let data = store.state.seedStore.sSeedContent
    should.exist(data)
  })

})


