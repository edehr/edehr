<template lang="pug">
  div( class="EhrBanner EhrPanelContent")
    div( class="EhrBanner_Inner EhrPanelContent_Inner")
      ui-intro(class="EhrBanner__intro")
      div( class="columns EhrBanner__content")
        div( class="column EhrBanner__content_row--1")
          ul
            li 
              b {{ lastFirstMiddle }}
            li Date of birth: &nbsp;
              b {{ demographics.dateOfBirth }}
            li Age: &nbsp;
              b {{ demographics.personAge }}
            li Gender: &nbsp;
              b {{ demographics.gender }}
            li Weight: &nbsp;
              b to link in
        div( class="column EhrBanner__content_row--2")
          ul
            li Code status: &nbsp;
              b {{ demographics.codeStatus }}
            li PHN: &nbsp;
              b {{ demographics.phn }}
            li  MRN: &nbsp;
              b {{ demographics.mrn }}
            li MRP: &nbsp;
              b to link in
            li MRP phone: &nbsp;
              b to link in
        div( class="column EhrBanner__content_row--3")
          ul
            li Admitting diagnosis: &nbsp;
              b {{ visitDetails.admittingDiagnosis }}
            li Allergies: &nbsp;
              b to link in
            li Location: &nbsp;
              b {{ location }}
            li Isolation precautions: &nbsp;
              b to link in
</template>

<script>
import UiIntro from '../../app/ui/UiIntro.vue'

export default {
  name: 'EhrBanner',
  components: {
    UiIntro
  },
  props: {
    action: {
      type: Object
    }
  },
  computed: {
    demographics() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.demographics || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    visitDetails() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.visitDetails || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    location() {
      var place = ''
      var locations = this.visitDetails.locations || []
      if (locations.length > 0) {
        var now = locations[locations.length - 1]
        place = now.patientLocation
      }
      return place
    },
    lastFirstMiddle() {
      let d = this.demographics
      let n = `${d.familyName}, ${d.givenName}`
      n += d.middleName ? ' ' + d.middleName : ''
      return n
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrBanner {
  &__content {
    display: flex;
    color: $grey60;
    & li {
    margin-bottom: 4px;
    }
  }
  &__content_row--1, &__content_row--2 {
    flex-grow: 1;
    padding: 0 2em .5em 0;
  }
  &__content_row--3 {
    flex-grow: 2;
    padding: 0 0 .5em 0;
  }
}
</style>
