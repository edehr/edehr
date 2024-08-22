// Now a Custom file to support the bar code printing
<template lang="pug">
  div(class="ehr-page")
    ehr-page(:pageDataKey="pageDataKey", :ehrHelp="ehrHelp")
    div(style="display:none")
      p This Med Lab Accession page is custom.
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
import EventBus, { TABLE_ACTION_EVENT } from '@/helpers/event-bus'
import EhrTypes from '@/ehr-definitions/ehr-types'

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
  mounted: function () {
    /*
    TABLE_ACTION_EVENT comes from a table inside one of the page tables.
    In this context we open the print accessioning page
     */
    this.showEventHandler = function (sendersTableDef, sourceRowId) {
      let url = window.location.origin + '/accessioning-print?rowId=' + sourceRowId
      if (sendersTableDef.tableActionType === EhrTypes.tableActions.actionTypes.printBarCode) {
        // console.log('go to url:', url)
        window.open(url, '_blank')
      } else {
        console.error('Unexpected table action in MedLabAccession component')
      }
    }
    EventBus.$on(TABLE_ACTION_EVENT, this.showEventHandler)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(this.pageDataKey)
    if (this.showEventHandler) {
      EventBus.$off(TABLE_ACTION_EVENT, this.showEventHandler)
    }
  }
}
</script>
