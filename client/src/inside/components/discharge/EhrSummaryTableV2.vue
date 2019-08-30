<template lang="pug">
  div(class="ehr-summary-table")
    h2 {{summaryTitle}}
    div(v-show="!hasData") Not Applicable
    table(v-show="hasData")
      thead
        tr
          th(v-for="column in tableColumns", :title="column.label")
            span(v-html="column.label")
      tbody
        tr(v-for="rowData in tableData")
          td(v-for="column in tableColumns", :class="column.tableCss")
            div(v-html="tableCellData(rowData, column)")
</template>

<script>
import moment from 'moment'
import EhrSummaryHelpV2 from './ehr-summary-tableV2'
import { formatDateStr } from '../../../helpers/ehr-utils'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'

export default {
  components: {
  },
  data: function () {
    return {
      tableData: [],
      tableColumns: [],
      summaryTitle: 'placeholder title',
      summary: {}
    }
  },
  props: {
    summaryKey: { type: String },
    ehrHelp: { type: Object },
  },
  computed: {
    hasData () {
      return this.tableData.length > 0
    },
  },
  methods: {
    tableCellData: function (rowData, column) {
      let value = rowData[column.elementKey]
      if (column.inputType === 'date') {
        let mom = moment(value, 'YYYY-MM-DDTHH:mm:ss ZZ')
        if (mom.isValid()) value = formatDateStr(value)
      }
      if (column.inputType === 'fieldset') {
        value = value.replace(/, /g,'<br>')
      }
      return value
    },
    load () {
      let helper = new EhrSummaryHelpV2(this.summaryKey, this.ehrHelp)
      this.summary = helper.getSummary()
      this.tableColumns = this.summary.tableColumns
      this.tableData = this.summary.tableData
    }
  },
  mounted: function () {
    const _this = this
    this.summaryTitle = this.summaryKey
    this.refreshEventHandler = function () {
      _this.load()
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

