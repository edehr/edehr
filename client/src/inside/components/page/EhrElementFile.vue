<template lang="pug">
  div(class="form-element")
    ehr-page-form-label(:element="element", css="ehrFile_label")
    div(class="file-element")
      div(class="inline")
        ehr-file-link(v-if="inputVal && inputVal.fName", :ehrFile="inputVal", :alink="false")
      div(class="inline select-file")
        ui-button(v-on:buttonClicked="showSelectDialog", v-bind:disabled="disabled || viewOnly", secondary, title="Select a file") {{ buttonLabel }}
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")
    ui-agree(ref="ehrOnlyDialog")
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EhrFileLink from '@/inside/components/EhrFileLink'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiAgree from '@/app/ui/UiAgree'
import UiButton from '@/app/ui/UiButton'
import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { isImageFile } from '@/helpers/ehr-utils'
import { FORM_INPUT_EVENT } from '@/helpers/event-bus'
import { ehrOnlyDemoText } from '@/appText'

let db = false
/*

      a(:href="inputVal.url")
        img(v-if="isImage", :src="inputVal.url", style="height: 100px")
        span {{inputVal.name }}

 */

export default {
  components: { EhrFileLink, FileSelectDialog, UiAgree, UiButton },
  extends: EhrElementCommon,
  // TODO pageDataKey is also injected by EhrElementCommon .. so remove the following and test
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
    buttonLabel () { return this.inputVal && this.inputVal.fName ? 'Change' : 'Select'},
    isImage () { return this.inputVal ? isImageFile(this.inputVal.fName) : false }
  },
  methods: {
    fileSelected ( file ) {
      console.log('file selected', file)
      this.inputVal = file
    },
    showSelectDialog () {
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        const msg = ehrOnlyDemoText.fileDialogMessage
        const title = ehrOnlyDemoText.fileDialogTitle
        this.$refs.ehrOnlyDialog.showDialog(title, msg)
      } else {
        this.$refs.fileSelectDialog.showDialog()
      }
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
.file-element {
  margin: 1rem;
}
.select-file {
  vertical-align: top;
}
</style>
