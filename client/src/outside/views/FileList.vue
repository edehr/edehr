<template lang="pug">
  div
    zone-lms-page-banner
      zone-lms-button(v-if="isDevelopingContent", @action="openDialog", :icon='appIcons.file', :text='text.ADD_LABEL')
    zone-lms-instructions-header
      p {{ text.P1 }}
      p {{ text.P2 }}
    file-list

    div(v-show="errorMessage", class="error-msg") {{ errorMessage }}
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
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import AppDialog from '@/app/components/AppDialogShell.vue'
import FileList from '@/outside/components/FileList'
import UiButton from '@/app/ui/UiButton'
import FileUpload from '@/outside/components/FileUpload'
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'

export default {
  components: {
    ZoneLmsInstructionsHeader,
    ZoneLmsButton,
    ZoneLmsPageBanner,
    ZoneLmsPageName,
    AppDialog, FileList, FileUpload, UiButton
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.FILES_PAGE
    }
  },
  computed: {
    errorMessage () { return StoreHelper.getFileListErrorMessage() },
    isDevelopingContent () { return StoreHelper.isDevelopingContent()  },
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
