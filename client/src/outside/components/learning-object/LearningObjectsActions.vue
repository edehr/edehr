<template lang='pug'>
  div
    div(class="action-section")
      ui-button(v-show="canDo", v-on:buttonClicked="showCreateDialog",
        :title='text.createLearningObjectTip')
        fas-icon(class="fa", :icon="appIcons.new")
        span(v-if="showLabels") &nbsp; {{text.createLearningObjectBL}}
      ui-button(v-on:buttonClicked="downloadAll",
        :title="text.downloadAllLearningObjectsTip")
        fas-icon(class="fa", :icon="appIcons.download")
        span(v-if="showLabels") &nbsp; {{text.downloadAllLearningObjectsBL}}
    learning-object-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'
import UiButton from '@/app/ui/UiButton'
import { downObjectToFile } from '@/helpers/ehr-utils'
const TEXT = {
  createLearningObjectTip:'Create a new learning object',
  createLearningObjectBL: 'Create new',
  downloadAllLearningObjectsTip: 'Save a copy of all learning objects on your computer',
  downloadAllLearningObjectsBL: 'Download all',
}

export default {
  components: { LearningObjectDialog, UiButton},
  data () {
    return {
      appIcons: APP_ICONS,
      text: TEXT,
    }
  },

  props: {
    showDetails: {type: Boolean, default: true}
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    downloadAll () {
      StoreHelper.loadAssignmentList()
        .then((aList) => {
          downObjectToFile('EdEHR-learning-objects-list.json', aList)
        })
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },

    showEditDialog: function () {
      this.$refs.theDialog.showDialog()
    },
  },
}
</script>
