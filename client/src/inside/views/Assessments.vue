// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Assessments page is generated.
      p Label: Assessments
      p Data Key: undefined
      p Component name: Assessments
      p Redirect: neurological
      p Route name: assessments
      p Full path: /ehr/current/assessments
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrHelpV2 from '../components/page/ehr-helper'

export default {
  name: 'Assessments',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'undefined',
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
