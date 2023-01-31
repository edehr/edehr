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
import EhrCheckset from '@/ehr-definitions/ehr-checkset'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'

const debug = false

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      checkValues: [],
    }
  },
  computed : {
    checkOptions () { return EhrCheckset.optionsToChecklist(this.options) }
  },
  watch: {
    checkValues (val) {
      const newVal = EhrCheckset.modelChange(val)
      if (debug) console.log('EhrCheckset input val changed', this.elementKey, newVal)
      this.sendInputEvent(newVal)
    }
  },
  methods: {
    setInitialValue (value) {
      // console.log('checkset override setInitialValue value:',value, this.elementKey)
      this.checkValues = EhrCheckset.dbValueToCheckSet(value)
    },
    setup () {
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
