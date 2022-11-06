<template lang="pug">
  div(class="checkset_wrapper")
    ehr-page-form-label(:element="element", css="checkset_label")
    div(class="checkset_list")
      div(v-for="option in checkOptions")
        label
          input(class="checkbox", type="checkbox", :disabled="disabled || viewOnly", :value="option.prop", v-model="checkValues")
          span {{ option.text}}
    //div(style="display:none") computedInitialValue {{computedInitialValue}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import StoreHelper from '@/helpers/store-helper'
import camelcase from 'camelcase'
import { Text } from '@/helpers/ehr-text'
import { isString } from '@/helpers/ehr-utils'

const debug = false

export default {
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
      let newVal = val.filter( v => v.length > 0).join(',')
      console.log('EhrCheckset input val changed', this.elementKey, val, newVal)
      if (debug) console.log('EhrCheckset input val changed', this.elementKey, newVal)
      if (this.isPageElement &&  this.isEditing) {
        // only broadcast if user is editing the form
        if (debug) console.log('EhrCheckset send input event')
        this.sendInputEvent(newVal)
      }
      if (this.isTableElement && this.dialogIsOpen) {
        if (debug) console.log('EhrCheckset send input event')
        this.sendInputEvent(newVal)
      }
    }
  },
  methods: {
    validate () {
      // used by this.setup
      let result = true
      let opts = this.options
      if(!opts || opts.length === 0) {
        StoreHelper.setApiError(Text.IS_INVALID_CHECKSET(this.key))
        result = false
      }
      return result
    },
    setInitialValue (value) {
      // console.log('checkset override setInitialValue value:',value, this.elementKey)
      this.checkValues = []
      if (isString(value)) {
        let props = value.split(',')
        props.forEach( p => {
          this.checkValues.push(p)
        })
      } else {
        console.log('What is wrong? attempt to set checkset initial value with this: ', value, 'key:', this.elementKey)
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
<style lang='scss'>
@import '../../../scss/definitions';

.checkset_list {
  display: flex;
  flex-direction: column;
}
</style>
