// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Musculoskeletal page is generated.
      p Label: Musculoskeletal assessment
      p Data Key: musculoskeletal
      p Component name: Musculoskeletal
      p Redirect: 
      p Route name: musculoskeletal
      p Full path: /ehr/current/assessments/musculoskeletal
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'Musculoskeletal',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'musculoskeletal',
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
