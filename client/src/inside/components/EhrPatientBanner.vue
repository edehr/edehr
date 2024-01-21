<template lang="pug">
div(class="patient-banner")
  div(class="patient-data")
    div(class='patient-name') {{ patientData.patientName }}
    div
      span {{ ehrText.patientBannerMrn }}
      span {{ patientData.mrn }}
    div
      span {{ ehrText.patientBannerDob }}
      span {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
    div
      span {{ ehrText.patientBannerGender }}
      span {{ patientData.gender }}
    div
      span {{ ehrText.patientBannerCodeStatus }}
      span {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
    div
      span {{ ehrText.patientBannerAllergies }}
      span {{ truncate(patientData.allergies, 40) }}
    div
      span {{ ehrText.patientBannerDiagnosis }}
      span {{ truncate(patientData.diagnosis, 40) }}
    div
      span {{ ehrText.patientBannerRisks }}
      span {{ truncate(patientData.risks, 40) }}
    div(class="patient-data bigger-screens-900")
      div
        span {{ ehrText.patientBannerWeight }}
        span {{ patientData.weight }}
      div
        span {{ ehrText.patientBannerPHN }}
        span {{ patientData.phn }}
      div
        span {{ ehrText.patientBannerLocation }}
        span {{ patientData.location }}
    ehr-sim-time(:ehr-data="md")

</template>

<script>
import EhrPatient from '@/inside/components/page/ehr-patient'
import EhrSimTime from '@/inside/components/EhrSimTime'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'
import { APP_ICONS } from '@/helpers/app-icons'
export default {
  components: { EhrSimTime },
  data () {
    return {
      appIcons: APP_ICONS,
      showDetails: false
    }
  },
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
@import '../../scss/definitions';
.patient-banner {
  display: flex;
  flex-direction: row;
}
.patient-data {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1rem;
  > div {
    span {
      display: inline;
    }
    span:nth-child(1) {
      padding-right: 5px;
      &::after {
        content: ':';
      }
    }
    span:nth-child(2) {
      padding-left: 5px;
      font-weight: bold;
    }
  }
}

.patient-name {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
