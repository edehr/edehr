<template lang='pug'>
  div
    app-dropdown(:items="items")
    ehr-context-activity-dialog(ref='activityDialog')
</template>
<script>
import { APP_ICONS } from '@/helpers/app-icons'
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import EhrContextActivityDialog from '@/inside/components/EhrContextActivityDialog'
import UiConfirm from '@/app/ui/UiConfirm'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const MENU_TEXT = Text.INSTRUCTOR_TOOLS
export default {
  components: {
    AppDropdown, EhrContextActivityDialog, UiConfirm
  },
  computed: {
    isDevelopingContent () { return StoreHelper.isDevelopingContent() },
    isOutsideShowButtonLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    exitUrl () { return this.visitData.returnUrl },
    visitData () { return this.$store.getters['visit/visitData'] || {}},
    hasActivity () { return this.$store.getters['activityStore/hasActivity'] },
    hasCourse () { return this.$store.getters['courseStore/hasCourse'] },
    items () {
      const menuItems = []
      menuItems.push({
        label: MENU_TEXT.COURSES_LABEL,
        toolTip: MENU_TEXT.COURSES_TOOLTIP,
        callback: () => {
          this.navigate('/courses')
        },
        icon: APP_ICONS.course
      })
      if (this.hasCourse && this.hasActivity) {
        menuItems.push({
          label: MENU_TEXT.ACTIVITIES,
          toolTip: MENU_TEXT.ACTIVITIES_TOOLTIP,
          callback: () => {
            this.navigate('/lms-instructor-activity')
          },
          icon: APP_ICONS.activity
        })
      }
      menuItems.push( {
        label: MENU_TEXT.LOBJ_LABEL,
        toolTip: MENU_TEXT.LOBJ_TOOLTIP,
        callback: () => { this.navigate('/learning-objects') },
        icon: APP_ICONS.lobj
      })
      menuItems.push( {
        label: MENU_TEXT.SEED_LIST_LABEL,
        toolTip: MENU_TEXT.SEED_LIST_TOOLTIP,
        callback: () => { this.navigate('/seed-list') },
        icon: APP_ICONS.seed
      })
      menuItems.push( {
        label: MENU_TEXT.FILE_LABEL,
        toolTip: MENU_TEXT.FILE_TOOLTIP,
        callback: () => { this.navigate('/fileList') },
        icon: APP_ICONS.file
      })
      menuItems.push( {
        label: MENU_TEXT.LMS_LABEL,
        toolTip: MENU_TEXT.LMS_TOOLTIP,
        callback: () => { this.navigate({ name: 'consumer', query: { consumerId: StoreHelper.consumerId() } }) },
        icon: APP_ICONS.consumer
      })
      if(this.exitUrl) {
        menuItems.push({
          label: MENU_TEXT.EXIT_LABEL,
          toolTip: this.exitUrl,
          callback: () => { StoreHelper.exitToLms() },
          icon: APP_ICONS.exitToLms
        })
      }
      menuItems.push( {
        label: MENU_TEXT.DESIGNER_MODE_LABEL,
        toolTip: `${this.isDevelopingContent ? MENU_TEXT.DESIGNER_MODE_TURN_OFF_TOOLTIP : MENU_TEXT.DESIGNER_MODE_TURN_ON_TOOLTIP}`,
        callback: () => { StoreHelper.setIsDevelopingContent( !this.isDevelopingContent) },
        checkbox: true,
        isChecked: () => this.isDevelopingContent
      })
      // menuItems.push( {
      //   label: MENU_TEXT.SHOW_BUTTON_LABELS(this.isOutsideShowButtonLabels),
      //   toolTip: MENU_TEXT.SHOW_BUTTON_LABELS_TOOLTIP(this.isOutsideShowButtonLabels),
      //   callback: () => { StoreHelper.setOutsideShowButtonLabels( !this.isOutsideShowButtonLabels) },
      //   checkbox: true,
      //   isChecked: () => this.isOutsideShowButtonLabels
      // })
      return menuItems
    },
  },
  methods: {
    navigate (path) {
      // prevent Vue's NavigationDuplicated
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.confirmDialog {
  color: $grey80;
}
.titleBarLabel {
  font-size: 1.2rem;
  padding-right: 15px;
}
</style>
