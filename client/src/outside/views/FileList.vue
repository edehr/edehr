<template lang="pug">
  div
    h1 EHR Files
    div(class="intro")
      p.
        Files can be uploaded to the EdEHR server and later used within the EHR pages, where ever a normal file upload
        action would appear.  Say, for example, on the Laboratory Reports or the Medical Imaging pages.
      p.
        As a course designer (someone who creates course content) you will upload files here and then navigate
        to the EHR seed data and edit the EHR content.  When you go to pages like Laboratory Reports and click
        to add a record you will be able to select a file from those listed below.
    div(class="controls")
      ui-button(v-on:buttonClicked="openDialog") Add EHR File
    div
      file-list
    app-dialog(
      :isModal="true",
      ref="addFile",
      :useSave="false",
      cancelButtonLabel="Done",
      @cancel="cancelDialog"
    )
      h2(slot="header") Add EHR Files
      div(slot="body")
        file-upload
    ui-button(v-on:buttonClicked="showSelectDialog", secondary, title="Select a file") Select
    file-select-dialog(ref="fileSelectDialog", @fileSelected="fileSelected")

</template>
<script>
import AppDialog from '@/app/components/AppDialogShell.vue'
import FileList from '@/outside/components/FileList'
import FileSelectDialog from '@/outside/components/FileSelectDialog'
import UiButton from '@/app/ui/UiButton'
import FileUpload from '@/outside/components/FileUpload'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    AppDialog, FileList, FileSelectDialog, FileUpload, UiButton
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
    refresh () { this.getFileList() },
    showSelectDialog () {
      this.$refs.fileSelectDialog.showDialog()
    },
  },
}
</script>

<style scoped lang="scss">
</style>
