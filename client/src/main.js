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
import insideLayout from './inside/layout/LayoutEhr.vue'
import directivesFilters from './helpers/directives-filters'
import VueAutosuggest from 'vue-autosuggest'
import PageController from './helpers/page-controller'
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
Vue.component('inside-layout', insideLayout)

router.afterEach((to, from) => {
  // console.log('main.js hook on page changes')
  PageController.onPageChange(to)
})

if (!window.location.origin.includes('localhost')) {
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
    tracesSampleRate: 0.7,
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
