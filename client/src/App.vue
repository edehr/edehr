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
      StoreHelper.setLoading(null, true)
      // API return to url
      const refreshToken = this.$route.query.token
      let visitId = ''
      const authToken = StoreHelper.getAuthToken()
      return Promise.resolve()
        .then(() => {
          const apiUrl = this.$route.query.apiUrl || StoreHelper.apiUrl()
          if (!apiUrl) {
            const msg = Text.MISSING_API_URL
            setApiError(msg)
            return Promise.reject(msg)
          }
          if(debugApp) console.log('Store the API URL', apiUrl)
          StoreHelper.apiUrlSet(apiUrl)
        })
        .then(() => {
          if (refreshToken) {
            return StoreHelper.fetchAndStoreAuthToken(refreshToken, apiUrl)
              .then(() => {
                const token = StoreHelper.getAuthToken()
                if (!token) {
                  return Promise.reject('Refresh token is expired')
                }
                return StoreHelper.fetchTokenData(token, apiUrl)
              })
          } else {
            if (!authToken) {
              return Promise.reject('Parameters Error')
            } else {
              setAuthHeader()
              return StoreHelper.fetchTokenData(authToken, apiUrl)
            }
          }
        })
        .then(() => {
          return StoreHelper.getAuthPayload()
        })
        .then((payload) => {
          if (!(payload && payload.visitId)) {
            return Promise.reject('Error when fetching token data')
          } else {
            visitId = payload.visitId
          }
        })
        .then(() => {
          return StoreHelper.clearSession().then( () => { return visitId }) 
        }).then(() => { 
          return StoreHelper.loadVisitRecord(visitId)
        })
        .then(() => {
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
          StoreHelper.setLoading(null, false)
          this.$router.push('/')
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
  },
  watch: {
    $route: function (route) {
      if((!route.meta.public && !this.hasLoaded)) {
        this.loadData()
        this.hasLoaded = true
      }
    }
  }
}
</script>

<style lang="scss"></style>
