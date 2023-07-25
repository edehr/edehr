<template lang="pug">
  div(class='student-course-activity')
    div(class="flow_across")
      div
        fas-icon(class="fa", :icon="appIcons.activity")
        span &nbsp; {{ learningObjectName }}
      div(class="flow_across_last_item")
        div(class="flow_across menu_space_across")
          span &nbsp; {{ submitted ? 'Submitted' : 'Open to edit' }}
          ui-button(@buttonClicked="goToEhr") Go to EHR
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiButton from '@/app/ui/UiButton'
export default {
  components: { UiButton },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  props: {
    activity: { type: Object },
  },
  computed: {
    learningObjectName () { return this.activity.learningObjectName },
    submitted () { return this.activity.submitted },
    visitId () { return this.activity.visitId },
  },
  methods: {
    goToEhr () {
      this.$router.push({ name: 'ehr', query: { visitId: this.visitId } })
    }
  }
}
</script>
