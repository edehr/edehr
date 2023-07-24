<template lang='pug'>
  div(class="toggle-button")
    label(class='flow_across')
      div(class='toggle-label-left') {{ labelOff }}
      div(class="switch")
        input(type="checkbox", v-on:click="toggle", :checked='modelValue')
        span(class="slider round")
      div(class='toggle-label-right') {{ labelOn }}
</template>

<script>
export default {
  props: {
    modelValue: {type: Boolean, default: false},
    labelOn: {type: String},
    labelOff: {type: String}
  },
  computed: {
  },
  methods: {
    toggle: function (event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.toggle-button {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.toggle-label-left {
  text-align: right;
  margin-right: 5px;
}
.toggle-label-right {
  text-align: left;
  margin-left: 5px;
}
.darkLabel {
  color: white;
  font-weight: bold;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 2.8rem;
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
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 1px 1px 2px $grey20;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.6rem;
  width: 1.6rem;
  left: 2px;
  bottom: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:focus + .slider {
  box-shadow: 2px 2px 2px $grey60
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

/* BRANDING */
.slider {
  background-color: $colour-brand-lis;
}

input:checked + .slider {
  background-color: $colour-brand-ehr;
}

</style>
