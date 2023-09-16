<template lang="pug">
  div(class="computed_wrapper", :class='formCss')
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
    input(class="input text-input", disabled, :name="elementKey", v-model="value")
</template>

<script>
import EventBus from '@/helpers/event-bus'
import { FORM_INPUT_EVENT } from '@/helpers/event-bus'
import { ehrCalculateProperty } from './ehr-calcs'
import EhrPageFormLabel from '@/inside/components/page/EhrPageFormLabel.vue'
import EhrElementCommon from '@/inside/components/page/EhrElementCommon.vue'

let db = false

export default {
  extends: EhrElementCommon,
  components: { EhrPageFormLabel },
  inject: [ 'pageDataKey' ],
  props: {
    ehrHelp: { type: Object },
    elementKey: { type: String }
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
      if (db) console.log('EhrCalculated rcv FORM_INPUT_EVENT', eData, pageDataKey, elementKey)
      let srcValues = this.ehrHelp.getActiveData()
      let value = ehrCalculateProperty(pageDataKey, elementKey, srcValues)
      if (db) console.log('EhrComputedValue ', elementKey, value)
      // put value into the inputs so the dialog save can preserve the result
      this.ehrHelp.stashActiveData(elementKey, value)
      // round if decimals are specified in the ehr definitions
      let decimals = Number.parseInt(this.element.decimals)
      if (!isNaN(value) && !isNaN(decimals)) {
        let f = Math.pow(10, decimals)
        value = Math.round(value * f) / f
      }
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
