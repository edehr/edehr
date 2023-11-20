<template lang='pug'>
div
  transition(name="fade")
    div(v-if="showEx", class="explain-container explain-page-element")
      slot
</template>

<script>
export default {
  computed: {
    showEx () { return this.$store.getters['system/showExplanationTextOutside']},
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
</style>
