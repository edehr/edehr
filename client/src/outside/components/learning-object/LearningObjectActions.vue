<template lang='pug'>
  div
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(v-if="canDo", @action="showEditDialog",
          :title="text.PROPERTIES_TP",
          :icon='appIcons.configure',
          :text='text.PROPERTIES')
      learningObject-duplicate(v-if="canDo", :learningObject='learningObject', @newLearningObject='learningObjectDuplicated')
      zone-lms-button(@action="downloadLearningObject",
        :title="text.DOWNLOAD_TP",
        :icon='appIcons.download',
        :text='text.DOWNLOAD')
      learningObject-delete(v-if="canDo"
        :disabled="activityCount > 0",
        :learningObject='learningObject',
        @learningObjectDeleted='learningObjectDeleted')
    learning-object-dialog(ref="theDialog")
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import LearningObjectDuplicate from '@/outside/components/learning-object/LearningObjectDuplicate'
import LearningObjectDelete from '@/outside/components/learning-object/LearningObjectDelete'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'
import { downloadLearningObjectToFile } from '@/helpers/ehr-utils'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
// const CONFIRM_DELETION_TEXT = {
//   title: 'Confirm deletion of learning object?',
//   description: (name) => `Deleting ${name} will also delete all the data related to it.`
// }

export default {
  components: { ZoneLmsButton, LearningObjectDialog, LearningObjectDelete, LearningObjectDuplicate, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.LOBJ_ACTIONS
    }
  },
  props: {
    learningObject: {type: Object},
    showDetails: {type: Boolean, default: true}
  },
  computed: {
    activityCount () { return this.learningObject.activityCount},
    canDo () { return StoreHelper.isDevelopingContent() },
    learningObjectId () { return this.learningObject._id}
  },
  methods: {
    downloadLearningObject () {
      downloadLearningObjectToFile(this.learningObject)
    },
    gotoLearningObjectView () {
      this.$router.push({ name: 'learning-object', query: { learningObjectId: this.learningObjectId } })
    },
    showEditDialog: function () {
      this.$refs.theDialog.showDialog(this.learningObject)
    },
    learningObjectDuplicated () {
      // delete part of query to prevent NavigationDuplication error from vue router.
      // console.log('this.$route.query',this.$route.query)
      delete this.$route.query.learningObjectId
      // reload the new current (duplicated) object
      const fromStore = this.$store.getters['assignmentStore/learningObjectId']
      // console.log('fromStore',fromStore)
      this.$router.push({ name: 'learning-object', query: { learningObjectId: fromStore } })
    },
    learningObjectDeleted () {
      // send a timestamp in query to prevent NavigationDuplication error from vue router.
      this.$router.push({ name: 'learning-objects', query: { ts: Date.now() } })
    },
  },
}
</script>
