<template lang="pug">
  div
    div
      div(class="patient-data")
        div(class='patient-name') {{ patientData.patientName }}
        div
          span PHN
          span {{ patientData.phn }}
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
          span {{ patientData.allergies }}
        div
          span Diagnosis
          span {{ patientData.diagnosis }}
        ehr-sim-time(:ehr-data="md")
        div
          span Weight:
          span {{ patientData.weight }}
        div
          span Location:
          span {{ patientData.location }}
        div
          span MRN:
          span {{ patientData.mrn }}
        div
          span MRP:
          span {{ patientData.mrp }}
        div
          span MRP phone:
          span {{ patientData.mrpPhone}}

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
