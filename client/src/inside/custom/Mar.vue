// Custom page for MAR
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
      div(slot="controls", v-show="showPageFormControls")
        ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page-content")
        mar-tabs(:ehrHelp="ehrHelp")
    div(style="display:none")
      p This is the Mar page
      p Label: MAR
      p Data Key: medAdminRec
      p Component name: Mar
      p Redirect: 
      p Route name: mar
      p Full path: /ehr/current/mar
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../../helpers/ehr-helper'
import MarTabs from '../components/MarTabs'
import { getPageDefinition } from '../../helpers/ehr-defs'

export default {
  name: 'Mar',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrPageTable,
    EhrEditControls,
    MarTabs
  },
  data: function () {
    return {
      pageDataKey: 'medAdminRec',
      theData: {},
      ehrHelp: undefined
    }
  },
  computed: {
    uiProps () {
      return getPageDefinition(this.pageDataKey)
    },
    showPageFormControls () {
      return this.ehrHelp.showPageFormControls()
    }
  },
  methods: {
    controlsCallback (callback) {
      callback(this.theData)
    },
    tableData (tableDef) {
      // console.log('return table data', tableDef.tableKey)
      let td = this.theData[tableDef.tableKey]
      return td
    }
  },
  created () {
    this.ehrHelp = new EhrHelp(this, this.$store, this.pageDataKey, this.uiProps)
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
