<template>
  <div id="app" :class="appCssClass">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import { setApiError } from './helpers/ehr-utils'
import EventBus from './helpers/event-bus'
import { Text } from './helpers/ehr-text'
import StoreHelper from './helpers/store-helper'
import { PAGE_DATA_REFRESH_EVENT } from './helpers/event-bus'
import { setAuthHeader } from './helpers/axios-helper'
const DefaultLayout = 'outside'

const debugApp = true

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
    }
  },
  methods: {
    loadData: async function () {
      StoreHelper.setLoading(null, true)
      if(debugApp) console.log('App begin loadData')
      // API return to url
      const refreshToken = this.$route.query.token
      let visitId = ''
      const authToken = StoreHelper.getAuthToken()
      let apiUrl = ''
      return Promise.resolve()
        .then(() => {
          apiUrl = this.$route.query.apiUrl || StoreHelper.apiUrl()
          if (!apiUrl) {
            const msg = Text.MISSING_API_URL
            setApiError(msg)
            return Promise.reject(msg)
          }
          if(debugApp) console.log('App store the API URL', apiUrl)
          return StoreHelper.apiUrlSet(apiUrl)
        })
        .then(() => {
          if (refreshToken) {
            if(debugApp) console.log('App refresh token fetch')
            return StoreHelper.fetchAndStoreAuthToken(refreshToken, apiUrl)
              .then((token) => {
                if (!token) {
                  if(debugApp) console.log('App refresh token expired')
                  return Promise.reject(Text.EXPIRED_REFRESH_TOKEN)
                }
                return StoreHelper.fetchTokenData(token, apiUrl)
              }).catch(err => {
                if (
                  err.response.status === 401  &&
                  err.response.data.toLowerCase().includes('expired') &&
                  !!authToken
                ) {
                  if(debugApp) console.log('App refresh expired but we have a previous auth token. Use it')
                  setAuthHeader(authToken)
                  return StoreHelper.fetchTokenData(authToken, apiUrl)
                } else {
                  if(debugApp) console.log('App refresh expired and no previous token')
                  return Promise.reject(Text.EXPIRED_TOKEN(err))
                }
              })
          } else if (authToken) {
            if(debugApp) console.log('App use stored auth token')
            setAuthHeader(authToken)
            return StoreHelper.fetchTokenData(authToken, apiUrl)
          }  else {
            if(debugApp) console.log('App not auth token, no refresh token', Text.PARAMETERS_ERROR)
            return Promise.reject(Text.PARAMETERS_ERROR)
          }
        })
        .then(() => {
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
        .then(() => {
          if(debugApp) console.log('App clear previous session and start with visit id')
          return StoreHelper.clearSession().then( () => { return visitId })
        }).then(() => {
          if(debugApp) console.log('App load visit record')
          return StoreHelper.loadVisitRecord(visitId)
        })
        .then(() => {
          if (StoreHelper.isInstructor()) {
            if(debugApp) console.log('App load instructor')
            return StoreHelper.loadInstructor2()
          } else if (StoreHelper.isStudent()) {
            if(debugApp) console.log('App load student')
            return StoreHelper.loadStudent2()
          }
        }).then(() => {
          // move this to helper
          StoreHelper.setLoading(null, false)
          if (debugApp) console.log('App DONE loading. Send event', PAGE_DATA_REFRESH_EVENT)
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
        })
        .catch(err => {
          StoreHelper.setLoading(null, false)
          this.$router.push('/')
          setApiError(err + '. System Error')
        })
    },

    loadDataIfNotLoaded (route) {
      if (debugApp) console.log('App loadDataIfNotLoaded', route.meta)
      //if(!route.meta.public) {
      this.loadData()
      //}
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
