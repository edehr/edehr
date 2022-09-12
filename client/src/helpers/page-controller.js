import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'
import router from '@/router'
import { routeIsEHR }  from '@/router'
import { setAuthHeader } from '@/helpers/axios-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from '@/helpers/event-bus'
import { UNLINKED_ACTIVITY_ROUTE_NAME } from '@/outsideRoutes'
import { Text } from '@/helpers/ehr-text'
import store from '@/store'

const NO_ASSIGNMENT_LINKED = 'NoAssignmentLinked'

const NO_ASSIGNMENT_MESSAGE = 'Instructor must link learning object to activity before a student can access the activity'

class NoAssignmentLinked extends Error {
  constructor (visitInfo) {
    super(NO_ASSIGNMENT_MESSAGE)
    this.type = NO_ASSIGNMENT_LINKED
    this.message = NO_ASSIGNMENT_MESSAGE
    this.visitInfo = visitInfo
  }
}
const dbApp = false

/**
 * There is just one instance of PageController owned by the main.js entry point.
 * PageController is responsible for the page load event.
 */
class PageControllerInner {
  constructor () {
    if (dbApp) console.log('construct PageController')
  }

  /**
   * onPageChange is invoked from main.js whenever a route has changed.
   * @param route - the 'to' route. We can get the 'from' if needed.
   * @return {Promise<unknown>}
   */
  async onPageChange (route) {
    if (dbApp) console.log('onPageChange route.meta', route.meta)
    StoreHelper.setPageTitle(route.meta.label)
    StoreHelper.setPageIcon(route.meta.icon)
    const {seedEditId, evaluatingStudent, lti} = route.query || {}
    if (dbApp) console.log('query', seedEditId, evaluatingStudent, lti)
    /*
    First we make adjustments.
    If Seed Editing then user is a content designer is coming from the Seeds pages.
    If Eval Student then user is an instructor and is going to view ehr pages to see student's work.
    If LIT then user is a student arriving here from a LTI consumer.
    Otherwise;
      user is navigating around the EHR pages or
      user is not in ehr section.
     */
    if(seedEditId) {
      // New approach to be sure seed editor can refresh their browser while editing a see.
      if (dbApp) console.log('User is editing seed. Stash state for possible page refresh', seedEditId)
      StoreHelper.setSeedEditId(seedEditId)
    }
    else if (evaluatingStudent) {
      /*
      The use of query parameters is new and changes the approach we can take to managing the
      flow of page loading.  At this point the focus is to use the query parameters to load
      seed for seed editing. Later can refactor the management of instructor and student visits
       */
      StoreHelper.setSeedEditId('')
      if (dbApp) console.log('User is an instructor evaluatingStudent >> ', evaluatingStudent)
    }
    else if (lti) {
      const userType = lti
      // lti holds 'student', 'instructor' , or 'unknown'
      // lti comes from the server (see lti controller)
      StoreHelper.setSeedEditId('')
      if (dbApp) console.log('User coming in via LTI. userType',userType)
    }
    else if (routeIsEHR(route)) {
      if (dbApp) console.log('In app page change.')
    } else {
      if (dbApp) console.log('User not in the EHR so clear any active seed editing ids')
      StoreHelper.setSeedEditId('')
    }
    try {
      if (route.name === 'demo') {
        if (dbApp) console.log('going to demo page. Log the user out" of EHR' +
          ' whether the user came from an LMS or from the demo')
        await StoreHelper.logUserOutOfEdEHR()
      }
      await this._loadData(route)
    }
    catch(err) {
      StoreHelper.setLoading(null, false)
      if (err.type === NO_ASSIGNMENT_LINKED) {
        const activity = err.visitInfo.activity
        await router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: activity } })
      } else {
        console.log('Caught error page change load data block', err)
        await router.push('/')
        StoreHelper.setApiError(err + '. System Error')
      }
    }
  }

  async _loadData (route) {
    // If there is a demo token in local memory then the user is using the full demo mode
    // Note there is now a just ehr demo load below and that is not a full demo mode.
    const demoToken = StoreHelper.getDemoToken()
    const isDemo = !!demoToken
    /*
The LTI service provides a token in the query. We send this back to our preconfigured api server to verify the incoming request and to get the actual token this client will use.  This two step token verification process makes sure the incoming request is from the expected api server and no-where else.
    */
    const refreshToken = route.query.token
    // if there is no token in the query then use any stashed token.
    const authToken = StoreHelper.getAuthToken()
    // if we have either token then we have an LTI user who wants into the app.
    const isUser = refreshToken || authToken
    // call into the api to get and store in memory api data, which includes page title
    await StoreHelper.loadApiData()
    document.title = StoreHelper.getAppTitle ()
    if (dbApp) console.log('api data fetch: document title is', document.title)
    // assume page load is for real work and not the ehr only demo
    EhrOnlyDemo.setActiveEhrActive(false)
    if (isDemo) {
      // set up demo and RETURN from function
      if (dbApp) console.log('db_loadData load demo data')
      const ddata = await StoreHelper.loadDemoData()
      if (dbApp) console.log('loadDemoData done', ddata)
      if (!isUser) {
        if (dbApp) console.log('db_loadData user is not yet visiting ' +
          ' the EHR pages so page load is complete. ' +
          ' emit PAGE_DATA_READY_EVENT')
        EventBus.$emit(PAGE_DATA_READY_EVENT)
        return Promise.resolve()
      }
    }
    if (!isUser) {
      if (dbApp) console.log('db_loadData set up EHR ONLY only demo and ' +
        ' emit PAGE_DATA_REFRESH_EVENT then' +
        ' RETURN from function ')
      EhrOnlyDemo.setActiveEhrActive(true)
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return Promise.resolve()
    }
    // not full ehr demo and page is loading for an LTI user....
    if (dbApp) console.log('db_loadData load user authorization data')
    //  Will now do the LTI auth. This results in a lot of data from the server and this data will be
    // be pushed into the storage.s
    await this._loadAuth(refreshToken, authToken)
    if (route.name === UNLINKED_ACTIVITY_ROUTE_NAME) {
      if (dbApp) console.log('Do nothing but emit the PAGE_DATA_REFRESH_EVENT in page change handler on entry to unlinked activity page.')
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return Promise.resolve()
    }
    let visitId = this._getVisitId()
    await this._loadEhr(visitId)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    let visitInfo = store.state.visit.sVisitData || {}
    await StoreHelper.loadAsCurrentActivity(visitInfo.activity)
    let activity = store.getters['activityStore/activity']
    if (!activity.assignment) {
      console.log('Reject no assignment',activity)
      return Promise.reject(new NoAssignmentLinked(visitInfo))
    }
    return Promise.resolve()
  }

  async _loadAuth (refreshToken, authToken) {
    if (refreshToken) {
      if (dbApp) console.log('_loadAuth refresh token fetch')
      await this._ltiAccess(refreshToken, authToken)
    } else if (authToken) {
      if (dbApp) console.log('_loadAuth. User is refreshing their browser. We have an existing auth token. Get the auth data....')
      StoreHelper.setLoading(null, true)
      setAuthHeader(authToken)
      await StoreHelper.fetchTokenData(authToken)
      // get the consumer id as authed and load it
      await StoreHelper.loadConsumer(StoreHelper.getAuthdConsumerId())
      StoreHelper.setLoading(null, false)
      // }
    } else {
      if (dbApp) console.log('_loadAuth. User can not proceed. There is no refresh nor previous auth token.')
      throw new Error(Text.PARAMETERS_ERROR)
    }
  }

  async _ltiAccess (refreshToken, authToken) {
    StoreHelper.setLoading(null, true)
    if (dbApp) console.log('_ltiAccess take the refresh, convert to auth token. Store the new token.')
    let token = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
    if (!token) {
      if (dbApp) console.log('_ltiAccess the refresh token failed. Perhaps this is a SYSTEM ERROR?')
      throw new Error(Text.EXPIRED_REFRESH_TOKEN)
    }
    /* ******** NEW CONNECTION SUCCEEDED *************  */
    try {
      if (dbApp) console.log('_ltiAccess take the new token, get the server to validate and provide the data inside. Store the data')
      await StoreHelper.fetchTokenData(token)
    }
    catch (err) {
      console.error('PageController error', err)
      if (err.response.status === 401 && err.response.data.toLowerCase().includes('expired') && !!authToken) {
        if (dbApp) console.log('_ltiAccess the refresh token expired but we have a previous auth token (user is refreshing browser).')
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
      } else {
        if (dbApp) console.log('_ltiAccess refresh token is expired and there is no previous token. User can not proceed.')
        throw new Error(Text.EXPIRED_TOKEN(err))
      }
    }
    StoreHelper.setLoading(null, false)
  }

  async _loadEhr (visitId) {
    StoreHelper.setLoading(null, true)
    await StoreHelper.loadVisitRecord(visitId)
    if (StoreHelper.isSeedEditing()) {
      await StoreHelper.loadSeedEditor()
    } else if (StoreHelper.isInstructor()) {
      await StoreHelper.loadCommon() // loads user and consumer
    } else if (StoreHelper.isStudent()) {
      await StoreHelper.loadStudent2()
    }
    StoreHelper.setLoading(null, false)
  }


  _getVisitId () {
    let payload = StoreHelper.getAuthData()
    if (!(payload && payload.visitId)) {
      throw new Error(Text.TOKEN_FETCHING_ERROR)
    }
    return payload.visitId
  }

}
const PageController = new PageControllerInner()
export default PageController
