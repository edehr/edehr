import axios from 'axios'
import StoreHelper from '@/helpers/store-helper'
import InstoreHelper from '@/store/modules/instoreHelper'

const debugDC = true

export default class DemoHelper {
  constructor (apiUrl) {
    this.apiUrl = apiUrl
  }

  proceedDemoToolConsumerCreation () {

    StoreHelper.setLoading(null, true)
    if(debugDC) console.log('Demo proceedDemoToolConsumerCreation')
    return StoreHelper.createDemoToolConsumer()
      .then((demoToken) => {
        if (debugDC) console.log(`Demo consumer created. If have token? ${!!demoToken} go to demo`)
        if (!demoToken) {
          throw Error('Setup of demonstration space failed')
        }
        return StoreHelper.loadDemoData()
      })
      .catch(err => {
        if(debugDC) console.log('createDemoToolConsumer Error', err)
        let msg = err
        if (err.response) {
          msg = err.response.data.message
        }
        StoreHelper.setApiError(msg)
      })
      .finally ( () => {
        StoreHelper.setLoading(null, false)
      })
  }


  gotoEhr (demoData, demoPersona, selectedAssignment, returnUrl) {
    const persona = demoPersona
    const submitData = {
      assignmentName: selectedAssignment.name,
      externalId: selectedAssignment.externalId,
      personaName: persona.name,
      personaEmail: persona.email,
      personaRole: persona.role,
      returnUrl: returnUrl, // window.location.origin + this.$route.path, // come back to this LMS page
      toolKey: demoData.toolConsumerKey
    }
    if (debugDC) console.log('DemoCourse goto ehr with ', submitData)
    StoreHelper.setLoading(null, true)
    StoreHelper.submitPersona(submitData)
      .then(({url}) => {
        StoreHelper.setLoading(null, false)
        if (debugDC) console.log('DemoCourse goto url ', url)
        window.location.replace(url)
      }).catch(err => {
        StoreHelper.setLoading(null, false)
        StoreHelper.setApiError('An error occurred during the launch of the demonstration mode. ', err)
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

}
