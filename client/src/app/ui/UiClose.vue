<template lang="pug">
  <button v-on:click="$emit('close')" class="button button-close"><slot />
    fas-icon(class="icon-right", icon="times")
  </button>
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
  background: none;
  border: none;
  color: $grey40;
  content: 'faTimes';
  display: inline-block;
  font-size: 1.25em;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 1rem;
  &:hover {
    color: $black;
  }
}
</style>
