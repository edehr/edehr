import StoreHelper from '@/helpers/store-helper'
import axios from 'axios'
import InstoreHelper from '@/store/modules/instoreHelper'
import { composeAxiosResponseError } from '@/helpers/ehr-utils'
import store from '@/store'
import qs from 'qs'
const POST = 'post'
const PUT = 'put'

export function makeInviteCode () {
  let length = 6
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // characters += 'abcdefghijklmnopqrstuvwxyz'
  // characters += '0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export function serverVerify ( code ) {
  const apiUrl = StoreHelper.apiUrlGet()
  const url = `${apiUrl}/app-lms/code/` + code
  return axios.get(url)
}

export function serverSendCode ( code ) {
  const apiUrl = StoreHelper.apiUrlGet()
  const url = `${apiUrl}/app-lms/code/` + code
  return axios.get(url)
}

export function appLmsClientSendEmail ( toEmail) {
  return InstoreHelper.postRequest(null, 'app-lms', 'send-access-code-email',
    { toEmail: toEmail })
}

export function appLmsClientVerifyAccessCode ( accessToken, accessCode ) {
  return InstoreHelper.postRequest(null, 'app-lms', 'verify-access-code', { accessToken, accessCode})
}

export async function appLmsClientFetchTokenData (appLmsUserToken) {
  let apiUrl = StoreHelper.apiUrlGet()
  let url = apiUrl + '/app-lms/fetchTokenData'
  const response = await axios.get(url, { headers: { Authorization: `Bearer ${appLmsUserToken}` } })
    .catch(error => {
      console.error('ERROR appLmsClientFetchTokenData appLmsUserToken', JSON.stringify(appLmsUserToken))
      let msg = 'Error fetching App LMS user token data'
      // console.error(msg)
      catchHandler(msg, error)
    })
  return response?.data.tokenData
}

export async function appLmsFetchUserData (userId) {
  return await commonFetch('/fetchUserData/' + userId, 'App LMS fetch user data')
}
export async function appLmsFetchAppLms (appLmsId) {
  return await commonFetch('/fetchAppLmsById/' + appLmsId, 'Get App LMS by id')
}

export async function fetchConsumerById ( toolId ) {
  if (!toolId) throw new Error('Must provide tool id to fetch consumer')
  return await commonFetch('/fetchConsumerById/' + toolId, 'Get consumer')
}
export async function appLmsFetchCourses ( toolId ) {
  return await commonFetch('/fetchCourses/' + toolId, 'Get courses for consumer')
}
export async function appLmsClientFetchAppLms (userId) {
  return await commonFetch('/fetchAppLmsForUser/' + userId, 'App LMS main data')
}
export async function appLmsClientFetchAllLinks () {
  return await commonFetch('/app-lms-links', 'App LMS links list')
}
export async function appLmsClientFetchAllUsers () {
  return await commonFetch('/app-lms-users', 'App LMS user list')
}
export async function appLmsClientFetchAllConsumers () {
  return await commonFetch('/app-lms-consumers', 'App LMS consumer list')
}
export async function appLmsClientIsKeyInUse (ltiKey) {
  return await commonFetch('/isKeyInUse/' + ltiKey, 'App LMS is ltiKey in use?')
}

export async function appLmsClientCreateAppLms ( payload) {
  return commonPostPut(POST, '/create-app-lms', payload)
}
export async function appLmsClientUpdateUserData ( payload) {
  await commonPostPut( PUT,'/user-data-update', payload)
  await store.dispatch('appLmsStore/fetchUserData')
}

export async function appLmsClientDeleteAppLms (appLmsId) {
  console.log('delete app lms ', appLmsId)
  let apiUrl = StoreHelper.apiUrlGet()
  let url = apiUrl + '/app-lms/delete-app-lms'
  const headers = _getAuthHeader(url)
  const response = await axios.delete(url,
    {
      data: { appLmsId: appLmsId },
      headers
    })
    .catch(error => {
      let msg = `Call to delete ${appLmsId} failed`
      catchHandler(msg, error)
    })

  return response?.data
}
export async function appLmsClientDeleteUser (userId) {
  console.log('delete app user ', userId)
  let apiUrl = StoreHelper.apiUrlGet()
  let url = apiUrl + '/app-lms/delete-app-user'
  const headers = _getAuthHeader(url)
  const response = await axios.delete(url,
    {
      data: { userId: userId },
      headers
    })
    .catch(error => {
      let msg = `Call to delete ${appLmsId} failed`
      catchHandler(msg, error)
    })

  return response?.data
}

export async function appLmsGoToEhr (ltiData) {
  const url = 'app-lms-lti-submit'
  console.log('AppLms submitPersona', ltiData, url)
  const payload = qs.stringify({ltiData})
  const results = await commonPostPut(POST, '/app-lms-lti-submit', payload)
  const newUrl = results.data.url
  console.log(' AFTER results', newUrl )
  window.location.replace(newUrl)
}

function _getAuthHeader (url) {
  const appLmsUserToken = store.getters['appLmsStore/appLmsUserToken']
  // console.log('_getAuthHeader --- must have user token', appLmsUserToken)
  if (!appLmsUserToken) {
    throw new Error('must have auth token for url: ' + url)
  }
  return { Authorization: `Bearer ${appLmsUserToken}` }
}
async function commonFetch (url, description) {
  const authHdr = _getAuthHeader(url)
  url = StoreHelper.apiUrlGet() + '/app-lms' + url
  const response = await axios({
    method: 'get',
    url: url,
    headers: authHdr
  })
    .catch(error => {
      let msg = 'Error in ' + description
      console.error('commonFetch --- ', url, '-----', msg, '-----', error.response)
      catchHandler(msg, error)
    })
  // console.log('---- ' , description, response?.data)
  return response?.data
}
async function commonPostPut (method, url, payload) {
  const authHdr = _getAuthHeader(url)
  // console.log('common post put auth header', authHdr)
  // console.log('common post  payload', payload)
  return await axios( {
    method: method,
    url: StoreHelper.apiUrlGet() + '/app-lms' + url,
    data: payload,
    headers: authHdr
  }).catch(error => {
    let msg = 'Call to commonPostPut failed'
    catchHandler(msg, error)
  })
}

function catchHandler (message, error) {
  let msg = composeAxiosResponseError(error, message )
  StoreHelper.setApiError(msg)
}
