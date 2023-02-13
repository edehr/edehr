
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'
import EventBus from '@/helpers/event-bus'
import { TABLE_ACTION_EVENT } from '@/helpers/event-bus'
import StoreHelper from '@/helpers/store-helper'

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
    isSubmitted () { return StoreHelper.isSubmitted() },
    showTableAction () { return this.tableDef.tableAction && !this.isSubmitted }
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
    tableAction: function (sourceTableKey, sourceRowIndex, targetTableKey) {
      EventBus.$emit(TABLE_ACTION_EVENT, sourceTableKey, sourceRowIndex, targetTableKey)
    },
    editDraft (pageKey, tableKey, rowIndex) {
      console.log('edit draft', pageKey, tableKey, rowIndex)
      this.$emit('editDraft', pageKey, tableKey, rowIndex)
    },
    viewReport (pageKey, tableKey, rowIndex) {
      this.$emit('viewReport', pageKey, tableKey, rowIndex)
    }
  }
}
</script>
<style lang="scss">
//@import '../../../scss/definitions';
</style>
