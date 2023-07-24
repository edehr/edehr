<template lang="pug">
  button(v-on:click="buttonClicked", class="ui-table-header-button", :disabled="disabled", :title='title')
    slot
</template>

<script>
export default {
  props: {
    title: { type: String, default: ''},
    disabled: { type: Boolean, default: false },
  },
  computed: {
  },
  methods: {
    buttonClicked: function (event) {
      event.preventDefault()
      this.$emit('buttonClicked', event, this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-layout .ui-table-header-button {
  font-size: 1rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  //height: 2rem;
  background-color: transparent;
  cursor: pointer;
  color: $brand-primary;
  border: none;
  border-radius: $button-border-radius;
}
.outside-layout .ui-table-header-button:hover {
  color: $brand-highlight;
  box-shadow: 1px 1px 2px $grey60;
  border: 1px solid $grey30;
  font-weight: bolder;
}

</style>
