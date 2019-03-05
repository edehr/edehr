<template lang="pug">
  div
    h1 Medication Administration Summary
    div
      table
        thead
          th(v-for="hdr in tableHeader")
            div(v-show="hdr.type === MS_MED_ORDER")
              div Medication
              div List
            div(v-show="hdr.type === MS_MAR")
              div When: Day-{{hdr.value.day}} {{hdr.value.actualTime}}
              div Scheduled: {{hdr.value.scheduledTime}}
              div Who: {{hdr.value.whoAdministered}}

        tbody
          tr(v-for="row in tableBody")
            td(v-for="cell in row")
              div {{marCellContent(cell)}}
    hr
    div(style="display:none") {{refreshProperty}}
</template>

<script>
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import MarRecord from './MarRecord'
import MarSummary from './mar-summary'
import {MS_MED_ORDER, MS_MAR} from './mar-summary'

export default {
  name: 'MarSummary',
  components: {
    MarRecord
  },
  data () {
    return {
      tableHeader: [],
      tableBody: [],
      marSummary: {},
      MS_MED_ORDER: MS_MED_ORDER,
      MS_MAR: MS_MAR
    }
  },
  props: {
    marHelper: { type: Object }
  },
  computed: {
    refreshProperty () {
      // See EhrPageForm for more on why we have refreshProperty
      this.refresh()
      return this.tableHeader
    }
  },
  methods: {
    marCellContent (cell) {
      let content = ''
      let type = cell.type
      let value = cell.value
      if( type === MS_MED_ORDER) {
        content = value.medication
      }
      if( type === MS_MAR) {
        content = 'Yes'
      }
      return content
    },
    refresh () {
      let summary = this.marSummary
      let help = this.marHelper
      if(help){
        summary.summaryRefresh(help.marRecords, help.theMedOrders)
        this.tableHeader = summary.tableHeader
        this.tableBody = summary.tableBody
      }
    }
  },
  mounted: function () {
    const _this = this
    this.marSummary = new MarSummary()
    this.refreshEventHandler = function () {
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style scoped>

</style>