
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'

export default {
  props: {
    ehrHelp: { type: Object },
    // the ehr helper loads fresh data into the table definition.
    tableDef: { type: Object }
  },
  methods: {
    getCellCss: function (cell) {
      return cell.tableCss ? cell.tableCss : 'noClass'
    },
    getCellData: function (cell) {
      let value = cell.value
      let cellDef = cell.cellDef
      if (cellDef.inputType === 'date') {
        let mom = moment(value, 'YYYY-MM-DDTHH:mm:ss ZZ')
        if (mom.isValid()) value = formatDateStr(value) //mom.format('DD MMM YYYY')
      }
      return value
    },
  }
}
</script>
