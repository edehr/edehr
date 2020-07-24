import EhrDefs from '../ehr-defs-grid'
import store from '../../store'
import MockFile from './MockFile'
import StoreHelper from '../store-helper'

const axiosMockHelper = require('./axios-mock-helper')
const mockData = require('./mockData.json')
  
export const isTruthy = val => (val === true || val === 'true')


export const resetAxiosResponse = () => {
  const methods = ['get', 'post', 'put', 'delete']
  methods.map(m => axiosMockHelper.prepareAxiosResponse(m, {}))
}

export const getPageKeys = () => {
  return EhrDefs.getAllPageKeys()
}

export const dispatchGetter = (str) => {
  return store.getters[str]
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

export const setAssignmentListingMocks = (payload = mockData.assignmentListing) => {
  const key = 'setAssignmentsListing'
  store.commit(`assignmentListStore/${key}`, payload)
}

export const setConsumerListingMocks = (payload = mockData.consumerListing) => {
  const key = 'setConsumersListing'
  store.commit(`consumerListStore/${key}`, payload)
}

export const setSeedDataMocks = (payload = mockData.seedData) => {
  store.commit('seedListStore/_setSeedContent', payload)
  store.commit('seedListStore/_setSeedId', payload._id)
  store.commit('seedListStore/_setSeedDataList', mockData.seedDataList)
}

export const setSeedDataListMocks = (payload = mockData.seedDataList) => {
  const key = '_setSeedDataList'
  store.commit(`seedListStore/${key}`, payload)
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

export const createFile = (content) => {
  return new MockFile(content)
}

export const setAPIUrl = (apiUrl = mockData.apiUrl) => {
  StoreHelper.apiUrlSet(apiUrl)
}