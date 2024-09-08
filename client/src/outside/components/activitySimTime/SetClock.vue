<template lang='pug'>
div(class='sim-time-activity-control-tab-content')
  div Use these controls to set the Sim Timing to anything you wish.
  div
    label(for="daySelector") Day &nbsp;
    input(id="daySelector", class="number-input", type='number', v-model='dayValue')
  div
    label(for="timeSelector") Time &nbsp;
    input(id="timeSelector", class="simTime-input", type='text', v-model='timeValue')
  div
    ui-button(@buttonClicked="simTimeKeyActivate") {{ text.SET_SIM_TIME_BUTTON }}
  div
    p {{ text.WARNING_SET_SIM_TIME }}

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import { Text } from '@/helpers/ehr-text'
import { makeSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'

export default {
  name: 'MinuteTimer',
  components: { UiInfo, UiButton },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      dayValue: 0,
      timeValue: '0000'
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord'] || {}
    },
    activitySimTime () {
      return this.activity.simTimeKey
    },
  },
  methods: {
    simTimeKeyActivate () {
      let key = makeSimTimeKey(this.dayValue, this.timeValue)
      this.$store.dispatch('activityStore/simTimeKeyActivate', { activityId: this.activity.id, simTimeKey: key })
    },

  }
}
</script>

<style scoped>

</style>
