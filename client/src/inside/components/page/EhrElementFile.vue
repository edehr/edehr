<template lang="pug">
  div(class="file_wrapper")
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="ehrFile_label")
    div(class="file-element")
      div(class="inline")
        ehr-file-link(v-if="fValue && fValue.fName", :ehrFile="fValue", :alink="true")
      div(v-if="!viewOnly", class="inline select-file")
        ui-button(v-on:buttonClicked="showSelectDialog", v-bind:disabled="disabled || viewOnly", secondary, title="Select a file") {{ buttonLabel }}
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")
    ui-agree(ref="ehrOnlyDialog")
</template>

<script>
import EhrElementCommon from '@/inside/components/page/EhrElementCommon.vue'
import EhrFileLink from '@/inside/components/EhrFileLink'
import EhrPageFormLabel from '@/inside/components/page/EhrPageFormLabel.vue'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiAgree from '@/app/ui/UiAgree'
import UiButton from '@/app/ui/UiButton'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { isImageFile } from '@/helpers/ehr-utils'
import { ehrOnlyDemoText } from '@/appText'

export default {
  extends: EhrElementCommon,
  components: { EhrPageFormLabel, EhrFileLink, FileSelectDialog, UiAgree, UiButton },
  props: {
    containerInputValue: {type: [String, Object]}
  },
  computed: {
    fValue () { return this.containerInputValue },
    buttonLabel () { return this.fValue && this.fValue.fName ? 'Change' : 'Select'},
    isImage () { return this.fValue ? isImageFile(this.fValue.fName) : false }
  },
  methods: {
    fileSelected ( file ) {
      console.log('file selected', file)
      this.$emit('update', file)
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
