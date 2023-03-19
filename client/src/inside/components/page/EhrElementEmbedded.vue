<template lang='pug'>
  div(class="embedded-data")
    ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", viewOnly=true)
</template>

<script>
import Vue from 'vue'
import EventBus from '@/helpers/event-bus'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrElementCommon from '@/inside/components/page/EhrElementCommon'
import EhrData from '@/inside/components/page/ehr-data'

export default {
  name: 'EhrElementEmbedded', // need to declare name
  components: {
    // dynamic import because this is a recursive inclusion. If we use the normal import at the script level we get
    // Unknown custom element: <ehr-group> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
    EhrGroup: () => import('@/inside/components/page/EhrGroup')
  },
  extends: EhrElementCommon,
  props: {},
  provide () {
    return {
      pageDataKey: this.refPage,
      isPageElement: false,
      isTableElement: true,
      tableKey: this.refTable,
      formKey: undefined,
      isEmbedded: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    embeddedRef () {
      return this.element.embedRef
    },
    parts () {
      return this.embeddedRef.split('.')
    },
    refPage () {
      return this.parts[0]
    },
    refTable () {
      return this.parts[1]
    },
    groups () {
      let grps = []
      if (this.refPage) {
        const pageTables = EhrDefs.getPageTables(this.refPage)
        const refTable = pageTables.find(element => element.tableKey === this.refTable)
        grps = refTable.form ? refTable.form.ehr_groups : []
      }
      return grps
    }
  },
  methods: {
    /**
     * When a table dialog is opened a event is fired and received by the dialog itself and each
     * form element. These handle the event in the EhrElementCommon.dialogEvent method. When this
     * handler belongs to an embedded element (e.g. a display of table data from a different table)
     * the embedded element invokes this setEmbeddedGroupData method.  This method loads the referenced
     * table data into the current form and then fires an open event that will be recieved by the
     * elements inside the embedded table. The dialog for the referenced table also gets this
     * event but it won't do anything because it can tell the event is coming from an embedded element.
     * Invoked by the dialogEvent handler of the embedded element that is
     * @param refValue
     */
    setEmbeddedGroupData (refValue) {
      // The refValue contains a row id e.g. pageKey.tableKey.rowNum
      const rowData = EhrData.getTableRowData(refValue)
      const options = {}
      // stuff the data from the source table row into the inputs. This will be picked up
      // when the channel event is emitted for the referenced table
      options.inputs = rowData
      options.open = true
      // tell the form fragment to not allow edits
      options.viewOnly = true
      let eData = {}
      // When we send the channel event two things happen: (1) the dialog associated with the referenced
      // table is opened and (2) the content of the form fragment is loaded.  We don't want the
      // first thing to happen so include "isEmbedded: true" in the eData. Then the dialog itself
      // can skip the dialog open.
      eData.isEmbedded= true
      eData = Object.assign(eData, options)
      const _this = this
      Vue.nextTick(function () {
        EventBus.$emit(_this.ehrHelp.getDialogEventChannel(_this.refTable), eData)
      })
    }
  }}
</script>

