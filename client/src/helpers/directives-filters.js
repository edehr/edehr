import moment from 'moment'
import dragDirective from '../directives/drag-directive'
import resizeDirective from '../directives/resize-directive'
import textToHtml from '../directives/text-to-html'
import validate from '../directives/validate'


export default function (Vue) {
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
}