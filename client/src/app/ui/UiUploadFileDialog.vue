<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      :useSave="false",
      @cancel="cancelDialog"
      )
      h2(slot="header") Upload a EHR case study file
      div(slot="body")
        p Select a EHR case study file that you saved from earlier work or one that you got from another EdEHR user.
        div
          label(class="file-label")
            input(
              class="file-input"
              type="file",
              id="fileUploadInput",
              accept="application/json",
              ref="fileUploadInput",
              @change="setFile"
            )
            span(class="file-label button is-primary")  Import case study json file
        p
        p(v-if='uploadError') Error: {{ uploadError }}
</template>

<script>
import AppDialog from '../components/AppDialogShell'
import {  readFile, validateSeedFileContents } from '@/helpers/ehr-utils'
import { ehrOnlyDemoText } from '@/appText'

export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
      appText: ehrOnlyDemoText,
      uploadError: ''
    }
  },
  computed: {
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
    setFile (event) {
      this.uploadError = ''
      const file = event.target.files[0]
      readFile(file).then( (contents) => {
        let {seedObj, invalidMsg} = validateSeedFileContents(contents)
        if (invalidMsg) {
          this.uploadError = invalidMsg
        } else {
          this.$emit('upload', seedObj)
          this.cancelDialog()
        }
      })
    },

  },
}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .file-label {
    height: auto !important;
  }
</style>

