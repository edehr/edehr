<template lang="pug">
  div(class="EhrPanelContent")
    div(class="EhrPanelContent_Inner")
      slot
</template>

<script>
export default {
  name: 'EhrPanelContent',
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrPanelContent {
  &__main {
    .table th {
      border-bottom: 2px solid $grey60;
    }
  }
}
</style>
