
import EventBus from './event-bus'
import StoreHelper from './store-helper'
import router from '../router'
import { routeIsEHR }  from '../router'
import { setAuthHeader } from './axios-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from './event-bus'
import { Text } from './ehr-text'

const debugApp = false

function dblog (msg, ...args) {
  if (debugApp) {
    if (args.length > 0)
      console.log('App', msg,...args)
    else
      console.log('App', msg)
  }
}

class PageControllerInner {
  constructor () {
    this.hasLoadedData = false
  }

  /**
   * onPageChange is onvoked from main.js whenever a route has changed.
   * @param route - the 'to' route. We can get the 'from' if needed.
   * @return {Promise<unknown>}
   */
  async onPageChange (route) {
    dblog('onPageChange', route.meta)
    const {seedEditId, evaluatingStudent, lti} = route.query || {}
    if(seedEditId) {
      // New approach to be sure seed editor can refresh their browser while editing a see.
      dblog('User is editing seed. Stash state for possible page refresh', seedEditId)
      StoreHelper.setSeedEditId(seedEditId)
    }
    else if (evaluatingStudent) {
      /*
      The use of query parameters is new and changes the approach we can take to managing the
      flow of page loading.  At this point the focus is to use the query parameters to load
      seed for seed editing. Later can refactor the management of instructor and student visits
       */
      StoreHelper.setSeedEditId('')
      dblog('User is an instructor evaluatingStudent >> ', evaluatingStudent)
    }
    else if (lti) {
      const userType = lti
      // lti holds 'student', 'instructor' , or 'unknown'
      // lti comes from the server (see lti controller)
      StoreHelper.setSeedEditId('')
      dblog('User coming in via LTI. userType',userType)
    }
    else if (routeIsEHR(route)) {
      dblog('In app page change.')
      const { viewSeed } = route.query
      if (viewSeed) {
        console.error('To do, restore the readonly viewing of seed feature')
        // this.setReadOnlyInstructor(true)
        // StoreHelper.setIsReadOnlyInstructor(isReadOnly)
      }
    } else {
      dblog('User not in the EHR so clear any active seed editing ids')
      StoreHelper.setSeedEditId('')
    }

    try {
      if (route.name === 'demo') {
        dblog('going to demo page so "log the user out" of EHR whether the user came from an LMS or from the demo')
        await StoreHelper.logUserOutOfEdEHR()
      }
      return this._loadData(route)
        .then(() => {
        // the page has loaded and any following page change can skip most of the work.
          this.hasLoadedData = true
        })
    }
    catch(err) {
      StoreHelper.setLoading(null, false)
      router.push('/')
      StoreHelper.setApiError(err + '. System Error')
    }

  }

  async _loadData (route) {
    const demoToken = StoreHelper.getDemoToken()
    const isDemo = !!demoToken

    // The LTI service provides a token in the query. We send this back to our preconfigured api server to verify the
    // incoming request and to get the actual token this client will use.  This two step token verification process
    // makes sure the incoming request is from the expected api server and no-where else.
    const refreshToken = route.query.token
    // if there is no token in the query then use any stashed token.
    const authToken = StoreHelper.getAuthToken()
    // if we have either token then we have an LTI user who wants into the app.
    const isUser = refreshToken || authToken

    await StoreHelper.loadApiData()
    document.title = StoreHelper.getAppTitle ()

    if (isDemo) {
      dblog('_loadData load demo data')
      await StoreHelper.loadDemoData()
      if (!isUser) {
        dblog('_loadData user is not yet visiting the EHR pages so page load is complete')
        EventBus.$emit(PAGE_DATA_READY_EVENT)
        return
      }
    }

    if (!isUser) {
      dblog('_loadData not a demo page not LTI. User is visiting a public page. No further loading needed')
      return
    }

    dblog('_loadData load user authorization data')
    //  Will now do the LTI auth. This results in a lot of data from the server and this data will be
    // be pushed into the storage.s
    await this._loadAuth(refreshToken, authToken)

    if (!this.hasLoadedData) {
      let visitId = await this._getVisitId()
      await this._loadEhr(visitId)
    }

    dblog('_loadData DONE. Send event', PAGE_DATA_REFRESH_EVENT)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }

  async _loadAuth (refreshToken, authToken) {
    if (refreshToken) {
      dblog('_loadAuth refresh token fetch')
      await this._ltiAccess(refreshToken, authToken)
      this.hasLoadedData = false
    } else if (authToken) {
      if (!this.hasLoadedData) {
        dblog('_loadAuth. User is refreshing their browser. We have an existing auth token. Get the auth data....')
        StoreHelper.setLoading(null, true)
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
        StoreHelper.setLoading(null, false)
      }
    } else {
      dblog('_loadAuth. User can not proceed. There is no refresh nor previous auth token.')
      throw new Error(Text.PARAMETERS_ERROR)
    }
  }

  async _ltiAccess (refreshToken, authToken) {
    StoreHelper.setLoading(null, true)
    dblog('_ltiAccess take the refresh, convert to auth token. Store the new token.')
    let token = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
    if (!token) {
      dblog('_ltiAccess the refresh token failed. Perhaps this is a SYSTEM ERROR?')
      throw new Error(Text.EXPIRED_REFRESH_TOKEN)
    }
    /* ******** NEW CONNECTION SUCCEEDED *************  */
    try {
      dblog('_ltiAccess take the new token, get the server to validate and provide the data inside. Store the data')
      await StoreHelper.fetchTokenData(token)
    }
    catch (err) {
      console.error('PageController error', err)
      if (err.response.status === 401 && err.response.data.toLowerCase().includes('expired') && !!authToken) {
        dblog('_ltiAccess the refresh token expired but we have a previous auth token (user is refreshing browser).')
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
      } else {
        dblog('_ltiAccess refresh token is expired and there is no previous token. User can not proceed.')
        throw new Error(Text.EXPIRED_TOKEN(err))
      }
    }
    StoreHelper.setLoading(null, false)
  }

  async _loadEhr (visitId) {
    dblog('_loadEhr')
    StoreHelper.setLoading(null, true)
    dblog('_loadEhr loadVisitRecord', visitId )
    await StoreHelper.loadVisitRecord(visitId)
    if (StoreHelper.isSeedEditing()) {
      dblog('_loadEhr load seed editing')
      await StoreHelper.loadSeedEditor()
    }
    else if (StoreHelper.isInstructor()) {
      dblog('_loadEhr load instructor')
      await StoreHelper.loadInstructor2()
    } else if (StoreHelper.isStudent()) {
      dblog('_loadEhr load student')
      await StoreHelper.loadStudent2()
    }
    StoreHelper.setLoading(null, false)
  }


  async _getVisitId () {
    dblog('_getVisitId')
    StoreHelper.setLoading(null, true)
    let payload = await StoreHelper.getAuthData()
    if (!(payload && payload.visitId)) {
      dblog(' _getVisitId no auth data', payload, Text.TOKEN_FETCHING_ERROR)
      throw new Error(Text.TOKEN_FETCHING_ERROR)
    }
    dblog('_getVisitId', payload)
    StoreHelper.setLoading(null, false)
    return payload.visitId
  }

  handleError (err, customRouter = router) {
    StoreHelper.setLoading(null, false)
    customRouter.push('/')
    StoreHelper.setApiError(err + '. System Error')
  }
}
const PageController = new PageControllerInner()
export default PageController
