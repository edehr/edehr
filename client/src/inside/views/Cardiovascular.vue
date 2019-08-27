// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    div(v-if="isV2")
      ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(v-else)
      ehr-page-v1(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Cardiovascular page is generated.
      p Label: Cardiovascular
      p Data Key: cardiovascular
      p Component name: Cardiovascular
      p Redirect: 
      p Route name: cardiovascular
      p Full path: /ehr/current/assessments/cardiovascular
</template>

<script>
import EhrPageV1 from '../components/EhrPageV1'
import EhrPage from '../components/page/EhrPage'
import EhrHelp from '../../helpers/ehr-helper'
import EhrHelpV2 from '../components/page/ehr-helper'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Cardiovascular',
  components: { EhrPage, EhrPageV1 },
  data: function () {
    return {
      pageDataKey: 'cardiovascular',
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
