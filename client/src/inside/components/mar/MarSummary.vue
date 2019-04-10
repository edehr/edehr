<template lang="pug">
  div
    h1 Medication Administration Summary
    div
      table
        thead
          th(v-for="hdr in tableHeader")
            div(v-show="hdr.type === KEY_MED_ORDER")
              div Medication
              div List
            div(v-show="hdr.type === KEY_MAR")
              div When: Day-{{hdr.value.day}} {{hdr.value.actualTime}}
              div Scheduled: {{hdr.value.scheduledTime}}
              div Who: {{hdr.value.whoAdministered}}
              div Notes: {{hdr.value.comment}}

        tbody
          tr(v-for="row in tableBody")
            td(v-for="cell in row")
              div(:class="marCellStyle(cell)") {{marCellContent(cell)}}
    hr
    div(style="display:none") {{refreshProperty}}
</template>

<script>
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import MarRecord from './MarRecord'
import MarSummary from './mar-summary'
import { MS } from './mar-summary'
import MarHelper from './mar-helper'

export default {
  name: 'MarSummary',
  components: {
    MarRecord
  },
  data () {
    return {
      tableHeader: [],
      tableBody: [],
      marSummary: {}, // helper class
      marHelper: {},
      KEY_MED_ORDER: MS.KEY_MED_ORDER,
      KEY_MAR: MS.KEY_MAR
    }
  },
  props: {
    ehrHelp: { type: Object }
  },
  computed: {
    refreshProperty () {
      // console.log('MarSummary component.refreshProperty()')
      // See EhrPageForm for more on why we have refreshProperty
      this.refresh()
      return this.tableHeader
    }
  },
  methods: {
    marCellContent (cell) {  return this.marSummary.marCellContent(cell) },
    marCellStyle (cell) {  return this.marSummary.marCellStyle(cell) },
    refresh () {
      if(this.ehrHelp){
        let summary = this.marSummary
        let help = this.marHelper
        // console.log('MarSummary component.refresh()')
        summary.summaryRefresh(help.marRecords, help.theMedOrders)
        this.tableHeader = summary.tableHeader
        this.tableBody = summary.tableBody
      }
    }
  },
  created: function () {
    this.marSummary = new MarSummary()
    this.marHelper = new MarHelper(this.ehrHelp)
    const _this = this
    this.refreshEventHandler = function () { _this.refresh() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';
/* Make sure these next class names match those defined in the mar-summary MS constant */
/* MS.CSS_CLASS_MAR */
.administered {
  color:red;
}
/* MS.CSS_CLASS_NO_MAR */
.notApplicable {
  color:blue;
}
/* MS.CSS_CLASS_MED */
.medication {
  color:green;
}

</style>