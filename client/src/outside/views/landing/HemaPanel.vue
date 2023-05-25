<template lang="pug">
  div
    div
      a(href='https://www.bcit.ca/study/health-sciences/')
        img(src='/assets/images/BCIT-256.png', alt='BCIT Health Sciences, Logo', width='100px')
    p.
      This year, lead instructors in the BCIT Medical Laboratory Science Hematology team worked with edehr.org to replaced their aging simulation tool with a new module which allows the student hematology technologist to work in a simulated lab information system. Over the course of this year approximately 300 case studies will be created in the EdEHR, each with a complete blood count (CBC) analysis and persona demographics.
    p.
      The students will complete a peripheral blood film (PBF) review for each and document their results in the EdEHR.  The instructors provide personal feedback to each student within the EdEHR and, sometimes, allow the student to try the exercise again to develop competency.
    app-quote(:def="appText.quotes.sonja")

    p.
      Click this image to see the sample case study in the EHR.

    div(class="bSmears")
      smear-image(iName="Slide18-212BONLANLE_Akosua_003.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_004.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_006.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_013.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_018.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_020.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_022.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_024.jpg")

</template>

<script>
import AppQuote from '@/app/components/AppQuote.vue'
import SmearImage from '@/outside/views/landing/SmearImage.vue'
import { appText } from '@/appText'

export default {
  components: { SmearImage, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>
