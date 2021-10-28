<template lang="pug">
  div(class="outside-view")
    h1 About the EdEHR
    div
      div(v-text-to-html.noAutoLink="appText.resources.body")

    h1 EdEHR Help
    div
      div(v-text-to-html.noAutoLink="helpText.student.body")
    div
      div(v-text-to-html.noAutoLink="helpText.instructor.body")
    div
      div(v-text-to-html.noAutoLink="helpText.lmsadmin.body")

    h2 About edehr.org
    p
      | The EdEHR application is "open source" which means that anyone is free to run an instance of this software on their own servers. The original developer of EdEHR offers the software as a not for profit service at &nbsp;
      a(href='[https://edehr.org') https://edehr.org. &nbsp;
      | To learn more about how your learning institution can use this service please email <a href="mailto:info@edehr.org">info@edehr.org</a>.
      | Click &nbsp;
      router-link(:to="{ name: `privacy` }") here  &nbsp;
      | to read the <strong>privacy policy</strong> for the edehr.org service.
</template>

<script>
import { appText, helpText } from '@/appText'
export default {
  data () {
    return {
      appText: appText,
      helpText: helpText,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-view {
  margin: 2rem;
}
</style>
