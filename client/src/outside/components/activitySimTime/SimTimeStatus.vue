<template lang='pug'>
div
  div Current day
    span(class='bold-text') &nbsp; {{ simDay(activitySimTime) }}
    span &nbsp; and time
    span(class='bold-text') &nbsp;  {{ simTime(activitySimTime) }}.
    span &nbsp; The simulation timer is
    span &nbsp; {{ simCountdownRunning ? ( simCountdownValue >=0 ? 'running' : 'stopped') : 'paused' }} with
    span &nbsp; {{ simCountdownValue >= 0 ? simCountdownValue + ' minutes' : 'no minutes' }}
    span &nbsp; remaining.
  div(v-if='selectedStage.name')
    div Name: {{ selectedStage.name }}  &nbsp;
    div Key: {{ selectedStage.simKey }}  &nbsp;
    div Notes: {{ selectedStage.faculty }}
</template>

<script>
import { Text } from '@/helpers/ehr-text'
import { splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'

export default {
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      selectedStage: {}
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord'] || {}
    },
    activitySimTime () {
      return this.activity.simTimeKey
    },
    enablePlayPauseButtons () {
      return false
    },
    simCountdownValue () { return this.activity.simCountdownValue },
    simCountdownRunning () { return this.activity.simCountdownRunning },
    showPause () { return !this.showPlay},
    showPlay () { return !this.simCountdownRunning  || this.simCountdownValue < 0},
  },
  methods: {
    simDay (timeKey) { return splitSimTimeKey(timeKey)[0] },
    simTime (timeKey) { return splitSimTimeKey(timeKey)[1] },

  }
}
</script>

<style scoped>

</style>
