// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
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
      p This Care Plan page is generated.
      p Label: Interprofessional plan of care
      p Data Key: carePlan
      p Component name: CarePlan
      p Redirect: 
      p Route name: care-plan
      p Full path: /ehr/chart/care-plan
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../../helpers/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'CarePlan',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrPageTable,
    EhrEditControls
  },
  data: function () {
    return {
      pageDataKey: 'carePlan',
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

<style lang="scss" scoped></style>
