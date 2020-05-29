// Custom page for Discharge Summary
<template lang="pug">
  div()
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      ehr-page-element(:key="leadElement.pageDataKey", :element="leadElement", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      div(v-for="key in summaries")
        ehr-summary-table(:summaryKey="key", :ehrHelp="ehrHelp")
        hr
      ehr-page-element(v-for="element in trailingElements", :key="element.pageDataKey", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

</template>

<script>
import EhrPanelHeader from '../page/EhrPanelHeader.vue'
import EhrPanelContent from '../page/EhrPanelContent.vue'
import EhrPageElement from '../page/EhrPageElement'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EhrSummaryTable from './EhrSummaryTableV2'
import { ESK_Referrals, ESK_LabReqs, ESK_Procedures, ESK_DischargeProcedures, ESK_Medications, ESK_MARS } from './ehr-summary-tableV2'

export default {
  components: {
    EhrSummaryTable,
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageElement
  },
  data: function () {
    return {
      summaries: [ESK_Procedures, ESK_MARS, ESK_Medications, ESK_DischargeProcedures, ESK_LabReqs, ESK_Referrals],
    }
  },
  inject: [ 'pageDataKey'],
  props: { ehrHelp: { type: Object } },
  computed: {
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
    leadElement () {
      const pe = EhrDefs.getPageElements(this.pageDataKey)
      let arr = Object.keys(pe).map((k) => pe[k])
      return arr[0]
    },
    trailingElements () {
      const pe = EhrDefs.getPageElements(this.pageDataKey)
      let arr = Object.keys(pe).map((k) => pe[k])
      arr.shift()
      return arr
    },
    pageElements () {
      const pe = EhrDefs.getPageElements(this.pageDataKey)
      let arr = Object.keys(pe).map((k) => pe[k])
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-update {
    margin-bottom: 5em;
  }
</style>
