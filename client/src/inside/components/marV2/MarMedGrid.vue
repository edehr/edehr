<template lang='pug'>
  div
    // medList contains entries for a group of medications. E.g. all 'stat' or all 'prn'
    // Only show if the list contains entries.
    div(v-if='medList.length>0')
      // Grid for the given medication type (sched, prn, cont, stat, etc.)
      div(class='time-line row-container')
        // Medication name column
        div(class='col-container')
          div(class="medication-element title-row-element")
            h4 {{ title }}
            //div Medication Ordered
          div(class="medication-element", v-for='med in medList', :id='med.id' :key='med.id', :title='med.medName')
            div(class="medication-container") {{ medicationSummary(med) }}
        // The next column contains the medication summary and possibly mar admin buttons
        div(class='col-container')
          div(class="medication-button-area title-row-element")
            // spacer for the title row
            h4 &nbsp;
          div(
            v-for='med in medList',
            class="medication-button-area",
            :id='med.id',
            :key='med.id',
            :style="{ height: calcHeight(med) + 'px'}"
            :title='med.medName'
            )
            div(class="medication-element-button")
              ui-button(
                v-if="showMainMedAdminButton(med)",
                class='mar-button',
                :class='{draftRow : medHasDraftMar(med) }'
                v-on:buttonClicked='showMarDialog(undefined, med)',
                )
                fas-icon(icon="file-prescription")

        // The remaining columns contains day blocks with a time grid
        div(class="a-day row-container", v-for='aDay in dayList', :key='aDay.dayId')
          // input takes UI event. It is not visible
          input(
            type="radio",
            :id="`${idPrefix}-${aDay.dayId}`",
            :value="aDay.dayNum",
            :checked="aDay.dayNum === selectedDay",
            @change='setSelectedDay'
            )
          // label if input also takes UI event and this is visible
          label(:for="`${idPrefix}-${aDay.dayId}`", :class='dayLabelSizeCss(aDay.dayNum)')
            // Day Block expanded - show day number and blocks for each medication with day values
            div(v-if='dayIsActive(aDay.dayNum)')
              // Title block
              div(class="day-bar-element day-bar-element-title title-row-element")
                div day {{ aDay.dayNum }}
              // Day Block Element -- medication information. total given today, max allowed for day
              div(v-for='dmed in dayMedSchedule(aDay, idPrefix)',
                :key='dmed.medName'
                class="day-bar-element",
                :style="{ height: calcHeight(dmed) + 'px'}"
                )
                div {{ timeLineModel.dayMedEventCount(aDay.dayNum, dmed) }}
                div(v-if="idPrefix === 'prn' && dmed.medOrder.maxDose") Max: {{dmed.medOrder.maxDose}}
            // Day Block unexpanded - just show the day number
            div(v-else)
              div(class="day-bar-element-title  title-row-element") {{ aDay.dayNum }}
              div(v-for='dmed in dayMedSchedule(aDay, idPrefix)',
                :key='dmed.medName'
                class="day-bar-element",
                :style="{ height: calcHeight(dmed) + 'px'}"
              )
                div {{ timeLineModel.dayMedEventCount(aDay.dayNum, dmed) }}
          // day content has time grid
          div(class="day-content")
            div(class="day-visible col-container")
              // title row
              div(class="row-container")
                div(v-for='time in aDay.timeElementLabels', :key='time.key', class='time-element title-row-element')
                  div {{ time.label }}
              // mar rows
              div(class="row-container", v-for='medRow in dayMedSchedule(aDay, idPrefix)', :key='medRow.medName')
                div(v-for='timeElement in medRow.timeElements',
                  :key='timeElement.key',
                  class='time-element',
                  :style="{ height: calcHeight(timeElement.medOrder) + 'px'}"
                  )
                  ui-button(
                    v-if='timeElement.hasScheduledEvent()',
                    v-on:buttonClicked='showMarDialog(timeElement, undefined)',
                    class='mar-button',
                    :class='{draftRow : timeElement.hasDraftMar() }'
                    :title='timeElement.toolTip'
                  )
                    //fas-icon(v-if='timeElement.hasDraftMar()', icon="edit")
                    fas-icon(icon="file-prescription")

                  ui-button(
                    v-else-if='timeElement.hasMarEvent()',
                    class='mar-button mar-done-button',
                    v-on:buttonClicked="$emit('viewReport', timeElement.marRecordId)",
                    :title='timeElement.toolTip'
                    )
                      fas-icon(icon="notes-medical")
                  div(v-else) {{ timeElement.mme }}


      // place a gap between rows
      div &nbsp;
</template>

<script>

import UiButton from '@/app/ui/UiButton.vue'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrDefs, { MED_ORDERS_PAGE_KEY, MED_ORDERS_TABLE_KEY } from '@/ehr-definitions/ehr-defs-grid'
import { MarTimelineModel, MED_GROUP_LABELS, MED_GROUPS } from '@/ehr-definitions/med-definitions/mar-model'

