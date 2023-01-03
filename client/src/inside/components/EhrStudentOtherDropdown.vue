<template lang='pug'>
  div
    app-dropdown(:items="items")
    ehr-context-activity-dialog(ref='activityDialog')
    ehr-scratch-pad-dialog(ref='scratchPad')
    ui-agree(ref='evalNotes')
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import EhrScratchPadDialog from '@/inside/components/EhrScratchPadDialog'
import EhrContextActivityDialog from '@/inside/components/EhrContextActivityDialog'
import StoreHelper from '@/helpers/store-helper'
import UiAgree from '@/app/ui/UiAgree'
export default {
  components: {
    UiAgree,
    AppDropdown, EhrContextActivityDialog, EhrScratchPadDialog
  },
  computed: {
    items () {
      return [
        {
          label: 'Instructor\'s comments',
          toolTip: 'See what your instructor has said about your work.',
          callback: () => this.$refs.evalNotes.showDialog('Instructor comments', this.evalNotes),
          icon: 'chalkboard-teacher'
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
