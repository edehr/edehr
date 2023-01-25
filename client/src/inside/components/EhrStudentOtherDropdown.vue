<template lang='pug'>
  div
    app-dropdown(:items="items")
    ehr-context-activity-dialog(ref='activityDialog')
    ehr-scratch-pad-dialog(ref='scratchPad')
    ui-agree(ref='evalNotes')
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import { APP_ICONS } from '@/helpers/app-icons'
import EhrScratchPadDialog from '@/inside/components/EhrScratchPadDialog'
import EhrContextActivityDialog from '@/inside/components/EhrContextActivityDialog'
import StoreHelper from '@/helpers/store-helper'
import UiAgree from '@/app/ui/UiAgree'
export default {
  components: {
    UiAgree,
    AppDropdown, EhrContextActivityDialog, EhrScratchPadDialog
  },
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    items () {
      return [
        {
          label: 'My activities',
          toolTip: 'See list of all my EdEHR activities.',
          callback: () => this.$router.push('/student-courses'),
          icon: this.appIcons.course
        },
        {
          label: 'Activity information',
          toolTip: 'See details about the assigned activity.',
          callback: () => this.$refs.activityDialog.showDialog(),
          icon: 'book-open'
        },
        {
          label: 'Scratch pad',
          toolTip: 'A place for you to place notes. This is visible only to you.',
          callback: () => this.$refs.scratchPad.showDialog(),
          icon: 'pen'
        },
        {
          label: 'Exit to LMS',
          toolTip: 'Return to your school\'s learning management system. ' + StoreHelper.lmsName() + ' ' + StoreHelper.lmsUrl(),
          callback: () => {
            StoreHelper.exitToLms()
          },
          icon: 'sign-out-alt'
        }
      ]
    },
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    evalNotes () {
      return this.panelInfo.evaluationData ? this.panelInfo.evaluationData : 'No comments yet.'
    }

  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
</style>
