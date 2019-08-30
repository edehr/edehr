// Custom page for Discharge Summary
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ pageDef.pageTitle }}
      v2-control(slot="controls")
    ehr-panel-content
      div(v-for="key in summaries")
        ehr-summary-table(:summaryKey="key", :ehrHelp="ehrHelp")
        hr
      ehr-page-element(v-for="element in pageElements", :key="element.pageDataKey", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    div(class="assignment-save")
      div Page updated: {{ ehrHelp.getPageGeneratedDate() }}
      div Assignment last saved: {{ ehrHelp.getLastPageDataUpdateDate() }}
</template>

<script>
import EhrPanelHeader from '../EhrPanelHeader.vue'
import EhrPanelContent from '../EhrPanelContent.vue'
import V2Control from '../page/V2Control'
import EhrPageElement from '../page/EhrPageElement'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import EhrSummaryTable from './EhrSummaryTableV2'
import { ESK_Referrals, ESK_LabReqs, ESK_Procedures, ESK_DischargeProcedures, ESK_Medications, ESK_MARS } from './ehr-summary-tableV2'

export default {
  components: {
    EhrSummaryTable,
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageElement,
    V2Control
  },
  data: function () {
    return {
      summaries: [ESK_Referrals, ESK_Medications, ESK_MARS, ESK_Procedures, ESK_DischargeProcedures, ESK_LabReqs],
    }
  },
  inject: [ 'pageDataKey'],
  props: { ehrHelp: { type: Object } },
  computed: {
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
    pageElements () {
      return EhrDefs.getPageElements(this.pageDataKey)
    },
  },
  mounted: function () {
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
}
</script>

<style lang="scss" scoped>
  .page-update {
    margin-bottom: 5em;
  }
</style>
