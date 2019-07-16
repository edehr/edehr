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
    div(style="display:none") {{currentData}}
    div(style="display:none") PAGE DATA:
      div summaryKey {{ summaryKey }}
      div summary {{ summary }}
      div tableColumns {{ tableColumns }}
      div tableData { { tableData }}
</template>

<script>
import moment from 'moment'
import EhrSummaryHelp from '../../helpers/ehr-summary-table'
import { formatDateStr } from '../../helpers/ehr-utills'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'EhrSummaryTable',
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
    currentData () {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      this.load()
      // console.log('EHR Page Form: page current data', this.theData)
      return this.tableData
    }
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
      let helper = new EhrSummaryHelp(this.summaryKey, this.ehrHelp)
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

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-summary-table {
}
</style>
