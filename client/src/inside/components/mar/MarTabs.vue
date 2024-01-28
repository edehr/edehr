<template lang="pug">
  div
    tabs
      tab(name="V1 MAR", v-if='showV1')
        h3 {{ todayTabName }}
        mar-today-content(:ehrHelp="ehrHelp", :marToday="marToday")
      tab(name="V1 Summary", v-if='showV1')
        mar-summary(:ehrHelp="ehrHelp")
      tab(:name="ehrText.tabNameMar")

        // day selection buttons
        div(class='day-selector-bar flow_across')
          div(
            v-if="dayList.length > 1",
            class="day-selector",
            v-for='aDay in dayList',
            :key='aDay.dayId')
            ui-button(
              :class='{daySelectorSelected: aDay.dayNum === selectedDay}'
              v-on:buttonClicked="setSelectedDay(aDay.dayNum)",
            )
              span {{dayWords(aDay)}}

        // bar code buttons
        div(class='day-selector-bar flow_across')
          ui-button(v-on:buttonClicked="resetSelectedMeds", v-bind:secondary="true") Reset
          ui-button(v-on:buttonClicked="openBarCodeDialog") BarCode

        // daily med admin tables
        mar-med-grid(
          v-for="prefix in groups",
          :ehrHelp="ehrHelp"
          :key="prefix",
          :barCodedMeds="barCodedMeds",
          :timeLineModel='timeLineModel',
          :selectedDay='selectedDay',
          :idPrefix='prefix',
          @selectedDayChange='setSelectedDay',
          @viewReport='showReport'
        )
        //mar-today-content-v2(:ehrHelp="ehrHelp")
      tab(:name="ehrText.tabNameTable")
        //p {{v2Message}}
        ehr-page-element(:element="tableDefV2", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDefV2", :errorList="errorList" )

    mar-barcode-dialog(ref="refBarCodeDialog", @barcodedMed='barcodedMed')

</template>

<script>
import MarSummary from './MarSummary'
import MarTodayContent from './MarTodayContent'
import Tabs from '../Tabs'
import Tab from '../Tab'
import MarToday from './mar-today'
import MarMedGrid from '@/inside/components/marV2/MarMedGrid.vue'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import { MarTimelineModel, MED_GROUPS } from '@/ehr-definitions/med-definitions/mar-model'
import EhrDialogForm from '@/inside/components/page/EhrDialogForm.vue'
import EhrDefs, { MED_ORDERS_PAGE_KEY, MAR_V1_TABLE_KEY, MAR_V2_TABLE_KEY } from '@/ehr-definitions/ehr-defs-grid'
import EhrPageElement from '@/inside/components/page/EhrPageElement.vue'
import StoreHelper from '@/helpers/store-helper'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrData from '@/inside/components/page/ehr-data'
import UiButton from '@/app/ui/UiButton.vue'
import { t18EhrText } from '@/helpers/ehr-t18'
import MarBarcodeDialog from '@/inside/components/marV2/MarBarcodeDialog.vue'

export default {
  data () {
    return {
      marToday: {}, // helper class
      // v2
      groups: MED_GROUPS,
      tableKey: MAR_V2_TABLE_KEY,
      selectedDay: -1,
      barCodedMeds: [],
      timeLineModel: undefined,
      v2Message: 'V2 MAR.  This is a new approach, for the EdEHR, to medication administration records (MARs). This second version is under construction so if you create records here they may not work once this page is completed.'
    }
  },
  components: {
    MarBarcodeDialog,
    UiButton,
    EhrPageElement,
    EhrDialogForm,
    MarMedGrid,
    MarTodayContent,
    MarSummary,
    Tabs,
    Tab
  },
  props: {
    ehrHelp: { type: Object },
    pageDataKey: { type: String, required: true }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.mar },
    activeTab () { return this.$store.getters['ehrPageTab/activeTab'](this.pageDataKey) },
    timeLineDays () { return this.timeLineModel.timeLineDays || [] },
    dayList () { return this.timeLineDays.slice().sort( (a,b) => b.dayNum - a.dayNum ) },
    todayTabName () {
      return 'Day ' + this.marToday.getCurrentDay()
    },
    // v2
    errorList () {
      return this.ehrHelp.getErrorList(MAR_V2_TABLE_KEY)
    },
    showV1 () {
      const pageData = EhrData.getMergedPageData(MED_ORDERS_PAGE_KEY) || {}
      const v1TableData = pageData[MAR_V1_TABLE_KEY]
      if(v1TableData) console.log('v1TableData',v1TableData)
      return v1TableData && Array.isArray(v1TableData) && v1TableData.length > 0
    },
    tableDefs () {
      return EhrDefs.getPageTables(this.pageDataKey)
    },
    tableDefV2 () {
      return this.tableDefs.find( td => td.elementKey === MAR_V2_TABLE_KEY)
    },
    // mergedData () { return StoreHelper.getMergedData() },
    // ehrDataModel () { return new EhrDataModel(this.mergedData) },
    // timeLineModel () { return new MarTimelineModel(this.ehrDataModel)}
  },
  methods: {
    dayWords (aDay) {
      return aDay.label
    },
    barcodedMed ( med ) {
      // the med contains a med order name.
      this.barCodedMeds.push(med)
    },
    openBarCodeDialog (period) {
      this.$refs.refBarCodeDialog.openBarCodeDialog()
    },
    resetSelectedMeds () {
      this.barCodedMeds = []
    },
    // v2
    setSelectedDay (dN) {
      this.selectedDay = dN
    },
    // v2
    setupTimeline () {
      const mergedData = StoreHelper.getMergedData()
      // console.log('mar tabs setup', mergedData)
      // console.log('mar tabs setup', JSON.stringify(mergedData.meta))
      const ehrDataModel = new EhrDataModel(mergedData)
      // console.log('mar tabs ehrDataModel', JSON.stringify(ehrDataModel.ehrData))
      this.timeLineModel = new MarTimelineModel(ehrDataModel)
      this.selectedDay = this.timeLineModel.numberOfDays - 1
    },
    showReport (rowId) {
      this.ehrHelp.showReport(rowId)
    },
  },
  // v2
  mounted () {  },
  created: function () {
    this.marToday = new MarToday()
    this.setupTimeline()
    const _this = this
    this.refreshEventHandler = function () { _this.setupTimeline() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

.day-selector-bar {
  gap: 5px;
  margin-bottom: 5px;
}
.day-selector {
  //border: 1px solid black;
  //padding: 5px;
  .daySelectorSelected {
    background-color: $button-active-color;
    cursor: inherit;
  }
}
</style>
