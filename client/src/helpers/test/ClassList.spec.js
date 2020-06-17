import { mount, createLocalVue } from '@vue/test-utils'
import ClassList from '../../outside/components/ClassList.vue'
import directivesFilters from '../directives-filters'
import icons from '../../icons'
import router from '../../router'

const Vue = createLocalVue()
directivesFilters(Vue)
icons(Vue)

const wrapper =  mount(
  ClassList, {
    localVue: Vue,
    router
  })


describe('ClassList component tests', () => {
  test('mounts properly', () =>{
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders as expected', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('has download evaluation notes as CSV button"', async () => {
    const button = wrapper.find('[data-test-id="ClassList.button.download"]')
    expect(button.text()).toContain('Download all assignment evaluation notes')
  })

  test('click download opens save as prompt dialog', async () => {
    const prompt = '[data-test-id="AppDialog.dialog.is.open"]'
    expect(wrapper.find(prompt).exists()).toBeFalsy()

    const button = wrapper.find('[data-test-id="ClassList.button.download"]')
    button.trigger('click')
    await Vue.nextTick()

    expect(wrapper.find(prompt).exists()).toBeTruthy()
  })
})