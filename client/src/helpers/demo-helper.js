import axios from 'axios'
import StoreHelper from './store-helper'
import InstoreHelper from '../store/modules/instoreHelper'

const debugDC = false

export function demoGoToEhr (submitData) {
  // const submitData = {
  //   resource_link_title: resource_link_title,
  //   resource_link_description: resource_link_description,
  //   resource_link_id: resource_link_id,
  //   personaName: personaName,
  //   personaRole: role,
  //   returnUrl: returnUrl,
  //   toolKey: toolKey,
  //   secret: toolSecret,
  //   userId: userId,
  //   demo_lobjId: demo_lobjId,
  //   appType: appType
  // }
  if (debugDC) console.log('DemoCourse goto ehr with ', submitData)
  StoreHelper.setLoading('demoGoToEhr', true)
  StoreHelper.submitPersona(submitData)
    .then(({ url }) => {
      if (debugDC) console.log('DemoCourse goto url ', url)
      window.location.replace(url)
    }).catch(err => {
      console.error('Error in submitPersona', err)
      let msg = err.message || 'An error occurred during the launch of the demonstration mode.'
      StoreHelper.setApiError(msg)
    })
    .finally(() => StoreHelper.setLoading('demoGoToEhr', false))
}

export default class DemoHelper {
  proceedDemoToolConsumerCreation () {
    StoreHelper.setLoading('proceedDemoToolConsumerCreation', true)
    if (debugDC) console.log('Demo proceedDemoToolConsumerCreation')
    return StoreHelper.createDemoToolConsumer()
      .then((demoToken) => {
        if (debugDC) console.log(`Demo consumer created. If have token? ${!!demoToken} go to demo`)
        if (!demoToken) {
          throw Error('Setup of demonstration space failed')
        }
        return StoreHelper.loadDemoData()
      })// let the caller handle any errors
      .finally(() => {
        StoreHelper.setLoading('proceedDemoToolConsumerCreation', false)
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
