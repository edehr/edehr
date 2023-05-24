<template lang="pug">
  div(class='main-with-side-content')
    div
      h2 Welcome attendees of LabCon 2023
      div
        a(href='https://csmls.org/')
          img(src='/assets/landing/labcon2023/csmls-logo.png', alt='CSMLS Org'        )
      div
        a(href='https://www.bcit.ca/study/health-sciences/')
          img(src='/assets/images/BCIT-256.png', alt='BCIT Health Sciences'        )
      hr
      div
        h2 Hematology Case Study

        div(class="bSmears")
          smear-image(iName="Slide18-212BONLANLE_Akosua_003.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_004.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_006.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_013.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_018.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_020.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_022.jpg")
          smear-image(iName="Slide18-212BONLANLE_Akosua_024.jpg")

    collab-list
</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import UiLink from '@/app/ui/UiLink'
import CollabList from '@/outside/views/collaborations/collabList'
import SmearImage from '@/outside/views/landing/SmearImage.vue'

export default {
  components: { SmearImage, CollabList, UiLink, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>
<style lang='scss' scoped>
@import '../../../scss/definitions';

.bSmears {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
