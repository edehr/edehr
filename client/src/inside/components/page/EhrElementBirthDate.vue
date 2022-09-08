<template lang="pug">
  div
    ehr-page-form-label(:element="element", css="text_label")
    input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
    div(v-if="viewOnly") {{ inputVal }}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
const dbug = true
export default {
  extends: EhrElementCommon,
  methods: {
    setDependentValue (value) {
      if(dbug) console.log('DobElement setDependentValue', this.elementKey, value, this.inputVal)
      if (value) {
        const now = new Date()
        const dob = new Date(this.inputVal)
        const isAfter = dob.getMonth() > now.getMonth() || dob.getMonth() === now.getMonth() && dob.getDay() > now.getDay()
        let nyr = now.getFullYear()
        nyr = nyr - value
        nyr += isAfter ? -1 : 0
        dob.setFullYear(nyr)
        this.inputVal = dob.toISOString().split('T')[0]
        if(dbug) console.log('DobElement inputVal', this.inputVal)
      }
    },
  }
}
</script>
