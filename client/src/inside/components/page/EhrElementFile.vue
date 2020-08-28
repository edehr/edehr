<template lang="pug">
  div(class="form-element")
    ehr-page-form-label(:element="element", css="ehrFile_label")
    div(class="file-element")
      div(class="inline")
        ehr-file-link(v-if="inputVal.fName", :ehrFile="inputVal", :alink="false")
      div(class="inline select-file")
        ui-button(v-on:buttonClicked="showSelectDialog", v-bind:disabled="disabled", secondary, title="Select a file") {{ buttonLabel }}
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EventBus from '../../../helpers/event-bus'
import EhrFileLink from '@/inside/components/EhrFileLink'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiButton from '@/app/ui/UiButton'
import { isImageFile } from '../../../helpers/ehr-utils'
import { FORM_INPUT_EVENT } from '../../../helpers/event-bus'

let db = false
/*

      a(:href="inputVal.url")
        img(v-if="isImage", :src="inputVal.url", style="height: 100px")
        span {{inputVal.name }}

 */

export default {
  components: { EhrFileLink, FileSelectDialog, UiButton },
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
    buttonLabel () { return this.inputVal && this.inputVal.fName ? 'Change' : 'Select'},
    isImage () { return this.inputVal ? isImageFile(this.inputVal.fName) : false }
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
.file-element {
  margin: 1rem;
}
.select-file {
  vertical-align: top;
}
</style>
