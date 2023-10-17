<template lang='pug'>
  div
    app-dropdown(:items="items")
    ui-agree(ref='evalNotes')
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import UiAgree from '@/app/ui/UiAgree'
export default {
  components: {
    UiAgree,
    AppDropdown
  },
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} },
    isInstructorAsStudent () { return StoreHelper.isInstructorAsStudent() },
    activityTooltip () { return this.activity.learningObjectName },
    visitId () { return this.$store.getters['visit/visitId']},
    hasActivity () { return this.$store.getters['activityStore/hasActivity'] },
    hasCourse () { return this.$store.getters['courseStore/hasCourse'] },

    items () {
      const menu = []
      menu.push({
        label: 'Courses',
        toolTip: 'See list of all my EdEHR courses.',
        callback: () => {
          const path = '/courses'
          if (this.$route.path !== path) {
            this.$router.push(path)
          }
        },
        icon: this.appIcons.course
      })
      if(this.hasCourse && this.hasActivity) {
        menu.push({
          label: 'Activity',
          toolTip: this.activityTooltip,
          icon: this.appIcons.activity,
          callback: () => {
            const path = '/lms-student-activity'
            if (this.$route.path !== path) {
              this.$router.push({ name: 'lms-student-activity', query: { visitId: this.visitId } })
            }
          }
        })
      }
      menu.push({
        label: 'Scratch pad',
        toolTip: 'A place for you to place notes. This is visible only to you.',
        callback: () => this.$store.dispatch('system/toggleScratchPadVisible' ),
        icon: 'pen'
      })
      menu.push({
        label: 'Exit to LMS',
        toolTip: 'Return to your school\'s learning management system. ' + StoreHelper.lmsName() + ' ' + StoreHelper.lmsUrl(),
        callback: () => {
          StoreHelper.exitToLms()
        },
        icon: 'sign-out-alt'
      })

      if (this.isInstructorAsStudent) {
        menu.push({
          horizontal: true
        })
        menu.push({
          label: 'Return to my normal role',
          toolTip: 'Exit the view as student role.',
          callback: () => StoreHelper.restoreAsInstructor(this.$router),
          icon: this.appIcons.course
        })
      }
      return menu
    },
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    evalNotes () {
      return this.panelInfo.evaluationData ? this.panelInfo.evaluationData : 'No comments yet.'
    }
  },
  methods: {
    restoreAsInstructor () {
      StoreHelper.restoreAsInstructor()
    },
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
</style>
