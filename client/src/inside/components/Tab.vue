<template lang="pug">
  div(v-show="isActive")
    slot
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    this.isActive = this.selected
  }
}
</script>

<style scoped></style>
