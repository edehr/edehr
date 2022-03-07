/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'

import InputFile from '@/outside/components/FileInput.vue'


describe('FileInput.vue', () => {
  describe('can mount and contains input', () => {
    it('mounts', () => {
      const properties = {}
      const wrapper = mount(InputFile, {propsData: properties})
      expect(wrapper.findAll('input').exists()).toBeTruthy()
      // const inputFile = wrapper.find('input')
    })
  })
  describe(':props', () => {
    it('has default properties', () => {
      const properties = {}
      const wrapper = mount(InputFile, {propsData: properties})
      const props = wrapper.props()
      expect(props.acceptTypes).toBe('image/*,.pdf')
      expect(props.disabled).toBeFalsy()
      expect(props.fieldName).toBe('file')
      expect(props.inputId).toBe('fileInput')
    })
    it('Can set properties', () => {
      const properties = {acceptTypes: 'foo', disabled: true, fieldName: 'testFieldName', inputId: 'testId'}
      const wrapper = mount(InputFile, {propsData: properties})
      const props = wrapper.props()
      expect(props.acceptTypes).toBe('foo')
      expect(props.disabled).toBeTruthy()
      expect(props.fieldName).toBe('testFieldName')
      expect(props.inputId).toBe('testId')
    })
  })
  describe('events', () => {
    it.skip('file change', async () => {
      /*
      Extensive search showed there is no simple way to insert a file into a file input and get the result.
      TODO:hackathon idea?
       */
    })
  })
})
