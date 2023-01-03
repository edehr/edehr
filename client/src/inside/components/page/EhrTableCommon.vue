
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import { EDIT_DRAFT_ROW_EVENT, TABLE_ACTION_EVENT, VIEW_REPORT_EVENT } from '@/helpers/event-bus'

export default {
  components: {
  },
  inject: [ 'pageDataKey'],
  props: {
    ehrHelp: { type: Object },
    // the ehr helper loads fresh data into the table definition.
    tableDef: { type: Object },
    cTableForm: { type: Object },
    rowTemplate: { type: Array },
    cTableData: { type: Array }
  },
  computed: {
    hasData () { return this.cTableData.length > 0},
  },
  methods: {
    getCellCss: function (cell) {
      return cell.tableCss ? cell.tableCss : 'noClass'
    },
    getCellData: function (cell) {
      let value = cell.value
      let inputType = cell.inputType
      if (inputType === 'date') {
        let mom = moment(value, 'YYYY-MM-DDTHH:mm:ss ZZ')
        if (mom.isValid()) value = formatDateStr(value) //mom.format('DD MMM YYYY')
      }
      return value
    },
    tableAction: function (tableDef, index) {
      EventBus.$emit(TABLE_ACTION_EVENT, tableDef, index)
    },
    editDraft (pageKey, tableKey, rowIndex) {
      EventBus.$emit(EDIT_DRAFT_ROW_EVENT, pageKey, tableKey, rowIndex)
    },
    viewReport (pageKey, tableKey, rowIndex) {
      EventBus.$emit(VIEW_REPORT_EVENT, pageKey, tableKey, rowIndex)
    }
  },
  mounted: function () {
    const _this = this
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
<style lang="scss">
//@import '../../../scss/definitions';
</style>
