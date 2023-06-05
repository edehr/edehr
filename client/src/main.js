import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import router from './router'
import store from './store'
import { initializeStore } from './store'
import icons from './icons'
import homeLayout from './app/layout/LayoutHome.vue'
import outsideLayout from './outside/layout/LayoutOutside.vue'
import lmsLayout from './outside/layout/LayoutLms.vue'
import insideLayout from './inside/layout/LayoutEhr.vue'
import directivesFilters from './helpers/directives-filters'
import VueAutosuggest from 'vue-autosuggest'
import onPageChange from './helpers/page-controller'
/*
Import the global style sheet
 */
import './scss/styles.scss'
import StoreHelper from '@/helpers/store-helper'
/*
Configure Vue
 */
icons(Vue)
directivesFilters(Vue)
Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(VueAutosuggest)
Vue.component('home-layout', homeLayout)
Vue.component('outside-layout', outsideLayout)
Vue.component('lms-layout', lmsLayout)
Vue.component('inside-layout', insideLayout)

const LOCALHOST = window.location.origin.includes('localhost')
/**
 * Global catch for errors that are thrown during Vue processing. For example, the main Vue render
 * process has no other central way to catch and record errors.
 *
 * This handler prints a message to the error console. Sentry is configured to create an event
 * on every time the error console is used.
 *
 * @param err - the error object that got thrown
 * @param vm
 * @param info - where in the Vue world did the error happen. In a lifecylce event? during render?
 */
if (!LOCALHOST) {
  Vue.config.errorHandler = function (err, vm, info) {
    StoreHelper.setApiError(err.message)
    const msg = '[Global Error Handler]: Error in (' + info + '): (' + err.message + ')'
    console.error(msg)
    if (window.location.origin.includes('localhost')) {
      console.error(err)
    }
    // Sentry.captureMessage(msg,data)
  }
}
router.afterEach(async (to, from) => {
  let startTime = performance.now()
  const perfStat = await onPageChange(to, from)
  let elapsedTime = performance.now() - startTime
  console.log('page change elapsed', elapsedTime, JSON.stringify(perfStat.elapsed))
})

if (!LOCALHOST) {
  //only install Sentry on non-localhost
  Sentry.init({
    Vue,
    dsn: 'https://c2ed6617d7bd4518ae5e0cea8827cb9d@o1411884.ingest.sentry.io/6750589',
    environment: StoreHelper.sentryEnvironment(),
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        // default value of tracingOrigins is ['localhost', /^\//].
        tracingOrigins: ['localhost', 'edehr.org', /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 0.05,
  })
}
/*
Create the root Vue component.
 */
new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    initializeStore(store)
  }
}).$mount('#app')
