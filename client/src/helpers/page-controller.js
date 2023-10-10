import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper, { ENABLE_FULL_DEMO_AUTO_LINK } from '@/helpers/store-helper'
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
import MPatientHelper from '@/helpers/mPatientHelper'

const dbApp = false

function perfExit (perfStat) {
  perfStat.elapsed.loading = performance.now() - perfStat.start.loading
  return perfStat
}
/**
   * onPageChange is invoked from main.js whenever a route has changed.
   * This complex page change handler is responsible for these transitions:
   * 1. New LTI login that establishes a new connection with the EdEHR application.
   * 2. Just EHR demo loading because this starts with the "inside EHR" pages.
   * 3. Transition to real connection from full demo.
   * 4. EHR page changes.
   * #4 can now have 'patient' or 'seed' changes.
   * If user is editing case studies then the 'seedEditId' is provided.
   * If the user is a student then they arrive with the 'visitId' (becomes 'optionalVisitId' is provided but
   * the student may be changing patients to the 'patientId' will be provided.
   * Note that patientId may be a seed id or a patient id. Regardless, it will be an id of an object in the current patient list.
   *
   * This complex function has several exit points marked with all caps EXIT.
   * The local readme file has a flow chart showing how the logic works.
   * @param toRoute - the 'to' route. We can get the 'from' if needed.
   * @return {Promise<unknown>}
   */
