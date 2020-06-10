<template>
  <div id="app" :class="appCssClass">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import EventBus from './helpers/event-bus'
import { Text } from './helpers/ehr-text'
import StoreHelper from './helpers/store-helper'
import { PAGE_DATA_REFRESH_EVENT, PAGE_DATA_READY_EVENT } from './helpers/event-bus'
import { setAuthHeader } from './helpers/axios-helper'
const DefaultLayout = 'outside'

const debugApp = false

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      hasLoadedEhrPage: false
    }
  },
  methods: {
    loadData: async function () {
      if(debugApp) console.log('App begin loadData')

      // Load the demo data if its present and then return
      if(StoreHelper.getDemoToken()) {
        if(debugApp) console.log('App load the demo data')
        return StoreHelper.loadDemoData()
          .then(() => {
            EventBus.$emit(PAGE_DATA_READY_EVENT)
          })
      }

      // OK now see if we are handling a new LTI request or we've seen one before
      const refreshToken = this.$route.query.token
      const authToken = StoreHelper.getAuthToken()
      const isUser = refreshToken || authToken
      if (!isUser) {
        return Promise.resolve()
      }

      // else .... load
      StoreHelper.setLoading(null, true)
      let visitId = ''
      let apiUrl = ''
      return Promise.resolve()
        .then((/* ********   LOAD API URL  *************  */) => {
          apiUrl = this.$route.query.apiUrl || StoreHelper.apiUrl()
          if (!apiUrl) {
            const msg = Text.MISSING_API_URL
            StoreHelper.setApiError(msg)
            return Promise.reject(msg)
          }
          if(debugApp) console.log('App store the API URL', apiUrl)
          return StoreHelper.apiUrlSet(apiUrl)
        })
        .then((/* ******** AUTH TOKEN  *************  */) => {
          if (refreshToken) {
            /* ********   NEW CONNECTION  *************  */
            if(debugApp) console.log('App refresh token fetch')
            return StoreHelper.fetchAndStoreAuthToken(refreshToken, apiUrl)
              .then((token) => {
                if (!token) {
                  /* ********   AUTH PROCESS DID NOT WORK -- SYSTEM ERROR?  *************  */
                  // Todo should this condition be a system error?
                  if(debugApp) console.log('App refresh token expired')
                  return Promise.reject(Text.EXPIRED_REFRESH_TOKEN)
                }
                /* ******** NEW CONNECTION SUCCEEDED *************  */
                return StoreHelper.fetchTokenData(token, apiUrl)
              }).catch(err => {
                if (
                  err.response.status === 401  &&
                  err.response.data.toLowerCase().includes('expired') &&
                  !!authToken
                ) {
                  /* ******** REFRESH TOKEN IS OLD -- BUT PREVIOUS CONNECTION EXISTS *************  */
                  if(debugApp) console.log('App refresh expired but we have a previous auth token. Use it')
                  setAuthHeader(authToken)
                  return StoreHelper.fetchTokenData(authToken, apiUrl)
                } else {
                  /* ******** AUTH PROCESS TOOK TOO LONG - SYS ERR?  *************  */
                  if(debugApp) console.log('App refresh expired and no previous token')
                  return Promise.reject(Text.EXPIRED_TOKEN(err))
                }
              })
          } else if (authToken) {
            /* ******** USE PREVIOUS CONNECTION *************  */
            if(debugApp) console.log('App use stored auth token')
            setAuthHeader(authToken)
            return StoreHelper.fetchTokenData(authToken, apiUrl)
          }  else {
            if(debugApp) console.log('App no auth token, no refresh token', Text.PARAMETERS_ERROR)
            return Promise.reject(Text.PARAMETERS_ERROR)
          }
        })
        .then((/* ********  LOAD USER DATA FROM TOKEN  *************  */) => {
          if(debugApp) console.log('App tokens processed get auth data')
          const payload = StoreHelper.getAuthData()
          if (!(payload && payload.visitId)) {
            if(debugApp) console.log('App no auth data', Text.TOKEN_FETCHING_ERROR)
            return Promise.reject(Text.TOKEN_FETCHING_ERROR)
          } else {
            if(debugApp) console.log('App have auth data and visit id', payload)
            visitId = payload.visitId
          }
        })
        .then((/* ********   CLEAR PREVIOUS SESSION  *************  */) => {
          if(debugApp) console.log('App clear previous session and start with visit id')
          return StoreHelper.clearSession().then( () => { return visitId })
        }).then((/* ********   LOAD VISIT DATA  *************  */) => {
          if(debugApp) console.log('App load visit record')
          return StoreHelper.loadVisitRecord(visitId)
        })
        .then((/* ********   LOAD STUDENT OR INSTRUCTOR  *************  */) => {
          if (StoreHelper.isInstructor()) {
            if(debugApp) console.log('App load instructor')
            return StoreHelper.loadInstructor2()
          } else if (StoreHelper.isStudent()) {
            if(debugApp) console.log('App load student')
            return StoreHelper.loadStudent2()
          }
        }).then((/* ********  DONE  *************  */) => {
          // move this to helper
          StoreHelper.setLoading(null, false)
          if (debugApp) console.log('App DONE loading. Send event', PAGE_DATA_REFRESH_EVENT)
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
        })
        .catch(err => {
          StoreHelper.setLoading(null, false)
          this.$router.push('/')
          StoreHelper.setApiError(err + '. System Error')
        })
    },

    loadDataIfNotLoaded (route) {
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
          this.loadData()
          this.hasLoadedEhrPage = true
        }
      } else {
        this.loadData()
        this.hasLoadedEhrPage = false
      }
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    appCssClass () {
      let css = []
      if (StoreHelper.isStudent()) {
        css.push('isStudentClass')
      }
      if (StoreHelper.isInstructor()) {
        css.push('isInstructorClass')
      }
      return css.join(' ')
    },
  },
  watch: {
    $route: function (route) {
      this.loadDataIfNotLoaded(route)
    }
  }
}
</script>

<style lang="scss"></style>
