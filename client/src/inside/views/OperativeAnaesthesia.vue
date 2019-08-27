// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Operative Anaesthesia page is generated.
      p Label: Operative reports and anaesthesia record
      p Data Key: operationReports
      p Component name: OperativeAnaesthesia
      p Redirect: 
      p Route name: operative-anaesthesia
      p Full path: /ehr/chart/reports/operative-anaesthesia
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import EhrHelp from '../../helpers/ehr-helper'
import EhrHelpV2 from '../components/page/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'OperativeAnaesthesia',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'operationReports',
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      console.log('get ui props for ', this.pageDataKey )
      return getPageDefinition(this.pageDataKey)
    },
    isV2 () {
      return this.$store.state.system.usingV2
    }
  },
  created () {
    let v2 = this.$store.state.system.usingV2
    if (v2) {
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
