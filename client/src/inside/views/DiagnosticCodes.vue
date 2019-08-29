// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Diagnostic Codes page is generated.
      p Label: Diagnostic codes (ICD-10)
      p Data Key: diagnosticCodes
      p Component name: DiagnosticCodes
      p Redirect: 
      p Route name: diagnostic-codes
      p Full path: /ehr/external/diagnostic-codes
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import EhrHelp from '../../helpers/ehr-helper'
import EhrHelpV2 from '../components/page/ehr-helper'
import EhrDefs from '../../helpers/ehr-defs-grid'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'DiagnosticCodes',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'diagnosticCodes',
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    },
    isV2 () {
      return EhrDefs.isPageV2(this.pageDataKey)
    }
  },
  created () {
    if (this.isV2) {
      this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey, this.uiProps)
    } else {
      this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
    }
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

<style lang="scss" scoped></style>
