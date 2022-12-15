import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'
import router from '@/router'
import { setAuthHeader } from '@/helpers/axios-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from '@/helpers/event-bus'
import {
  ERROR_ROUTE_NAME,
  UNLINKED_ACTIVITY_ROUTE_NAME,
  ZONE_DEMO,
  ZONE_EHR,
  ZONE_PUBLIC
} from '@/router'
import { Text } from '@/helpers/ehr-text'
import store from '@/store'
import authHelper from '@/helpers/auth-helper'

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
    // console.log('on page', route.name)
    // console.log('onPageChange localStorage', localStorage)
    // console.log('onPageChange route.meta', route.meta)
    // console.log('onPageChange route.query', route.query)
    const { meta: routeMeta, name: routeName, query: routeQuery } = route
    const { zone: routeZone } = routeMeta
    const {
      isDemoLti,
      demoOnlyKey,
      seedEditId,
      token: refreshToken
    } = routeQuery
    let haveDemoToken = !!StoreHelper.getDemoToken()

    {
      const { label, icon } = routeMeta
      StoreHelper.setPageTitle(label)
      StoreHelper.setPageIcon(icon)
      // call into the api to get and store in memory api data, which includes page title
      await StoreHelper.loadApiData()
      document.title = StoreHelper.getAppTitle()
    }
    if (routeZone === ZONE_PUBLIC) {
      // console.log('on a public page', routeName)
      return
    }

    if (demoOnlyKey) {
      // user has select something that is loading the ehr only demo.
      // The query string says which case study to display.
      // See the last sections of this page change handler for the case a user has
      // entered the ehr demo is has paged to another ehr page
      await EhrOnlyDemo.selectCaseStudy(demoOnlyKey)
      if(dbApp) console.log('loaded demo only ', demoOnlyKey)
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return
    }

    try {
      StoreHelper.setLoading(null, true)
      if (refreshToken) {
        // If user is arriving via LTI then ehr demo is over ...
        await EhrOnlyDemo.clearEhrOnly()

        if (haveDemoToken && !isDemoLti) {
          // we are here because a demo session is active and the incoming lti request is not from that demo
          // the incoming request is coming from an actual LMS.
          // before processing the refresh token clear away any demo that is active.
          if (dbApp) console.log('onPageChange refreshToken have demo token and this is not a demo refresh token')
          // TODO.  Alert the user and offer to keep the demo data and stop the LTI log in.
          await StoreHelper.logUserOutOfEdEHR()
          haveDemoToken = !!StoreHelper.getDemoToken()
        }
        // The LTI service provides a token in the query. We send this back to our preconfigured api
        // server to verify the incoming request and to get the actual token this
        // client will use. This two step token verification process makes sure the incoming request
        // is from the expected api server and no-where else.
        if (dbApp) console.log('_loadAuth refresh token', authHelper.hashToken(refreshToken))
        await StoreHelper.fetchAndStoreAuthToken(refreshToken)
        // fetch throws if token is expired or invalid
      }

      // get authToken here and not before the above section that works with the refresh token.
      const authToken = StoreHelper.getAuthToken()
      if (authToken) {
        if (dbApp) console.log('_loadAuth. We have an existing auth token. Get the auth data....')
        // must set auth header before invoking fetch. The fetch is an authenticated post
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
      }

      if (routeZone !== ZONE_EHR) {
        // If user has left the ehr zone then ehr only demo is over
        await EhrOnlyDemo.clearEhrOnly()

        // clear the current seed id unless current page is an ehr page.
        // the current seed id determines the "isSeedEditing" flag that is used to show hide elements.
        // when the zone is ehr, and there was a seed id set by the code below, then the user
        // is editing the seed
        StoreHelper.setSeedEditId('')
      }
      if (seedEditId) {
        StoreHelper.setSeedEditId(seedEditId)
      }

      if (haveDemoToken) {
        if (dbApp) console.log('onPageChange loadDemoData')
        await StoreHelper.loadDemoData()
      }
      if (routeZone === ZONE_DEMO) {
        console.log('on a Demo page', routeName)
        // nothing else needs to be done in this page change handler
        return
      }

      if (authToken) {
        if (dbApp) console.log('onPageChange is authed so load data')
        await this._loadData(routeName === UNLINKED_ACTIVITY_ROUTE_NAME)
        EventBus.$emit(PAGE_DATA_READY_EVENT)
      }
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        if(dbApp) console.log('the ehr only demo is active ')
        // the ehr only demo is active
        // (which means neither the full demo nor full application are active
        // and the user has changed to another ehr page
        // console.log('ehr only PAGE_DATA_REFRESH_EVENT')
        EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      }
    } catch (err) {
      // console.error('PageController error', err)
      if (err.type === NO_ASSIGNMENT_LINKED) {
        const activity = err.visitInfo.activity
        await router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: activity } })
      } else {
        let msg = err.message
        console.log('PageController err.response', err.response)
        if (err.response) {
          const { data, statusText } = err.response
          msg += '. ' + statusText
          msg += '. ' + data
        }
        StoreHelper.setApiError(msg)
        if (routeZone !== ZONE_PUBLIC && routeName !== ERROR_ROUTE_NAME) {
          console.log('going to error page')
          await router.push({ name: ERROR_ROUTE_NAME })
        }
      }
    } finally {
      StoreHelper.setLoading(null, false)
    }
  }

  async _loadData (routeIsUnlinkedPage) {
    let visitId = this._getVisitId()
    await StoreHelper.loadVisitRecord(visitId)
    if (routeIsUnlinkedPage) {
      if (dbApp) console.log('Do nothing but emit the PAGE_DATA_REFRESH_EVENT in page change handler on entry to unlinked activity page.')
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return Promise.resolve()
    }
    if (StoreHelper.isInstructor()) {
      if (dbApp) console.log('Instructor')
      await StoreHelper.loadCommon() // loads user and consumer
      if (StoreHelper.isSeedEditing()) {
        if (dbApp) console.log('seed editing')
        await StoreHelper.loadSeedEditor()
      }
    } else if (StoreHelper.isStudent()) {
      if (dbApp) console.log('student')
      await StoreHelper.loadStudent2()
    }
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    let visitInfo = store.state.visit.sVisitData || {}
    if (dbApp) console.log('loadAsCurrentActivity',visitInfo.activity)
    await StoreHelper.loadAsCurrentActivity(visitInfo.activity)
    let activity = store.getters['activityStore/activity']
    if (!activity.assignment) {
      if (dbApp) console.log('No assignment for activity', activity)
      return Promise.reject(new NoAssignmentLinked(visitInfo))
    }
  }

  _getVisitId () {
    let payload = StoreHelper.getAuthData()
    // console.log('getvisit data from auth payload', payload.visitId,  payload.isInstructor)
    if (!(payload && payload.visitId)) {
      throw new Error(Text.TOKEN_FETCHING_ERROR)
    }
    return payload.visitId
  }

}
const PageController = new PageControllerInner()
export default PageController
