<template lang="pug">
  div(class="flow_across menu_space_across")
    div(class="flow_across menu_space_across bigger-than-threshold1")
      router-link(:to="{ name: `aboutEdEHR` }", class="navLink") Project
      router-link(:to="{ name: `aboutSaaS` }", class="navLink") Services
      router-link(:to="{ name: `aboutCollaborations` }", class="navLink") Collaborations
    div(class="flow_across menu_space_across smaller-than-threshold1")
      router-link(:to="{ name: `about` }", class="navLink") About
</template>
<script>
export default {
  components: { },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
