<template lang='pug'>
  div
    div(v-if='medList.length === 0')
      div {{ title }} - No medication orders
    // a block for development. Change v-if to true to see the structure of the key data
    div(class="flow_across", style='color: white;')
      div(@click="showStructure = !showStructure", class='flow_across_last_item') showStructure
    div(v-if='showStructure', style='overflow: auto;')
      div(class="row-container",
        v-for='(medRow, mrx) in dayMedSchedule(aDay, idPrefix)',
        :key="`t-${idPrefix}-${medRow.medName}-${mrx}`") {{ medRow.medName }}
        div(v-for='(timeElement, tx) in medRow.timeElements',
          :key="`t-${timeElement.key}-${tx}`", style='border: 1px solid red; padding: 5px') tx:{{ tx }}
          div(v-for="(te, inx) in timeElement.getMedMarEvents()") {{inx}}: {{ te }}

    // MAIN BLOCK for a schedule type (e.g. Scheduled, PRN, etc
    // medList contains entries for a group of medications. E.g. all 'stat' or all 'prn'
    // Only shows if the list contains entries.
    div(v-if='medList.length>0')
      // Grid for the given medication type (sched, prn, cont, stat, etc.)
      div(class='time-line row-container')
        // Column for medication name
        div(class='col-container')
          // Section title and date
          div(class="medication-element title-row-element")
            h4 {{ title }}
            h4 {{ aDay.dateStr }}
          // Section for medication order summary and checkbox to enable row
          // be sure to get each :key to be unique or else you can get errors when medications appear two or more time
          div(class="med-row-element medication-element",
            v-for='(med, mx) in medList',
            :class='{ medRowSelected: med.selected }'
            :id='med.id',
            :key="forElementKeyFromMed('med', med, mx)",
            :title='med.medName')
            // 1. checkbox, 2. medication summary
            div(class="medication-container")
              input(type='checkbox', v-model="med.selected", :id="forElementKeyFromMed('med', med, mx)")
              label(:for="forElementKeyFromMed('med', med, mx)")
                span {{ medicationSummary(med) }}
        // Column for mar admin buttons and medication order info button
        div(class='col-container')
          // spacer for the title row
          div(class="medication-button-area title-row-element")
            h4 &nbsp;
          // Section for mar admin buttons and medication order info button
          div(
            v-for='(med, px) in medList',
            :class='{ medRowSelected: med.selected }'
            class="med-row-element medication-button-area",
            :id='med.id',
            :key="`${med.id}-${px}`",
            :title='med.medName'
            )
            // Medication order info button
            ui-info(v-if="hasMedInfoContent(med)", :title="medInfoTitle(med)", :text="medInfoContent(med)", :html="medInfoContentHtml(med)")
            // MAR button within the first column block
            div(class="medication-element-button")
              ui-button(value="mmg-main",
                v-if="showMainMedAdminButton(med)",
                class='mar-button',
                :disabled='!med.selected'
                :class='{draftRow : medHasDraftMar(med) }'
                v-on:buttonClicked='showMarDialog(undefined, med)',
                )
                fas-icon(icon="pen")

        // Day blocks with a time grid
        div(class="row-container main-time-block")
          // Column for medication information. total given today, max allowed for day
          div(class='day-label-dose-count')
            // Title block
            div(class="day-bar-element day-bar-element-title title-row-element")
              span &nbsp;
            // Day Block Element -- medication information. total given today, max allowed for day
            div(v-for='(dmed, ax) in dayMedSchedule(aDay, idPrefix)',
              :key="`${idPrefix}-${dmed.medName}-${ax}`",
              class="med-row-element day-bar-element"
              )
              div {{ timeLineModel.dayMedEventCount(aDay.dayNum, dmed) }}
              div(v-if="idPrefix === 'prn' && dmed.medOrder.maxDose") Max: {{dmed.medOrder.maxDose}}
          // day content has time grid
          div(class="day-content")
            div(class="col-container")
              // Row of time element titles  0000, 0100, 0200, ...
              div(class="row-container")
                div(v-for='time in aDay.timeElementLabels', :key='time.key', class='time-element title-row-element',
                  :class='isTimeCurrentSimTimeClass(time.label)'
                )
                  div {{ time.label }}
              // Row of time elements for a medication row
              div(class="row-container",
                v-for='(medRow, mrx) in dayMedSchedule(aDay, idPrefix)',
                :key="`${idPrefix}-${medRow.medName}-${mrx}`",
                :class='{ medRowSelected: medRow.medOrder.selected }'
                )
                // Time elements
                div(v-for='(timeElement, tx) in medRow.timeElements',
                  :key="`${timeElement.key}-${tx}`",
                  class='med-row-element time-element',
                  :class='isTimeCurrentSimTimeClass(timeElement.ts)'
                  )
                    div(v-for='(mme, px) in timeElement.getMedMarEvents()')
                      div(v-if='!mme.canEdit()')
                        div(class='mar-dosage', v-if='mme.marRecord')
                          div(v-if='mme.marRecord.dose') {{ truncate(mme.marRecord.dose, 6) }}
                          div(v-else) {{ truncate(mme.marRecord.status, 6) }}
                        ui-button(value="mmg-mme-view",
                          class='mar-button',
                          :class="marDoneClass(mme)",
                          v-on:buttonClicked="$emit('viewReport', mme.marRecordId)",
                          :title='mmeToolTip(mme)'
                          )
                            fas-icon(icon="file-prescription")
                      div(v-if='mme.canEdit()')
                        ui-button(value="mmg-mme-edit",
                          class='mar-button',
                          v-on:buttonClicked='showMarDialog(mme, timeElement.medOrder)',
                          :disabled='!timeElement.medOrder.selected'
                          :class='{draftRow : mme.hasDraftMar() }'
                          :title='mmeToolTip(mme)'
                        )
                          fas-icon(icon="pen")
      // place a gap between rows
      div &nbsp;
