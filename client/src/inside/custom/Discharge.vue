// Custom page for Discharge Summary
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
      div(slot="controls", v-show="showPageFormControls")
        ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
    ehr-panel-content
      div(v-for="key in summaries")
        ehr-summary-table(:summaryKey="key", :ehrHelp="ehrHelp")
      hr
      div(class="region ehr-page-content")
        ehr-page-form(v-if="uiProps.hasForm", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey",)
        div(v-if="uiProps.hasTable", v-for="tableDef in uiProps.tables", :key="tableDef.tableKey")
          ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :showTableLabel="showTableLabel")
      div(class="page-update") Page updated: {{ ehrHelp.formatDate(uiProps.generated) }}
    div(style="display:none")
      p This Discharge page is generated.
      p Label: Discharge summary
      p Data Key: dischargeSummary
      p Component name: Discharge
      p Redirect: 
      p Route name: discharge
      p Full path: /ehr/current/discharge
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../../helpers/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'
import EhrSummaryTable from '../components/EhrSummaryTable.vue'
import { ESK_Referrals, ESK_LabReqs, ESK_Procedures, ESK_DischargeProcedures, ESK_Medications, ESK_MARS } from '../../helpers/ehr-summary-table'

export default {
  name: 'Discharge',
  components: {
    EhrSummaryTable,
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrPageTable,
    EhrEditControls
  },
  data: function () {
    return {
      summaries: [ESK_Referrals, ESK_Medications, ESK_MARS, ESK_Procedures, ESK_DischargeProcedures, ESK_LabReqs],
      pageDataKey: 'dischargeSummary',
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    },
    showTableLabel () {
      let tbls = this.uiProps.tables || []
      return tbls.length > 1
    },
    showPageFormControls () {
      return this.ehrHelp.showPageFormControls()
    }
  },
  created () {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>

<style lang="scss" scoped>
.page-update {
  margin-bottom: 5em;
}
</style>
