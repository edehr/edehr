<template lang="pug">
  div(class="ui-agree")
    app-dialog(:isModal="true", ref="theDialog", :useSave="false", @cancel="cancelDialog", cancelButtonLabel="OK")
      h2(slot="header") {{ title }}
      div(slot="body") {{ text }}
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'
const CONFIRM_EVENT = 'confirm' // event emitted when user confirms
const DEFAULT_TITLE = 'Agree'
const DEFAULT_TEXT =''
export default {
  name: 'UiAgree',
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
    cancelDialog: function () {
      this.title = DEFAULT_TITLE 
      this.msg = DEFAULT_TEXT
      this.$refs.theDialog.onClose()
      this.$emit(CONFIRM_EVENT)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-agree {
}
</style>
