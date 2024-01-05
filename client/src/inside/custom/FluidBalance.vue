// Custom page for Fluid Balance
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-content
      div(class="cumulative-table")
        table.table_horizontal
          thead
            tr
              th &nbsp;
              th(v-for='aDay in timeline', :key='aDay.dayId') {{ aDay.label}}
          tbody
            tr
              td {{ ehrText.inputs }}
              td(v-for='aDay in timeline', :key='aDay.dayId') {{ aDay.dayInputs}}
            tr
              td {{ ehrText.outputs }}
              td(v-for='aDay in timeline', :key='aDay.dayId') {{ aDay.dayOutputs}}
            tr
              td {{ ehrText.cumulative }}
              td(v-for='aDay in timeline', :key='aDay.dayId') {{ aDay.dayCumulative}}
        table.table_horizontal
          tbody
            tr
              td.bold-text {{ ehrText.overall }} {{ (summaries.totalInputs - summaries.totalOutputs) }}

      ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp")

    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelContent from '../components/page/EhrPanelContent.vue'
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrPageTable from '@/inside/components/page/EhrPageTable.vue'
import UiButton from '@/app/ui/UiButton.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import EhrDefs from '../../ehr-definitions/ehr-defs-grid'
import EhrPageHelper from '../components/page/ehr-helper'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'

const FLUID_TABLE_KEY = 'fluidInOutTable'
const TABLE_DAY_KEY = 'fluidInOutTable_day'
const PAGE_KEY = 'fluidBalance'
export default {
  components: {
    EhrPanelContent,
    EhrPageTable,
    EhrPageFooter,
    UiButton
  },
  data: function () {
    return {
      timeline: [],
      summaries: {
        cumulative: 0,
        totalInputs: 0,
        totalOutputs: 0
      },
      pageDataKey: PAGE_KEY,
      theData: {},
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      pageDataKey: PAGE_KEY,
    }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.fluidBalance },
    pageDef () {
      return EhrDefs.getPageDefinition(PAGE_KEY)
    },
    tableDef () {
      const tableDefs = EhrDefs.getPageTables(PAGE_KEY)
      return tableDefs.find( td => td.elementKey === FLUID_TABLE_KEY)
    },
  },
  methods: {
    setupTimeline () {
      this.summaries = {
        totalInputs: 0,
        totalOutputs: 0
      }
      const mergedData = StoreHelper.getMergedData()
      const ehrDataModel = new EhrDataModel(mergedData)
      const simTime = ehrDataModel.simTime
      const fluidTableData = ehrDataModel.getPageTableData(PAGE_KEY, FLUID_TABLE_KEY) || []
      // create an object with key === date and value equal to the sum of all rows for that date.
      const mappedData = {}
      for (const fuelem of fluidTableData) {
        let key = fuelem[TABLE_DAY_KEY]
        let mp = mappedData[key] = (mappedData[key] || {})
        mp.totalInputs = (mp.totalInputs || 0) + (fuelem['totalInputs'] || 0)
        mp.totalOutputs = (mp.totalOutputs || 0) + (fuelem['totalOutputs'] || 0)
      }
      // Create a timeline, one entry per potential date between simNow and the first encounter date
      let numberOfDays = simTime.visitDay + 1
      const dayNumbersArray = [...Array(numberOfDays).keys()]
      this.timeline = dayNumbersArray.map(d => {
        let dayNumber = d
        const todayNum = numberOfDays - 1
        let df = todayNum-dayNumber
        let dv = new Date()
        dv.setDate(dv.getDate() - df)
        let lbl
        if ( dayNumber === todayNum) {
          lbl = this.ehrText.today
          df = 0
        } else if ( dayNumber === todayNum - 1) {
          lbl = this.ehrText.yesterday
          df = 1
        } else if ( dayNumber < todayNum - 1) {
          lbl = dv.toISOString().split('T')[0]
        }
        let dayInputs = mappedData[d] ? mappedData[d].totalInputs : 0
        let dayOutputs = mappedData[d] ? mappedData[d].totalOutputs: 0
        let dayCumulative = dayInputs - dayOutputs
        this.summaries.totalInputs += dayInputs
        this.summaries.totalOutputs += dayOutputs
        return {
          dayInputs: dayInputs,
          dayOutputs: dayOutputs,
          dayCumulative: dayCumulative,
          inputs: 0,
          outputs: 0,
          dayId: 'day-' + dayNumber,
          dayNum: dayNumber,
          label: lbl
        }
      })
      // present the date in newest to the oldest date.
      this.timeline.reverse()
    },
  },
  created () {
    this.ehrHelp = new EhrPageHelper(PAGE_KEY)
    const _this = this
    this.refreshEventHandler = function () { _this.setupTimeline() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(PAGE_KEY)
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>

.cumulative-table {
  overflow-x: auto;
  margin-bottom: 2rem;
}
</style>
