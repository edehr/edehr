<template lang="pug">
  div
    tabs
      tab(name="V1 MAR", v-if='showV1')
        h3 {{ todayTabName }}
        mar-today-content(:ehrHelp="ehrHelp", :marToday="marToday")
      tab(name="V1 Summary", v-if='showV1')
        mar-summary(:ehrHelp="ehrHelp")
      tab(name="MAR")
        //p {{v2Message}}
        mar-med-grid(
          v-for="prefix in groups",
          :ehrHelp="ehrHelp"
          :key="prefix",
          :timeLineModel='timeLineModel',
          :selectedDay='selectedDay',
          :idPrefix='prefix',
          @selectedDayChange='setSelectedDay',
          @viewReport='showReport'
        )
        //mar-today-content-v2(:ehrHelp="ehrHelp")
      tab(name="MAR table")
        //p {{v2Message}}
        ehr-page-element(:element="tableDefV2", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDefV2", :errorList="errorList" )

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

export default {
  data () {
    return {
      marToday: {}, // helper class
      // v2
      groups: MED_GROUPS,
      tableKey: MAR_V2_TABLE_KEY,
      selectedDay: -1,
      timeLineModel: undefined,
      v2Message: 'V2 MAR.  This is a new approach, for the EdEHR, to medication administration records (MARs). This second version is under construction so if you create records here they may not work once this page is completed.'
    }
  },
  components: {
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
    activeTab () { return this.$store.getters['ehrPageTab/activeTab'](this.pageDataKey) },
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
      console.log('v1TableData',v1TableData)
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
  mounted () { this.setupTimeline() },
  created: function () {
    this.marToday = new MarToday()
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
