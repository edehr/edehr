<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @save="confirmDialog", @cancel="cancelDialog", :saveButtonLabel="saveLabel", :disableSave="disableSave")
      h2(slot="header") {{ title }}
      div(slot="body")
        div(class="instruction") {{ message }}
        div(class="ehr-group-wrapper grid-left-to-right-2")
          div(class="form-element")
            div(class="text_input_wrapper")
              input(class="input text-input", type="text", v-model="value", v-validate="fileNameValidate")
              span(class="suffix") {{ extension }}
</template>

<script>
import AppDialog from '../components/AppDialogShell'
import { isValidFilename, makeSafeFileName } from '../../helpers/ehr-utils'
const CONFIRM_EVENT = 'confirm' // event emitted when user confirms
const ABORT_EVENT = 'abort' // event emitted when user aborts

export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
      value: '',
      extension: '.csv'
    }
  },
  props: {
    title: { type: String },
    message: { type: String },
    filename: { type: String },
    saveLabel: { type: String, default: 'OK'}
  },
  computed: {
    fileNameValidate () {
      let m
      if (this.value.trim().length === 0) m = 'A filename is required'
      if (!m  && !isValidFilename(this.value)) m =  'The filename is invalid'
      return m
    },
    disableSave () {
      return this.fileNameValidate !== undefined
    }
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    closeIt: function () {
      this.$refs.theDialog.onClose()
    },
    cancelDialog: function () {
      this.closeIt()
      this.$emit(ABORT_EVENT)
    },
    confirmDialog: function () {
      this.closeIt()
      let fn = this.value + this.extension
      this.$emit(CONFIRM_EVENT, fn)
    }
  },
  watch: {
    filename: function () {
      let fn = this.filename || ''
      this.value = makeSafeFileName(fn)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .suffix, .text-input {
    display: inline-block;
  }
  .suffix {
    position:absolute;
    right: -2rem;
  }

  .instruction {
    margin-bottom: 1rem;
  }

</style>

