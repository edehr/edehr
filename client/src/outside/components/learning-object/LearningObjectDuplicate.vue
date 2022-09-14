<template lang="pug">
  div
    ui-button(v-on:buttonClicked="duplicateLearningObject", :title="text.COPY_TP(learningObject.name)")
      fas-icon(class="fa", :icon="appIcons.copy")
      span(v-if="showLabels") &nbsp; {{text.COPY}}

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
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const DUPLICATE = Text.LOBJ_ACTIONS.DUPLICATE_CONFIRM
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
