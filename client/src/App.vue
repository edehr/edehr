<template>
  <div id="app" :class="appCssClass">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import { getIncomingParams, setApiError } from './helpers/ehr-utils'
import EventBus from './helpers/event-bus'
import { Text } from './helpers/ehr-text'
import sKeys from './helpers/session-keys'
import StoreHelper from './helpers/store-helper'
import { PAGE_DATA_REFRESH_EVENT } from './helpers/event-bus'
import { setAuthHeader } from './helpers/axios-helper'
const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      hasLoaded: false
    }
  },
  methods: {
    loadData: async function () {
      const debugApp = false
      let params2 = getIncomingParams()
      StoreHelper.setLoading(null, true)
      // API return to url
      const apiUrl = params2['apiUrl'] || sessionStorage.getItem(sKeys.API_URL)
      const refreshToken = params2['token']
      let visitId = ''
      const authToken = StoreHelper.getAuthToken()
      return Promise.resolve()
        .then(() => {
          if (!(apiUrl || sessionStorage.getItem(sKeys.API_URL))) {
            return Promise.reject('Please provide the API\'s url')
          }
        })
        .then(() => {
          if (refreshToken) {
            return StoreHelper.fetchToken(refreshToken, apiUrl)
              .then(() => {
                const token = StoreHelper.getAuthToken()
                if (!token) {
                  return Promise.reject('Refresh token is expired')
                } else {
                  return StoreHelper.fetchTokenData(token, apiUrl)
                }
              })
          } else if (authToken) {
            setAuthHeader()
            return StoreHelper.fetchTokenData(authToken, apiUrl)
          } else {
            return Promise.reject('Parameters Error')
          }
        })
        .then(() => {
          return StoreHelper.getAuthPayload()
        })
        .then((payload) => {
          if (!payload) {
            return Promise.reject('Error when fetching token data')
          } else {
            visitId = payload.visitId
          }
        })
        .then(() => {
          return this._loadApiUrl(apiUrl)
        })
        .then(() => {
          // let visitId = params2['visit'] || visitId
          if (visitId) {
            return StoreHelper.clearSession().then( () => { return visitId })
          } else {
            return StoreHelper.restoreSession().then( (vid) => { return vid })
          }
        }).then((visitId) => {
          if (visitId) {
            return StoreHelper.loadVisitRecord(visitId)
          } else {
            // TODO here is where the demo mode needs to kick in. Consider setting a "demo" visit idsendAssignmentDataUpdate
            setApiError(Text.MISSING_VISIT_ID)
            return Promise.reject(Text.MISSING_VISIT_ID)
          }
        }).then(() => {
          if (StoreHelper.isInstructor()) {
            return StoreHelper.loadInstructor2()
          } else if (StoreHelper.isStudent()) {
            return StoreHelper.loadStudent2()
          }
        }).then(() => {
          // move this to helper
          StoreHelper.setLoading(null, false)
          if (debugApp) console.log('App DONE loading. Send event', PAGE_DATA_REFRESH_EVENT)
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
        })
        .catch(err => {
          alert(err + '\nSystem Error')
        })
    },

    /**
     * This client expects the API server to provide the url to call
     * back into the server.  This avoids the need to have client side configuration
     * that has to be kept in sync with the server side configuration.  It means
     * this client can be the front end for any backend because there are no connections
     * other than what is provided by this API Url
     * @param apiUrl
     * @return {Promise<void>}
     * @private
     */
    _loadApiUrl (apiUrl) {
      let db = false
      return new Promise((resolve, reject) => {
        if (apiUrl) {
          if (db) console.log('API url provided in query: ', apiUrl)
        } else {
          if (db) console.log('No API url in query')
          apiUrl = sessionStorage.getItem(sKeys.API_URL)
          if (db) console.log('Can we use API URL from local storage', apiUrl)
          if (!apiUrl) {
            setApiError(Text.MISSING_API_URL)
            return reject(msg)
          }
        }
        if (db) console.log('Store API URL in $store (also stores to local storage)', apiUrl)
        this.$store.commit('visit/apiUrl', apiUrl)
        resolve(apiUrl)
      })
    },
    reloadInstructor: function () {
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    appCssClass () {
      let css = []
      if (this.$store.state.visit.isStudent) {
        css.push('isStudentClass')
      }
      // if (this.$store.state.visit.isInstructor) {
      if (this.$store.getters['visit/isInstructor']) {
        css.push('isInstructorClass')
      }
      return css.join(' ')
    },
    // userInfo () {
    //   return this.$store.state.sUserInfo
    // },
    // currentVisit () {
    //   return this.$store.state.sVisitInfo
    // }
  },
  watch: {
    $route: function (route) {
      let params2 = getIncomingParams()
      const apiUrl = params2['apiUrl'] || sessionStorage.getItem(sKeys.API_URL)
      if((!route.meta.public && !this.hasLoaded) && apiUrl) {
        this.loadData()
        this.hasLoaded = true
      }
    }
  }
}
</script>

<style lang="scss"></style>
