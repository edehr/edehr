import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'
import store from './store'
import icons from './icons'
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
Configure Vue
 */
icons(Vue)
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
