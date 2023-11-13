<template lang="pug">
  div(class='patient-banner')
    div(class="patient-data")
      div(class='patient-name') {{ patientData.patientName }}
      div MRN: {{ patientData.mrn }}
      div PHN: {{ patientData.phn }}
      div DoB: {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
      div Gender: {{ patientData.gender }}
      div Weight: {{ patientData.weight }}
    div(class="patient-data")
      div Code Status: {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
      div Allergies: {{ patientData.allergies }}
      div Diagnosis: {{ patientData.diagnosis }}
      ehr-sim-time(:ehr-data="md")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrPatient from '@/inside/components/page/ehr-patient'
import EhrSimTime from '@/inside/components/EhrSimTime'

export default {
  components: { EhrSimTime },
  computed: {
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
  },
}
</script>


<style lang="scss" scoped>
@import '../../../scss/definitions';

.patient-name {
  font-weight: bold;
}
.patient-data {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
@media screen and (max-width: $dialog-width-threshold) {
  .patient-banner {
    display: block;
    overflow: auto;
  }
  .patient-data {
    display: block;
  }

}
</style>
