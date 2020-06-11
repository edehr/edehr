import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
import { setAuthHeader } from './axios-helper'

const debugDH = false

export default class DemoHelper {

  _getApiUrl () {
    return StoreHelper.apiUrlGet()
  }

  createToolConsumer () {
    const id = uuid()
    const apiUrl = this._getApiUrl()
    if(debugDH) console.log('DH create consumer for user id ', id, apiUrl)
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  demoLogout (token) {
    const apiUrl = this._getApiUrl()
    const url = `${apiUrl}/demo/logout`
    if(debugDH) console.log('DH logout',apiUrl)
    setAuthHeader(token)
    return axios.post(url)
      .catch(err => {
        console.log('demoHelper error', err)
      })
  }

  dhLoadDemoData (token) {
    const apiUrl = this._getApiUrl()
    const url = `${apiUrl}/demo/fetch`
    if(debugDH) console.log('DH fetch', apiUrl)
    setAuthHeader(token)
    return axios.get(url)
  }

  submitPersona (token, submitData) {
    const apiUrl = this._getApiUrl()
    const url = `${apiUrl}/demo/set`
    const {assignmentName, externalId, personaName, personaEmail, personaRole, returnUrl, toolKey} = submitData
    const [ given, family ] = personaName.split(' ')
    let theKey = toolKey
    let userId = theKey.slice(-5) + family + '-' + given
    const ltiData = {
      custom_assignment: externalId,
      context_id: 'Demo-Course',
      context_label: 'L-' + assignmentName,
      context_title: 'T-' + assignmentName,
      context_type: 'Demonstration',
      launch_presentation_return_url: returnUrl,
      lis_person_contact_email_primary: personaEmail,
      lis_person_name_family: family,
      lis_person_name_given: given,
      lis_person_name_full:personaName,
      lti_version: 'LTI-1p0',
      lti_message_type: 'basic-lti-launch-request',
      oauth_consumer_key: theKey,
      oauth_consumer_secret: theKey,
      oauth_nonce: Date.now() + Math.random() * 100,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_version: 'x.y',
      roles: personaRole,
      resource_link_title: assignmentName,
      resource_link_id: externalId,
      tool_consumer_instance_guid: theKey,
      tool_consumer_instance_name: 'Demo',
      tool_consumer_info_version: 'x',
      tool_consumer_info_product_family_code:'EdEHR Demo',
      tool_consumer_instance_description: 'EdEHR provided LTI tool for launching the EdEHR in a demonstration mode',
      user_id: userId,
    }
    if(debugDH) console.log('DH submitPersona', ltiData, apiUrl)
    setAuthHeader(token)
    return axios.post(url, { ltiData })
  }
  
}
