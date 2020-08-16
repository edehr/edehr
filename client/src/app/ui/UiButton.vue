<template lang="pug">
  button(v-on:click="buttonClicked", v-bind:class="classObject", :disabled="disabled")
    slot
</template>

<script>
export default {
  props: {
    value: { type: String },
    secondary: {
      type: Boolean
    },
    danger: {
      type: Boolean,
      default: false
    },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    classObject: function () {
      let def = {
        button: true
      }
      
      if (this.secondary) {
        def['is-light'] = true
      } else if (this.danger) {
        def['is-danger'] = true
      } else {
        def['is-primary'] = true
      }
      return def
    }
  },
  methods: {
    buttonClicked: function (event) {
      this.$emit('buttonClicked', event, this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.is-pulled-right {
    margin-left: 1em;
}

</style>
