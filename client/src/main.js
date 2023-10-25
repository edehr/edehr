import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { CaptureConsole } from '@sentry/integrations'
import router, { ERROR_ROUTE_NAME } from './router'
import store from './store'
import { initializeStore } from './store'
import icons from './icons'
import homeLayout from './app/layout/LayoutHome.vue'
import outsideLayout from './outside/layout/LayoutOutside.vue'
import lmsLayout from './outside/layout/LayoutLms.vue'
import insideLayout from './inside/layout/LayoutEhr.vue'
import printLayout from './inside/layout/PrintLayout.vue'
import directivesFilters from './helpers/directives-filters'
import VueAutosuggest from 'vue-autosuggest'
import onPageChange from './helpers/page-controller'
/*
Import the global style sheet
 */
import './scss/styles.scss'
import StoreHelper from '@/helpers/store-helper'
import { setupWebSocket } from '@/helpers/web-socket-client'
import { setupRealTime } from '@/helpers/real-time-updates'
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
Vue.component('print-layout', printLayout)

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

if (LOCALHOST) {
  window.addEventListener('storage', (event) => {
    console.log('----------------- Hey Dev, this is listener on changes to local storage', event)
    // TODO consider that this event listener does not fire on the window that changed the local storage
    // But it does fire on other tabs.
    // Could be used to (a) open a second window for instructors to select the student to evaluate and
    // use listener like this in the main window to advance to the next student when local storage changes.
  })
}

let enableSentry = !LOCALHOST
// uncomment to enable on development box ....
// enableSentry = true
if (enableSentry) {
  //only install Sentry on non-localhost
  Sentry.init({
    Vue,
    dsn: 'https://c2ed6617d7bd4518ae5e0cea8827cb9d@o1411884.ingest.sentry.io/6750589',
    environment: StoreHelper.sentryEnvironment(),
    integrations: [
      new CaptureConsole({ levels: ['error', 'assert'] }),
      new Sentry.BrowserTracing({
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
Add a general catcher for unhandled rejections.
 */
onunhandledrejection = async (event) => {
  if (StoreHelper.hasConsumer()) {
    // if logged in the clear everything. Some store modules make initialization calls via API, if they have saved ids (e.g. see Course store).  By clearing out all the storage we give the user a clean place to start again.
    await StoreHelper.logUserOutOfEdEHR()
  }
  // During development that involves error handling it is useful to stop the error here to explore the conditions.
  // alert('Error page')
  // GO TO the ERROR page. Add a timestamp in case there are two or more attempts to go to the same page.
  await router.push({ name: ERROR_ROUTE_NAME, query: { ts: Date.now() }})
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

    setupWebSocket()
    setupRealTime()
  }
}).$mount('#app')
