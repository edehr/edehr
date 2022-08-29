// Custom page for MAR
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-content
      mar-tabs(:ehrHelp="ehrHelp")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelContent from '../components/page/EhrPanelContent.vue'
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrHelp from '../components/page/ehr-helper'
import MarTabs from '../components/mar/MarTabs'
import EhrDefs from '../../helpers/ehr-defs-grid'

export default {
  name: 'Mar',
  components: {
    EhrPanelContent,
    MarTabs,
    EhrPageFooter
  },
  data: function () {
    return {
      pageDataKey: 'medAdminRec',
      theData: {},
      ehrHelp: undefined
    }
  },
  computed: {
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
    }
  },
  created () {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  }
}
</script>

<style lang="scss" scoped></style>
