import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'
import router from '@/router'
import { setAuthHeader } from '@/helpers/axios-helper'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import {
  ADMIN_LOGIN_ROUTE_NAME,
  ERROR_ROUTE_NAME,
  UNLINKED_ACTIVITY_ROUTE_NAME,
} from '@/router'
import store from '@/store'
import authHelper from '@/helpers/auth-helper'

const dbApp = false

/**
   * onPageChange is invoked from main.js whenever a route has changed.
   * This complex page change handler is responsible for these transitions:
   * 1. New LTI login that establishes a new connection with the EdEHR application.
   * 2. Just EHR demo loading because this starts with the "inside EHR" pages.
   * 3. Transition to real connection from full demo.
   * 4. EHR page changes.
   * #4 is
   * This complex function has several exit points marked with all caps EXIT.
   * The local readme file has a flow chart showing how the logic works.
   * @param toRoute - the 'to' route. We can get the 'from' if needed.
   * @return {Promise<unknown>}
   */
async  function onPageChange (toRoute, fromRoute) {
  console.log('page change to: ', toRoute.name)
  // console.log('onPageChange localStorage', localStorage)
  // console.log('onPageChange route.meta', route.meta)
  // console.log('onPageChange route.query', route.query)
  const perfStat = { start: {}, elapsed: {} }
  const routeName = toRoute.name
  const {
    isDemoLti, // lti request from the full demo
    demoOnlyKey, // just the ehr demo mode
    seedEditId, // instructor user just started editing a seed in the ehr
    seedId, // instructor user selected a seed (case study) in the LMS area
    studentId, // instructor selected to evaluate a student, possibly in the EHR
    token: refreshToken // user has just arrived via a LTI request from an LMS
  } = toRoute.query
  {
    const { label, icon, zone } = toRoute.meta
    StoreHelper.setPageTitle(label)
    StoreHelper.setPageIcon(icon)
    StoreHelper.setPageZone(zone)
    // call into the api to get and store in memory api data, which includes page title
    perfStat.start.loadApi = performance.now()
    await StoreHelper.loadApiData()
    perfStat.elapsed.loadApi = performance.now() - perfStat.start.loadApi
    document.title = StoreHelper.getAppTitle()
  }
  if (StoreHelper.inZonePublic()) {
    // console.log('on a public page', routeName)
    return perfStat
    // EXIT
  }

  if (demoOnlyKey) {
    // user has selected something that is loading the ehr only demo.
    // The url query demoOnlyKey says which case study to display.
    // See the last sections of this page change handler for the case a user has
    // entered the ehr demo and has paged to another ehr page
    await EhrOnlyDemo.selectCaseStudy(demoOnlyKey)
    if(dbApp) console.log('loaded demo only ', demoOnlyKey)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    return perfStat
    // EXIT
  }

  try {
    // Start the progress indicator
    StoreHelper.setLoading(null, true)

    let haveDemoToken = !!StoreHelper.getDemoToken() // may change if user is forced out of full demo

    // **** LTI login
    perfStat.start.refreshToken = performance.now()
    if (refreshToken) {
      // If user is arriving via LTI then any active ehr only demo is over ...
      await EhrOnlyDemo.clearEhrOnly()

      if (haveDemoToken && !isDemoLti) {
        // The absence of isDemoLti means this is a LTI request from a real LMS.
        // The existence of haveDemoToken means there is an active full demo session.
        // Need to clear away that full demo....
        if (dbApp) console.log('Actual LTI request needs to stop full demo. Will log user out without adieu.')
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
    perfStat.elapsed.refreshToken = performance.now() - perfStat.start.refreshToken

    // **** auth token process and unpack.  Do this before any API calls that require auth
    perfStat.start.authTokenGet = performance.now()
    const authToken = StoreHelper.getAuthToken()
    if (authToken) {
      if (dbApp) console.log('_loadAuth. We have an auth token. Get the auth data....')
      // must set auth header before invoking fetch. The fetch is an authenticated post
      setAuthHeader(authToken)
      await StoreHelper.fetchTokenData(authToken)
    }
    perfStat.elapsed.authTokenGet = performance.now() - perfStat.start.authTokenGet

    // **** Full demo setup
    perfStat.start.demoToken = performance.now()
    if (haveDemoToken) {
      if (dbApp) console.log('onPageChange loadDemoData')
      // Must have auth setup to succeed
      await StoreHelper.loadDemoData()
    }
    perfStat.elapsed.demoToken = performance.now() - perfStat.start.demoToken

    if (StoreHelper.inZoneAdmin() && routeName !== ADMIN_LOGIN_ROUTE_NAME) {
      // console.log('in admin zone')
      if (!authToken) {
        // console.log('in admin zone AND USER IS NOT LMS LOGGED IN')
        await router.push('/')
        return
        // EXIT
      }
      const isAdmin = await StoreHelper.adminValidate()
      if (! isAdmin ) {
        // console.log('Redirect user to admin login')
        await router.push('/admin-login')
        return
        // EXIT
      }
    }

    // *** -- On a Demo page (LMS login, mock LMS)
    if (StoreHelper.inZoneDemo()) {
      console.log('on a Demo page', routeName)
      // nothing else needs to be done in this page change handler
      return perfStat
      // EXIT
    }

    // **** Just EHR demo
    if (!StoreHelper.inZoneEHR()) {
      // If user has left the ehr zone then ehr only demo is over
      // TODO consider that this means the browser history and back button will not work
      await EhrOnlyDemo.clearEhrOnly()
    }

    if (seedEditId || seedId) {
      // All seed editing pages have the seedId in the querystring
      // the go to ehr seed edit url has the seedEditId in the querystring
      const sdid = seedEditId || seedId
      StoreHelper.setSeedEditId(sdid)
    }
    if (studentId && StoreHelper.isSeedEditing()) {
      console.log('Switch to evaluation student id')
      StoreHelper.setSeedEditId('')
    }

    // **** Load data via API calls based on state:
    //  - on auth token data or
    //  - saved evaluation student or seed editing ids
    perfStat.start.authToken = performance.now()

    // If a student is coming from the My Activities page then the query has the intended visitId
    const optionalVisitId = toRoute.query.visitId
    console.log('optionalVisitId',optionalVisitId)

    if (authToken) {
      if (dbApp) console.log('onPageChange is authed so load data')
      perfStat.start.loadCommon = performance.now()
      await StoreHelper.loadCommon(optionalVisitId) // loads auth'd consumer, user and visit
      perfStat.elapsed.loadCommon = performance.now() - perfStat.start.loadCommon
      if (dbApp) console.log('onPageChange is after load common data')
      if (refreshToken) {
        // just made an lti connection which means the user is freshly authed and has just arrived here.
        // 1. Stash the activity id as the "current" activity so that the application
        // can be refreshed and the current activity will be available.
        // Note that the user can change the current activity from their "My activities" dashboard page.
        // 2. Check if the activity has been linked to content. If not then send the user to the unlinked page.
        const activityId = store.getters['visit/activityId']
        if (dbApp) console.log('onPageChange first time using the new auth token. activityId', activityId)
        await StoreHelper.setActivityId(activityId)
        let activity = await StoreHelper.loadCurrentActivity()
        if (!activity.assignment) {
          if (dbApp) console.log('No assignment for activity', activity)
          await router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: activityId } })
          perfStat.elapsed.authToken = performance.now() - perfStat.start.authToken
          return perfStat
          // EXIT
        }
      } else {
        // Not a new LTI connection so reload what is needed based on stashed data.
      }
      perfStat.elapsed.authToken = performance.now() - perfStat.start.authToken

      perfStat.start.loading = performance.now()
      if ( routeName === UNLINKED_ACTIVITY_ROUTE_NAME ) {
        console.log('finish page change for unlinked activity')
      } else {
        if (StoreHelper.isInstructor()) {
          if (StoreHelper.isSeedEditing()) {
            await StoreHelper.loadSeedEditor()
          }
          // **** Instructor evaluating student id management
          if (studentId) {
            console.log('stash the evaluation student id')
            await StoreHelper.changeStudentForInstructor(studentId)
          }
        } else if (StoreHelper.isStudent()) {
          const fromZone = fromRoute.meta.zone
          if (fromZone === 'ehr') {
            console.log('page - change from ehr')
          } else {
            const activityId = store.getters['visit/activityId']
            await StoreHelper.setActivityId(activityId)
            const activity = await StoreHelper.loadCurrentActivity()
            if (activity.assignment) {
              // only when the activity has an assignment(learning object) can the visit have any activity data
              let visitInfo = store.getters['visit/visitData']
              // console.log('get activity data based on visitInfo', visitInfo)
              await StoreHelper._dispatchActivityData('loadActivityData', visitInfo.activityData)
              await StoreHelper.loadAssignment(activity.assignment)
              let seedId = StoreHelper.getAssignmentSeedId()
              await StoreHelper.loadSeed(seedId)
            }
          }
        }
      }
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    }
    perfStat.elapsed.loading = performance.now() - perfStat.start.loading

    // *** Just EHR demo (no auth token)
    if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      if(dbApp) console.log('the ehr only demo is active ')
      // (which means neither the full demo nor full application are active
      // and the user has changed to another ehr page
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    }
  } catch (err) {
    // TODO check how we handle expired auth tokens
    let msg = err.message
    if (err.response) {
      console.log('PageController err.response', err.response)
      const { data, statusText } = err.response
      msg += '. ' + statusText
      msg += '. ' + data
    }
    StoreHelper.setApiError(msg)
    if (StoreHelper.inZonePublic() && routeName !== ERROR_ROUTE_NAME) {
      console.log('going to error page')
      await router.push({ name: ERROR_ROUTE_NAME })
    }
  } finally {
    StoreHelper.setLoading(null, false)
  }
  return perfStat
  // EXIT
}

export default  onPageChange
