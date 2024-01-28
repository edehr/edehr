import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'
import router, { COURSE_ROUTE_NAME } from '@/router'
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
import FeatureHelper from '@/helpers/feature-helper'
import { t18SetEnglish, t18SetFrench, t18SetSpanish } from '@/helpers/ehr-t18'

const dbApp = false

function perfExit (perfStat) {
  perfStat.elapsed.loading = performance.now() - perfStat.start.loading
  return perfStat
}

function determineCurrentPatientId (optionalVisitId, patientId) {
  const theLObj = store.getters['assignmentStore/learningObject']
  let pId
  if (optionalVisitId && theLObj.seedDataId) {
    pId = theLObj.seedDataId // patient id from learning object
  } else if (patientId) {
    pId = patientId // patient id from query string
  } else {
    pId = store.getters['mPatientStore/currentPatientObjectId'] // stashed from previous page visit
    if (!pId) {
      if (dbApp) console.log('student has no stored pId so see if there is a list and select one of the patients')
      const list = MPatientHelper.getCurrentPatientList()
      const first = list && list.length > 0 ? list[0] : {}
      pId = first._id
    }
  }
  return pId
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
  const routeName = toRoute.name
  const perfStat = { start: {}, elapsed: {} }
  perfStat.start.loading = performance.now()
  if (dbApp) console.log('onPageChange toRoute', toRoute.path, routeName)
  if (routeName === ERROR_ROUTE_NAME) {
    console.log('Skip page change for error page')
    return perfExit(perfStat)
  }

  /*
  Note that the browser settings can override the OS setting
   */
  const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  console.log('isDark', isDark)

  // console.log('toRoute', toRoute.fullPath)
  // console.log('page change to: ', toRoute.name, JSON.stringify(toRoute.meta), JSON.stringify(toRoute.query))
  const {
    isDemoLti, // lti request from the full demo
    demo_lobjId, // see server side demo-controller _createDemoToolConsumer
    demoOnlyKey, // just the ehr demo mode
    seedEditId, // instructor user just started editing a seed in the ehr
    seedId, // instructor user going to seed view. Not used in page-controller. Can clean.
    evaluateStudentVisitId, // instructor selected to evaluate a student, possibly in the EHR
    patientId, // patientId is when student searches for and selects patient
    token: refreshToken, // user has just arrived via a LTI request from an LMS
    visitId: optionalVisitId, // user is coming from an LmsStudentActivity page OR from this page-controller after processing the refresh token
  } = toRoute.query

  const lang = toRoute.query.lang
  switch (lang) {
  case 'es':
    await t18SetSpanish()
    break
  case 'fr':
    await t18SetFrench()
    break
  case 'en':
    await t18SetEnglish()
    break
    // no default. we do not want to override what the user may have selected before.
  }

  // To force a sample exception that is not caught just
  // 1. Get into the EHR pages ...
  // 2. uncomment the following and
  // 3. stop the server
  // await StoreHelper.loadApiData()

  try {
    const { label, icon, zone } = toRoute.meta
    StoreHelper.setPageTitle(label)
    StoreHelper.setPageIcon(icon)
    StoreHelper.setPageZone(zone)
    // call into the api to get and store in memory api data, which includes page title
    perfStat.start.loadApi = performance.now()
    await StoreHelper.loadApiData()
    perfStat.elapsed.loadApi = performance.now() - perfStat.start.loadApi
    document.title = StoreHelper.getAppTitle()
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
      await store.dispatch('mPatientStore/ehrOnlyDemo', demoOnlyKey)

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
    // Start the progress indicator
    StoreHelper.setLoading('page-controller', true)
    let haveDemoToken = !!StoreHelper.getDemoToken() // may change if user is forced out of full demo

    if (optionalVisitId || refreshToken ) {
      if (dbApp) console.log('PC - New auth or visit change --- clear visitData, seedEditId, mPatient, AND is content creator mode')
      /*
      This next line removes the visitStore's visit data, visit id, seed edit id,
      ****** and it clears local storage IS_CONTENT_EDITING ******
      which will then mean _isDevelopingContent is false.
      Is this really what is wanted? To disable content creation mode?
       */
      await store.dispatch('visit/clearVisitData')
      await store.dispatch('mPatientStore/clearMPatientData')
    }

    if (evaluateStudentVisitId) {
      if (dbApp) console.log('PC - on instructor change student ---- clear mPatient')
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
    await FeatureHelper.loadFlags(toolConsumerId)

    // Load the user based on auth message
    const userId = store.getters['authStore/userId']
    await store.dispatch('userStore/load', userId)
    const storedVisitId = store.getters['visit/visitId']
    const authVisitId = store.getters['authStore/visitId']
    let visitId = optionalVisitId || storedVisitId || authVisitId
    await StoreHelper.setVisitId(visitId) //note this stores the visit id to survive page changes and browser refresh
    // dup-in loadInstructorWithStudent
    await store.dispatch('visit/loadVisitRecord')
    // The above load visit record gets visit data including the sim date time.
    // But we also need to initialize sim DT from the merged metaData if needed
    // ... and set this into the visit record.
    // See StoreHelper.initializeSimDateTime which is invoked below once the ehr data is ready

    // dup-in loadInstructorWithStudent
    let theActivity = await store.dispatch('activityStore/loadActivityRecord')
    // need to load course to obtain skills assessment details
    await store.dispatch('courseStore/loadCurrentCourse', { courseId: theActivity.courseId })
    // **** If page is the one that handles unlinked activities then we are done ... EXIT
    if (routeName === UNLINKED_ACTIVITY_ROUTE_NAME) {
      // console.log('UNLINKED_ACTIVITY_ROUTE_NAME --- OKAY? ---finish page change for unlinked activity')
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      return perfExit(perfStat)
      // EXIT
    }

    /*
      FROM HERE ON THE USER IS LOADING AN EHR PAGE
     */

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

    // **** If activity does not have linked LObj then ... push new route EXIT via new route
    if (!theActivity.hasLinkedLearningObject) {
      const autoLink = store.getters['demoStore/autoLinkLobj']
      // console.log('autoLink --------------- autoLink', autoLink)
      if(autoLink && demo_lobjId) {
        theActivity = await StoreHelper.autoLinkDemoLobj(theActivity, demo_lobjId)
      } else {
        if (dbApp) console.log('PC - No assignment for activity', theActivity.id)
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
      }
      if (evaluateStudentVisitId && StoreHelper.isSeedEditing()) {
        if (dbApp) console.log('PC - switch to evaluation student id')
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
        if (dbApp) console.log('PC - dispatch evaluateStudentVisitId to instructor store.')
        await store.dispatch('instructor/changeCurrentEvaluationStudentId', evaluateStudentVisitId)
      }
      if (StoreHelper.isInstructorEvalMode()) {
        // eval mode means user is faculty but is not seed editing.
        // Note that having a patientId is optional.
        if (dbApp) console.log('PC - instructor is evaluation student - set patient id', patientId)
        await MPatientHelper.helpLoadInstructorPatient(patientId)
      }
    }
    if (StoreHelper.isStudent()) {
      /*
      SKILLS ASSESSMENT  --

      If instructor has enabled this mode, for a particular course, then students can only see the
      activities allowed by the instructor.  If a student tries to access one of the inactive
      activities then send them to their course dashboard.  The dashboard will have signage for
      the student to see what is happening.
       */
      const aId = theActivity.id
      const isSkillsAssessmentActive = store.getters['courseStore/skillsAssessmentIsActive']
      if (isSkillsAssessmentActive) {
        const isThisActivityOpen = store.getters['courseStore/skillsIsActivityActive'](aId)
        if (!isThisActivityOpen) {
          const courseId = theActivity.courseId
          // console.log('Student is not allowed to see the activity.', aId, ' Send them to course ', courseId)
          await store.dispatch('activityStore/clearCurrentActivity')
          await router.push({ name: COURSE_ROUTE_NAME, query: { courseId: courseId, redirect: 'true' }})
        }
      }
      /*
        Special case clean up ----
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
      /*
      STUDENT PAGE LOAD FOR EHR PAGES
       */
      if (dbApp) console.log('student ehr page load')
      // loadActivityData gets both the activityData and the student's assignment data with the patient list
      await store.dispatch('activityDataStore/loadActivityData', { id: theActivity.activityDataId })
      // load the Learning Object .... (formerly called an 'assignment')
      await store.dispatch('assignmentStore/load', theActivity.learningObjectId)
      let pId = determineCurrentPatientId(optionalVisitId, patientId)
      if (pId) {
        // console.log('PageContr found patient id', pId)
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

    // set up the visit record with the DT from the ehr data, if needed.  Do this here because the ehrDate is now ready.
    const newPatient = !!patientId || !!seedEditId || !!evaluateStudentVisitId
    if (newPatient) {
      if (dbApp) console.log('PC - newPatient so initialize simDateTime')
      await StoreHelper.initializeSimDateTime()
    }

    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  } catch (err) {
    // IF DEVELOPMENT ON LOCALHOST .... show the stack trace for speedier location of error
    if (window.location.origin.includes('localhost')) console.log('stack:', err.stack)
    // TODO check how we handle expired auth tokens
    let msg = err.message || err
    if (err.response) {
      console.log('PageController err.response', err.response)
      const { data, statusText } = err.response
      msg += '. ' + statusText
      msg += '. ' + data
    }
    StoreHelper.setApiError(msg)
    if (routeName !== ERROR_ROUTE_NAME) {
      console.log('going to error page')
      await router.push({ name: ERROR_ROUTE_NAME, query: { ts: Date.now() }})
    }
  } finally {
    StoreHelper.setLoading('page-controller', false)
  }
  return perfExit(perfStat)
  // EXIT
}

export default  onPageChange
