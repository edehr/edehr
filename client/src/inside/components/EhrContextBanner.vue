<template lang="pug">
  div(class="ehr-context-banner")
    div(v-if='isEhrOnlyDemo')
      div(class="flow_across menu_space_across")
        div {{ehrOnlyDemoText.ehrContextBannerTitle}}
        div(class="flow_across_last_item")
          ui-button(v-on:buttonClicked="promptDownload")
            fas-icon(class="fa", :icon="appIcons.upload")
            span &nbsp; Download Data

    div(v-else)
      ehr-context-banner-header(@showChanged="(showVal) => show = showVal")
    ui-confirm(ref="promptDialog", v-on:confirm="downloadEhrOnlyData", saveLabel='Save')
</template>

<script>
import EhrContextBannerHeader from '@/inside/components/EhrContextBannerHeader'
import UiButton from '@/app/ui/UiButton'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { APP_ICONS } from '@/helpers/app-icons'
import { ehrOnlyDemoText } from '@/appText'
import EhrSimTime from '@/inside/components/EhrSimTime'
import { downloadEhrOnlyToFile, getDownloadEhrOnlyFileName } from '@/helpers/ehr-utils'
import UiConfirm from '@/app/ui/UiConfirm.vue'

export default {
  name: 'EhrContextBanner',
  components: { UiConfirm, UiButton, EhrSimTime, EhrContextBannerHeader, UiLink },
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
    promptDownload () {
      this.$refs.promptDialog.showDialog('Save EHR Data', 'Save the EHR data in a file that can be shared with others or imported into the EHR at a later date.')
    },
    closeDialog () {
      this.$refs.promptDialog.cancelDialog()
    },
    downloadEhrOnlyData (filename) {
      filename = getDownloadEhrOnlyFileName()
      let data = StoreHelper.getMergedData()
      downloadEhrOnlyToFile(data, filename)
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
</style>
