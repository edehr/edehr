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
              b 49kg
        div( class="column EhrBanner__content_row--2")
          ul
            li Code status: &nbsp;
              b {{ demographics.codeStatus }}
            li PHN: &nbsp;
              b {{ demographics.phn }}
            li  MRN: &nbsp;
              b {{ demographics.mrn }}
            li MRP: &nbsp;
              b {{ decisionMaker }}
            li MRP phone: &nbsp;
              b {{ demographics.decisionMakerPhone}}
        div( class="column EhrBanner__content_row--3")
          ul
            li Admitting diagnosis: &nbsp;
              b {{ visitDetails.diagnosis }}
            li Allergies: &nbsp;
              b {{allergies.allergies}}
            li Location: &nbsp;
              b {{ location }}
            li Isolation precautions: &nbsp;
              b none
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
    demographics () {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.demographics || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    visitDetails () {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.visit || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    allergies () {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.allergies || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    location () {
      var place = ''
      var locations = this.visitDetails.table || []
      if (locations.length > 0) {
        var latest = locations[locations.length - 1]
        place = latest.location
      }
      return place
    },
    lastFirstMiddle () {
      let d = this.demographics
      let n = `${d.familyName}, ${d.givenName}`
      n += d.middleName ? ' ' + d.middleName : ''
      return n
    },
    decisionMaker () {
      let d = this.demographics
      let n = d.decisionMakerName ? d.decisionMakerName : ''
      n += d.decisionMakerRelationship ? ' (' + d.decisionMakerRelationship + ')' : ''
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
