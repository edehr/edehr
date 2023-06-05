<template lang='pug'>
  div(class="toggle-button")
    div(class='toggle-label', :class='labelClass') {{ label }}
    label(class="switch")
      div
        input(type="checkbox", v-on:click="toggle", :checked='toggleValue')
        span(class="slider round")

</template>

<script>
export default {
  props: {
    toggleValue: {type: Boolean, default: false},
    label: {type: String},
    theme: {type: String}
  },
  computed: {
    labelClass () {
      return {
        darkLabel: this.theme === 'dark'
      }
    }
  },
  methods: {
    toggle: function (event) {
      this.$emit('toggle', event, this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.toggle-button {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.toggle-label {
  text-align: right;
  max-width: 15rem;
  width: 15rem;
  margin-right: 10px;
}
.darkLabel {
  color: white;
  font-weight: bold;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 3.0rem;
  height: 1.6rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.6rem;
  width: 1.6rem;
  left: 4px;
  bottom: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(1.0rem);
}

/* Rounded sliders */
.slider.round {
  border-radius: 1.4rem;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