export default {
  components: { UiButton },
  props: {
    idPrefix: { type: String, require: true },
    selectedDay: { type: Number},
    timeLineModel : { type: MarTimelineModel },
    ehrHelp: { type: Object }
  },
  computed: {
    dayList () { return this.timeLineModel.timeLineDays || [] },
    medList () {
      const tl = this.timeLineModel
      return tl ? tl.getOrdersByGroup(this.idPrefix) : []
    },
    title () {
      const tl = MED_GROUP_LABELS
      const ix = MED_GROUPS.indexOf(this.idPrefix)
      return tl[ix] || this.idPrefix
    },
  },
  methods: {
    calcHeight ( medOrder ) {
      const main = document.getElementById(medOrder.id)
      return main ? main.offsetHeight : 0
    },
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
      return !!idPrefix ? aDay.getTimeElements(idPrefix) : []
    },
    getMarsForMed (medOrder) {
      return this.timeLineModel.getMarsForMed(medOrder)
    },
    getDraftMarsForMed (medOrder) {
      return this.timeLineModel.getDraftMarsForMed(medOrder)
    },
    medicationSummary ( med ) {
      return med.medOrderSummary()
    },
    setSelectedDay (n) {
      this.$emit('selectedDayChange', Number.parseInt(n.target.value))
    },
    medHasDraftMar (med) {
      return this.getDraftMarsForMed(med).length > 0
    },
    showMainMedAdminButton (med) {
      let show = false
      if (med.isStatOrOnce()) {
        const dc = this.getDraftMarsForMed(med).length
        const mc = this.getMarsForMed(med).length
        show = mc === 0
      } else if (med.isPrn()) {
        const dc = this.getDraftMarsForMed(med).length
        show = dc === 0
      } else {
        show = !med.isSchedulable()
      }
      return show
    },

    /**
     * Open the MAR dialog. If available provide the time element, otherwise provide the med order.
     * @param timeElement {obj | null}
     * @param mo {obj}
     */
    showMarDialog ( timeElement, mo) {
      const medOrder = timeElement ? timeElement.medOrder : mo
      const sourceRowId = medOrder.id
      const sourcePageKey = MED_ORDERS_PAGE_KEY
      const sourceTableKey = MED_ORDERS_TABLE_KEY
      const sendersTableDef = EhrDefs.getPageTable(sourcePageKey, sourceTableKey)
      // assert.ok(sendersTableDef, `Did not find table def for ${sourcePageKey} ${sourceTableKey}` )
      // assert.ok(sendersTableDef.tableAction, `Table definition does not have expected table action property ${sourcePageKey} ${sourceTableKey}` )
      const options = EhrTableActions.getTableActionRequestOptions(sendersTableDef, sourceRowId)
      /*
        Need a flag to prevent the default behavior which searches the target table for any row
        that is draft and then to use that row. For med mars we required explicit draft rows only.
       */
      options.explicitDraftRowOnly = true
      if (timeElement) {
        if(timeElement.hasDraftMar()) {
          options.draftRowId = timeElement.marRecordId
        }
        options.simDay = timeElement.dayNum
        options.simTime = timeElement.ts
        options.presetValues = [
          { key: 'mo_schedDay', value: options.simDay},
          { key: 'mo_schedTime', value: options.simTime}
        ]
        // console.log('Open mar for timeElement', JSON.stringify(options,null,2))
      }
      const { taTargetPageKey, taTargetTableKey} = sendersTableDef
      this.ehrHelp.showDialogForTable(taTargetPageKey, taTargetTableKey, options)
    },
    viewMarDialog ( mo) {
      this.ehrHelp.showReport(mo.id)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
$element-padding: 5px;
$day-width: 40rem;
$time-element-height: 4rem;
$time-element-width: 3rem;
$medication-element-width: 10rem;
$day-label-element-width-small: 2rem;
$day-label-element-width-big: 5rem; // large enough to hold "Max: 150  to 50mg"
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
  min-width: $day-width;
  overflow: auto;
  min-height: 8rem; /* big enough for one medication to not need a vert scroll */
  border: 1px solid $selected-label-colour;
}

/*  This expands the day content  */
.a-day > input:checked ~ .day-content {
  min-width: $day-width;
  //width: auto;
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
.title-row-element {
  height: $time-element-height;
}
.mar-button {
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 3px 3px 3px $grey20;
}
.mar-ready-button {
  background-color: #4abf8a;
}
.mar-done-button {
  background-color: $grey60;
}

.medication-element {
  border-bottom: solid 1px $border-colour;
  //height: let height of this cell grow to fit content
  //margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  max-width: $medication-element-width;
  min-width: $medication-element-width;
  padding: $element-padding;
}

.medication-button-area {
  border-bottom: solid 1px $border-colour;
  //height: let height of this cell grow to fit content
  margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  max-width: 4rem;
  min-width: 4rem;
  padding: $element-padding;
}

.medication-container {
  display: flex;
  flex-direction: row;
  min-height: 2rem;
  & .medication-element-button {
    margin-left: 1rem;
  }
}
.day-bar-element {
  border-bottom: solid 1px $border-colour;
  //height: is calculated to match height of first cell
  text-align: left;
  font-size: 1rem; // override 1.1 rem set onto input:checked
  & div {
    margin-left: 5px;
  }
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

</style>
