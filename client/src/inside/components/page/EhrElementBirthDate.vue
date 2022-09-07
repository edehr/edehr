<template lang="pug">
  div
    ehr-page-form-label(:element="element", css="text_label")
    input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
    div(v-if="viewOnly") {{ inputVal }}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
    }
  },
  methods: {
    setDependentValue (value) {
      console.log('DobElement setDependentValue', this.elementKey, value, this.inputVal)
      if (value) {
        const now = new Date()
        let nyr = now.getFullYear()
        console.log('DobElement nyr', nyr)
        nyr = nyr - value
        console.log('DobElement nyr', nyr)
        const asD = new Date(this.inputVal)
        asD.setFullYear(nyr)
        this.inputVal = asD.toISOString().split('T')[0]
        console.log('DobElement inputVal', this.inputVal)
      }
      // super.setDependentValue(value)
    },
  }
}
</script>
<style lang='scss'>
</style>
