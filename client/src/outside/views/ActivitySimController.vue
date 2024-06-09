<template lang="pug">
  div
    zone-lms-page-banner(:title='activityTitle')
      ui-link(:name="'lms-instructor-activity'")
        fas-icon(class="fa", :icon="appIcons.activity")
        span &nbsp; Return to activity
      span  &nbsp;
      ui-link(:name="'lobjSimController'", :query="{learningObjectId: activity.learningObjectId}")
        fas-icon(class='fa', :icon='appIcons.stopwatch')
        span &nbsp; Manage stages
      span  &nbsp;
      zone-lms-button(
        title="View your current activity as a student experiences it.",
        @action="switchToStudent",
        :icon='appIcons.student',
        class='flow_across_last_item')

    zone-lms-instructions-header
      p.
        This view provide the means to control the student's experience and select from the possible
        stages. Go to the learning object page to modify the stages.

    div(v-if="!activitySimTime", class="activity-group card")
      div(v-if='defaultSimKey')
        ui-button(@buttonClicked="simTimeInitialize") Initialize simulation time control
        ui-info(:title="text.SIM_TIME_INITIALIZE_TITLE", :text='text.SIM_TIME_INITIALIZE', :html='text.SIM_TIME_INITIALIZE')
      div(v-else)
        p Can not initialize the simulation time because the case study has no timed records.

    div(v-if="activitySimTime", class="activity-group card")
      div(class="card-content")
        h4 Simulation time control panel
        span(class='label-bold') The current simulation day is {{ simDay(activitySimTime) }} and the time is {{ simTime(activitySimTime) }}.
        span &nbsp;
        span(class='label-bold') The simulation timer is {{ simCountdownRunning ? ( simCountdownValue >=0 ? 'running' : 'stopped') : 'paused' }}.
        span &nbsp;
        span(class='label-bold') The timer has {{ simCountdownValue >= 0 ? simCountdownValue + ' minutes' : 'no minutes' }} remaining.

      footer(class="card-footer")
        div(class="card-footer-item")
          div(v-if='selectedStage && selectedStage.name')
            div {{ selectedStage.name }} {{ selectedStage.simKey }}
            span &nbsp;
            div {{ selectedStage.faculty }}
          div(v-else) Select a simulation stage from the table below.

        div(class="card-footer-item")
          label(for="daySelector") Day &nbsp;
            input(id="daySelector", class="number-input", type='number', v-model='dayValue')
          label(for="timeSelector") &nbsp; Time &nbsp;
            input(id="timeSelector", class="simTime-input", type='text', v-model='timeValue')
          span &nbsp;
          ui-button(@buttonClicked="simTimeKeyActivate") {{ text.SET_SIM_TIME_BUTTON }}
          ui-info(:title="text.WARNING_SET_SIM_TIME_TITLE", :text='text.WARNING_SET_SIM_TIME', :html='text.WARNING_SET_SIM_TIME')

        div(class="card-footer-item")
          label(for="minutesSelector") Minutes &nbsp;
            input(id="minutesSelector", class="number-input", type='number', :disabled="enablePlayPauseButtons", v-model='timerValue')
          div &nbsp;
            ui-button(v-if="showPause", :disabled="enablePlayPauseButtons", class="play-button", @buttonClicked="simTimeTimerPause")
              fas-icon(class="fa", icon='pause-circle')
            ui-button(v-if="showPlay", :disabled="enablePlayPauseButtons", class="play-button", @buttonClicked="simTimeTimerResume")
              fas-icon(class="fa", icon='play-circle')
            ui-info(:title="text.SET_SIMULATION_TIMER_TITLE", :text='text.SET_SIMULATION_TIMER', :html='text.SET_SIMULATION_TIMER')

        div(class="card-footer-item")
          ui-button(@buttonClicked="simTimeKeyClear") {{ text.RESET_BUTTON_LABEL }}
          ui-info(:title="text.WARNING_RESET_TITLE", :text='text.WARNING_RESET', :html='text.WARNING_RESET')

    div(v-if="activitySimTime", class="activity-group card")
      div(class="card-content")
        h4 Stages
        sim-control-table(
          onlyStages=true,
          :ehrData='ehrData',
          :simStages='simStages',
          :activitySimTime='activitySimTime',
          :selectedKey='selectedKey',
          :timeSequence='timeSequence',
          @selectRow='selectSimTime'
        )

    div(v-if="activitySimTime", class="activity-group card")
      div(class="card-content")
        h4 EHR Content
        seed-structural(:ehrData='sliceData', v-on="$listeners", viewOnly='true')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { Text } from '@/helpers/ehr-text'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions.vue'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions.vue'
