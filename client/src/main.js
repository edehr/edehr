import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import outsideLayout from './outside/layout/LayoutOutside.vue'
import insideLayout from './inside/layout/LayoutEhr.vue'
import dragDirective from './directives/drag-directive'
import resizeDirective from './directives/resize-directive'

/*
Import the global style sheet
 */
import './scss/styles.scss'

/*
Import font awesome icons
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faTimesCircle,
  faTimes,
  faEdit,
  faClock,
  faInfoCircle,
  faArrowRight,
  faArrowLeft,
  faNotesMedical,
  faDownload
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheckCircle, faTimesCircle, faTimes, faEdit, faDownload)
library.add(faClock, faInfoCircle, faArrowRight, faArrowLeft, faNotesMedical)
Vue.component('fas-icon', FontAwesomeIcon)

/*
Configure Vue
 */
Vue.config.productionTip = false
Vue.use(require('vue-moment'))

Vue.component('outside-layout', outsideLayout)
Vue.component('inside-layout', insideLayout)
Vue.directive('dragged', dragDirective)
Vue.directive('resized', resizeDirective)

/*
Create the root Vue component.
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
