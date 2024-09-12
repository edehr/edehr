<template lang="pug">
  div
    zone-lms-page-banner(:title='activityTitle')
      zone-lms-button(
        :title="`Return to activity: ${activityTitle}`",
        @action="gotoActivity",
        :icon='appIcons.activity',
        class='flow_across_last_item')
      zone-lms-button(
        title="Manage stages in the learning object",
        @action="gotoStages",
        :icon='appIcons.stopwatch',
        class='flow_across_last_item')
      zone-lms-button(
        title="View your current activity as a student experiences it.",
        @action="switchToStudent",
        :icon='appIcons.student',
        class='flow_across_last_item')

    zone-lms-instructions-header
      p.
        This view provide the means to control the student's experience and select from the possible
        stages. Go to the learning object page to modify the stages.

    div(v-if="!activitySimTime")
      div(v-if='defaultSimKey')
        div(class="activity-group card")
          div {{ text.SIM_TIME_INITIALIZE_TITLE }}
          div {{ text.SIM_TIME_INITIALIZE }}
          div
            ui-button(@buttonClicked="simTimeInitialize") Activate Sim Timing©
        div(class="activity-group card")
          l-obj-sim-stages-display
      div(v-else)
        div(class="activity-group card")
          p Can not initialize Sim Timing© because the learning object has no stages defined.
    div(v-if="activitySimTime")
      div( class="activity-group")
        div(class="card-content")
          sim-time-status
      div( class="activity-group")
        div(class="card-content")
          sim-timer-controls
</template>

<script>
import LObjSimStagesDisplay from '@/outside/components/simStages/LObjSimStagesDisplay.vue'
import SimTimerControls from '@/outside/components/activitySimTime/SimTimeActivityControlTabs.vue'
import SimTimeStatus from '@/outside/components/activitySimTime/SimTimeStatus.vue'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import UiLink from '@/app/ui/UiLink.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import { splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'
import { Text } from '@/helpers/ehr-text'
export default {
  components: { LObjSimStagesDisplay,
    SimTimeStatus, SimTimerControls, UiButton,  UiInfo,  UiLink, ZoneLmsInstructionsHeader, ZoneLmsButton, ZoneLmsPageBanner },
  data () {
    return {
      appIcons: APP_ICONS,
      selectedKey: '',
      text: Text.ACTIVITY_PAGE,
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} },
    activitySimTime () { return this.activity.simTimeKey },
    activityTitle () { return this.activity.learningObjectName },
    defaultSimKey () {
      let defaultStage = this.simStages && this.simStages.length > 0 ? this.simStages[0] : undefined
      return defaultStage ? defaultStage.simKey : undefined
    },
    simStages () { return this.activity.simStages },
  },
  methods: {
    gotoActivity () {
      this.$router.push({ name: 'lms-instructor-activity' })
    },
    gotoStages () {
      this.$router.push({ name: 'lobjSimController', query: {learningObjectId: this.activity.learningObjectId} })
    },
    simTimeInitialize () {
      let key = this.defaultSimKey
      if (key) {
        this.$store.dispatch('activityStore/simTimeKeyActivate', { activityId: this.activity.id, simTimeKey: key })
      }
    },
    selectSimTime ( simKey, stage ) {
      let [d, t] = splitSimTimeKey(simKey)
      console.log('What to do with d and t', d, t)
    },
    switchToStudent () {
      const appType = this.activity.appType
      StoreHelper.visitAsStudent(this.$router, appType)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.activity-group {
  //border: 1px solid red;
  margin-bottom: 1rem;
}

</style>
