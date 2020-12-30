<template lang="pug">
  div(class="outside-view")
    h1 Help and About
    div
      div(v-text-to-html.noAutoLink="appText.resources.body")
    h2 {{ helpText.student.title }}
    div
      div(v-text-to-html.noAutoLink="helpText.student.body")
    h2 {{ helpText.instructor.title }}
    div
      div(v-text-to-html.noAutoLink="helpText.instructor.body")
    h2 Contact
    div
      app-email-us
    year2020
</template>

<script>
import { appText, helpText } from '@/appText'
import AppEmailUs from '@/app/components/AppEmailUs'
import Year2020 from './Year2020.vue'

export default {
  components: { AppEmailUs, Year2020 },
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
  /*height: 30rem;*/
  margin: 2rem;
}
</style>
