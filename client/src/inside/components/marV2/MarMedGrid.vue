<template lang='pug'>
  div
    // medList contains entries for a group of medications. E.g. all 'stat' or all 'prn'
    // Only show if the list contains entries.
    div(v-if='medList.length>0')

      // Grid for the given medication type (sched, prn, cont, stat, etc.)
      div(class='time-line row-container')
        div(class='col-container')
          // Column for medication name
          div(class="medication-element title-row-element")
            // Section title and date
            h4 {{ title }}
            h4 {{ aDay.dateStr }}
          // be sure to get each :key to be unique or else you can get errors when medications appear two or more time
          div(class="med-row-element medication-element",
            v-for='(med, mx) in medList',
            :class='{ medRowSelected: med.selected }'
            :id='med.id',
            :key="forElementKeyFromMed('med', med, mx)",
            :title='med.medName')
            // medication name and summary
            div(class="medication-container")
              input(type='checkbox', v-model="med.selected", :id="forElementKeyFromMed('med', med, mx)")
              label(:for="forElementKeyFromMed('med', med, mx)")
                span {{ medicationSummary(med) }}
        div(class='col-container')
          //  Possible mar admin buttons and medication order info button
          div(class="medication-button-area title-row-element")
            // spacer for the title row
            h4 &nbsp;
          div(
            v-for='(med, px) in medList',
            :class='{ medRowSelected: med.selected }'
            class="med-row-element medication-button-area",
            :id='med.id',
            :key="`${med.id}-${px}`",
            :title='med.medName'
            )
            ui-info(:title="medInfoTitle(med)", :text="medInfoContent(med)")
            div(class="medication-element-button")
              ui-button(
                v-if="showMainMedAdminButton(med)",
                class='mar-button',
                :class='{draftRow : medHasDraftMar(med) }'
                v-on:buttonClicked='showMarDialog(undefined, med)',
                )
                fas-icon(icon="file-prescription")

        // Day blocks with a time grid
        div(class="row-container")
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
              // title row
              div(class="row-container")
                div(v-for='time in aDay.timeElementLabels', :key='time.key', class='time-element title-row-element')
                  div {{ time.label }}
              // mar rows
              div(class="row-container",
                v-for='(medRow, mrx) in dayMedSchedule(aDay, idPrefix)',
                :key="`${idPrefix}-${medRow.medName}-${mrx}`",
                :class='{ medRowSelected: medRow.medOrder.selected }'
                )
                div(v-for='(timeElement, tx) in medRow.timeElements',
                  :key="`${timeElement.key}-${tx}`",
                  class='med-row-element time-element'
                  )
                  ui-button(
                    v-if='timeElement.hasScheduledEvent()',
                    v-on:buttonClicked='showMarDialog(timeElement, undefined)',
                    class='mar-button',
                    :class='{draftRow : timeElement.hasDraftMar() }'
                    :title='timeElement.toolTip'
                  )
                    fas-icon(icon="file-prescription")
                  div(v-else-if="timeElement.manyMars")
                    ui-button(v-for='(mar, px) in timeElement.manyMars',
                      class='mar-button',
                      :class="marDoneClass(timeElement)",
                      v-on:buttonClicked="$emit('viewReport', mar.marRecordId)",
                      :title='timeElement.toolTip'
                      )
                        fas-icon(icon="file-prescription")
                  div(v-else) {{ timeElement.mme }} &nbsp;


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
export default {
  components: { UiInfo, UiButton },
  props: {
    idPrefix: { type: String, require: true },
    selectedDay: { type: Number},
    timeLineModel : { type: MarTimelineModel },
    ehrHelp: { type: Object }
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
    forElementKeyFromMed (containerKey, med, index) { return `${containerKey}-${med.id}-${index}` },
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
    marDoneClass (timeElement) {
      const mar = timeElement.getMedMarEvent()
      console.log('marDoneClass', mar.marStatus)
      const missed = mar.marStatus === MAR_STATUS_REFUSED || mar.marStatus === MAR_STATUS_MISSED || mar.marStatus === MAR_STATUS_SKIPPED
      return missed ? 'mar-missed-button' : 'mar-done-button'
    },
    medicationSummary ( med ) {
      return med.medOrderSummary()
    },
    medInfoTitle (med) {
      return med.medName + ' ' + med.dose
    },
    medInfoContent (med) {
      let et = this.ehrText
      let text = []
      text.push( med.medOrderSummary() )
      med.reason ? text.push (et.medReason + med.reason) : null
      med.instructions ? text.push (et.medInstructions + med.instructions) : null
      text = text.join('\n')
      return textToHtml(text)
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
        const mc = this.getMarsForMed(med).length
        show = mc === 0
      } else if (med.isPrn()) {
        const dc = this.getDraftMarsForMed(med).length
        show = dc === 0
      } else {
        // OD meds can appear on both the title area and the day's schedule
        show = 'OD' === med.schedule || !med.isSchedulable()
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
        // // change the option to use current sim time not the time element's information.
        // options.simDay = timeElement.dayNum
        // options.simTime = timeElement.ts
        const mme = timeElement.getMedMarEvent()
        options.presetValues = [
          { key: 'mo_schedDay', value: mme.schedDay },
          { key: 'mo_schedTime', value: mme.schedTime }
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
  border-radius: 3px;
  border: solid 1px $border-colour;
  box-shadow: 0 1px 1px rgba(0,0,0,.65);
  overflow-x: auto;
  width: auto;
}

.day-content {
  min-width: $day-width;
  overflow: auto;
  min-height: 8rem; /* big enough for one medication to not need a vert scroll */
  border: 1px solid $selected-label-colour;
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
  background-color: $grey30;
}
.mar-missed-button {
  background-color: mediumpurple;
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
  text-align: left;
  font-size: 1rem; // override 1.1 rem set onto input:checked
  & div {
    margin-left: 5px;
  }
}
.day-bar-element-title {
  text-align: center;
}

.medRowSelected {
  background-color: $brand-selected;
  font-weight: bold;
}


.day-label-dose-count {
  width: $day-label-dose-count-width;
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
