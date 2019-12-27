import { shallowMount, createLocalVue } from '@vue/test-utils'
import ClassList from '../../outside/components/ClassList.vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDownload)

const localVue = createLocalVue()

const router = new VueRouter()
localVue.use(VueRouter)
localVue.component('fas-icon', FontAwesomeIcon)

const wrapper =  shallowMount(ClassList, {
  localVue,
  router
})


describe('ClassName test', () => {
  // let wrapper

  describe('Basic testing', () => {
    test('Mounts properly', () =>{
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
    test('renders as expected', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('has "Download Evaluation Notes as CSV button"', () => {
      const button = wrapper.find('.assignmentascsv')
      expect(button.text()).toContain(
        'Download all assignment evaluation notes'
      )
    })
  })
 


})