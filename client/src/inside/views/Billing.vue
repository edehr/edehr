// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey")
    div(v-else)
      ehr-panel-header {{ uiProps.pageTitle }}
        div(slot="controls", v-show="showPageFormControls")
          ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      ehr-panel-content
        div(class="region ehr-page-content")
          ehr-page-form(v-if="uiProps.hasForm", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey",)
          div(v-if="uiProps.hasTable", v-for="tableDef in uiProps.tables", :key="tableDef.tableKey")
            ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :showTableLabel="showTableLabel")
        div Page updated: {{ ehrHelp.formatDate(uiProps.generated) }}
    div(style="display:none")
      p This Billing page is generated.
      p Label: Billing
      p Data Key: billing
      p Component name: Billing
      p Redirect: 
      p Route name: billing
      p Full path: /ehr/current/billing
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrPage from '../components/page/EhrPage'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../../helpers/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Billing',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPage,
    EhrPageForm,
    EhrPageTable,
    EhrEditControls
  },
  data: function () {
    return {
      pageDataKey: 'billing',
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    },
    isV2 () {
      return this.uiProps.isV2
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

<style lang="scss" scoped></style>
