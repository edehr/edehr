// Custom EHR Vue component
<template lang="pug">
  div()
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      div(class="region ehr-page-content")
        ehr-page-table(:tableDef="tableDef[0]", :ehrHelp="ehrHelp")
        ehr-page-table(:tableDef="tableDef[1]", :ehrHelp="ehrHelp")
</template>

<script>
import EhrPanelHeader from '@/inside/components/page/EhrPanelHeader.vue'
import EhrPanelContent from '@/inside/components/page/EhrPanelContent.vue'
import EhrPageTable from '@/inside/components/page/EhrPageTable'
import EhrDefs from '@/helpers/ehr-defs-grid'

export default {
  components: {
    EhrPanelHeader,
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
    }
  },
  computed: {
    pageDef () {
      return this.ehrHelp.getPageDef(this.pageDataKey)
    },
    tableDef () {
      let tables = EhrDefs.getPageTables(this.pageDataKey)
      // console.log('Vitals2 looking at tables', tables)
      return tables
    },

  }
}
</script>

<style lang="scss" scoped></style>
