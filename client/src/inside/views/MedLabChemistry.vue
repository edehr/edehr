// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Med Lab Chemistry page is generated.
      p Label: Med Lab Chemistry
      p Data Key: medLabChemistry
      p Component name: MedLabChemistry
      p Redirect: 
      p Route name: med-lab-chemistry
      p Full path: /ehr/med-lab/med-lab-chemistry
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'MedLabChemistry',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'medLabChemistry',
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
