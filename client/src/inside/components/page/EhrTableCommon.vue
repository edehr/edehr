
<script>
import moment from 'moment'
import { formatDateStr } from '@/helpers/ehr-utils'
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '@/helpers/event-bus'

export default {
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
    tableDef: { type: Object },
  },
  computed: {
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
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    }
  }
}
</script>
<style lang="scss">
//@import '../../../scss/definitions';
</style>