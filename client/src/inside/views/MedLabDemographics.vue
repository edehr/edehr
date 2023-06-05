// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Med Lab Demographics page is generated.
      p Label: Med Lab Demographics
      p Data Key: medLabDemographics
      p Component name: MedLabDemographics
      p Redirect: 
      p Route name: med-lab-demographics
      p Full path: /ehr/med-lab/med-lab-demographics
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'MedLabDemographics',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'medLabDemographics',
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