async  function onPageChange (toRoute) {
  console.log('toRoute', toRoute.path)
  // console.log('toRoute', toRoute.fullPath)
  // console.log('page change to: ', toRoute.name, JSON.stringify(toRoute.meta), JSON.stringify(toRoute.query))
  const perfStat = { start: {}, elapsed: {} }
  perfStat.start.loading = performance.now()
  const routeName = toRoute.name
  const {
    isDemoLti, // lti request from the full demo
    demo_lobjId, // see server side demo-controller _createDemoToolConsumer
    demoOnlyKey, // just the ehr demo mode
    seedEditId, // instructor user just started editing a seed in the ehr
    seedId, // instructor user going to seed view. Not used in page-controller. Can clean.
    evaluateStudentVisitId, // instructor selected to evaluate a student, possibly in the EHR
    patientId,
    token: refreshToken, // user has just arrived via a LTI request from an LMS
    visitId: optionalVisitId, // user is coming from an LmsStudentActivity page OR from this page-controller after processing the refresh token
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
  // **** If public page ... prep and EXIT
  if (StoreHelper.inZonePublic()) {
    // console.log('on a public page', routeName)
    return perfExit(perfStat)
    // EXIT
  }

  // **** If demo only then ... prep and EXIT
  if (demoOnlyKey) {
    // user has selected something that is loading the ehr only demo.
    // The url query demoOnlyKey says which case study to display.
    // See the last sections of this page change handler for the case a user has
    // entered the ehr demo and has paged to another ehr page
    await EhrOnlyDemo.selectCaseStudy(demoOnlyKey)
    if (dbApp) console.log('loaded demo only ', demoOnlyKey)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    return perfExit(perfStat)
    // EXIT
  }
  if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
    console.log('ehr only demo is active')
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    return perfExit(perfStat)
    // EXIT
  }
  try {
    // Start the progress indicator
    StoreHelper.setLoading('page-controller', true)
    let haveDemoToken = !!StoreHelper.getDemoToken() // may change if user is forced out of full demo

    if (optionalVisitId || refreshToken ) {
      // console.log('on new auth or visit change we need to clear out previous visit and mPatient')
      await store.dispatch('visit/clearVisitData')
      await store.dispatch('mPatientStore/clearMPatientData')
    }

    if (evaluateStudentVisitId) {
      // console.log('on instructor change student so clear out previous visit and mPatient')
      await store.dispatch('mPatientStore/clearMPatientData')
    }

    // **** LTI login ... process and EXIT redirecting to the same page with visitId
    if (refreshToken) {
      if (dbApp) console.log('refresh token')
      // If user is arriving via LTI then any active ehr only demo is over ...
      await EhrOnlyDemo.clearEhrOnly()
      if (haveDemoToken && !isDemoLti) {
        // The absence of isDemoLti means this is a LTI request from a real LMS.
        // The existence of haveDemoToken means there is an active full demo session.
        // Need to clear away that full demo....
        if (dbApp) console.log('Actual LTI request needs to stop full demo. Will log user out without adieu.')
        // TODO.  Alert the user and offer to keep the demo data and stop the LTI log in.
        await StoreHelper.exitFullDemo()
        haveDemoToken = !!StoreHelper.getDemoToken()
      }
      // The LTI service provides a token in the query. We send this back to our preconfigured api
      // server to verify the incoming request and to get the actual token this
      // client will use. This two-step token verification process makes sure the incoming request
      // is from the expected api server and no-where else.
      if (dbApp) console.log('_loadAuth refresh token', authHelper.hashToken(refreshToken))
      await StoreHelper.fetchAndStoreRefreshToken(refreshToken)
      // fetchAndStoreRefreshToken also sets the axios header, and that emits a USER_LOGIN_EVENT event
      // fetch throws if token is expired or invalid
      const authToken = StoreHelper.getAuthToken()
      await StoreHelper.fetchTokenData(authToken)
      const visitId = store.getters['authStore/visitId']
      const path = toRoute.path
      const query = { visitId: visitId }
      if(demo_lobjId) {
        query.demo_lobjId = demo_lobjId
      }
      await router.push({ path: path, query: query })
      return perfExit(perfStat)
    }

    // **** auth token process and unpack.  Do this before any API calls that require auth ... CONTINUE
    const authToken = StoreHelper.getAuthToken()
    if (authToken) {
      if (dbApp) console.log('_loadAuth. We have an auth token. Get the auth data....')
      // must set auth header before invoking fetch. The fetch is an authenticated post
      setAuthHeader(authToken)
      await StoreHelper.fetchTokenData(authToken)
    }

    // **** Full demo setup ... prep and CONTINUE
    if (haveDemoToken) {
      if (dbApp) console.log('onPageChange loadDemoData')
      // Must have auth setup to succeed
      await StoreHelper.loadDemoData()
    }

    // **** If in zone Admin .... prep and EXIT via new route
    if (StoreHelper.inZoneAdmin() && routeName !== ADMIN_LOGIN_ROUTE_NAME) {
      // console.log('in admin zone')
      if (!authToken) {
        // console.log('in admin zone AND USER IS NOT LMS LOGGED IN')
        await router.push('/')
        return perfExit(perfStat)
        // EXIT
      }
      const isAdmin = await StoreHelper.adminValidate()
      if (!isAdmin) {
        // console.log('Redirect user to admin login')
        await router.push('/admin-login')
        return perfExit(perfStat)
        // EXIT
      }
    }

    // **** If in demo zone (LMS login, mock LMS) .... prep and EXIT
    if (StoreHelper.inZoneDemo()) {
      console.log('on a Demo page', routeName)
      // nothing else needs to be done in this page change handler
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return perfExit(perfStat)
      // EXIT
    }

    // *** If user is here and is not auth'd then something is wrong ... EXIT
    if (!authToken) {
      console.error('Coding error. At this point the user must be auth\'d to be in the ehr zone')
      return perfExit(perfStat)
      // EXIT
    }

    // If a student is coming from the "My Activities" page then the query has the intended visitId
    // user is authorized to enter the EHR zone (Note the EHR only entry is already handled. See if (demoOnlyKey) above)
    if (dbApp) console.log('onPageChange is authed so load data')

    const toolConsumerId = store.getters['authStore/consumerId']
    await store.dispatch('consumerStore/loadConsumer', toolConsumerId)

    // Load the user based on auth message
    const userId = store.getters['authStore/userId']
    await store.dispatch('userStore/load', userId)

    // **** if not in zone EHR (e.g. in LMS area or other) .... prep and EXIT
    if (!StoreHelper.inZoneEHR()) {
      if (dbApp) console.log('Page change to non-EHR page.')
      // If user has left the ehr zone then ehr only demo is over
      // TODO consider that this means the browser history and back button will not work
      await EhrOnlyDemo.clearEhrOnly()
      // Exit. All pages beyond the EHR zone perform their own loading as needed.
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return perfExit(perfStat)
      // EXIT
    }

    // Proceed to manage page load for EHR pages.
    const storedVisitId = store.getters['visit/visitId']
    const authVisitId = store.getters['authStore/visitId']
    let visitId = optionalVisitId || storedVisitId || authVisitId
    await StoreHelper.setVisitId(visitId) //note this stores the visit id to survive page changes and browser refresh
    // dup-in loadInstructorWithStudent
    await store.dispatch('visit/loadVisitRecord')
    // dup-in loadInstructorWithStudent
    let theActivity = await store.dispatch('activityStore/loadActivityRecord')
    // we don't need to wait for these next two api calls. This speeds up page load by about 100ms
    store.dispatch('courseStore/setCourseId', theActivity.courseId)
    store.dispatch('courseStore/loadCurrentCourse')

    // **** If page is the one that handles unlinked activities then we are done ... EXIT
    if (routeName === UNLINKED_ACTIVITY_ROUTE_NAME) {
      console.log('UNLINKED_ACTIVITY_ROUTE_NAME --- OKAY? ---finish page change for unlinked activity')
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return perfExit(perfStat)
      // EXIT
    }

    // **** If activity does not have linked LObj then ... push new route EXIT via new route
    if (!theActivity.hasLinkedLearningObject) {
      if(ENABLE_FULL_DEMO_AUTO_LINK && demo_lobjId) {
        theActivity = await StoreHelper.autoLinkDemoLobj(theActivity, demo_lobjId)
      } else {
        if (dbApp) console.log('No assignment for activity', theActivity.id)
        await router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: theActivity.id } })
        return perfExit(perfStat)
        // EXIT
      }
    }

    if (StoreHelper.isInstructor()) {
      if (seedEditId || seedId) {
        // All seed editing pages have the seedId in the querystring
        // the go to ehr seed edit url has the seedEditId in the querystring
        const sdId = seedEditId || seedId
        await StoreHelper.setSeedEditId(sdId)
        await store.dispatch('mPatientStore/openPatientById', sdId)
      }
      if (evaluateStudentVisitId && StoreHelper.isSeedEditing()) {
        console.log('Switch to evaluation student id')
        await StoreHelper.setSeedEditId('')
      }
      if (StoreHelper.isSeedEditing()) {
        const sid = StoreHelper.getSeedEditId()
        await store.dispatch('seedListStore/loadSeedContent', sid)
        const seed = store.getters['seedListStore/seedContent']
        await store.dispatch('mPatientStore/addSeedToActivePatientList', seed )
      }
      // **** Instructor evaluating student id management
      if (evaluateStudentVisitId) {
        await store.dispatch('instructor/changeCurrentEvaluationStudentId', evaluateStudentVisitId)
      }
      if (StoreHelper.isInstructorEvalMode()) {
        await store.dispatch('instructor/loadClassList')
        await store.dispatch('instructor/loadCurrentEvaluationStudentId')
        // Note that loadCurrentEvaluationStudentId also does activityDataStore/loadActivityData which sets the patient list
        let pId
        if (patientId) {
          pId = patientId
        } else {
          pId = store.getters['mPatientStore/currentPatientObjectId']
          if (!pId) {
            const list = MPatientHelper.getCurrentPatientList()
            const first = list && list.length > 0 ? list[0] : { }
            pId = first._id
          }
        }
        if (pId) {
          await store.dispatch('mPatientStore/forInstructorSetPatient', pId)
          const patient = store.getters['mPatientStore/currentPatient']
          if (patient && patient.seedId) {
            await store.dispatch('seedListStore/loadSeedContent', patient.seedId)
          }
        }
      }
    }
    if (StoreHelper.isStudent()) {
      /*
        If a user is able to log into the LMS first as an instructor, and they set themselves as a content editor,
        and then they log into their LMS as a student the system will remember they are also a content editor
        which means certain menu items appear. Such as the content creators documentation link in the application banner.
       */
      if (StoreHelper.isSeedEditing()) {
        await StoreHelper.setSeedEditId('')
      }
      if (StoreHelper.isDevelopingContent()) {
        StoreHelper.setIsDevelopingContent(false)
      }
      if (dbApp) console.log('student ehr page load')
      // loadActivityData gets both the activityData and the student's assignment data with the patient list
      await store.dispatch('activityDataStore/loadActivityData', { id: theActivity.activityDataId })
      // load the Learning Object .... (formerly called an 'assignment')
      await store.dispatch('assignmentStore/load', theActivity.learningObjectId)
      const theLObj = store.getters['assignmentStore/learningObject']
      let pId
      if (optionalVisitId && theLObj.seedDataId) {
        pId = theLObj.seedDataId
      } else if (patientId) {
        pId = patientId
      } else {
        pId = store.getters['mPatientStore/currentPatientObjectId']
        if (!pId) {
          if (dbApp) console.log('student has no stored pId so see if there is a list and select one of the patients')
          const list = MPatientHelper.getCurrentPatientList()
          const first = list && list.length > 0 ? list[0] : { }
          pId = first._id
        }
      }
      if (pId) {
        // change the list if pId is new. Calling addStudentPatient will only affect the list if needed.
        await store.dispatch('mPatientStore/addStudentPatient', pId)
        // Note that addStudentPatient will load the activity data if needed
        // It will also select the new patient
        const patient = MPatientHelper.getCurrentPatient()
        if (patient && patient.seedId) {
          await store.dispatch('seedListStore/loadSeedContent', patient.seedId)
        }
      }
    }
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  } catch (err) {
    // IF DEVELOPMENT ON LOCALHOST .... show the stack trace for speedier location of error
    if (window.location.origin.includes('localhost')) console.log(err.stack)
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
    StoreHelper.setLoading('page-controller', false)
  }
  return perfExit(perfStat)
  // EXIT
}

export default  onPageChange
