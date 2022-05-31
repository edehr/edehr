// Custom EHR Vue component
<template lang="pug">
  ehr-panel-content
    ehr-page-table(:tableDef="tableCbc", :ehrHelp="ehrHelp")
    ehr-page-table(:tableDef="tablePbf", :ehrHelp="ehrHelp")
</template>

<script>
import EhrPanelContent from '@/inside/components/page/EhrPanelContent.vue'
import EhrPageTable from '@/inside/components/page/EhrPageTable'
import EhrDefs from '@/helpers/ehr-defs-grid'
import EventBus, { TABLE_ACTION_EVENT } from '@/helpers/event-bus'

export default {
  components: {
    EhrPanelContent,
    EhrPageTable
  },
  data: function () {
    return {
    }
  },
  props: {
    ehrHelp: {type: Object},
    pageDataKey: { type: String }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    pageDef () {
      return this.ehrHelp.getPageDef(this.pageDataKey)
    },
    tableDef () {
      return EhrDefs.getPageTables(this.pageDataKey)
    },
    tableCbc () { return this.tableDef[0]},
    tablePbf () { return this.tableDef[1]},
  },
  mounted: function () {
    const _this = this
    this.showEventHandler = function (tableDef, index) {
      const tablePbf = _this.tablePbf
      const tableKey = tablePbf.tableKey
      _this.ehrHelp.showDialog(tableKey, {tableActionRowIndex: index})
    }
    EventBus.$on(TABLE_ACTION_EVENT, this.showEventHandler)
  },
  beforeDestroy: function () {
    if (this.showEventHandler) {
      EventBus.$off(TABLE_ACTION_EVENT, this.showEventHandler)
    }
  }

}
</script>

<style lang="scss" scoped></style>
