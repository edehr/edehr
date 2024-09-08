<template lang='pug'>
div(class='sim-time-activity-control-tab-content')
  div
    p {{ text.SET_SIMULATION_TIMER_TITLE }}
  div
    label(for="minutesSelector") Minutes &nbsp;
    input(id="minutesSelector", class="number-input", type='number', :disabled="enablePlayPauseButtons", v-model='timerValue')
    span &nbsp;
      ui-button(v-if="showPause", :disabled="enablePlayPauseButtons", class="play-button", @buttonClicked="simTimeTimerPause")
        fas-icon(class="fa", icon='pause-circle')
      ui-button(v-if="showPlay", :disabled="enablePlayPauseButtons", class="play-button", @buttonClicked="simTimeTimerResume")
        fas-icon(class="fa", icon='play-circle')
  div
    p {{ text.SET_SIMULATION_TIMER }}

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { Text } from '@/helpers/ehr-text'

export default {
  components: { UiButton },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      timerValue: 10,
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
    simCountdownRunning () { return this.activity.simCountdownRunning },
    showPause () { return !this.showPlay},
    showPlay () { return !this.simCountdownRunning  || this.simCountdownValue < 0},
  },
  methods: {
    simTimeTimerResume (key) {
      this.$store.dispatch('activityStore/simTimeSetTimer', { activityId: this.activity.id, timerValue: this.timerValue })
      this.$store.dispatch('activityStore/simTimeTimerResume', { activityId: this.activity.id })
    },
    simTimeTimerPause () {
      this.$store.dispatch('activityStore/simTimeTimerPause', { activityId: this.activity.id })
    },

  }
}
</script>

<style scoped>

</style>
