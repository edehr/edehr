<template lang="pug">
  button(v-on:click="buttonClicked", :class="classObject", :disabled="disabled", :title='title')
    slot
</template>

<script>
export default {
  props: {
    value: { type: String },
    title: { type: String, default: ''},
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
      event.preventDefault()

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
