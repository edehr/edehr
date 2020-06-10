import config from '../../config'
import EventBus from './event-bus'
import StoreHelper from './store-helper'
import router from '../router'
import { setAuthHeader } from './axios-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from './event-bus'
import { Text } from './ehr-text'

const debugApp = true

class PageControllerInner {
  constructor () {
    this.hasLoadedEhrPage = false
  }

  onPageChange (route) {
    /*
    We do not need to reload the app as the user navigates around the EHR pages
     */
    if (debugApp) console.log('App loadDataIfNotLoaded', route.meta)
    const EHR_ZONE = 'ehr'
    // const ZONE_ADMIN = 'admin'
    // const ZONE_LMS = 'lms'
    // const ZONE_PUBLIC = 'public'
    if((route.meta.zone == EHR_ZONE)) {
      if(!this.hasLoadedEhrPage) {
        this.loadData(route)
        this.hasLoadedEhrPage = true
      }
    } else {
      this.loadData(route)
      this.hasLoadedEhrPage = false
    }
  }

  async loadData (route) {
    if(debugApp) console.log('App LD begin loadData')
    StoreHelper.apiUrlSet(config.apiUrl)
    if (route.query.apiUrl) {
      StoreHelper.apiUrlSet(route.query.apiUrl)
    }
    const demoToken = StoreHelper.getDemoToken()
    const refreshToken = route.query.token
    const authToken = StoreHelper.getAuthToken()
    const isDemo = !! demoToken
    const isUser = refreshToken || authToken

    // Load the demo data if its present and then return
    if(isDemo) {
      if(debugApp) console.log('App LD load the demo data')
      await StoreHelper.loadDemoData()
      if (!isUser) {
        if(debugApp) console.log('App LD load no user data so return and refresh')
        EventBus.$emit(PAGE_DATA_READY_EVENT)
        return Promise.resolve()
      }
    }

    // OK now see if we are handling a new LTI request or we've seen one before
    if (!isUser) {
      return Promise.resolve()
    }

    // else .... load
    StoreHelper.setLoading(null, true)
    let visitId = ''


    return Promise.resolve()
      .then((/* ******** AUTH TOKEN  *************  */) => {
        if (refreshToken) {
        /* ********   NEW CONNECTION  *************  */
          if(debugApp) console.log('App LD refresh token fetch')
          return StoreHelper.fetchAndStoreAuthToken(refreshToken)
            .then((token) => {
              if (!token) {
                /* ********   AUTH PROCESS DID NOT WORK -- SYSTEM ERROR?  *************  */
                // Todo should this condition be a system error?
                if(debugApp) console.log('App LD refresh token expired')
                return Promise.reject(Text.EXPIRED_REFRESH_TOKEN)
              }
              /* ******** NEW CONNECTION SUCCEEDED *************  */
              return StoreHelper.fetchTokenData(token)
            }).catch(err => {
              if (
                err.response.status === 401  &&
            err.response.data.toLowerCase().includes('expired') &&
            !!authToken
              ) {
                /* ******** REFRESH TOKEN IS OLD -- BUT PREVIOUS CONNECTION EXISTS *************  */
                if(debugApp) console.log('App LD refresh expired but we have a previous auth token. Use it')
                setAuthHeader(authToken)
                return StoreHelper.fetchTokenData(authToken)
              } else {
                /* ******** AUTH PROCESS TOOK TOO LONG - SYS ERR?  *************  */
                if(debugApp) console.log('App LD refresh expired and no previous token')
                return Promise.reject(Text.EXPIRED_TOKEN(err))
              }
            })
        } else if (authToken) {
        /* ******** USE PREVIOUS CONNECTION *************  */
          if(debugApp) console.log('App LD use stored auth token',authToken)
          setAuthHeader(authToken)
          return StoreHelper.fetchTokenData(authToken)
        }  else {
          if(debugApp) console.log('App LD no auth token, no refresh token', Text.PARAMETERS_ERROR)
          return Promise.reject(Text.PARAMETERS_ERROR)
        }
      })
      .then((/* ********  LOAD USER DATA FROM TOKEN  *************  */) => {
        if (debugApp) console.log('App LD tokens processed get auth data')
        return StoreHelper.getAuthData()
      })
      .then((payload) => {
        if (!(payload && payload.visitId)) {
          if(debugApp) console.log('App LD no auth data', payload,  Text.TOKEN_FETCHING_ERROR)
          return Promise.reject(Text.TOKEN_FETCHING_ERROR)
        } else {
          if(debugApp) console.log('App LD have auth data and visit id', payload)
          visitId = payload.visitId
        }
        StoreHelper.clearSession().then( () => { return visitId })
        return StoreHelper.loadVisitRecord(visitId)
      })
      .then((/* ********   LOAD STUDENT OR INSTRUCTOR  *************  */) => {
        if (StoreHelper.isInstructor()) {
          if(debugApp) console.log('App LD load instructor')
          return StoreHelper.loadInstructor2()
        } else if (StoreHelper.isStudent()) {
          if(debugApp) console.log('App LD load student')
          return StoreHelper.loadStudent2()
        }
      }).then((/* ********  DONE  *************  */) => {
      // move this to helper
        StoreHelper.setLoading(null, false)
        if (debugApp) console.log('App LD DONE loading. Send event', PAGE_DATA_REFRESH_EVENT)
        EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
      })
      .catch(err => {
        StoreHelper.setLoading(null, false)
        router.push('/')
        StoreHelper.setApiError(err + '. System Error')
      })
  }

}
const PageController = new PageControllerInner()
export default PageController