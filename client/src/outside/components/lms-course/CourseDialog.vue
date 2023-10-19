<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      :use-save="!viewOnly",
      :cancelButtonLabel='cancelLabel',
      @cancel="cancelDialog",
      @save="saveDialog",
      :disableSave="disableSave",
      :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          label {{labelText.NAME}}
          input(
            class="course-title-input",
            type="text",
            v-model="courseTitle",
            v-validate="nameValidate",
            :disabled='viewOnly'
            )
        div
          label {{labelText.DESCRIPTION}}
          textarea(
            v-model="description",
            :disabled='viewOnly'
            )
        div(class='lms-properties')
          div
            label {{ labelText.TITLE }}
            ui-info(:title="labelText.TITLE", :text="descriptionText.TITLE")
            div(class='lms-property') {{ course.context_title }}
          div
            label {{labelText.LMS_DESCRIPTION}}
            ui-info(:title="labelText.LMS_DESCRIPTION", :text="descriptionText.LMS_DESCRIPTION")
            div(class='lms-property') {{ course.context_label }}
          div
            label {{labelText.ID}}
            ui-info(:title="labelText.ID", :text="descriptionText.ID")
            div(class='lms-property') {{ course.context_id }}
          div
            label {{labelText.TYPE}}
            ui-info(:title="labelText.TYPE", :text="descriptionText.TYPE")
            div(class='lms-property') {{ course.context_type }}

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import UiInfo from '@/app/ui/UiInfo.vue'

const TITLES = Text.COURSE_DIALOG.TITLES
const ERRORS = Text.COURSE_DIALOG.ERRORS
const LABELS = Text.COURSE_DIALOG.LABELS
const DESCRIPTIONS = Text.COURSE_DIALOG.DESCRIPTIONS
const EDIT_ACTION = 'edit'
const VIEW_ACTION = 'view'
export default {
  data () {
    return {
      actionType: VIEW_ACTION,
      course: {},
      canEdit: false,
      courseTitle: '',
      description: '',
      labelText: LABELS,
      descriptionText: DESCRIPTIONS,
    }
  },
  components: { UiInfo, AppDialog },
  computed: {
    cancelLabel () {
      return this.viewOnly ? this.labelText.CANCEL_BUTTON_VIEW_MODE : this.labelText.CANCEL_BUTTON_EDIT_MODE
    },
    nameValidate () {
      return this.courseTitle.trim() ? undefined :  ERRORS.NAME_REQUIRED
    },
    viewOnly () {
      return this.actionType !== EDIT_ACTION
    },
    errors () {
      const errmsg = this.nameValidate
      return errmsg ? [errmsg] : []
    },
    disableSave () {
      const errmsg = this.nameValidate
      return !!errmsg
    },
    dialogHeader () {
      return TITLES[this.actionType]
    },
  },
  methods: {
    clearInputs: function () {
      this.course = {}
      this.courseTitle = this.description = ''
    },
    showDialog (course, canEdit) {
      this.clearInputs()
      this.course = course
      this.courseTitle = course.title || ''
      this.description = course.description || ''
      this.actionType = canEdit ? EDIT_ACTION : VIEW_ACTION
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        this.$emit('updateCourseProperties', { courseId: this.course._id , title: this.courseTitle, description: this.description})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.lms-properties {
  display: flex;
  flex-direction: column;
  & div {
    display: flex;
    flex-direction: row;

    label {
      min-width: 12rem;

      &::after {
        content: ':';
      }
    }
  }
  .lms-property {
    margin-left: 1rem;
  }
}

.course-title-input {
  display: block;
  width: 100%;
}
</style>
