import EhrDefs from '../ehr-defs-grid'
import store from '../../store'

const mockData = require('./mockData.json')

export const STASH_KEY = 'consumerId'
  
export const isTruthy = val => (val === true || val === 'true')

export const getPageKeys = () => {
  return EhrDefs.getAllPageKeys()
}

export const getSystemProperty = (key) => {
  return store.getters[`system/${key}`]
}

export const instructorCommit = (payload, key) => {
  store.commit(`instructor/${key}`, payload)
}
 
export const setActivityMocks = (payload = mockData.activity) => {
  const key = 'set'
  store.commit('activityStore/' + key, payload)
}

export const setActivityDataMocks = (payload = mockData.activityData) => {
  const key = 'set'
  store.commit('activityDataStore/' + key, payload)
}

export const setAssignmentMocks = (payload = mockData.assignment) => {
  const key = 'set'
  store.commit(`assignmentStore/${key}`, payload)
}

export const setUserMocks = (payload = mockData.user) => {
  const key = 'set'
  store.commit('userStore/' + key, payload)
}
  
export const setVisitMocks = (payload = mockData.visit) => {
  const key = 'setVisitData'
  store.commit('visit/' + key, payload)
}
  
export const setConsumerMocks = (payload = mockData.consumer) => {
  const key = 'set'
  store.commit('consumerStore/' + key, payload)
}