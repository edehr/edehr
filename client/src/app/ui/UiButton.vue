<template>
  <button v-on:click="buttonClicked" v-bind:class="classObject"><slot /></button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    value: { type: String },
    secondary: {
      type: Boolean
    }
  },
  computed: {
    classObject: function() {
      var def = {
        button: true
      }
      if (this.secondary) {
        def['is-light'] = true
      } else {
        def['is-primary'] = true
      }
      return def
    }
  },
  methods: {
    buttonClicked: function(event) {
      this.$emit('buttonClicked', event, this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

button,
.button,
.button.is-primary {
  background-color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;

  &:hover {
    background-color: $brand-primary-hover;
    transition-duration: 0.3s;
    transition-property: background-color;
  }

  &:disabled {
    background-color: $grey20;
    color: $white;
    cursor: default;
  }
}

.button.is-light {
  background-color: $white;
  border: 1px solid $brand-primary;
  box-sizing: border-box;
  color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;

  &:hover {
    background-color: $white;
    border: 1px solid $brand-primary-hover;
    color: $brand-primary-hover;
    transition-duration: 0.3s;
  }

  &:disabled {
    background-color: $grey20;
    color: $white;
    cursor: default;
  }
}
</style>
