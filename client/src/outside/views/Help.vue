<template lang="pug">
  div(class="outside-view")
    h1 Help
    div
      resources
    h2 Students
    p.
      Are you a student having trouble with the app or need help with your assignment? Contact your instructor for help.  For information about the EdEHR see the
      <a href="https://bccampus.github.io/edehr/student/">Student guide</a>
    h2 Instructors
    p.
      Are you an instructor and need help? Then reach out to <a href="mailto:info@edehr.org">info@edehr.org</a> or see the <a href="https://bccampus.github.io/edehr/instructor/">Instructor guide</a>
</template>

<script>
import Resources from '../components/Resources.vue'
export default {
  components: { Resources },
  props: {
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
