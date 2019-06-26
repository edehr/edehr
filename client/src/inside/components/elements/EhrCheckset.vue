<template lang="pug">
  div(class="checkset_wrapper")
    ehr-page-form-label(:showLabel="showLabel", css="checkset_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
    div(v-for="option in checkOptions")
      label
        input(class="checkbox", type="checkbox",  v-bind:disabled="notEditing", :value="option.prop", v-model="checkValues")
        span {{ option.text}}
    div(style="display:none") computedInitialValue {{computedInitialValue}}
</template>

<script>
import EhrCommon from './EhrCommonElement'
import { setApiError } from '../../../helpers/ehr-utills'
import EventBus from '../../../helpers/event-bus'
import { PAGE_FORM_INPUT_EVENT, DIALOG_INPUT_EVENT } from '../../../helpers/event-bus'

export default {
  name: 'EhrDialogFormElement',
  extends: EhrCommon,
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
          EventBus.$emit(PAGE_FORM_INPUT_EVENT, {value: newVal, element: this.element})
        }
      }
      if (this.isDialogElement) {
        if (this.dialogIsOpen) {
          // only broadcast if dialog is open
          let newVal = val.join(',')
          EventBus.$emit(DIALOG_INPUT_EVENT, {value: newVal, element: this.element})
        }
      }
    }
  },
  methods: {
    dialogShowHideEvent (eData) {
      if(eData.value) {
        // console.log('EhrCheckset value', this.key, this.inputs[this.key])
        let initialValue = this.inputs[this.key]
        this.setInitialValue(initialValue)
      }
    },
    validate () {
      // used by this.setup
      let result = true
      let opts = this.element.options
      if(opts) {
        opts.forEach(opt => {
          let parts = opt.text.split('=')
          if(parts.length !== 2) {
            setApiError(this, 'The checkset '+ this.key + '  must be defined as a list of prop=text values')
            result = false
          }
        })
      } else {
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
      if (this.validate()) {
        this.checkOptions = []
        let prop,text
        this.element.options.forEach(opt => {
          [prop, text] = opt.text.split('=')
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

