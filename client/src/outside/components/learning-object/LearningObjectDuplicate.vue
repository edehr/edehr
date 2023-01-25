<template lang="pug">
  div
    zone-lms-button(@action="duplicateLearningObject",
      :title="text.COPY_TP(learningObject.name)",
      :icon='appIcons.copy',
      :text='text.COPY')
    ui-confirm(
      ref="confirmDialog",
      @confirm="confirmLearningObjectDuplication",
      @abort="cancelLearningObjectDuplication",
      @cancel="cancelLearningObjectDuplication",
      save-label='Duplicate',
      set-footer
    )
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
const DUPLICATE = Text.LOBJ_ACTIONS.DUPLICATE_CONFIRM
export default {
  components: {
    ZoneLmsButton,
    UiConfirm
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.LOBJ_ACTIONS
    }
  },
  props: {
    learningObject: { type: Object }
  },
  computed: {
    learningObjectId () { return this.learningObject._id },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    duplicateLearningObject () {
      this.$refs.confirmDialog.showDialog(
        DUPLICATE.TITLE(this.learningObject.name),
        DUPLICATE.DESCRIPTION(this.learningObject.name),
        'Confirm'
      )
    },
    async confirmLearningObjectDuplication () {
      const duplicate = Object.assign({},
        this.learningObject, {
          name: `COPY OF ${this.learningObject.name}`,
          createDate: new Date(),
          lastUpdateDate: new Date()
        })
      delete duplicate._id
      await StoreHelper.createAssignment(duplicate)
        .then( () => this.$emit('newLearningObject' ))
        .catch(error => {
          console.log('Duplicate learningObject error', error)
          StoreHelper.setSystemMessage(error.message)
        })

    },
    cancelLearningObjectDuplication () {
    }
  }
}
</script>
