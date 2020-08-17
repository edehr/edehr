<template lang="pug">
  div
    app-dialog(
      :isModal="true", 
      ref="theDialog",  
      @cancel="cancelDialog", 
      @save="saveDialog", 
      :disableSave="disableSave",
      :hasFooterContent="true",
      has-left-button
    )
      h2(slot="header") Select a file
      div(slot="body")
        div(v-show="hasFiles", class="list-body")
          h2 Images
          div(class="list-images-container")
            div(v-for="file in imageFiles")
              label(class="list-element image-element")
                input(type="radio", name="files", :value="file", v-model="selectedFile")
                img(:src="file.url", class="thumbnail")
                span(class="fileName") {{file.fName}}
          h2 Files
          div(class="list-files-container")
            div(v-for="file in otherFiles")
              label( class="list-element")
                input(type="radio", name="files", :value="file", v-model="selectedFile")
                span(class="fileName") {{file.fName}}


      div(slot="footer-content")
        div(v-show="selectedFile.fName")  Selected: {{ selectedFile.fName }}
        div(v-show="errorMessage", class="error-msg") {{ errorMessage }}

</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { AppDialog },
  data () {
    return {
      selectedFile: {}
    }
  },
  props: {},
  computed: {
    disableSave () {
      return !this.selectedFile.fName
    },
    hasFiles () { return this.imageFiles.length > 0 || this.otherFiles.length > 0},
    errorMessage () { return StoreHelper.getFileListErrorMessage() },
    imageFiles () { return StoreHelper.getFileListImages() },
    otherFiles () { return StoreHelper.getFileListOther() },
  },
  methods: {
    showDialog (file) {
      this.selectedFile = {}
      StoreHelper.refreshFileLists(StoreHelper.toolConsumerId())
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      this.$emit('fileSelected', this.selectedFile)
      this.$refs.theDialog.onClose()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .list-element {
    background: $grey03;
    margin: 0.5rem;
    padding: 0.5rem;
    width: 30rem;
  }
  .thumbnail {
    max-height: 100px;
    max-width: 100px;
    margin-left: 1rem;
    display: inline-block;
    vertical-align: middle;
  }
  .fileName {
    margin-left: 1rem;
    display: inline-block;
  }
  .error-msg {
    color: $error;
  }

</style>
