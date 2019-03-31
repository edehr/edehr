<template lang="pug">
  label(class="calculated_value") {{def.label}}: &nbsp; {{value}}
</template>

<script>
import EventBus from '../../helpers/event-bus'
import { DIALOG_INPUT_EVENT } from '../../helpers/event-bus'
import { ehrCalculateProperty } from '../../helpers/ehr-calcs'

export default {
  name: 'EhrComputedNumber',
  props: {
    inputs: {type: Object}, // dialog values
    def: {type: Object} // cell definition
  },
  data () {
    return {
      value: '',
      eventHandler: {}
    }
  },
  methods: {
    receiveEvent (eData) {
      let pageDataKey = this.def.pageDataKey
      let elementKey = this.def.elementKey
      let value = ehrCalculateProperty(pageDataKey, elementKey, this.inputs)
      // console.log('EhrComputedValue ', elementKey, value)
      // put value into the inputs so the dialog save can preserve the result
      this.inputs[elementKey] = value
      // put into component data to be rendered
      this.value = value
    }
  },
  mounted: function () {
    const _this = this
    // get initial value
    let elementKey = this.def.elementKey
    this.value = this.inputs[elementKey]
    // set up event handler
    this.eventHandler = function (eData) {
      _this.receiveEvent(eData)
    }
    EventBus.$on(DIALOG_INPUT_EVENT, this.eventHandler)
  },
  beforeDestroy: function () {
    if (this.eventHandler) {
      EventBus.$off(DIALOG_INPUT_EVENT, this.eventHandler)
    }
  },
}
</script>

<style lang="scss" scoped>
.calculated_value {
}
</style>