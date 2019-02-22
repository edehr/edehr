<template>
  <div id="app">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import { getIncomingParams } from './helpers/ehr-utills'
import { setApiError } from './helpers/ehr-utills'
import EventBus from './helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from './helpers/event-bus'
const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    loadData: function() {
      let params2 = getIncomingParams()
      // API return to url
      let apiUrl = params2['apiUrl']
      let visitId = params2['visit']
      let restoring = false
      this.$store.commit('system/setLoading', true)
      const _this = this
      _this
        ._loadApiUrl(apiUrl)
        .then(() => {
          if (!visitId) {
            console.log('No visit id on query so check local storage storage?')
            restoring = true
            visitId = localStorage.getItem('token')
          }
          if (visitId) {
            console.log('Dispatch the load visit information', visitId)
            return this.$store.dispatch('visit/loadVisitInfo', visitId)
          } else {
            console.log('can not find a visit id so stop loading')
            return Promise.reject('No visit id available')
          }
        })
        .then(() => {
          console.log(
            'Is user is allowed to edit content?',
            this.$store.getters['visit/isDeveloper']
          )
          if (this.$store.getters['visit/isDeveloper']) {
            console.log('User is allowed to edit content')
            return _this._loadDeveloping(restoring)
          }
        })
        .then(() => {
          console.log('Is user an instructor?')
          if (_this.$store.getters['visit/isInstructor']) {
            console.log('User is instructor')
            return _this.$store.dispatch('instructor/loadCourses').then(() => {
              // console.log('Page load instructor restoring?', restoring)
              if (restoring) {
                return _this.reloadInstructor()
              }
            })
          }
        })
        .then(() => {
          this.$store.commit('system/setLoading', false)
          EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
          console.log('App DONE loading now.')
        })
        .catch(err => {
          alert(err + '\nSystem Error')
        })
    },
    _loadDeveloping(restoring) {
      return new Promise((resolve, reject) => {
        if (!restoring) {
          return resolve()
        }
        console.log('Restore indicator says the user is refreshing page')
        let isDevelopingContent = localStorage.getItem('isDevelopingContent')
        let seedId = localStorage.getItem('seedId')
        console.log(
          'What is in local storage isDevelopingContent and seedId',
          isDevelopingContent,
          seedId
        )
        if (isDevelopingContent && seedId) {
          console.log('User is developing content with seed id', seedId)
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
    _loadApiUrl(apiUrl) {
      return new Promise((resolve, reject) => {
        if (apiUrl) {
          // console.log('API url provided in query: ', apiUrl)
        } else {
          // console.log('No API url in query')
          // console.log('Can we use API URL from $store', apiUrl)
          let l_apiUrl = localStorage.getItem('apiUrl')
          let s_apiUrl = this.$store.state.visit.apiUrl
          apiUrl = s_apiUrl || l_apiUrl
          if (!apiUrl) {
            let msg = 'System requires the URL to the API'
            console.error(msg)
            setApiError(this.$store, msg)
            return reject(msg)
          }
        }
        // console.log('Store API URL in $store', apiUrl)
        this.$store.commit('visit/apiUrl', apiUrl)
        resolve(apiUrl)
      })
    },
    reloadInstructor: function() {
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
        return this.$store
          .dispatch('instructor/loadActivity', activityId)
          .then(() => {
            // console.log('Page load and restore class list', activityId)
            return _this.$store.dispatch('instructor/loadClassList', activityId)
          })
          .then(() => {
            // console.log('Page load and restore last student for evaluation', studentId)
            if (studentId) {
              return _this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', studentId)
            }
          })
      }
    }
  },
  computed: {
    layout() {
      const l = (this.$route.meta.layout || DefaultLayout) + '-layout'
      // console.log('using layout ', l)
      return l
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    currentVisit() {
      return this.$store.state.sVisitInfo
    }
  },
  created: function() {
    this.loadData()
  }
}
</script>

<style lang="scss"></style>
