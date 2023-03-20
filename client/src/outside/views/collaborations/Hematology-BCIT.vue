<template lang="pug">
  div(class='main-with-side-content')
    div
      h3(id='hematology') Hematology
      p.
        This year, lead instructors in the BCIT Medical Laboratory Science Hematology team worked with edehr.org to replaced their aging simulation tool with a new module which allows the student hematology technologist to work in a simulated lab information system. Over the course of this year approximately 300 case studies will be created in the EdEHR, each with a complete blood count (CBC) analysis and persona demographics.
      p.
        The students will complete a peripheral blood film (PBF) review for each and document their results in the EdEHR.  The instructors provide personal feedback to each student within the EdEHR and, sometimes, allow the student to try the exercise again to develop competency.
      app-quote(:def="appText.quotes.sonja")

      p.
        Click this image to see the sample case study in the EHR.
      a(href='ehr/med-lab/hematology?demoOnlyKey=pbf')
        img(src='/assets/images/pbf-review.png', alt='PBF Review module', class="screenshot")
    collab-list

</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import CollabList from '@/outside/views/collaborations/collabList'

export default {
  components: { CollabList, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>

