<template lang="pug">
  div()
    tabs
      tab(name="V2 MAR", :selected="true")
        button(v-on:click='setupTimeline')
        mar-med-grid(
          v-for="prefix in groups",
          :ehrHelp="ehrHelp"
          :key="prefix",
          :timeLineModel='timeLineModel',
          :selectedDay='selectedDay',
          :idPrefix='prefix',
          @selectedDayChange='setSelectedDay')
        //mar-today-content-v2(:ehrHelp="ehrHelp")
      tab(name="MAR table v2")
        ehr-page-element(:element="tableDefV2", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

      tab(:name="todayTabName")
        mar-today-content(:ehrHelp="ehrHelp", :marToday="marToday")
      tab(name="Summary")
        mar-summary(:ehrHelp="ehrHelp")

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
import { MarTimelineModel } from '@/ehr-definitions/med-definitions/mar-model'
import EhrDialogForm from '@/inside/components/page/EhrDialogForm.vue'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrPageElement from '@/inside/components/page/EhrPageElement.vue'
import StoreHelper from '@/helpers/store-helper'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

export default {
  data () {
    return {
      marToday: {}, // helper class
      // v2
      groups: ['sched', 'stat', 'once', 'od', 'prn', 'cont'],
      tableKey: 'marTable',
      selectedDay: -1,
      timeLineModel: {}
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
    pageDataKey: { type: String }
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
    todayTabName () {
      return 'Today - Day ' + this.marToday.getCurrentDay()
    },
    // v2
    errorList () {
      return this.ehrHelp.getErrorList('marTable')
    },
    tableDefs () {
      return EhrDefs.getPageTables(this.pageDataKey)
    },
    tableDefV2 () {
      return this.tableDefs.find( td => td.elementKey === 'marTable')
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
    }
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
