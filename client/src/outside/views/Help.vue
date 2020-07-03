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
  height: 30rem;
  margin: 2rem;
}
</style>
