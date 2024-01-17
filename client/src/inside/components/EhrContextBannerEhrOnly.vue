<template lang="pug">
  div
    div(class="flow_across menu_space_across")
      div(class="bTitle") {{ehrOnlyDemoText.ehrContextBannerTitle}}
      div(class="bTitle") {{ seedObj.name }}
      div(class="bigger-than-threshold4", v-if="seedDescription") Description:
        ui-info(:text='seedDescription')
      div(class="bigger-than-threshold4", v-if="seedContributors") Contributors:
        ui-info(title="Contributors", :text='seedContributors')
      div(class="bigger-than-threshold4", v-if="seedLicense") License:
        ui-info(title="License", :text='seedLicense')
      div(class="flow_across_last_item")
        app-dropdown(:items="items")
        //div(class="flow_across menu_space_across")
        //  ui-button(v-on:buttonClicked="promptUpload")
        //    fas-icon(class="fa", :icon="appIcons.upload")
        //    span &nbsp; {{ehrOnlyDemoText.ehrContextBannerButtonLabelUpload}}
          //ui-button(v-on:buttonClicked="promptDownload")
          //  fas-icon(class="fa", :icon="appIcons.download")
          //  span &nbsp; {{ehrOnlyDemoText.ehrContextBannerButtonLabelDownload}}
      //ui-button(@buttonClicked="gotoEhrOnly") Other case studies

    ui-confirm(ref="confirmDownload", v-on:confirm="downloadFile", :saveLabel='ehrOnlyDemoText.ehrContextBannerSaveLabelDownload')
    ui-upload-file-dialog(ref="uploadDialog", @upload='uploadSeedObj')
</template>

<script>
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import EhrSimTime from '@/inside/components/EhrSimTime'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import UiLink from '@/app/ui/UiLink'
import { APP_ICONS } from '@/helpers/app-icons'
import { ehrOnlyDemoText } from '@/appText'
import { downloadEhrOnlyToFile, getDownloadEhrOnlyFileName } from '@/helpers/ehr-utils'
import UiUploadFileDialog from '@/app/ui/UiUploadFileDialog.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import AppDropdown from '@/app/components/app-dropdown/AppDropdown.vue'

export default {
  components: { AppDropdown, UiInfo, UiUploadFileDialog, UiConfirm, UiButton, EhrSimTime, UiLink },
  data: function () {
    return {
      appIcons: APP_ICONS,
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    items () {
      const menu = []
      menu.push({
        label: 'Other case studies',
        callback: () => { this.$router.push({name: 'ehrOnlyDemo'} ) },
        icon: this.appIcons.seed

      })
      menu.push({
        label: ehrOnlyDemoText.ehrContextBannerButtonLabelUpload ,
        callback: () => this.promptUpload(),
        icon: this.appIcons.upload
      })
      menu.push({
        label: ehrOnlyDemoText.ehrContextBannerButtonLabelDownload ,
        callback: () => this.promptDownload(),
        icon: this.appIcons.download
      })
      return menu
    },
    seedObj () {
      return this.$store.getters['ehrOnlyDemoStore/ehrOnlySeed'] || {}
    },
    seedContributors () { return this.seedObj.contributors },
    seedDescription () { return this.seedObj.description },
    seedLicense () { return this.seedObj.license },
  },
  methods: {
    gotoEhrOnly () {
      this.$router.push({name: 'ehrOnlyDemo'} )
    },
    promptDownload () {
      this.$refs.confirmDownload.showDialog('Save EHR Data', 'Save the EHR data in a file that can be shared with others or imported into the EHR at a later date.')
    },
    promptUpload () {
      this.$refs.uploadDialog.showDialog()
    },
    downloadFile () {
      const filename = getDownloadEhrOnlyFileName()
      let data = StoreHelper.getMergedData()
      downloadEhrOnlyToFile(data, filename)
    },
    uploadSeedObj (seedObj) {
      EhrOnlyDemo.setCaseStudy(seedObj)
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.bTitle {
  flex-grow: 4;
}
</style>
