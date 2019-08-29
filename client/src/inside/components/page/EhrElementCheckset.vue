<template lang="pug">
  div(class="checkset_wrapper")
    ehr-page-form-label(:element="element", css="checkset_label")
    div(v-for="option in checkOptions")
      label
        input(class="checkbox", type="checkbox",  v-bind:disabled="disabled", :value="option.prop", v-model="checkValues")
        span {{ option.text}}
    //div(style="display:none") computedInitialValue {{computedInitialValue}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import { setApiError } from '../../../helpers/ehr-utils'
import EventBus from '../../../helpers/event-bus'
import { FORM_INPUT_EVENT } from '../../../helpers/event-bus'
import camelcase from 'camelcase'

export default {
  name: 'EhrElementCheckset',
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      checkValues: [],
      checkOptions: []
    }
  },
  watch: {
    checkValues (val) {
      if (this.isPageElement) {
        if (this.ehrHelp.isEditing()) {
          // only broadcast if user is editing the form
          let newVal = val.join(',')
          console.log('In EhrCheckset  watched change to checkvalues send event ', newVal)
          // Send event when any input changes. The listener (EhrHelper) will collect the changes
          // and be ready to send the changes to the server. Calculated values also listen.
          EventBus.$emit(FORM_INPUT_EVENT, {value: newVal, element: this.element})
        }
      }
      if (this.dialogTableKey) {
        if (this.dialogIsOpen) {
          // only broadcast if dialog is open
          let newVal = val.join(',')
          EventBus.$emit(FORM_INPUT_EVENT, {value: newVal, element: this.element})
        }
      }
    }
  },
  methods: {
    validate () {
      // used by this.setup
      let result = true
      let opts = this.options
      if(!opts || opts.length === 0) {
        setApiError(this, 'The checkset '+ this.key + ' definition is missing the options property')
        result = false
      }
      return result
    },
    setInitialValue (value) {
      // console.log('checkset override setInitialValue')
      this.checkValues = []
      if (value) {
        let props = value.split(',')
        props.forEach( p => {
          this.checkValues.push(p)
        })
      }
    },
    setup () {
      // called from EhrCommon.mount
      // console.log('setup checkset', this.elementKey, this.element, this.options)
      if (this.validate()) {
        this.checkOptions = []
        let prop,text
        this.options.forEach(opt => {
          [prop, text] = opt.text.split('=')
          if (!text) {
            text = prop
            prop = camelcase(prop)
          }
          this.checkOptions.push({
            prop: prop,
            text: text
          })
        })
      }
    }
  }
}
</script>

