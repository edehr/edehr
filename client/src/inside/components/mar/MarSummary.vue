<template lang="pug">
  div
    div(v-if="tableBody.length === 0")
      h4 No medications administered
    div(v-else)
      table.mar-summary
        thead
          th
            h4 Medication order
          th(v-for="(cell, index) in tableHeader", :class="tdStyle(cell, index, tableHeader)")
            div Day {{cell.value.day}} - {{cell.value.actualTime}}

        tbody
          tr(v-for="row in tableBody")
            td(v-for="(cell, index) in row", :class="tdStyle(cell, index, row)")
              div(v-if="cell.type ==='medOrder'")
                div {{cell.value.medication}}
                div {{cell.value.dose}}
                div {{cell.value.route}}
                div {{cell.value.reason}}
                div {{cell.value.instructions}}
                div {{cell.value.administration}}
                div {{cell.value.scheduleKey}}
              div(v-if="cell.type ==='mar'")
                div {{cell.value.scheduledTime}}
                div {{cell.value.actualTime}}
                div {{cell.value.whoAdministered}}
                div {{cell.value.comment}}

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
  methods: {
    tdStyle (cell, index, row) {
      // We want to put a break between the days so find when the day changes.
      // This assumes the sort order is largest (newest) day is first.
      let style = ''
      if (index + 1 < row.length) {
        let nextCell = row[index+1]
        let cellDay = cell.value.day
        let nextDay = nextCell.value.day
        // console.log('cellDay nextDay',cellDay, nextDay)
        if (nextDay < cellDay) {
          style = 'dayBreak'
        }
      }
      return style
    },
    refreshContent () {
      if(this.ehrHelp){
        let summary = this.marSummary
        let help = this.marHelper
        help.refreshMarData()
        // console.log('MarSummary component.refresh() helper', help)
        summary.summaryRefresh(help.marRecords, help.theMedOrders)
        // console.log('MarSummary component.refresh()', summary)
        this.tableHeader = summary.tableHeader
        this.tableBody = summary.tableBody
        // console.log('MarSummary component.refresh() summary.tableBody', summary.tableBody)
        // reset the previous day value stored for provide visual day break styles
        this.prevDay = undefined
      }
    }
  },
  created: function () {
    this.marSummary = new MarSummary()
    this.marHelper = new MarHelper(this.ehrHelp)
    const _this = this
    this.refreshEventHandler = function () { _this.refreshContent() }
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

/* MS.CSS_CLASS_NO_MAR */
thead {
  border-bottom: 1px solid $grey80;
}
table.mar-summary {
  margin: 1.25em 0;
}

.notApplicable {
  color: $grey40;
}

.dayBreak {
  border-right: 1px solid black !important;
}
</style>
