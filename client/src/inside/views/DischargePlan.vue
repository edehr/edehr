// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Discharge Plan page is generated.
      p Label: Discharge plan
      p Data Key: dishargeplan
      p Component name: DischargePlan
      p Redirect: 
      p Route name: discharge-plan
      p Full path: /ehr/current/discharge-plan
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'DischargePlan',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'dishargeplan',
      ehrHelp: undefined
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrPageHelper(this.pageDataKey)
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
