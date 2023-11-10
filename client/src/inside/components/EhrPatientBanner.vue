<template lang="pug">
  div
    div
      div(class="patient-data")
        div(class='patient-name') {{ patientData.patientName }}
        div(class="bigger-screens-900")
          span PHN
          span {{ patientData.phn }}
        div
          span MRN
          span {{ patientData.mrn }}
        div
          span DoB
          span {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
        div
          span Gender
          span {{ patientData.gender }}
        div
          span Code Status
          span {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
        div
          span Allergies
          span(class="bigger-screens-900") {{ patientData.allergies }}
          span(class="smaller-than-900") {{ truncate(patientData.allergies, 50) }}
        div
          span Diagnosis
          span(class="bigger-screens-900") {{ patientData.diagnosis }}
          span(class="smaller-than-900") {{ truncate(patientData.diagnosis, 50) }}
        div(class="bigger-screens-900")
          span Weight
          span {{ patientData.weight }}
        div(class="bigger-screens-900")
          span Location
          span {{ patientData.location }}
        div(class="bigger-screens-900")
          span MRP
          span {{ patientData.mrp }}
        div(class="bigger-screens-900")
          span MRP phone
          span {{ patientData.mrpPhone}}
        ehr-sim-time(:ehr-data="md")

    //li Isolation precautions:
    //  b none
</template>

<script>
import EhrPatient from '@/inside/components/page/ehr-patient'
import EhrSimTime from '@/inside/components/EhrSimTime'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { EhrSimTime },
  data () {
    return {
      showDetails: false
    }
  },
  computed: {
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
