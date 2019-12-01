import store from '../__mock__/mock-store'
const should = require('should')
jest.mock('../../store')
// import InstoreHelper from '../__mock__/mock-instoreHelper'
// jest.mock('../../store/modules/instoreHelper')

import {getObjFromFile} from './store-test-helper'

const seed = getObjFromFile('seed-data1.json')
describe('Test seed store module', () => {
  it('store _setSeedEhrData', () => {
    store.commit('seedListStore/_setSeedContent', seed)
    let data = store.getters['seedListStore/seedEhrData']
    should.exist(data)
    data.should.have.property('demographics')
  })

})


