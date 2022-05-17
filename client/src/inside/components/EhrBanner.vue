<template lang="pug">
  div( class="EhrBanner EhrPanelContent")
    div( class="EhrBanner_Inner EhrPanelContent_Inner")
      div( class="columns EhrBanner__content grid-left-to-right-3")
        div( class="column EhrBanner__content_row--1")
          ul
            li 
              b {{ patientData.patientName }}
            li Date of birth: &nbsp;
              b {{ patientData.dateOfBirth }}
            li Age: &nbsp;
              b {{ patientData.personAge }}
            li Gender: &nbsp;
              b {{ patientData.gender }}
            li Weight: &nbsp;
              b {{ patientData.weight }}
        div( class="column EhrBanner__content_row--2")
          ul
            li Code status: &nbsp;
              b {{ patientData.codeStatus }}
            li PHN: &nbsp;
              b {{ patientData.phn }}
            li  MRN: &nbsp;
              b {{ patientData.mrn }}
            li MRP: &nbsp;
              b {{ patientData.mrp }}
            li MRP phone: &nbsp;
              b {{ patientData.mrpPhone}}
        div( class="column EhrBanner__content_row--3")
          ul
            li Admitting diagnosis: &nbsp;
              b {{ patientData.diagnosis }}
            li Allergies: &nbsp;
              b {{ patientData.allergies }}
            li Location: &nbsp;
              b {{ patientData.location }}
            //li Isolation precautions: &nbsp;
            //  b none
</template>

<script>
import EhrPatient from '@/inside/components/page/ehr-patient'

export default {
  computed: {
    patientData () { return EhrPatient.patientData() },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrBanner {
  &__content {
    color: $grey60;
    & li {
      margin-bottom: 4px;
    }
  }
  &__content_row--1, &__content_row--2 {
    padding: 0 2em .5em 0;
  }
  &__content_row--3 {
    /*padding: 0 0 .5em 0;*/
    padding: 0 2em .5em 0;
  }
}
</style>
