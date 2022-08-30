import Vue from 'vue'
import App from './App.vue'
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
