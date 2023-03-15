<template lang='pug'>
  div
    div Title: {{ idPrefix }}
    // Grid for the given medication type (sched, prn, cont, stat, etc.)
    div(class='time-line row-container')
      // Medication name column
      div(class='col-container')
        div(class="medication-element")
          div Medication Order
        div(class="medication-element", v-for='med in medList', :key='med.id', :title='med.medName')
          div(class="") {{med.medName }}
      // Day Block with Time Grid
      div(class="a-day row-container", v-for='aDay in dayList', :key='aDay.dayId')
        input(
          type="radio",
          :id="`${idPrefix}-${aDay.dayId}`",
          :value="aDay.dayNum",
          :checked="aDay.dayNum === selectedDay",
          @change='setSelectedDay'
          )
        label(:for="`${idPrefix}-${aDay.dayId}`", :class='dayLabelSizeCss(aDay.dayNum)')
          // Day Block expanded - show day number and blocks for each medication with day values
          div(v-if='dayIsActive(aDay.dayNum)')
            // Title block
            div(class="day-bar-element day-bar-element-title")
              div {{ aDay.dayNum }} {{ idPrefix }}
            // Day Block Element -- medication information. total given today, max allowed for day
            div(class="day-bar-element", v-for='med in dayMedSchedule(aDay, idPrefix)', :key='med.medName')
              div total:
              div max: {{med.max}}
          // Day Block unexpanded - just show the day number
          div(v-else)
            div(class="day-bar-element-title") {{ aDay.dayNum }}
        div(class="day-content")
          div(class="day-visible col-container")
            // title row
            div(class="row-container")
              div(v-for='time in aDay.timeElements', :key='time.key', class='time-element')
                div {{ aDay.label }}
                div {{ time.label }}
            div(class="row-container", v-for='med in dayMedSchedule(aDay, idPrefix)', :key='med.medName')
              div(v-for='timeElement in med.timeElements', :key='timeElement.key', class='time-element')
                button(v-if='timeElement.isScheduled', class='mar-ready-button', v-on:click='showMarDialog(timeElement)')  {{ timeElement.medOrder.dose }}
</template>

<script>

import UiButton from '@/app/ui/UiButton.vue'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
const assert = require('assert').strict

