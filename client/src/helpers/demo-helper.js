import axios from 'axios'
import StoreHelper from './store-helper'
import InstoreHelper from '../store/modules/instoreHelper'

const debugDC = false

export function demoGoToEhr (toolKey, toolSecret, personaName, role, resource_link_title, resource_link_description, externalId, returnUrl) {
  const submitData = {
    resource_link_title: resource_link_title,
    resource_link_description: resource_link_description,
    externalId: externalId,
    personaName: personaName,
    personaRole: role,
    returnUrl: returnUrl,
    toolKey: toolKey,
    secret: toolSecret
  }
  if (debugDC) console.log('DemoCourse goto ehr with ', submitData)
  StoreHelper.setLoading(null, true)
  StoreHelper.submitPersona(submitData)
    .then(({ url }) => {
      StoreHelper.setLoading(null, false)
      if (debugDC) console.log('DemoCourse goto url ', url)
      window.location.replace(url)
    }).catch(err => {
      StoreHelper.setLoading(null, false)
      let msg = err.message || 'An error occurred during the launch of the demonstration mode.'
      StoreHelper.setApiError(msg)
    })
}

export default class DemoHelper {
  proceedDemoToolConsumerCreation () {
    StoreHelper.setLoading(null, true)
    if (debugDC) console.log('Demo proceedDemoToolConsumerCreation')
    return StoreHelper.createDemoToolConsumer()
      .then((demoToken) => {
        if (debugDC) console.log(`Demo consumer created. If have token? ${!!demoToken} go to demo`)
        if (!demoToken) {
          throw Error('Setup of demonstration space failed')
        }
        return StoreHelper.loadDemoData()
      })
      .catch(err => {
        if (debugDC) console.log('createDemoToolConsumer Error', err)
        let msg = err
        if (err.response) {
          msg = err.response.data.message
        }
        StoreHelper.setApiError(msg)
      })
      .finally(() => {
        StoreHelper.setLoading(null, false)
      })
  }

  loadAssignments () {
    const token = StoreHelper.getDemoToken()
    const dd = StoreHelper.getDemoTokenData()
    const toolConsumerId = dd.toolConsumerId
    if (!toolConsumerId) {
      if (debugDC) console.log('DC can not get assignments no toolConsumerId')
      return
    }
    if (debugDC) console.log('DC get assignments toolConsumerId', toolConsumerId)
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
    let url = 'consumer/' + toolConsumerId
    return InstoreHelper.getRequest(undefined/*context not needed*/, 'assignments', url)
      .then(response => {
        let list = response.data.assignments
        if (debugDC) console.log('loadAssignments response.data', list)
        if (!list) {
          const msg = 'System error getting demonstration assignments.'
          StoreHelper.setApiError(msg)
        }
        return list
      })
  }
  async loadActivities () {
    const token = StoreHelper.getDemoToken()
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/demo-activities`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      url,
    }
    const response = await axios(options)
    return response
  }
}
