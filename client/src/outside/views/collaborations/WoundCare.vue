<template lang="pug">
  div(class='main-with-side-content')
    div
      h2 Wound and Incision Care
      p.
        In 2020, the EdEHR team worked with members from the BC Provincial Nursing Skin and Wound Committee, on the development and evaluation of a standardized skin and wound assessment module. The completed module mirrors the nursing documentation requirements used across all BC Provincial Health Authorities.
      p The project included the development of a sample case study and with sample assignment that illustrates best practices and encourages documentation that considers what other Health Care Professionals need to know.
      p.
        Click this image to see the sample case study in the EHR. Be sure to select the Wound tab!
      a(href='/ehr/current/assessments/integumentary-assessment?demoOnlyKey=wound')
        img(src='/assets/images/woundCareModule.png', alt='woundCareModule', class="screenshot")
    collab-list
</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import UiLink from '@/app/ui/UiLink'
import CollabList from '@/outside/views/collaborations/collabList'

export default {
  components: { CollabList, UiLink, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>

