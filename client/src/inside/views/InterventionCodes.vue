// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Intervention Codes page is generated.
      p Label: Intervention codes
      p Data Key: interventionCodes
      p Component name: InterventionCodes
      p Redirect: 
      p Route name: intervention-codes
      p Full path: /ehr/external/intervention-codes
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrHelpV2 from '../components/page/ehr-helper'

export default {
  name: 'InterventionCodes',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'interventionCodes',
      ehrHelp: undefined
    }
  },
  computed: {
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey)
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
