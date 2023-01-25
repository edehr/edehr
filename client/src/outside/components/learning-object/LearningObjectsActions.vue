<template lang='pug'>
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(v-if="canDo", @action="showCreateDialog",
        :title="text.createLearningObjectTip",
        :icon='appIcons.new',
        :text='text.createLearningObjectBL')
      zone-lms-button(v-if="canDo", @action="downloadAll",
        :title="text.downloadAllLearningObjectsTip",
        :icon='appIcons.download',
        :text='text.downloadAllLearningObjectsBL')
    learning-object-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'
import { downObjectToFile } from '@/helpers/ehr-utils'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
const TEXT = {
  createLearningObjectTip:'Create a new learning object',
  createLearningObjectBL: 'Create new',
  downloadAllLearningObjectsTip: 'Save a copy of all learning objects on your computer',
  downloadAllLearningObjectsBL: 'Download all',
}

export default {
  components: { ZoneLmsButton, LearningObjectDialog},
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
