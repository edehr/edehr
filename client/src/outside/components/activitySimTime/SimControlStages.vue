<template lang="pug">
  div(class="tableFixHead")
    table(class="sim-table")
      thead
        tr(class="stageHeader")
          //th Row
          th Status
          //th Stage name
          th Time Key
          th Faculty notes
          th Student instructions
          th &nbsp;
      tbody()
        tr(v-for='(key, rowIndex) in timeSteps',
          :class='{ selectedTime: isSelected(key) }' )
          //td {{ rowIndex }}
          td
            span(class="active-indicator", :class='{ activeTime: activeTime(rowIndex), activeIncludeTime: activeIncludeTime(key)}') &nbsp;
            button(v-if='!activeIncludeTime(key)', @click='$emit("selectRow", key, findStage(key))')
              fas-icon(icon="fast-forward")
            span(v-if='!activeTime(rowIndex) && activeIncludeTime(key)')
              fas-icon(icon="user-clock")
            span(v-else) &nbsp;
          //td {{ stageName(key) }}
          td {{key}}
          td {{ facultyStageNote(key) }}
          td {{ stageInstructions(key) }}
          td
            button(v-if='activeTime(rowIndex)', @click='$emit("selectRow", key, findStage(key))')
              fas-icon(icon="backward")

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import { splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'

export default {
  components: { ZoneLmsInstructionsElement, UiButton },
  data () { return {} },
  props: {
    activitySimTime: { type: String },
    simStages : { type: Array, default: () => [] },
    selectedKey: { type: String }, // e.g. 0000-1234
  },
  computed: {
    stagesKeys () { return this.simStages.map( s => s.simKey)  },
    timeSteps () {
      return this.stagesKeys
    },
  },
  methods: {
    activeTime (rowIndex) {
      let key = this.timeSteps[rowIndex]
      let key2 = this.timeSteps.length > rowIndex ? this.timeSteps[rowIndex + 1] : undefined
      let [d, t] = splitSimTimeKey(key)
      let [cd, ct] = splitSimTimeKey(this.activitySimTime)
      let test = d >= cd && t >= ct
      if (key2) {
        let [d2, t2] = splitSimTimeKey(key2)
        test = cd <= d2 && t2 <= ct
      } else {
        test = false
      }
      return test
    },
    activeIncludeTime ( key ) {
      if (!this.activitySimTime) {
        // when there is no current key then all elements are selected.
        return true
      }
      let [d, t] = splitSimTimeKey(key)
      let [cd, ct] = splitSimTimeKey(this.activitySimTime)
      return d < cd ? true : d === cd && t <= ct
    },
    isStageKey ( key) { return this.stagesKeys.includes(key) },
    stageName (key) { return (this.findStage(key) || {}).name },
    facultyStageNote (key) { return (this.findStage(key) || {}).faculty },
    stageInstructions (key) { return (this.findStage(key) || {}).instructions },
    findStage ( key ) { return this.simStages.find( st => st.simKey === key)},
    currentKey ( rowIndex ) {
      let t = ''
      if (rowIndex > 0 && rowIndex < this.timeSteps.length) {
        t = this.timeSteps[rowIndex]
      }
      return t
    },
    nextKey ( rowIndex ) {
      let t = ''
      if (rowIndex < this.timeSteps.length - 1) {
        t = this.timeSteps[rowIndex+1]
      }
      return t
    },
    nextTime ( rowIndex ) {
      let t = '0000'
      if (rowIndex < this.timeSteps.length - 1) {
        let p = this.timeSteps[rowIndex+1]
        t = splitSimTimeKey(p)[1]
      }
      return t
    },
    simDay (timeKey) { return splitSimTimeKey(timeKey)[0] },
    simTime (timeKey) { return splitSimTimeKey(timeKey)[1] },
    isSelected (timeKey ) { return this.selectedKey === timeKey },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.stageHeader {
  background-color: $grey30;
  font-weight: bold;
}
.stageButton {
  background-color: $grey15;
}
.sim-table {
  width: 100%
}
.tableFixHead          {
  overflow: auto;
  height: 20rem;
}
.tableFixHead thead th { position: sticky; top: 0; z-index: 1; }

.active-indicator {
  display: inline-block;
  min-width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 1px solid $grey40;
  background-color: transparent;
}
.selectedTime {
  background-color: $brand-primary-hover;
}
.selectedTime {
  background-color: $button-active-color;
}
.activeIncludeTime {
  background-color: $green1 !important;
}
.activeTime {
  background-color: $green2 !important;
}

</style>
