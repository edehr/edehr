<template lang="pug">
  div
    // h1 EHR Files
    div(class="intro")
      p {{ text.P1 }}
      p {{ text.P2 }}
    div(class="controls showing-labels")
      ui-button(v-on:buttonClicked="openDialog") {{text.ADD_LABEL}}
    div
      file-list
    app-dialog(
      :isModal="true",
      ref="addFile",
      :useSave="false",
      cancelButtonLabel="Done",
      @cancel="cancelDialog"
    )
      h2(slot="header") {{text.ADD_TITLE}}
      div(slot="body")
        file-upload
</template>
<script>
import { Text } from '@/helpers/ehr-text'
import AppDialog from '@/app/components/AppDialogShell.vue'
import FileList from '@/outside/components/FileList'
import UiButton from '@/app/ui/UiButton'
import FileUpload from '@/outside/components/FileUpload'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    AppDialog, FileList, FileUpload, UiButton
  },
  data () {
    return {
      text: Text.FILES_PAGE
    }
  },
  methods: {
    fileSelected ( file ) {
      console.log('file selected', file)
    },
    openDialog () {
      StoreHelper.uploadReset()
      this.$refs.addFile.onOpen()
    },
    cancelDialog: function () {
      this.$refs.addFile.onClose()
    },
  },
}
</script>

<style scoped lang="scss">
</style>
