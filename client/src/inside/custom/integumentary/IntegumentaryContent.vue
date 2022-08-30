// Custom EHR Vue component
<template lang="pug">
  div()
    ehr-panel-content
      div(class="region ehr-page-content")
        tabs
          tab(name="Incision", :selected="true")
            ehr-page-table(:tableDef="tableDef[0]", :ehrHelp="ehrHelp")
            ehr-page-table(:tableDef="tableDef[1]", :ehrHelp="ehrHelp")
          tab(name="Wound")
            ehr-page-table(:tableDef="tableDef[2]", :ehrHelp="ehrHelp")
            ehr-page-table(:tableDef="tableDef[3]", :ehrHelp="ehrHelp")

</template>

<script>
import EhrPanelContent from '@/inside/components/page/EhrPanelContent.vue'
import EhrPageTable from '@/inside/components/page/EhrPageTable'
import EhrDefs from '@/helpers/ehr-defs-grid'
import Tabs from '@/inside/components/Tabs.vue'
import Tab from '@/inside/components/Tab.vue'

export default {
  components: {
    EhrPanelContent,
    EhrPageTable,
    Tabs, Tab
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
