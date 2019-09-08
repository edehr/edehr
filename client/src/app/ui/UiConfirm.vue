<template lang="pug">
  div(class="ui-confirm")
    app-dialog(:isModal="true", ref="theDialog", @save="confirmDialog", @cancel="cancelDialog", saveButtonLabel="Confirm")
      h2(slot="header") {{ title }}
      div(slot="body") {{ text }}
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'
const CONFIRM_EVENT = 'confirm' // event emitted when user confirms
const ABORT_EVENT = 'abort' // event emitted when user aborts

const DEFAULT_TITLE = 'Confirm or cancel'
const DEFAULT_TEXT =''
export default {
  name: 'UiConfirm',
  components: {
    AppDialog
  },
  data: function () {
    return {
      title: DEFAULT_TITLE,
      text: DEFAULT_TEXT
    }
  },
  methods: {
    showDialog: function (title, msg) {
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
      this.$emit(CONFIRM_EVENT)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-confirm {
}
</style>
