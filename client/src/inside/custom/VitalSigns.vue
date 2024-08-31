// Custom page for Vital Signs
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-content
      tabs
        tab(class='tabContainer', :name="ehrText.tabGraph", :selected="true")
          vital-chart-content(:tableDef="vitalTblDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
        tab(class='tabContainer', :name="ehrText.tabChart")
          ehr-page-table(:tableDef="vitalTblDef", :ehrHelp="ehrHelp")
        tab(class='tabContainer', :name="ehrText.tabGlucoseGraph")
          vital-chart-content(:tableDef="glucoseTblDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
        tab(class='tabContainer', :name="ehrText.tabGlucoseChart")
          ehr-page-table(:tableDef="glucoseTblDef", :ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrPanelContent from '@/inside/components/page/EhrPanelContent.vue'
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrPageHelper from '../components/page/ehr-helper'
import EhrPageTable from '@/inside/components/page/EhrPageTable.vue'
import { t18EhrText } from '@/helpers/ehr-t18'
import Tabs from '@/inside/components/Tabs.vue'
import Tab from '@/inside/components/Tab.vue'
import VitalChartContent from '@/inside/components/chart/VitalChartContent.vue'

export default {
  components: {
    EhrPanelContent,
    EhrPageFooter,
    EhrPageTable,
    Tabs, Tab,
    VitalChartContent
  },
  data: function () {
    return {
      pageDataKey: 'vitals',
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey
    }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.vitals },
    vitalTblDef () {
      let tables = EhrDefs.getPageTables(this.pageDataKey)
      return tables[0]
    },
    glucoseTblDef () {
      let tables = EhrDefs.getPageTables(this.pageDataKey)
      return tables[1]
    }
  },
  created () {
    this.ehrHelp = new EhrPageHelper(this.pageDataKey)
  }
}
</script>

<style lang="scss" scoped></style>
