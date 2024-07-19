<template lang="pug">
  div(class="radio_wrapper", :class='[formCss, {modifiedElement : isModified}]')
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="radioset_label")
    div(class="radio_set")
      div(v-for="option in options")
        label(:for='`${elementKey}-${option.key}`')
          input(type="radio", :name="elementKey", :id="`${elementKey}-${option.key}`", :disabled="disabled || viewOnly", :value="option.key", v-model="radioValue")
          | &nbsp; {{ option.text}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      // use local storage instead of common inputVal
      radioValue: '',
    }
  },
  computed : {
    isModified () { return this.initialVal !== JSON.stringify(this.radioValue) },
    options () { return this.element.options },
  },
  watch: {
    radioValue (val) {
      this.sendInputEvent(val)
    }
  },
  methods: {
    setInitialValue (value) {
      this.radioValue = value
      this.initialVal = this.radioValue
      this.initialVal = JSON.stringify(this.initialVal)
    },
    setup () {
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../../scss/definitions';

.radio_wrapper {
  margin-bottom: 5px;
}
.radio_set {
  display: flex;
  flex-direction: column;
}

label:hover,
input[type="radio"]:hover {
  cursor: pointer;
}
label:hover {
  font-size: 1.1em; /* Slightly increase the font size */
}
</style>
