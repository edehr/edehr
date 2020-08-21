<template lang="pug">
  div(class="form-element")
    ehr-page-form-label(:element="element", css="ehrFile_label")
    div(class="inline thumbnail")
      a(:href="inputVal.url")
        img(:src="inputVal.url", style="height: 100px")
        span {{inputVal.name }}
    div(class="inline select-file")
      ui-button(v-on:buttonClicked="showSelectDialog", v-bind:disabled="disabled", secondary, title="Select a file") {{ buttonLabel }}
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EventBus from '../../../helpers/event-bus'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiButton from '@/app/ui/UiButton'
import { FORM_INPUT_EVENT } from '../../../helpers/event-bus'

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
  computed: {
    buttonLabel () { return this.inputVal && this.inputVal.url ? 'Change' : 'Select'}
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
      let value = this.inputVal
      if (db) console.log('EhrFile rcv FORM_INPUT_EVENT', eData, pageDataKey, elementKey, value)
      // put value into the inputs so the dialog save can preserve the result
      this.ehrHelp.stashActiveData(elementKey, value)
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
.inline {
  display: inline-block;
}
.select-file {
  vertical-align: top;
}
</style>
