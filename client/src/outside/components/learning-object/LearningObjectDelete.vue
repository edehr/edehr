<template lang="pug">
  div
    ui-button(v-on:buttonClicked="deleteLearningObject", :disabled='disabled', :title="title")
      fas-icon(class="fa", :icon="appIcons.trash")
      span(v-if="showLabels") &nbsp; {{text.DELETE}}
    ui-confirm(
      ref="confirmDialog",
      @confirm="confirmLearningObjectDeletion",
      @abort="cancelLearningObjectDeletion",
      @cancel="cancelLearningObjectDeletion",
      :save-label='text.DELETE',
      set-footer
    )
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const TEXT = Text.LOBJ_ACTIONS.DELETE_CONFIRM
export default {
  components: {
    UiButton,
    UiConfirm
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.LOBJ_ACTIONS
    }
  },
  props: {
    learningObject: { type: Object },
    disabled: { type: Boolean },
    showIds: { type: Boolean }
  },
  computed: {
    title () {
      return this.disabled ? this.text.DELETE_DISABLED : this.text.DELETE_CONFIRM.TITLE(this.learningObject.name)
    },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    deleteLearningObject () {
      const sv = this.learningObject
      let desc = TEXT.DESCRIPTION(sv.name)
      desc += '\n (' + sv._id + ')'
      this.$refs.confirmDialog.showDialog(
        TEXT.TITLE(sv.name),
        desc,
        'Confirm'
      )
    },
    async confirmLearningObjectDeletion () {
      const learningObjectId = this.learningObject._id
      console.log('About to delete learning object', learningObjectId)
      await StoreHelper.deleteAssignmentUnused(learningObjectId)
        .then( () => {
          console.log('After learningObject deleted', learningObjectId)
          this.$emit('learningObjectDeleted')
        })
        .catch(error => {
          console.log('LearningObject delete error', error)
          StoreHelper.setSystemMessage(error.message)
        })
    },
    cancelLearningObjectDeletion () {
    }
  }
}
</script>
