<template lang="pug">
  div(class="ui-confirm")
    app-dialog(
      ref="theDialog",
      :isModal="true",
      :saveButtonLabel="saveText",
      :cancelButtonLabel="cancelText",
      @save="confirmDialog",
      @cancel="cancelDialog"
      )
      h3(slot="header") {{ title }}
      div(slot="body")
        div(class="confirm-body", v-if="htmlBody", v-text-to-html="text")
        div(v-else, class="confirm-body") {{ text }}

</template>

<script>
import AppDialog from '../components/AppDialogShell'
import { t18EhrText } from '@/helpers/ehr-t18'
const CONFIRM_EVENT = 'confirm' // event emitted when user confirms
const ABORT_EVENT = 'abort' // event emitted when user aborts

export default {
  name: 'UiConfirm',
  components: {
    AppDialog
  },
  data: function () {
    return {
      title: '',
      text: ''
    }
  },
  props: {
    htmlBody: { type: Boolean, default: false },
    saveLabel: { type: String, default: undefined },
    cancelLabel: { type: String, default: undefined }
  },
  computed: {
    ehrText () { return t18EhrText()},
    cancelText () { return this.cancelLabel || this.ehrText.cancelButtonLabel },
    saveText () { return this.saveLabel || this.ehrText.saveButtonLabel }
  },
  methods: {
    showDialog: function (title, msg, data) {
      this.data = data
      this.title = title  || this.ehrText.submitConfirmTitle
      this.text = msg || this.ehrText.submitConfirmBody
      this.$refs.theDialog.onOpen()
    },
    closeIt: function () {
      this.text = this.title = ''
      this.$refs.theDialog.onClose()
    },
    cancelDialog: function () {
      this.closeIt()
      this.$emit(ABORT_EVENT)
    },
    confirmDialog: function () {
      this.closeIt()
      this.$emit(CONFIRM_EVENT, this.data)
    }
  }
}
</script>

<style lang="scss" >
.ui-confirm {
}
.confirm-body {
  max-width: 60rem
}
.confirm-body a {
  color: blue !important;
  font-weight: bold;
}


</style>
