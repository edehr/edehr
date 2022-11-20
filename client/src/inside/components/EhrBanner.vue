<template lang="pug">
  div(class="ehr-banner")
    div(class="short-top")
      div(class="patient-data")
        div(class='patient-name') {{ patientData.patientName }}
        div PHN: {{ patientData.phn }}
        div DoB: {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
        div Gender: {{ patientData.gender }}
        div Code Status: {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
        a(@click="showDetails = !showDetails") {{showDetails ? 'show less' : 'show more'}}
      div(class="patient-data")
        div Allergies: {{ patientData.allergies }}
        div Diagnosis: {{ patientData.diagnosis }}
        ehr-sim-time(:ehr-data="md")
    div(v-if="showDetails", class='banner-content' )
      div(class="kv")
        div Weight:
        div {{ patientData.weight }}
      div(class="kv")
        div Location:
        div {{ patientData.location }}
      div(class="kv")
        div MRN:
        div {{ patientData.mrn }}
      div(class="kv")
        div MRP:
        div {{ patientData.mrp }}
      div(class="kv")
        div MRP phone:
        div {{ patientData.mrpPhone}}

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
$key: 5rem;

.patient-data {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-left: 1rem;
}

.ehr-banner {
  color: $grey90;
  border-top: 3px solid $brand-primary-dark;
  border-right: 1px solid $brand-primary-dark;
  border-bottom: 1px solid $brand-primary-dark;
  padding-bottom: 5px;
  padding-top: 5px;
}

.banner-content {
  .kv {
    display: grid;
    grid-template-columns: minmax($key, 1fr) minmax(15rem, 1fr);
    border-bottom: 1px solid $grey40;
  }
  .kv div:nth-child(1) {
    width: 30%;
  }
  .kv div:nth-child(2) {
    width: 70%;
  }
}
.kv div:nth-child(1) {
  background: $grey20;
  text-align: right;
  padding-right: 5px;
}
.kv div:nth-child(2) {
  background: $grey20;
  padding-left: 5px;
  font-weight: bold;
  word-wrap: anywhere;
}
@media screen and (max-width: $main-width-threshold3) {
  .banner-content {
    .kv div:nth-child(1) {
      width: inherit;
    }
  }
}
</style>
