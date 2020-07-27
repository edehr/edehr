import config from '../../config'
import EventBus from './event-bus'
import StoreHelper from './store-helper'
import router from '../router'
import { setAuthHeader } from './axios-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from './event-bus'
import { Text } from './ehr-text'

const debugApp = false

function dblog (msg, ...args) {
  if (debugApp) {
    if (args.length > 0)
      console.log(msg,...args)
    else
      console.log(msg)
  }
}

class PageControllerInner {
  constructor () {
    dblog('App PageController constructor')
    this.hasLoadedData = false
  }

  async onPageChange (route) {
    dblog('App onPageChange', route.meta)
    try {
      if (route.name === 'demo') {
        dblog('Page onPageChange going to demo page so "log the user out" of EHR whether the user came from an LMS or from the demo')
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
    const apiUrl = route.query.apiUrl ?  route.query.apiUrl : config.apiUrl
    dblog('App _loadData. Store the api url', apiUrl, route.query.apiUrl ?  'from the route' : 'from the config')
    StoreHelper.apiUrlSet(apiUrl)

    const demoToken = StoreHelper.getDemoToken()
    const isDemo = !!demoToken

    const refreshToken = route.query.token
    const authToken = StoreHelper.getAuthToken()
    const isUser = refreshToken || authToken

    if (isDemo) {
      dblog('App _loadData load demo data')
      await StoreHelper.loadDemoData()
      if (!isUser) {
        dblog('App _loadData user is not yet visiting the EHR pages so page load is complete')
        EventBus.$emit(PAGE_DATA_READY_EVENT)
        return
      }
    }

    if (!isUser) {
      dblog('App _loadData page is not a demo page nor is the user visiting the core EdEHR pages.',
        'They must be visiting a public page. No further loading needed')
      return
    }

    dblog('App _loadData load user authorization data')
    await this._loadAuth(refreshToken, authToken)

    if (!this.hasLoadedData) {

      let visitId = await this._getVisitId()

      await this._loadEhr(visitId)
    }

    dblog('App _loadData DONE. Send event', PAGE_DATA_REFRESH_EVENT)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }

  async _loadAuth (refreshToken, authToken) {
    if (refreshToken) {
      dblog('App _loadAuth refresh token fetch')
      await this._ltiAccess(refreshToken, authToken)
      this.hasLoadedData = false
    } else if (authToken) {
      if (!this.hasLoadedData) {
        dblog('App _loadAuth. User is refreshing their browser. We have an existing auth token. Get the auth data....')
        StoreHelper.setLoading(null, true)
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
        StoreHelper.setLoading(null, false)
      }
    } else {
      dblog('App _loadAuth. User can not proceed. There is no refresh nor previous auth token.')
      throw new Error(Text.PARAMETERS_ERROR)
    }
  }

  async _ltiAccess (refreshToken, authToken) {
    StoreHelper.setLoading(null, true)
    dblog('App _ltiAccess take the refresh, convert to auth token.')
    let token = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
    if (!token) {
      dblog('App _ltiAccess the refresh token failed. Perhaps this is a SYSTEM ERROR?')
      throw new Error(Text.EXPIRED_REFRESH_TOKEN)
    }
    /* ******** NEW CONNECTION SUCCEEDED *************  */
    try {
      dblog('App _ltiAccess take the newly provided auth token, store it and fetch the auth data.')
      await StoreHelper.fetchTokenData(token)
    }
    catch (err) {
      if (err.response.status === 401 && err.response.data.toLowerCase().includes('expired') && !!authToken) {
        dblog('App _ltiAccess the refresh token expired but we have a previous auth token (user is refreshing browser).')
        setAuthHeader(authToken)
        await StoreHelper.fetchTokenData(authToken)
      } else {
        dblog('App _ltiAccess refresh token is expired and there is no previous token. User can not proceed.')
        throw new Error(Text.EXPIRED_TOKEN(err))
      }
    }
    StoreHelper.setLoading(null, false)
  }

  async _loadEhr (visitId) {
    dblog('App _loadEhr')
    StoreHelper.setLoading(null, true)
    StoreHelper.clearSession()
    await StoreHelper.loadVisitRecord(visitId)
    dblog('App _loadEhr clear away any previous ehr settings. Load visitId', visitId, 'as ...')
    if (StoreHelper.isInstructor()) {
      dblog('App _loadEhr load instructor')
      await StoreHelper.loadInstructor2()
    } else if (StoreHelper.isStudent()) {
      dblog('App _loadEhr load student')
      await StoreHelper.loadStudent2()
    }
    StoreHelper.setLoading(null, false)
  }


  async _getVisitId () {
    dblog('App _getVisitId')
    StoreHelper.setLoading(null, true)
    let payload = await StoreHelper.getAuthData()
    if (!(payload && payload.visitId)) {
      dblog('App _getVisitId no auth data', payload, Text.TOKEN_FETCHING_ERROR)
      throw new Error(Text.TOKEN_FETCHING_ERROR)
    }
    dblog('App _getVisitId', payload)
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
