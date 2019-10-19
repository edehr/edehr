import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import outsideLayout from './outside/layout/LayoutOutside.vue'
import insideLayout from './inside/layout/LayoutEhr.vue'
import dragDirective from './directives/drag-directive'
import resizeDirective from './directives/resize-directive'
import textToHtml from './directives/text-to-html'
import validate from './directives/validate'

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
  faPlus,
  faMinus,
  faAngleLeft,
  faAngleRight,
  faEdit,
  faClock,
  faCircle,
  faInfoCircle,
  faArrowRight,
  faArrowLeft,
  faNotesMedical,
  faUpload,
  faDownload,
  faFilePdf,
  faStickyNote

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheckCircle, faCircle, faTimesCircle, faTimes, faPlus, faMinus, faAngleRight, faAngleLeft)
library.add(faClock, faInfoCircle, faArrowRight, faArrowLeft, faNotesMedical)
library.add(faEdit, faDownload, faUpload, faFilePdf, faStickyNote)
// IN CODE sample usage is:
// fas-icon(icon="download")
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
Vue.directive('textToHtml', textToHtml) // used as text-to-html attribute
Vue.directive('validate', validate)

/*
Create the root Vue component.
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
