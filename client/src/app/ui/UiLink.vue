<template lang="pug">
  router-link(:to="to", class="is-link")
    slot
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    to: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/definitions';

  a,
  .table_link {
    color: $brand-primary;

    &:hover {
      color: $brand-primary-hover;
    }
  }
</style>
