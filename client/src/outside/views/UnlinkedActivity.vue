<template lang="pug">
  div
    unlinked-instructor-activity(v-if="isInstructor")
    unlinked-student-activity(v-else)
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import StoreHelper from '@/helpers/store-helper'
import UnlinkedStudentActivity from '@/outside/components/unlinkedActivity/UnlinkedStudentActivity.vue'
import UnlinkedInstructorActivity from '@/outside/components/unlinkedActivity/UnlinkedInstructorActivity.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    UnlinkedStudentActivity, UnlinkedInstructorActivity,
  },
  extends: OutsideCommon,
  computed: {
    isInstructor () { return StoreHelper.isInstructor()},
  },
  methods: {
    async loadComponent () {
      const activityId = this.$route.query.activityId
      await this.$store.dispatch('activityStore/setActivityId', activityId)
      await this.$store.dispatch('activityStore/loadActivityRecord')
      await this.$store.dispatch('assignmentListStore/loadAssignmentsWithCounts')
    },
  },
}
</script>
