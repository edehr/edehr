<template>
  <button v-on:click="$emit('close')" class="button button-close"><slot /> X</button>
</template>

<script>
export default {
  name: 'UiClose',
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.button-close {
  border: none;
  color: $grey80;
  content: 'faTimes';
  display: inline-block;
  &:hover {
    color: $black;
  }
}
</style>
