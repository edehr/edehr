<template lang="pug">
  label(class="calculated_value")
    span(v-html="element.label")
    span : &nbsp; {{value}}
</template>

<script>
import EventBus from '../../../helpers/event-bus'
import { DIALOG_INPUT_EVENT, PAGE_FORM_INPUT_EVENT } from '../../../helpers/event-bus'
import { ehrCalculateProperty } from './ehr-calcs'

let db = false

export default {
  name: 'EhrComputedNumber',
  props: {
    ehrHelp: { type: Object },
    inputs: {type: Object}, // dialog values
    element: {type: Object} // cell definition
  },
  data () {
    return {
      value: '',
      eventHandler: {}
    }
  },
  methods: {
    receiveEvent (eData) {
      let pageDataKey = this.ehrHelp.getPageKey()
      let elementKey = this.element.elementKey
      if (db) console.log('EhrComputedValue ', elementKey, this.inputs)
      let value = ehrCalculateProperty(pageDataKey, elementKey, this.inputs)
      if (db) console.log('EhrComputedValue ', elementKey, value)
      // put value into the inputs so the dialog save can preserve the result
      this.inputs[elementKey] = value
      // put into component data to be rendered
      this.value = value
    }
  },
  mounted: function () {
    const _this = this
    // get initial value
    this.value = ''// this.inputs[elementKey]
    // set up event handler
    this.eventHandler = function (eData) {
      _this.receiveEvent(eData)
    }
    EventBus.$on(PAGE_FORM_INPUT_EVENT, this.eventHandler)
    EventBus.$on(DIALOG_INPUT_EVENT, this.eventHandler)
  },
  beforeDestroy: function () {
    if (this.eventHandler) {
      EventBus.$off(PAGE_FORM_INPUT_EVENT, this.eventHandler)
      EventBus.$off(DIALOG_INPUT_EVENT, this.eventHandler)
    }
  },
}
</script>

<style lang="scss" scoped>
.calculated_value {
}
</style>