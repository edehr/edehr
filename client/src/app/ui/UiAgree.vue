<template lang="pug">
  div(class="UiConfirm")
    app-dialog(:isModal="true", v-show="showConfirm", :useSave="false", @cancel="cancelDialog", cancelButtonLabel="OK")
      h3(slot="header") {{ title }}
      div(slot="body") {{ text }}
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'
const DEFAULT_TITLE = 'Confirm'
const DEFAULT_TEXT =''
export default {
  name: 'UiConfirm',
  components: {
    AppDialog
  },
  data: function() {
    return {
      showConfirm: false,
      title: DEFAULT_TITLE,
      text: DEFAULT_TEXT
    }
  },
  methods: {
    showDialog: function(title, msg) {
      this.title = title  || this.title
      this.text = msg || this.text
      this.showConfirm = true
    },
    cancelDialog: function() {
      this.title = DEFAULT_TITLE 
      this.msg = DEFAULT_TEXT
      this.showConfirm = false
    }
  }
}
</script>

<style lang="scss" scoped>
.UiConfirm {
}
</style>
