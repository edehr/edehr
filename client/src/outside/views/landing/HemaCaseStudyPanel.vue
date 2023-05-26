<template lang="pug">
  div

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
