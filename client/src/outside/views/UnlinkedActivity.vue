<template lang="pug">
  div
    div(v-if="isInstructor")
      unlinked-instructor-activity(ref='instructorActivity')
    div(v-else)
      unlinked-student-activity()
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
      if(this.isInstructor) {
        this.$refs.instructorActivity.loadPage()
      }
    },
  },
}
</script>
