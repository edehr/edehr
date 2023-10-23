<template lang="pug">
  div(class="checkbox_wrapper", :class='formCss')
    input(class="checkbox",
      type="checkbox",
      disabled,
      :name="elementKey",
      v-model="inputVal",
      v-on:change="dependentUIEvent()")
    ehr-page-form-label(
      :ehrHelp="ehrHelp",
      :element="element",
      css="checkbox_label, check-label")

</template>

<script>
import EventBus from '@/helpers/event-bus'
import { FORM_INPUT_EVENT } from '@/helpers/event-bus'
import EhrElementCommon from '@/inside/components/page/EhrElementCommon.vue'
import { ehrCalculateBoolProperty } from '@/inside/components/page/ehr-calc-text'

export default {
  extends: EhrElementCommon,
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
      let srcValues = this.ehrHelp.getActiveData()
      let value = ehrCalculateBoolProperty(pageDataKey, elementKey, srcValues)
      // put value into the inputs so the dialog save can preserve the result
      this.ehrHelp.stashActiveData(elementKey, value)
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
