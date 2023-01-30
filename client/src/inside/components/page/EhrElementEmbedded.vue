<template lang='pug'>
  div(class="embedded-data")
    div eeemb inputval: {{ inputVal }}
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
      refRow: ''
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
      // The ref contains pageKey.tableKey.rowIndex
      this.refRow = refValue.split('.')[2]
      // we could use the refValue to get the refPage and/or the refTable but we have these from properties
      // Get the data from the page's table's row
      const rowData = EhrData.getTableRowData(this.refPage, this.refTable, this.refRow)
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
      // TODO do we need to send the table key?
      // eData.tableKey=this.refTable
      // sending true in the value to indicate this is a dialog open event.  Later another event
      // is emitted when the dialog is to be closed. In that case we send a value with false.
      // eData.open = true
      eData = Object.assign(eData, options)
      const _this = this
      // console.log('segd emit channel',
      //   _this.ehrHelp.getDialogEventChannel(_this.refTable),
      //   'eData:', JSON.stringify(eData))
      Vue.nextTick(function () {
        EventBus.$emit(_this.ehrHelp.getDialogEventChannel(_this.refTable), eData)
      })
    }
  }}
</script>

