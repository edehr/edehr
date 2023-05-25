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
        div(class="flow_across menu_space_across")
          ui-button(v-on:buttonClicked="promptUpload")
            fas-icon(class="fa", :icon="appIcons.upload")
            span &nbsp; {{ehrOnlyDemoText.ehrContextBannerButtonLabelUpload}}
          ui-button(v-on:buttonClicked="promptDownload")
            fas-icon(class="fa", :icon="appIcons.download")
            span &nbsp; {{ehrOnlyDemoText.ehrContextBannerButtonLabelDownload}}
      ui-button(@buttonClicked="gotoEhrOnly") Other case studies

    ui-confirm(ref="confirmDownload", v-on:confirm="downloadFile", :saveLabel='ehrOnlyDemoText.ehrContextBannerSaveLabelDownload')
    ui-upload-file-dialog(ref="uploadDialog", @upload='uploadSeedObj')
</template>

<script>
import EhrContextBannerHeader from '@/inside/components/EhrContextBannerHeader'
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

export default {
  components: { UiInfo, UiUploadFileDialog, UiConfirm, UiButton, EhrSimTime, EhrContextBannerHeader, UiLink },
  data: function () {
    return {
      show: false,
      appIcons: APP_ICONS,
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    md () { return StoreHelper.getMergedData() },
    isEhrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
    seedObj () {
      return this.$store.getters['ehrOnlyDemoStore/ehrOnlySeed'] || {}
    },
    seedContributors () { return this.seedObj.contributors },
    seedDescription () { return this.seedObj.description },
    seedLicense () { return this.seedObj.license },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
    },
    showSeeding () {
      return StoreHelper.isSeedEditing()
    },
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
  mounted: function () {
    if (StoreHelper.isInstructor(this)){
      this.show = true
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-context-banner {
  background-color: $brand-primary-light;
  padding: 5px $ehr-layout-padding-left;
  border-top: 1px solid $grey40;
}

.bTitle {
  flex-grow: 4;
}
</style>
