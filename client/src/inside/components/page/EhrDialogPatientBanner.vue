<template lang="pug">
  div(class='patient-banner')
    div(class="patient-data")
      div(class='patient-name') {{ patientData.patientName }}
      div {{ ehrText.patientBannerMrn }} {{ patientData.mrn }}
      div DoB: {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
      div Gender: {{ patientData.gender }}
      div Weight: {{ patientData.weight }}
    div(class="patient-data")
      div Code Status: {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
      div Allergies: &nbsp;
        span {{ truncate(patientData.allergies, 30) }}
      div Diagnosis: &nbsp;
        span {{ truncate(patientData.diagnosis, 30) }}
      div Risks:  &nbsp;
        span {{ truncate(patientData.risks, 30) }}

      ehr-sim-time(:ehr-data="md")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrPatient from '@/inside/components/page/ehr-patient'
import EhrSimTime from '@/inside/components/EhrSimTime'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  components: { EhrSimTime },
  computed: {
    ehrText () { return t18EhrText() },
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }
  }
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