</template>

<script>

import UiButton from '@/app/ui/UiButton.vue'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrDefs, { MED_ORDERS_PAGE_KEY, MED_ORDERS_TABLE_KEY } from '@/ehr-definitions/ehr-defs-grid'
import { MarTimelineModel, MAR_STATUS_REFUSED,
  MAR_STATUS_MISSED,
  MAR_STATUS_SKIPPED,
  MED_GROUP_LABELS, MED_GROUPS } from '@/ehr-definitions/med-definitions/mar-model'
import UiInfo from '@/app/ui/UiInfo.vue'
import { textToHtml } from '@/directives/text-to-html'
import { t18EhrText } from '@/helpers/ehr-t18'
import MarBarcodeDialog from '@/inside/components/marV2/MarBarcodeDialog.vue'
import Vue from 'vue'
import { currentSimDayNumber, currentSimTime, hourStringToHour, simDateCalc } from '@/helpers/date-helper'
export default {
  components: { MarBarcodeDialog, UiInfo, UiButton },
  data () {
    return {
      showStructure: false
    }
  },
  props: {
    idPrefix: { type: String, require: true },
    selectedDay: { type: Number},
    timeLineModel : { type: MarTimelineModel },
    ehrHelp: { type: Object },
    barCodedMeds: { type: Array }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.mar },
    dayList () { return this.timeLineModel.timeLineDays || [] },
    aDay () { return this.dayList[this.selectedDay] },
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
    isTimeCurrentSimTimeClass (ts) {
      let result = this.aDay.dayNum === currentSimDayNumber()
      if (result) {
        const ct = hourStringToHour(currentSimTime())
        const tt = hourStringToHour(ts)
        result = ct === tt
      }
      return result ? 'current-time-element' : undefined
    },
    forElementKeyFromMed (containerKey, med, index) { return `${containerKey}-${med.id}-${index}` },
    resetAll () {
      this.medList.forEach( m => {
        Vue.set(m, 'selected', false)
      })
    },
    dayIsActive (dN) {
      return this.selectedDay === dN
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
    marDoneClass (mar) {
      // const mar = timeElement.getMedMarEvent()
      // const missed = mar.marStatus === MAR_STATUS_REFUSED || mar.marStatus === MAR_STATUS_MISSED || mar.marStatus === MAR_STATUS_SKIPPED
      // this seems to work even if the user saved the mar using a language other than English
      const missed = [ MAR_STATUS_REFUSED, MAR_STATUS_MISSED, MAR_STATUS_SKIPPED].includes(mar.marStatus)
      // console.log('marDoneClass missed vs status', missed, mar.marStatus)
      return missed ? 'mar-missed-button' : 'mar-done-button'
    },
    medicationSummary ( med ) {
      return med.medOrderSummary()
    },
    medInfoTitle (med) {
      return med.medName + ' ' + med.dose
    },
    hasMedInfoContent (med) {
      return !!med.reason || !!med.instructions
    },
    medInfoContent (med) {
      let et = this.ehrText
      let text = []
      text.push( med.medOrderSummary() )
      med.reason ? text.push (et.medReason + med.reason) : null
      med.instructions ? text.push (et.medInstructions + med.instructions) : null
      text = text.join('\n')
      return text
    },
    medInfoContentHtml (med) {
      return textToHtml(this.medInfoContent(med))
    },
    mmeToolTip (mme) {
      const medOrder = mme.medOrder
      const marRecord = mme.marRecord
      const df = (d, t) => simDateCalc(d) + 'T' + t
      const td = (d) => Number(d) >= 0
      const parts = []
      parts.push(medOrder.medOrderSummary())
      if (mme.marStatus) {
        parts.push('Status: ' + marRecord.status)
        if (marRecord.dose) {
          parts.push('Dose: ' + marRecord.dose)
        }
      }
      parts.push('Ordered: '+ df(medOrder.orderedDay, medOrder.orderedTime))
      parts.push('Time block: ' + mme.schedTime)
      if (mme.marStatus) {
        if (td(marRecord.schedDay)) { // if scheduled... e.g. not a PRN
          parts.push('Scheduled: '+ df(marRecord.schedDay, marRecord.schedTime))
        }
        if (td(marRecord.eventDay)) {
          // older MARs may lack an event time (means they default to recorded time)
          parts.push('Event: ' + df(marRecord.eventDay, marRecord.eventTime))
        }
        parts.push('Recorded: ' + df(marRecord.recordDate, marRecord.recordTime))
        if (marRecord.isDraft) {
          parts.push('DRAFT')
        }
        if (medOrder.alerts) parts.push(medOrder.alerts)
      }
      return parts.join(', ')

    },
    setSelectedDay (n) {
      this.$emit('selectedDayChange', Number.parseInt(n.target.value))
    },
    medHasDraftMar (med) {
      return this.getDraftMarsForMed(med).length > 0
    },
    showMainMedAdminButton (med) {
      let show = true
      // if (med.isStatOrOnce()) {
      //   const mc = this.getMarsForMed(med).length
      //   show = mc === 0
      // } else if (med.isPrn()) {
      //   const dc = this.getDraftMarsForMed(med).length
      //   show = dc === 0
      // } else {
      //   // OD meds can appear on both the title area and the day's schedule
      //   show = 'OD' === med.schedule || !med.isSchedulable()
      // }
      return show
    },

    /**
     * Open the MAR dialog. If available provide the time element, otherwise provide the med order.
     * @param timeElement {obj | null}
     * @param mo {obj}
     */
    showMarDialog ( mme, medOrder) {
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
      if (mme) {
        if(mme.hasDraftMar()) {
          options.draftRowId = mme.marRecordId
        }
        options.presetValues = [
          { key: 'mo_schedDay', value: mme.schedDay },
          { key: 'mo_schedTime', value: mme.schedTime },
          { key: 'mar_event_day', value: mme.schedDay },
          { key: 'mar_event_time', value: mme.schedTime },
        ]
        // console.log('Open mar for timeElement', JSON.stringify(options,null,2))
      }
      if (!mme) {
        const drafts = this.getDraftMarsForMed(medOrder)
        if(drafts.length > 0) {
          const mme = drafts[0]
          console.log('find draft marRecordId',  mme.id)
          options.draftRowId = mme.id
        } else {
          options.presetValues = [
            { key: 'mar_event_day', value: currentSimDayNumber() },
            { key: 'mar_event_time', value: currentSimTime() },
          ]
        }
      }
      const { taTargetPageKey, taTargetTableKey} = sendersTableDef
      this.ehrHelp.showDialogForTable(taTargetPageKey, taTargetTableKey, options)
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    viewMarDialog ( mo) {
      this.ehrHelp.showReport(mo.id)
    }
  },
  watch: {
    barCodedMeds () {
      if (this.barCodedMeds.length === 0 ) {
        this.resetAll()
      } else {
        this.medList.forEach( medOrder => {
          if (this.barCodedMeds.includes(medOrder.medName)) {
            Vue.set(medOrder, 'selected', true)
          }
        })
      }
    },
    medList () {
      this.resetAll()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
$element-padding: 5px;
$day-width: 40rem;
$time-element-height: 4rem;
$time-element-width: 4rem;
$medication-element-width: 14rem;
$medication-button-area-width: 3rem;
$med-row-element-height: 5rem;
$day-label-dose-count-width: 2rem;
$border-colour: $blue;
$unselected-label-colour: rgba(77, 144, 254, .5);
$label-colour-start: #4D90FE;
$label-colour-end: #4787ED;
$selected-label-colour: $label-colour-start;
$space-between-day-blocks: 5px;

.time-line {
  position: relative;
  width: 100%;
  border-radius: 3px;
  border: solid 1px $border-colour;
  box-shadow: 0 1px 1px rgba(0,0,0,.65);
}

.day-content {
  min-height: 8rem; /* big enough for one medication to not need a vert scroll */
  border: 1px solid $selected-label-colour;
  -webkit-transition: width .25s linear, opacity .5s linear;
  transition: width .25s linear, opacity .5s linear;
  margin-bottom: 0;
  margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  padding: 0;
}

.main-time-block {
  overflow-x: auto;
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
.current-time-element {
  background-color: #8DD3F0;
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
  background-color: $success;
}
.mar-missed-button {
  background-color: indianred;
}

.medication-element {
  border-bottom: solid 1px $border-colour;
  //height: let height of this cell grow to fit content
  //margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  max-width: $medication-element-width;
  min-width: $medication-element-width;
}

.medication-button-area {
  border-bottom: solid 1px $border-colour;
  //height: let height of this cell grow to fit content
  margin-right: $space-between-day-blocks; // This puts space between the days blocks.
  max-width: $medication-button-area-width;
  min-width: $medication-button-area-width;
  padding: $element-padding;
}

.medication-container {
  display: flex;
  flex-direction: row;
  min-height: 2rem;
  & .medication-element-button {
    margin-left: 1rem;
  }
  padding: $element-padding;
}
.med-row-element {
  min-height: $med-row-element-height;
  max-height: $med-row-element-height;
  height: $med-row-element-height;
  overflow-y: clip;
}
.day-bar-element {
  border-bottom: solid 1px $border-colour;
  //height: is calculated to match height of first cell
  width: $day-label-dose-count-width;
  text-align: left;
  font-size: 1rem; // override 1.1 rem set onto input:checked
  & div {
    margin-left: 5px;
  }
}
.day-bar-element-title {
  text-align: center;
}
.mar-dosage {
  font-size: 0.8rem;
}
.medRowSelected {
  background-color: $brand-selected;
  font-weight: bold;
}


.day-label-dose-count {
  font-size: 1.1rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
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
