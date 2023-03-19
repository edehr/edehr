<template lang="pug">
  div(class="is-centered")
    section(v-if="canAccessDemo", class="content")
      h2(class="has-text-centered") {{ ehrOnlyDemoText.title }}
      div
        div(v-text-to-html="ehrOnlyDemoText.intro")
      div(class="list-card list-element")
        p Try a scenario about a fictitious patient, Erin Johns, during day 2 of their hospital stay. It is based on Case Study #2 in "Health Case Studies" (see reference below).
        p.
          The patient in case 2 has a complicated health history and is experiencing COPD exacerbation due to community acquired pneumonia. The interprofessional collaboration is role modelled between nursing, medical radiology, medical laboratory, and health care workers in the emergency department.
        router-link(:to="{path: 'ehr', query: {demoOnlyKey: 'erin2Seed'}}") Erin JOHNS case study

      div(class="list-card list-element")
        p.
          In 2020, the EdEHR team worked with members from the BC Provincial Nursing Skin and Wound Committee, on the development and evaluation of a standardized skin and wound assessment module. The completed module mirrors the nursing documentation requirements used across all BC Provincial Health Authorities.
        p The project included the development of a sample case study and sample assignment that illustrates best practices and encourages documentation that considers what other healthcare professionals need to know.
        router-link(:to="{path: 'ehr/current/assessments/integumentary-assessment', query: {demoOnlyKey: 'wound'}}") Wound care
        p Be sure to select the Wound tab.

      div(class="list-card list-element")
        p A case study for hematology lab technologists where a learner normally completes a peripheral blood film (PBF) review based on the CBC analysis and on viewing a blood smear under a microscope.  In this case the PBF is completed to illustrate the whole activity.
        p This is a sample of how the EdEHR can support lab technologist learners within an EHR context.  The EdEHR is evolving and, eventually, the parts that belong in a lab information system (LIS) will be visually separated from the EHR components.
        router-link(:to="{path: 'ehr/chart/reports/hematology', query: {demoOnlyKey: 'pbf'}}") PBF review

      div(v-if="isDev", class="list-card list-element")
        router-link(:to="{path: 'ehr', query: {demoOnlyKey: 'devSeed'}}") Dev Seed

    div(v-else)
      p {{ ehrOnlyDemoText.noAccess }}

    section(class="content")
      h2(class="has-text-centered") References
      p Health Case Studies
      p Subtitle: Toward Closing the Healthcare Communication Gap
      p Authors: Glynda Rees; Rob Kruger; and Janet Morrison
      a(href="https://pressbooks.bccampus.ca/healthcasestudies") https://pressbooks.bccampus.ca/healthcasestudies


</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import { ehrOnlyDemoText } from '@/appText'

export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    isDev () {
      return process.env.NODE_ENV !== 'production'
    },
    canAccessDemo () {
      return !StoreHelper.isDemoMode()
    }
  },
  methods: {
    gotoDemo: function () {
      // this.$router.push('/ehr')
      this.$router.push({ path: '/ehr', query: { demoOnlyKey: 'erin2Seed' } })

    }
  },
}
</script>

<style lang="scss" scoped>
  .content {
    font-size: 1.2rem;
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
  }
  select {
    width: 15rem;
  }

</style>
