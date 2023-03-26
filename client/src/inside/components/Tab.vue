<template lang="pug">
  div(v-show="isActive")
    slot
</template>

<script>
export default {
  inject: [ 'pageDataKey' ],
  props: {
    name: {
      required: true
    },
  },
  computed: {
    isActive () { return this.$store.getters['ehrPageTab/isTabSelected'] ( this.pageDataKey, this.name) }
  },
}
</script>

<style scoped></style>
