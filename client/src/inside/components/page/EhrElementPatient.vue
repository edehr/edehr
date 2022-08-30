<template lang="pug">
  div(class="form-element")
    label
      span(v-html="label")
      span : &nbsp; {{value}}
</template>

<script>
import EhrPatient from '@/inside/components/page/ehr-patient'
import EhrTypes from '@/inside/defs-grid/ehr-types'
const DATA_INPUT_TYPES = EhrTypes.dataInputTypes

export default {
  inject: [ 'pageDataKey' ],
  props: {
    ehrHelp: { type: Object },
    element: { type: Object } // cell definition
  },
  computed: {
    patientData () {
      return EhrPatient.patientData()
    },
    label () {
      return this.element.label
    },
    value () {
      if (this.element.inputType === DATA_INPUT_TYPES.ehrDOB) {
        return this.patientData.dateOfBirth
      }
      if (this.element.inputType === DATA_INPUT_TYPES.ehrPHN) {
        return this.patientData.phn
      }
      if (this.element.inputType === DATA_INPUT_TYPES.ehrLocation) {
        return this.patientData.location
      }
      if (this.element.inputType === DATA_INPUT_TYPES.ehrPatientName) {
        return this.patientData.patientName
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>