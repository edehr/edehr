<template>
  <div id="app" :class="appCssClass">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import { getIncomingParams, setApiError } from './helpers/ehr-utils'
import EventBus from './helpers/event-bus'
import { Text } from './helpers/ehr-text'
import StoreHelper from './helpers/store-helper'
import { PAGE_DATA_REFRESH_EVENT } from './helpers/event-bus'
const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    loadData: function () {

      let params2 = getIncomingParams()
      // API return to url
      let apiUrl = params2['apiUrl']
      let visitId = params2['visit']
      let restoring = false
      this.$store.commit('system/setLoading', true)

      let usingV2 = localStorage.getItem('usingV2') || false
      console.log('App load localStorage  using v2', usingV2)
      // if (usingV2) {
      this.$store.commit('system/setUseV2', usingV2)
      // }

      const debugApp = false

      const _this = this
      _this
        ._loadApiUrl(apiUrl)
        .then(() => {
          if (!visitId) {
            restoring = true
            visitId = localStorage.getItem('token')
            if (debugApp) console.log('No visit id on query so checked local storage --> ', visitId)
          }
          if (visitId) {
            if (debugApp) console.log('Dispatch the load visit information', visitId)
            return this.$store.dispatch('visit/loadVisitInfo', visitId)
          } else {
            setApiError(Text.MISSING_VISIT_ID)
            return Promise.reject(Text.MISSING_VISIT_ID)
          }
        })
        .then(() => {
          let isDev = StoreHelper.isDeveloper(this)
          if (debugApp) console.log('Is user is allowed to edit content?',isDev)
          if (isDev) {
            if (debugApp) console.log('User is allowed to edit content')
            return _this._loadDeveloping(restoring)
          }
        })
        .then(() => {
          let isIns = _this.$store.getters['visit/isInstructor']
          if (debugApp) console.log('Is user an instructor?', isIns)
          if (isIns) {
            return _this.$store.dispatch('instructor/loadCourses').then(() => {
              if (debugApp) console.log('Page load instructor restoring?', restoring)
              if (restoring) {
                return _this.reloadInstructor()
              }
            })
          }
        })
        .then(() => {
          this.$store.commit('system/setLoading', false)
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
          if (debugApp) console.log('App DONE loading now.')
        })
        .catch(err => {
          alert(err + '\nSystem Error')
        })
    },
    _loadDeveloping (restoring) {
      return new Promise((resolve, reject) => {
        if (!restoring) {
          return resolve()
        }
        // console.log('Restore indicator says the user is refreshing page')
        let isDevelopingContent = 'true' === localStorage.getItem('isDevelopingContent')
        let seedId = localStorage.getItem('seedId')
        // console.log(`App local storage idDevCon ${isDevelopingContent} seedId ${seedId}`)
        if (isDevelopingContent && seedId) {
          // console.log('User is developing content with seed id', seedId)
          this.$store.commit('visit/setIsDevelopingContent', isDevelopingContent)
          this.$store.commit('seedStore/setSeedId', seedId)
          this.$store.dispatch('seedStore/loadSeedContent').then(() => {
            resolve()
          })
        } else {
          return resolve()
        }
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
      let db = true
      return new Promise((resolve, reject) => {
        if (apiUrl) {
          if (db) console.log('API url provided in query: ', apiUrl)
        } else {
          if (db) console.log('No API url in query')
          apiUrl = localStorage.getItem('apiUrl')
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
      // console.log('Page load and restore instructor')
      const _this = this
      let rUrl = localStorage.getItem('sInstructorReturnUrl')
      if (rUrl) {
        // console.log('Page load and restore instructor return url', rUrl)
        _this.$store.commit('instructor/setInstructorReturnUrl', rUrl)
      }
      let activityId = localStorage.getItem('activityId')
      let studentId = localStorage.getItem('sCurrentEvaluationStudentId')
      if (activityId) {
        // console.log('Page load and restore last activity', activityId)
        // no need to set localStorage because we are reloading from the value in localStorage
        return StoreHelper.dispatchLoadCurrentActivity(this, activityId)
          .then((activity) => {
            if (!activity) {
              localStorage.removeItem('activityId')
              return
            }
            // console.log('Page load and restore class list', activityId)
            return _this.$store.dispatch('instructor/loadClassList', activityId)
          })
          .then((classList) => {
            // console.log('Page load and restore last student for evaluation', studentId)
            if (studentId) {
              return StoreHelper.dispatchChangeCurrentEvaluationStudentId(this, classList, studentId)
            }
          })
      }
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
    userInfo () {
      return this.$store.state.sUserInfo
    },
    currentVisit () {
      return this.$store.state.sVisitInfo
    }
  },
  created: function () {
    this.loadData()
  }
}
</script>

<style lang="scss"></style>
