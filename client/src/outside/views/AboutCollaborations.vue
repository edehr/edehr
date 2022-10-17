<template lang="pug">
  div
    h2 Collaborations to extend the EdEHR
    div
      p.
        Over the past few years, with the collaboration of medical and pedagogical experts we have added many new charting modules.
        This year we plan on adding more.
        Here are some example of the larger modules yet there have been many fine detail enhancements as well.
    ul
      li
        a(href="#wound") Wound and incision care
      li
        a(href="#hematology") Hematology
      li
        a(href="#planned") Planned laboratory modules
      li
        a(href="#pharmtech") Planned pharmacy technician support
    hr
    h3(id='wound') Wound and Incision
    p.
      In 2020, the EdEHR team worked with members from the BC Provincial Nursing Skin and Wound Committee, on the development and evaluation of a standardized skin and wound assessment module. The completed module mirrors the nursing documentation requirements used across all BC Provincial Health Authorities.
    p The project included the development of a sample case study and with sample assignment that illustrates best practices and encourages documentation that considers what other Health Care Professionals need to know.
    p.
      Click this image to see the sample case study in the EHR. Be sure to select the Wound tab!
    a(href='/ehr/current/assessments/integumentary-assessment?demoOnlyKey=wound')
      img(src='/assets/images/woundCareModule.png', alt='woundCareModule', class="screenshot")
    hr
    h3(id='hematology') Hematology
    p.
      This year, lead instructors in the BCIT Medical Laboratory Science Hematology team worked with Bryan to replaced their aging simulation tool with a new module which allows the student hematology technologist to work in a simulated lab information system. Over the course of this year approximately 300 case studies will be created in the EdEHR, each with a complete blood count (CBC) analysis and persona demographics.
    p.
      The students will complete a peripheral blood film (PBF) review for each and document their results in the EdEHR.  The instructors provide personal feedback to each student within the EdEHR and, sometimes, allow the student to try the exercise again to develop competency.
    app-quote(:def="appText.quotes.sonja")

    p.
      Click this image to see the sample case study in the EHR.
    a(href='/ehr/chart/reports/hematology?demoOnlyKey=pbf')
      img(src='/assets/images/pbf-review.png', alt='PBF Review module', class="screenshot")

    hr
    h3(id='planned') Planned laboratory modules
    p.
      With BCIT we plan on adding more lab information system modules for chemistry, histology and microbiology. Plus we'll gradually create a look and feel that is more suited to the laboratory information systems typical of this healthcare profession.

    hr
    h3(id='pharmtech') Planned pharmacy technician support
    p.
      With Selkirk College we plan on augmenting and correcting the medication orders and medication administration (MAR) modules.
    ul
      li Add vitamins to complement the medication list
      li Best Possible Medication History (BPMH) section
      li Make adjustments to the prescribing and administration of scheduled and PRN medications
      li Introduce a two step process where a pharmtech creates the medication order and a pharmacist verifies the order
      li Allow for drugs that are not on formulary (patient's own medication)
      li Extend the allergies chart with a list of medications that the patient can be allergic to.  Include opioids, ACE inhibitors and antibiotics
</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
const edehrText = {
  intro: '',
  examples: [
    {
      title: 'Wound and incision',
      body: ''
    }
  ]
}

export default {
  components: { AppQuote },
  data () {
    return {
      appText: appText,
      edehrText: edehrText
    }
  },
  computed: {
    showEdEhrOrg () {
      return edherorg.isEdEhrOrg()
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.system-info h3 {
  color: #b5b5b5;
}
ul {
  margin-left: 2rem;
  font-size: 18px;
}
li {
  list-style-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='13' viewBox='-1 -1 2 2'><circle r='1' /></svg>");
  max-width: 60rem;
}
.screenshot {
  width: 100%;
}
@media screen and (min-width: $main-width-threshold3){
  .screenshot {
    width: 50%;
  }
}
</style>
