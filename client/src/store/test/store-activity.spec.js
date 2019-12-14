import store from '../__mock__/mock-store'
const should = require('should')
jest.mock('../../store')

import {getObjFromFile} from './store-test-helper'

const sample = getObjFromFile('activity-data.json')
describe('Test consumer store module', () => {
  it('store sample check properties', () => {
    store.commit('activityStore/set', sample)
    let props = [
      'id',
      'courseTitle',
      'activityTitle',
      'activityDescription'
    ]
    props.forEach( p => {
      let key = 'activityStore/' + p
      let value = store.getters[key]
      should.exist(value)
    })
  })

})


