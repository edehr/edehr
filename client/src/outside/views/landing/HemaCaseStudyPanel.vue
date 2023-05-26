<template lang="pug">
  div
    p.
      Select one or more of the images below and then select the case study below.

    div(class="bSmears")
      //smear-image(iName="Slide18-212BONLANLE_Akosua_003.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_004.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_006.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_013.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_018.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_020.jpg")
      smear-image(iName="Slide18-212BONLANLE_Akosua_022.jpg")
      //smear-image(iName="Slide18-212BONLANLE_Akosua_024.jpg")

    div
      p
        router-link(:to="{path: 'ehr/med-lab/hematology', query: {demoOnlyKey: 'bonlanleBefore'}}") BONLANLE case study ready for students
      p.
        This is a sample hematology lab technologist assignment where the blood is not normal.

    div
      p
        router-link(:to="{path: 'ehr/med-lab/hematology', query: {demoOnlyKey: 'bonlanleAfter'}}") BONLANLE case study after lab assignment is complete
      p.
        This sample hematology lab technologist assignment is the same as the previous on but
        now the PBF is completed.

    div
      a(href='https://www.bcit.ca/study/health-sciences/')
        img(src='/assets/images/BCIT-256.png', alt='BCIT Health Sciences, Logo', width='100px')

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
