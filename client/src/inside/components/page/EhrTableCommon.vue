
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'
import EventBus from '@/helpers/event-bus'
import { TABLE_ACTION_EVENT } from '@/helpers/event-bus'
import StoreHelper from '@/helpers/store-helper'
import EhrTypes from '@/ehr-definitions/ehr-types'

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
    isDevContent () { return StoreHelper.isDevelopingContent() },
    showTableAction () {
      const c1 = this.tableDef.tableActionType === EhrTypes.tableActions.actionTypes.openDialog
      return this.isDevContent ? c1 : c1 && !this.isSubmitted
    }
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
    getIdFromRow (dbRow) {
      return this.getIdFromStack(dbRow[0])
    },
    getIdFromStack (cell) {
      let id = ''
      const stack = cell.stack || []
      const idElement = stack.find( e => e.inputType === 'generatedId')
      id = idElement ? idElement.value : ''
      // console.log('getIdFromStack', cell, idElement, id)
      return id
    },
    tableAction: function (sourceRowId) {
      // console.log('TABLE ACTION EVENT EMIT', sourceRowId)
      EventBus.$emit(TABLE_ACTION_EVENT, this.tableDef, sourceRowId)
    },
    editDraft (rowId) {
      this.$emit('editDraft', rowId)
    },
    viewReport (rowId) {
      this.$emit('viewReport', rowId)
    }
  }
}
</script>
<style lang="scss">
//@import '../../../scss/definitions';
</style>
