<template lang="pug">
div(class="sim-table-main")
  div(class="card selected tableFixHead")
    table(class="sim-table")
      thead
        tr(class="stageHeader")
          //th Row
          th Status
          th Stage name
          th From
          th To
          th Faculty notes
          th Student instructions
          th Contains content for these pages
      tbody()
        tr(v-for='(key, rowIndex) in timeSteps',
          class="clickable",
          :class='{ selectedTime: isSelected(key) }',
          @click='$emit("selectRow", key, findStage(key))')
          //td {{ rowIndex }}
          td
            span(class="active-indicator", :class='{ activeTime: activeTime(rowIndex), activeIncludeTime: activeIncludeTime(key)}') &nbsp;
          td {{ stageName(key) }}
          td {{ currentKey(rowIndex) }}
          td {{ nextKey(rowIndex) }}
          td {{ facultyStageNote(key) }}
          td {{ stageInstructions(key) }}
          td().
            {{ slicePages(key) }}

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import { splitSimTimeKey, timeSequenceSliceData } from '@/ehr-definitions/sim-time-seq-utils'

export default {
  components: { ZoneLmsInstructionsElement, UiButton },
  data () { return {} },
  props: {
    ehrData: { type: Object },
    activitySimTime: { type: String },
    simStages : { type: Array, default: () => [] },
    selectedKey: { type: String }, // e.g. 0000-1234
    timeSequence: { type: Object }
  },
  computed: {
    timeKeys () { return Object.keys(this.timeSequence) },
    stagesKeys () { return this.simStages.map( s => s.simKey)  },
    timeSteps () {
      // combine and sort remove duplicates that may happen if both sets have the same key
      return [ ... new Set([...this.timeKeys, ...this.stagesKeys].sort()) ]
    },
    timeElements () { return this.timeSteps.map( key => { return { simKey: key, timeElem: this.findTimeElem(key), simStage: this.findStage(key) } } ) }
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
    isSimTimeKey ( key) { return this.timeKeys.includes(key) },
    isStageKey ( key) { return this.stagesKeys.includes(key) },
    stageName (key) { return (this.findStage(key) || {}).name },
    facultyStageNote (key) { return (this.findStage(key) || {}).faculty },
    stageInstructions (key) { return (this.findStage(key) || {}).instructions },
    findTimeElem ( key ) { return this.timeSequence[key] },
    slicePages ( key ) { return Object.keys( this.findTimeElem(key) || {} ).toString().split(',').sort().join(', ') },
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
.sim-table-main {
  margin: 1rem;
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
