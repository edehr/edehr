<template lang="pug">
  div(class="box-checkset-wrapper", :class='formCss')
    div
      input(class="checkbox", type="checkbox", :disabled="disabled || viewOnly", :name="elementKey", v-model="mainCheck")
      label(:for="elementKey", class="main_label") {{mainLabel}}
    div(class="sub-section")
      div {{ subLabel }}
      div(class="checkset")
        div(v-for="option in checkOptions")
          label
            input(class="checkbox", type="checkbox", :disabled="disableSubset || disabled || viewOnly", :value="option.prop", v-model="checkValues")
            span {{ option.text}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EhrCheckset from '@/ehr-definitions/ehr-checkset'
import { t18ElementLabel } from '@/helpers/ehr-t18'

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      mainCheck: false,
      checkValues: [],
    }
  },
  computed : {
    disableSubset () { return !this.mainCheck },
    label () { return t18ElementLabel(this.element) },
    mainLabel () { return this.label.split(';')[0] },
    subLabel () { return this.label.split(';')[1] },
    options () { return this.element.options },
    checkOptions () { return EhrCheckset.optionsToChecklist(this.options) }
  },
  watch: {
    checkValues (value) {
      const newVal = EhrCheckset.checkSetToDbValue(value)
      // console.log('Send value for BoxCheckset with ', value, newVal)
      this.sendInputEvent(newVal)
    },
    mainCheck (value) {
      // console.log('watching main check value change?', this.mainCheck, value)
      if (! value ) {
        this.checkValues = []
      }
    }
  },
  methods: {
    setInitialValue (value) {
      this.checkValues = EhrCheckset.dbValueToCheckSet(value)
      // console.log('set initial value of BoxCheckset with ', value)
      // console.log('checkOptions', this.checkOptions)
      // console.log('checkValues', this.checkValues)
      this.mainCheck = this.checkValues.length > 0 && this.checkValues[0] !== ''
    },
    setup () {
    }
  }
}
</script>
<style lang='scss'>
@import '../../../scss/definitions';

.checkset {
  display: flex;
  flex-direction: column;
}
.box-checkset-wrapper {
  display: flex;
  flex-direction: column;
}
.sub-section {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

</style>
