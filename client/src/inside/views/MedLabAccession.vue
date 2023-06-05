// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Med Lab Accession page is generated.
      p Label: Med Lab Accessioning
      p Data Key: medLabAccession
      p Component name: MedLabAccession
      p Redirect: 
      p Route name: med-lab-accession
      p Full path: /ehr/med-lab/med-lab-accession
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'MedLabAccession',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'medLabAccession',
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
