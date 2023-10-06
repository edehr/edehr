<template lang='pug'>
  div(class="patient-tab", :class='{ patientTabActive: selected }')
    div(class="name-part")
      a(@click="selectPatient()", href='#') {{ familyName }} (MRN: {{mrn}})
      button(v-if='isSeedEditing', class='close-button', @click="removePatient") x
    div(class="bottom-part")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import MPatientHelper from '@/helpers/mPatientHelper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'

export default {
  name: 'EhrPatientTab',
  props: {
    selected: { type: Boolean, default: false},
    dbObject: { type: Object }
  },
  data () {
    return {
      keyData: {}
    }
  },
  computed: {
    isSeedEditing () { return StoreHelper.isSeedEditing() },
    _id () { return this.dbObject._id },
    mrn () { return this.keyData.mrn },
    familyName () { return this.keyData.familyName }
  },
  methods: {
    removePatient () {
      this.$emit('remove', this.dbObject._id)
    },
    selectPatient () {
      if (!this.selected) {
        this.$emit('select', this.dbObject._id)
      }
    }
  },
  async mounted () {
    const mData = await MPatientHelper.getPatientMergedData(this.dbObject._id)
    this.keyData = EhrDataModel.ExtractKeyPatientData(mData)
  }
}
</script>

