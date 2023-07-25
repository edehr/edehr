<template lang='pug'>
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(@action="showEditDialog",
        :title="toolTip",
        :icon='appIcons.configure',
        :text='buttonText'
        )
    course-dialog(ref="theDialog", @updateCourseProperties="$emit('updateCourseProperties')")
</template>

<script>
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import CourseDialog from '@/outside/components/lms-course/CourseDialog.vue'
import StoreHelper from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
export default {
  components: {
    CourseDialog,
    ZoneLmsButton,
  },
  data () {
    return {
      appIcons: APP_ICONS
    }
  },
  props: {
    course: {type: Object}
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    buttonText () { return this.canDo ? Text.COURSE_DIALOG.BUTTON_TEXT.EDIT: Text.COURSE_DIALOG.BUTTON_TEXT.VIEW},
    toolTip () { return this.canDo ? Text.COURSE_DIALOG.TITLES.EDIT: Text.COURSE_DIALOG.TITLES.VIEW }
  },
  methods: {
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.course, this.canDo)
    }
  },
}
</script>
