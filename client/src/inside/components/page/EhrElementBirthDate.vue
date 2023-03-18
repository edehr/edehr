<template lang="pug">
  div(class="text_input_wrapper")
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
    div(v-if="viewOnly") {{ containerInputValue }}
    div(v-else)
      div(v-if="disabled")
        input(class="input text-input", disabled="true", :value="containerInputValue")
      div(v-else)
        ui-button(v-on:buttonClicked="showDialog", :disabled="!canEdit",) Edit
        span &nbsp; {{containerInputValue }}
    ehr-dob-dialog(ref="refDobDialog", @update="updateDOBStr")

</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import { computeDateOfBirth, extractDay, extractMonth, validateAgeValue } from '@/ehr-definitions/ehr-def-utils'
import UiButton from '@/app/ui/UiButton.vue'
import EhrDobDialog from '@/inside/components/page/ehr-dob/EhrDobDialog.vue'

export default {
  components: { EhrDobDialog, UiButton },
  extends: EhrElementCommon,
  data: function () {
    return {
    }
  },
  props: {
    containerInputValue: { type: String }
  },
  computed: {
    canEdit () { return this.validPersonAge},
    dayVal () { return extractDay(this.containerInputValue)},
    monthVal () { return extractMonth(this.containerInputValue)},
    personAge () { return this.dependentOnValue  },
    validPersonAge () { return validateAgeValue(this.personAge) }
  },
  methods: {
    changedPersonAge () {
      const newDob = computeDateOfBirth(this.personAge, this.containerInputValue)
      if (newDob) {
        this.$emit('update', newDob)
      }
    },
    showDialog () {
      // console.log('ErhDOB showDialog', this.containerInputValue)
      this.$refs.refDobDialog.openDobDialog(this.personAge, this.monthVal, this.dayVal)
    },
    updateDOBStr (valFromDialog) {
      // console.log('ErhDOB update', valFromDialog)
      this.$emit('update', valFromDialog)
    },
  },
  watch: {
    personAge () {
      this.changedPersonAge()
    },
  }
}
</script>

<style lang='scss' scoped>
@import '@/scss/definitions';


</style>
