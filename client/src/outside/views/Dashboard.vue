<template lang="pug">
  div(class="outside-view home")
    h1 Welcome to the Educational Electronic Health Record System (EddEHR)
    p.
      To use this system you need to use a Learning Management System such as Moodle, Canvas, Blackboard, or any of the
      many LTI compliant learning systems. Ask you LMS administrator to configure the LMS to send a LTI
      request to this server at '/launch_lti' along with a prearranged key and secret.
    p.
      For complete instructions see the project README on github
    a(href="https://github.com/BCcampus/edehr") github
</template>

<script>
export default {
  name: 'home',
  components: {},
  computed: {}
}
</script>
