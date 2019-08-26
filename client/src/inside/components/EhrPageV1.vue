<template lang="pug">
  div
    ehr-panel-header {{ uiProps.pageTitle }}
      v2-control(slot="controls")
      <!--div(slot="controls", v-show="showPageFormControls")-->
        <!--ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")-->
    ehr-panel-content
      div(class="region ehr-page-content")
        ehr-page-form(v-if="uiProps.hasForm", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey",)
        div(v-if="uiProps.hasTable", v-for="tableDef in uiProps.tables", :key="tableDef.tableKey")
          ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :showTableLabel="showTableLabel")
      div Page updated: {{ ehrHelp.formatDate(uiProps.generated) }}
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import V2Control from './page/V2Control'

import EhrPageTable from '../components/EhrPageTable'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../../helpers/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'EhrPageV1',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrPageTable,
    V2Control,
    EhrEditControls
  },
  data: function () {
    return {
      ehrHelp: undefined
    }
  },
  props: {
    pageDataKey: { type: String }
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

