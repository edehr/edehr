<template lang="pug">
  div(class="is-centered ehr-only-demo")
    section(v-if="canAccessDemo", class="content")
      h2(class="has-text-centered") {{ ehrOnlyDemoText.title }}
      div
        div(v-text-to-html="ehrOnlyDemoText.intro")
      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr', query: {demoOnlyKey: 'erin2Seed'}}") Erin JOHNS case study
        p Select this scenario to view the EHR chart for a fictitious patient named Erin Johns. The content is based on case study #2 in "Health Case Studies" (see reference below).
        p.
          Erin Johns is 74 years old with a complicated health history and is experiencing COPD exacerbation due to community acquired pneumonia. This scenario exemplifies the interprofessional collaboration between nursing, medical radiology, medical laboratory, and health care professionals in the emergency department.

      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr', query: {demoOnlyKey: 'Ashmann'}}") Mental health
        p  Melissa Ashmann is a 32-year old who was involved in a motor vehicle crash, near Kaslo. She sustained a left tib-fib fracture and underwent an ORIF.

        p Melissa has a history of depression, anxiety and previous knee surgery.

        p Useful for 2nd year nursing.

      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr/current/assessments/integumentary-assessment', query: {demoOnlyKey: 'wound'}}") Wound care
          span &nbsp; (be sure to select the Wound tab)
        p.
          In 2020, the EdEHR team worked with members from the BC Provincial Nursing Skin and Wound Committee, on the development and evaluation of a standardized skin and wound assessment module. The completed module mirrors the nursing documentation requirements used across all BC Provincial Health Authorities.
        p The project included the development of a sample case study and sample assignment that illustrates best practices and encourages documentation that considers what other healthcare professionals need to know.

      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr/med-lab/hematology', query: {demoOnlyKey: 'pbf'}}") PBF review
        p Select this case study to see a sample hematology lab technologist assignment. This case study shows the final result after a learner has completed a peripheral blood film (PBF) review based on the CBC analysis and on viewing a blood smear under a microscope.
        p This sample shows how MedLab learners can experience a part of a lab information system.  The EdEHR is evolving and, eventually, a lab information system (LIS) will be visually separated from the EHR components.

      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr/med-lab/hematology', query: {demoOnlyKey: 'bonlanleBefore'}}") BONLANLE Before
        p.
          Click the link above to see a sample case study for a hematology lab technologist.
          In the learning situation the student would be given a blood smear to examine under
          the microscope. The images below are samples that apply to this sample case study.
        p.
          The sample case study has been prepared with patient demographic information and
          a CBC (complete blood count) as would typically be produced by a CBC analysis machine.
          The technologist will prepare a PBF (peripheral blood film) review which will be the
          basis for the lab report that will be sent to the attending physician.
        div(class="bSmears")
          smear-image(iName="Slide18-212BONLANLE_Akosua_004.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_006.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_013.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_018.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_020.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_022.jpg")


      div(class="list-card list-element")
        p
          router-link(:to="{path: 'ehr/med-lab/hematology', query: {demoOnlyKey: 'bonlanleAfter'}}") BONLANLE After
        p.
          In this sample case study the hematology lab technologist has completed the PBF review for the
          case study above.

      div(v-if="isDev", class="list-card list-element")
        router-link(:to="{path: 'ehr', query: {demoOnlyKey: 'devSeed'}}") Dev Seed

    div(v-else)
      p {{ ehrOnlyDemoText.noAccess }}

    section(class="content")
      h4 Health Case Studies
      p Subtitle: Toward Closing the Healthcare Communication Gap
        br
        span Authors: Glynda Rees; Rob Kruger; and Janet Morrison
        br
        a(href="https://pressbooks.bccampus.ca/healthcasestudies") https://pressbooks.bccampus.ca/healthcasestudies


</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import { ehrOnlyDemoText } from '@/appText'
import SmearImage from '@/outside/views/landing/SmearImage.vue'

export default {
  components: {
    SmearImage,
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
@import '../../scss/definitions';
.content {
  font-size: 1.2rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
select {
  width: 15rem;
}
@media screen and (min-width: $main-width-threshold3){
  .ehr-only-demo {
    margin-left: 4rem;
  }
}
.bSmears {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