export default {
  components: { UiButton },
  props: {
    idPrefix: { type: String, require: true },
    selectedDay: { type: Number},
    timeLineModel : { type: Object },
    ehrHelp: { type: Object }
  },
  computed: {
    dayList () { return this.timeLineModel.days || [] },
    medList () {
      let list = []
      switch (this.idPrefix){
      case 'prn':
        list = this.timeLineModel.prnOrders
        // console.log('prn orders', list)
        break
      case 'sched':
        list = this.timeLineModel.schedOrders
        // console.log('sched orders', list)
        break
      case 'stat':
        list = this.timeLineModel.statOrders
        // console.log('stat orders', list)
        break
      case 'once':
        list = this.timeLineModel.onceOrders
        break
      case 'od':
        list = this.timeLineModel.onceADayOrders
        break
      case 'cont':
        list = this.timeLineModel.contOrders
        break

      default:
      }
      return list || []
    },
    title () {
      const tl = ['Scheduled','STAT', 'PRN', 'Once a day', 'Once only', 'Continuous']
      const ky = ['sched', 'stat', 'prn', 'od', 'once', 'cont']
      const ix = ky.indexOf(this.idPrefix)
      return tl[ix] || this.idPrefix
    },
  },
  methods: {
    dayIsActive (dN) {
      return this.selectedDay === dN
    },
    dayLabelSizeCss (dN) {
      const isLarge = this.dayIsActive(dN)
      return {
        'day-label-element-width-big': isLarge,
        'day-label-element-width-small': !isLarge
      }
    },
    dayMedSchedule (aDay, idPrefix) {
      const results = !!idPrefix ? aDay.getTimeElements(idPrefix) : []
      // console.log(idPrefix, results)
      return results
    },
    setSelectedDay (n) {
      this.$emit('selectedDayChange', Number.parseInt(n.target.value))
    },
    showMarDialog ( timeElement) {
      console.log('Open mar for timeElement', timeElement)
      const medOrder = timeElement.medOrder
      const sourceRowId = medOrder.id
      console.log('Open mar for sourceRowIndex', sourceRowIndex)
      const sourcePageKey = 'medicationOrders'
      const sourceTableKey = 'medicationOrdersTable'
      const sendersTableDef = EhrDefs.getPageTable(sourcePageKey, sourceTableKey)
      assert.ok(sendersTableDef, `Did not find table def for ${sourcePageKey} ${sourceTableKey}` )
      assert.ok(sendersTableDef.tableAction, `Table definition does not have expected table action property ${sourcePageKey} ${sourceTableKey}` )
      const options = EhrTableActions.getTableActionRequestOptions(sendersTableDef, sourceRowId)
      const { taTargetPageKey, taTargetTableKey} = sendersTableDef
      this.ehrHelp.showDialogForTable(taTargetPageKey, taTargetTableKey, options)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
$element-padding: 5px;
$day-width: 50rem;
$time-element-height: 4rem;
$time-element-width: 4rem;
$medication-element-width: 10rem;
$day-label-element-width-small: 2rem;
$day-label-element-width-big: 6rem;
$border-colour: $blue;
$unselected-label-colour: rgba(77, 144, 254, .5);
$label-colour-start: #4D90FE;
$label-colour-end: #4787ED;
$selected-label-colour: $label-colour-start;
$space-between-day-blocks: 5px;

.time-line {
  border-radius: 3px;
  border: solid 1px $border-colour;
  box-shadow: 0 1px 1px rgba(0,0,0,.65);
  overflow-x: auto;
  width: auto;
}

.day-content .day-visible {
  width: $day-width;
  overflow: auto;
  border: 1px solid $selected-label-colour;
}

/*  This expands the day content  */
.a-day > input:checked ~ .day-content {
  width: $day-width;
  opacity: 1;
}
.day-content {
  width: 0;
  opacity: 0;
  overflow: hidden;
  -webkit-transition: width .25s linear, opacity .5s linear;
  transition: width .25s linear, opacity .5s linear;
  margin-bottom: 0;
  margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  padding: 0;
}

/*
time-element are the boxes containing either a time value or
 */
.time-element {
  border-bottom: dashed 1px $border-colour;
  border-right: dashed 1px $border-colour;
  min-width: $time-element-width;
  height: $time-element-height;
  padding: $element-padding;
}
.time-element button {
  height: calc($time-element-height - 2 * $element-padding);
}

.medication-element {
  border-bottom: solid 1px $border-colour;
  height: $time-element-height;
  margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  max-width: $medication-element-width;
  min-width: $medication-element-width;
  padding: $element-padding;
  overflow: hidden;
  overflow-wrap: break-word;
}

.day-bar-element {
  border-bottom: solid 1px $border-colour;
  height: $time-element-height;
  text-align: left;
}
.day-bar-element-title {
  text-align: center;
}

input {
  display: none;
}

input:checked + label, label:hover {
  background: $selected-label-colour;
  background: -webkit-linear-gradient(top,$selected-label-colour, $label-colour-end);
  color: white;
  font-size: 1.1rem;
  box-shadow: 0 5px 5px rgba(0,0,0,.65);

}

label {
  background: $unselected-label-colour;
  cursor: pointer;
  display: block;
  font-size: 1.1rem;
}

.day-label-element-width-small {
  width: $day-label-element-width-small;
  font-size: 1.1rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.day-label-element-width-big {
  width: $day-label-element-width-big;
}

.row-container {
  display: flex;
  flex-flow: row;
}
.col-container {
  display: flex;
  flex-flow: column;
}

.mar-ready-button {
  height: $time-element-height;
}

</style>
