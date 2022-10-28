<template lang="pug">
  div(class="text_input_wrapper")
    ehr-page-form-label(:element="element", css="text_label")
    input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
    div(v-if="viewOnly") {{ inputVal }}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import { computeDateOfBirth } from '@/ehr-definitions/ehr-def-utils'

const dbug = true

export default {
  extends: EhrElementCommon,
  methods: {
    setDependentValue (ageValue) {
      if(dbug) console.log('DobElement setDependentValue', this.elementKey, ageValue, this.inputVal)
      let dateStr = computeDateOfBirth(ageValue, this.inputVal)
      if (dateStr) {
        this.inputVal = dateStr
        if(dbug) console.log('DobElement inputVal', this.inputVal)
      }
    },
  }
}
</script>
