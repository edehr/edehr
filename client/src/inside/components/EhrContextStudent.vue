<template lang="pug">
  div(class='ehr-context-student flow_across menu_space_across')
    div
      span {{ ehrText.studentBannerActivityLabel }}
      span(class='content') &nbsp; {{ truncate(assignmentName, 50) }}
    ehr-simulation-time-control
    ehr-simulation-sign-out-button
    ehr-context-instructions
    ehr-context-feedback
    ehr-student-submit

</template>

<script>

import EhrContextInstructions from '@/inside/components/EhrContextInstructions.vue'
import EhrSimulationTimeControl from '@/inside/components/EhrSimulationTimeControl.vue'
import EhrSimulationSignOutButton from '@/inside/components/EhrSimulationSignOutButton.vue'
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit.vue'
import EhrContextFeedback from '@/inside/components/EhrContextFeedback.vue'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  components: { EhrContextFeedback, EhrStudentSubmit, EhrSimulationSignOutButton, EhrSimulationTimeControl, EhrContextInstructions },
  data () {
    return {
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    activityRecord () { return this.$store.getters['activityStore/activityRecord'] },
    assignmentName () { return this.activityRecord.learningObjectName },
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-context-student {
  flex-wrap: wrap;
}
.ehr-context-student div {
  flex: auto;
}
</style>
