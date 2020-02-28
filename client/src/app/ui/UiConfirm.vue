<template lang="pug">
  div(class="ui-confirm")
    app-dialog(
      ref="theDialog", 
      :isModal="true", 
      :saveButtonLabel="save",
      :cancelButtonLabel="cancel",
      @save="confirmDialog", 
      @cancel="cancelDialog"
      )
      h2(slot="header") {{ title }}
      div(slot="body") {{ text }}
        slot(name="extra")
  
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
      save: SAVE_BUTTON_LABEL,
      cancel: CANCEL_BUTTON_LABEL
    }
  },
  props: {
    setFooter: {type: Boolean, default: false}
  },

  methods: {
    showDialog: function (title, msg, save = SAVE_BUTTON_LABEL, cancel = CANCEL_BUTTON_LABEL) {
      this.title = title  || this.title
      this.text = msg || this.text
      if(this.setFooter) {
        this.save = save
        this.cancel = cancel
      }
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
