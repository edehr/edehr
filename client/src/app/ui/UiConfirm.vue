<template lang="pug">
  div(class="ui-confirm")
    app-dialog(
      ref="theDialog",
      :isModal="true",
      :saveButtonLabel="saveLabel",
      :cancelButtonLabel="cancelLabel",
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
const CONFIRM_EVENT = 'confirm' // event emitted when user confirms
const ABORT_EVENT = 'abort' // event emitted when user aborts

const DEFAULT_TITLE = 'Confirm or cancel'
const DEFAULT_TEXT =''
const SAVE_BUTTON_LABEL = 'Save'
const CANCEL_BUTTON_LABEL = 'Cancel'
export default {
  name: 'UiConfirm',
  components: {
    AppDialog
  },
  data: function () {
    return {
      title: DEFAULT_TITLE,
      text: DEFAULT_TEXT,
    }
  },
  props: {
    htmlBody: { type: Boolean, default: false },
    saveLabel: { type: String, default: SAVE_BUTTON_LABEL },
    cancelLabel: { type: String, default: CANCEL_BUTTON_LABEL }
  },

  methods: {
    showDialog: function (title, msg, data) {
      this.data = data
      this.title = title  || this.title
      this.text = msg || this.text
      this.$refs.theDialog.onOpen()
    },
    closeIt: function () {
      this.title = DEFAULT_TITLE
      this.msg = DEFAULT_TEXT
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
