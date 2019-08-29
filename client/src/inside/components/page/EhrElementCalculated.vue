<template lang="pug">
  div(class="form-element")
    label(class="calculated_value")
      span(v-html="element.label")
      span : &nbsp; {{value}}
</template>

<script>
import EventBus from '../../../helpers/event-bus'
import { FORM_INPUT_EVENT } from '../../../helpers/event-bus'
import { ehrCalculateProperty } from './ehr-calcs'

let db = false

export default {
  name: 'EhrComputedNumber',
  inject: [ 'pageDataKey' ],
  props: {
    ehrHelp: { type: Object },
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
      let pageDataKey = this.pageDataKey
      let elementKey = this.element.elementKey
      let value = ehrCalculateProperty(pageDataKey, elementKey, this.ehrHelp)
      if (db) console.log('EhrComputedValue ', elementKey, value)
      // put value into the inputs so the dialog save can preserve the result
      this.ehrHelp.stashActiveData(elementKey, value)
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
    EventBus.$on(FORM_INPUT_EVENT, this.eventHandler)
  },
  beforeDestroy: function () {
    if (this.eventHandler) {
      EventBus.$off(FORM_INPUT_EVENT, this.eventHandler)
    }
  },
}
</script>

<style lang="scss" scoped>
.calculated_value {
}
</style>