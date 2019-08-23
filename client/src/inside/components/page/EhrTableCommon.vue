
<script>
import moment from 'moment'
import { formatDateStr } from '../../../helpers/ehr-utils'
import EventBus from '../../../helpers/event-bus'
import { TABLE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'

export default {
  name: 'EhrCommonTable',
  components: {
  },
  data: function () {
    return {
    }
  },
  inject: [ 'pageDataKey'],
  props: {
    ehrHelp: { type: Object },
    // the ehr helper loads fresh data into the table definition.
    tableDef: { type: Object }
  },
  computed: {
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
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('receive TABLE_DATA_REFRESH_EVENT')
      _this.refresh()
    }
    EventBus.$on(TABLE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(TABLE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>
<style lang="scss">
//@import '../../../scss/definitions';
</style>