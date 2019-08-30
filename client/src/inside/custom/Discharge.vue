// Custom page for Discharge Summary
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      discharge-v2(:ehrHelp="ehrHelp")
    div(v-else)
      discharge-v1(:ehrHelp="ehrHelp")
    div(style="display:none")
      p This Discharge page customized
      p Label: Discharge summary
      p Data Key: dischargeSummary
      p Component name: Discharge
      p Redirect: 
      p Route name: discharge
      p Full path: /ehr/current/discharge
</template>

<script>
import EhrHelp from '../../helpers/ehr-helper'
import EhrHelpV2 from '../components/page/ehr-helper'
import EhrDefs from '../../helpers/ehr-defs-grid'
import DischargeV1 from './DischargeV1'
import DischargeV2 from '../components/discharge/DischargeV2'

export default {
  name: 'Discharge',
  components: {
    DischargeV1,
    DischargeV2
  },
  data: function () {
    return {
      pageDataKey: 'dischargeSummary',
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
    }
  },
  computed: {
    isV2 () {
      return EhrDefs.isPageV2(this.pageDataKey)
    }
  },
  created () {
    if (this.isV2) {
      this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey)
    } else {
      this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey)
    }
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>
