<template lang='pug'>
  div
    app-dropdown(:items="items")
      template(#dropdownTitle)
        slot
    ui-confirm(class="confirmDialog",
      ref="confirmDialog",
      @confirm="demoLogOut",
      save-label="Logout")
    ehr-context-activity-dialog(ref='activityDialog')
    ehr-scratch-pad-dialog(ref='scratchPad')
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import EhrScratchPadDialog from '@/inside/components/EhrScratchPadDialog'
import EhrContextActivityDialog from '@/inside/components/EhrContextActivityDialog'
import UiConfirm from '@/app/ui/UiConfirm'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: {
    AppDropdown, EhrContextActivityDialog, EhrScratchPadDialog, UiConfirm
  },
  computed: {
    items () {
      return [
        // TODO add simulation time
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
          toolTip: 'Return to your school\'s learning management system',
          callback: async () => {
            const url = StoreHelper.lmsUrl()
            await StoreHelper.logUserOutOfEdEHR()
            window.location = url
          },
          icon: 'sign-out-alt'
        }
      ]
    },
  },
  methods: {
    async demoLogOut () {
      await StoreHelper.demoLogout()
      // StoreHelper.logUserOutOfEdEHR() clears local storage of demo data (the demo db)
      await StoreHelper.logUserOutOfEdEHR()
      this.$router.push('/')
    },
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.confirmDialog {
  color: $grey80;
}
</style>