import axios from 'axios'
import qs from 'qs'
import StoreHelper from '@/helpers/store-helper'

const debugDH = false

export default class DemoStoreHelper {
  createToolConsumer () {
    /*
    Create something short and random for the tool consumer's key and id. The server will take this
    short id and add more to make sure it is unique.  The following generates 7 character string like: mpbchrk
     */
    let id = Math.random().toString(32).slice(-7)
    const apiUrl = StoreHelper.apiUrlGet()
    console.log('DemoStoreHelper create consumer for user id ', id, 'apiUrl', apiUrl)
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  demoLogout (token) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/logout`
    if(debugDH) console.log('DH logout',apiUrl)
    return axios.post(url)
      .catch(err => {
        console.log('demoHelper error', err)
      })
  }

  dhLoadDemoData (token) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/fetch`
    if(debugDH) console.log('DH fetch', apiUrl)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      url,
    }
    return axios(options)
  }

  /**
   *
   * @param token
   * @param submitData
   * @return {AxiosPromise<any>}
   */
  submitPersona (token, submitData) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/set`
    const {assignmentName, externalId, personaName, personaEmail, personaRole, returnUrl, toolKey} = submitData
    const [ given, family ] = personaName.split(' ')
    let theKey = toolKey
    let userId = theKey.slice(-5) + family + '-' + given
    const ltiData = {
      custom_assignment: externalId,
      custom_is_demo: true,
      context_id: 'Demo-Course',
      context_label: 'Mock EdEHR Demonstration Course',
      context_title: 'Mock EdEHR Demonstration Course',
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
      roles: personaRole,
      resource_link_title: assignmentName,
      resource_link_id: externalId,
      tool_consumer_instance_guid: theKey,
      tool_consumer_instance_name: 'Demo LMS',
      tool_consumer_info_version: 'x',
      tool_consumer_info_product_family_code:'EdEHR LMS Demo',
      tool_consumer_instance_description: 'EdEHR provided demonstration LTI tool',
      user_id: userId,
    }
    if(debugDH) console.log('DH submitPersona', ltiData, apiUrl)
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      data: qs.stringify({ltiData}),
      url,
    }
    return axios(options)
  }
  
}
