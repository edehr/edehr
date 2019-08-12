<template lang="pug">
  router-link(:to="destination", class="is-link")
    slot
</template>

<script>

export default {
  name: 'UiLink',
  props: {
    name: { type: String },
    params: { type: Object }
  },
  computed: {
    destination () {
      let d =  {name: this.name}
      if (this.params) d.params = this.params
      return d
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
