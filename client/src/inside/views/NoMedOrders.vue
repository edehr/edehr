// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This No Med Orders page is generated.
      p Label: Non-medication orders
      p Data Key: nonmedOrders
      p Component name: NoMedOrders
      p Redirect: 
      p Route name: no-med-orders
      p Full path: /ehr/current/orders/no-med-orders
</template>

<script>
import EhrPage from '../components/page/EhrPage'
import EhrPageHelper from '../components/page/ehr-helper'

export default {
  name: 'NoMedOrders',
  components: { EhrPage },
  data: function () {
    return {
      pageDataKey: 'nonmedOrders',
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
