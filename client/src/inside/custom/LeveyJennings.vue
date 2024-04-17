// Custom Levey Jennings page
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-content
       l-j-tabs(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :tableDef='tableDef')
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrPageHelper from '../components/page/ehr-helper'
import EhrPanelContent from '@/inside/components/page/EhrPanelContent.vue'
import LJTabs from './levey-jennings/LJTabs.vue'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
const PAGE_KEY = 'leveyJennings'
const TABLE_KEY = 'tableLJ'


export default {
  components: { EhrPanelContent, EhrPageFooter, LJTabs },
  data: function () {
    return {
      pageDataKey: PAGE_KEY,
      tableKey: TABLE_KEY,
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      pageDataKey: PAGE_KEY
    }
  },

  computed: {
    tableDef () {
      const tableDefs = EhrDefs.getPageTables(this.pageDataKey)
      return tableDefs.find( td => td.elementKey === this.tableKey)
    },
  },
  created () {
    this.ehrHelp = new EhrPageHelper(this.pageDataKey)
  },
  // must declare beforeRouteLeave on the component that is routed
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>
<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
