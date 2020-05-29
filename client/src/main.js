import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'
import store from './store'
import homeLayout from './app/layout/LayoutHome.vue'
import outsideLayout from './outside/layout/LayoutOutside.vue'
import insideLayout from './inside/layout/LayoutEhr.vue'
import dragDirective from './directives/drag-directive'
import resizeDirective from './directives/resize-directive'
import textToHtml from './directives/text-to-html'
import validate from './directives/validate'
import VueAutosuggest from 'vue-autosuggest'
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
  faHammer,
  faHourglassEnd,
  faHourglassStart,
  faArrowRight,
  faArrowLeft,
  faNotesMedical,
  faUpload,
  faDownload,
  faFilePdf,
  faStickyNote,
  faTrash,
  faGraduationCap,
  faStethoscope,
  faBookOpen,
  faHospital,
  faDiceD20,
  faHeartbeat,
  faMedkit,
  faUserInjured,
  faHandHoldingMedical,
  faUserClock,
  faPrescription
} from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCheckCircle, faCircle, faTimesCircle, faTimes, faPlus, faMinus, faAngleRight, faAngleLeft)
library.add(faClock, faHammer, faInfoCircle, faArrowRight, faArrowLeft, faNotesMedical)
library.add(faTrash, faEdit, faDownload, faUpload, faFilePdf, faStickyNote)
library.add(faHourglassEnd, faHourglassStart)
// for home
library.add(faMedkit, faHandHoldingMedical, faPrescription, faHeartbeat, faUserInjured, faUserClock, faStethoscope, faDiceD20, faHospital, faGraduationCap, faBookOpen, faFontAwesome, faCanadianMapleLeaf)
// IN CODE sample usage is:
// fas-icon(icon="download")
Vue.component('fas-icon', FontAwesomeIcon)

/*
Configure Vue
 */
Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(VueAutosuggest)
Vue.component('home-layout', homeLayout)
Vue.component('outside-layout', outsideLayout)
Vue.component('inside-layout', insideLayout)
Vue.directive('dragged', dragDirective)
Vue.directive('resized', resizeDirective)
Vue.directive('textToHtml', textToHtml) // used as text-to-html attribute
Vue.directive('validate', validate)

Vue.filter('formatDateDMY', function (value) {
  return value ? moment(value).format('DD MMM YYYY') : ''
})
Vue.filter('formatDateYMD', function (value) {
  return value ? moment(value).format('YYYY-MM-DD') : ''
})
Vue.filter('formatDateTime', function (value) {
  return value ? moment(value).format('YYYY-MM-DD h:mm a') : ''
})


/*
Create the root Vue component.
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