import SeedTimeSplit from '@/outside/components/seed-struct/SeedTimeSplit.vue'
import UiLink from '@/app/ui/UiLink.vue'
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import SimControlTable from '@/outside/components/simStages/SimControlTable.vue'
import { convertToEventSequence, makeSimTimeKey, splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural.vue'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import DischargeV2 from '@/inside/components/discharge/DischargeV2.vue'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'

const debug = false
export default {
  extends: OutsideCommon,
  components: { UiInfo, ZoneLmsButton, DischargeV2, SeedStructural, SimControlTable, UiConfirm, ZoneLmsInstructionsElement, ZoneLmsInstructionsHeader, SeedTimeSplit, UiButton, UiLink, ActivityActions, ClassListActions, ZoneLmsPageBanner  },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      cautionShown: false,
      showCombined: false,
      timerValue: 10,
      dayValue: 0,
      timeValue: '0000',
      selectedKey: '',
      selectedStage: {}
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} },
    activitySimTime () { return this.activity.simTimeKey },
    enablePlayPauseButtons () { return false }, // || !(this.simCountdownValue >= 0) },
    defaultSimKey () {
      let defaultStage = this.simStages && this.simStages.length > 0 ? this.simStages[0] : undefined
      return defaultStage ? defaultStage.simKey :
        this.timeKeys && this.timeKeys.length > 1 ? this.timeKeys[1] : undefined
    },
    simCountdownValue () { return this.activity.simCountdownValue },
    simCountdownRunning () { return this.activity.simCountdownRunning },
    showPause () { return !this.showPlay},
    showPlay () { return !this.simCountdownRunning  || this.simCountdownValue < 0},
    simStages () { return this.activity.simStages },
    activityTitle () { return this.isUnleashedActivityEnabled ? this.activity.learningObjectName : this.activity.title },
    activityName () { return this.activity.learningObjectName },
    ehrData () { return this.$store.getters['seedListStore/seedEhrData']},
    timeSequence () { return convertToEventSequence(this.ehrData) },
    timeKeys () { return Object.keys(this.timeSequence) },
    sliceStages () {
      let [d, t] = splitSimTimeKey(this.selectedKey)
      let selected = []
      this.simStages.forEach( s => {
        let [sd, st] = splitSimTimeKey(s.simKey)
        if ( sd < d ? true : d === sd && st <= t) {
          selected.push(s)
        }
      })
      return selected
    },
    sliceData () {
      const key = this.selectedKey
      const keys = this.timeKeys
      let eDate = {}
      if (this.showCombined) {
        for (let i = 0; i < keys.length; i++) {
          let cKey = keys[i]
          let data = this.timeSequence[cKey]
          eDate = EhrDataModel.MergeTwoLevels(eDate, data)
          if (cKey === key) { // up to and include key
            break
          }
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          let cKey = keys[i]
          eDate = this.timeSequence[cKey]
          if (cKey === key) { // up to and include key
            break
          }
        }
      }
      return eDate
    },
  },
  methods: {
    async loadComponent () {
      /*
       */
      if (debug) console.log('CL loadComponent', this.activityId)
      try {
        const vFromRoute = this.$route.query.visitId
        const vFomStore = this.$store.getters['visit/visitId']
        const visitId = vFromRoute ? vFromRoute : vFomStore
        await StoreHelper.setVisitId(visitId)
        let activityRecord = await this.$store.dispatch('activityStore/loadActivityRecord')
        const caseStudyId = activityRecord.caseStudyId
        await this.$store.dispatch('seedListStore/loadSeedContent', caseStudyId)
      } catch(error){
        console.error('CL loadComponent failed', error)
      }
    },
    simDay (timeKey) { return splitSimTimeKey(timeKey)[0] },
    simTime (timeKey) { return splitSimTimeKey(timeKey)[1] },
    simTimeInitialize () {
      let key = this.defaultSimKey
      if (key) {
        this.$store.dispatch('activityStore/simTimeKeyActivate', { activityId: this.activity.id, simTimeKey: key })
      }
    },
    simTimeKeyActivate () {
      let key = makeSimTimeKey(this.dayValue, this.timeValue)
      this.$store.dispatch('activityStore/simTimeKeyActivate', { activityId: this.activity.id, simTimeKey: key })
    },
    simTimeKeyClear () {
      this.$store.dispatch('activityStore/simTimeKeyClear', { activityId: this.activity.id })
    },
    simTimeTimerPause (key) {
      this.$store.dispatch('activityStore/simTimeTimerPause', { activityId: this.activity.id })
    },
    simTimeTimerResume (key) {
      this.$store.dispatch('activityStore/simTimeSetTimer', { activityId: this.activity.id, timerValue: this.timerValue })
      this.$store.dispatch('activityStore/simTimeTimerResume', { activityId: this.activity.id })
    },
    selectSimTime ( simKey, stage ) {
      let [d, t] = splitSimTimeKey(simKey)
      this.dayValue = d
      this.timeValue = t
      this.selectedKey = simKey
      this.timerValue = 15
      this.selectedStage = stage
    },
    switchToStudent () {
      const appType = this.activity.appType
      StoreHelper.visitAsStudent(this.$router, appType)
    },
  },
  watch: {
    activitySimTime () {
      if (this.activitySimTime) {
        let [d, t] = splitSimTimeKey(this.activitySimTime)
        this.dayValue = d
        this.timeValue = t
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.active-control-area {
  border: 1px solid $grey50;
  padding: 1rem;
}

.activity-group {
  //border: 1px solid red;
  margin-bottom: 1rem;
}

.sim-time-group {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 3fr;
  justify-items: center;
  //border: 1px solid red;
}
.number-input {
  width: 4rem;
  height: 2rem;
}
.simTime-input {
  width: 6rem;
  height: 2rem;
}
.label-bold {
  //font-weight: bold;
  font-size: 100%;
}
.play-button {
  height: 2.5rem;
  width: 2.5rem;
  .fa {
    font-size: 1.5rem;
  }
}

.bottom-panel {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
}
.student-instructions {
  width: 20%;
  //height: 20rem;
}
.condensed-view {
  width: 80%;
}
</style>
