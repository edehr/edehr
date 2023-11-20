<template lang='pug'>
div
  transition(name="fade")
    div(v-if="showEx", class="explain-container explain-page-element")
      slot
</template>

<script>
export default {
  props: {
    showEx: { type: Boolean }
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
</style>
