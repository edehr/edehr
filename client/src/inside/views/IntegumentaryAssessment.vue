// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Integumentary Assessment page is generated.
      p Label: Integumentary assessment
      p Data Key: integumentaryAssessment
      p Component name: IntegumentaryAssessment
      p Redirect: 
      p Route name: integumentary-assessment
      p Full path: /ehr/current/assessments/integumentary-assessment
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrHelpV2 from '../components/page/ehr-helper'

export default {
  name: 'IntegumentaryAssessment',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'integumentaryAssessment',
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
