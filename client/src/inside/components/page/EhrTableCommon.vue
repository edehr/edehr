
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'
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
      return dbRow[0].value
    },
    editDraft (rowId) {
      this.$emit('editDraft', rowId)
    },
    editSeedRow (rowId) {
      this.$emit('editSeedRow', rowId)
    },
    deleteSeedRow (rowId) {
      this.$emit('deleteSeedRow', rowId)
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
