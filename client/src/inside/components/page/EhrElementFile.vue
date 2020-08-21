<template lang="pug">
  div(class="form-element")
    ehr-page-form-label(:element="element", css="ehrFile_label")
    ui-button(v-on:buttonClicked="showSelectDialog", secondary, title="Select a file") Select
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")
    div {{inputVal}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EventBus from '../../../helpers/event-bus'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiButton from '@/app/ui/UiButton'
import { FORM_INPUT_EVENT } from '../../../helpers/event-bus'
import { ehrCalculateProperty } from './ehr-calcs'

let db = true

export default {
  components: { FileSelectDialog, UiButton },
  extends: EhrElementCommon,
  inject: [ 'pageDataKey' ],
  props: {
  },
  data () {
    return {
      value: '',
      eventHandler: {}
    }
  },
  methods: {
    fileSelected ( file ) {
      console.log('file selected', file)
      this.inputVal = file
    },
    showSelectDialog () {
      this.$refs.fileSelectDialog.showDialog()
    },
    receiveEvent (eData) {
      let pageDataKey = this.pageDataKey
      let elementKey = this.element.elementKey
      if (db) console.log('EhrFile rcv evt', eData, pageDataKey, elementKey)
      let value = ehrCalculateProperty(pageDataKey, elementKey, this.ehrHelp)
      if (db) console.log('EhrFile ', elementKey, value)
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
</style>
