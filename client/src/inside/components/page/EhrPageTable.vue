<template lang="pug">
  div(class="ehr-page-table")
    div(v-if="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div
      h2(v-show="tableDef.label") {{tableDef.label}}
      ehr-table-vertical(v-if="isVertical", :ehrHelp="ehrHelp", :tableDef="tableDef")
      ehr-table-stacked(v-if="isStacked", :ehrHelp="ehrHelp", :tableDef="tableDef")
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
    div(v-if="hasData")
      ui-button(v-on:buttonClicked="clearAllData", v-bind:secondary="true") Clear all table data
      ui-confirm(ref="confirmDialog", v-on:confirm="proceedClearAllData")

</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrTableStacked from './EhrTableStacked'
import EhrTableVertical from './EhrTableVertical'
import UiButton from '../../../app/ui/UiButton.vue'
import UiConfirm from '../../../app/ui/UiConfirm'
import EventBus from '../../../helpers/event-bus'
import { SHOW_TABLE_DIALOG_EVENT, PAGE_DATA_READY_EVENT } from '../../../helpers/event-bus'
import MarHelper from '../mar/mar-helper'

const TEXT = {
  TITLE:  'Clear table',
  MSG: 'Are you sure you want to delete all the data in the table? This can not be undone.'
}


export default {
  components: {
    EhrTableStacked,
    EhrTableVertical,
    EhrDialogForm,
    UiConfirm,
    UiButton
  },
  data: function () {
    return {
      hasData: false
    }
  },
  inject: [ 'pageDataKey'],
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object, default: function () {return {}} }
  },
  provide () {
    return {
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined
    }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    isVertical () {
      let isVert = this.tableDef.form.formOption === 'transpose'
      // console.log('EhrPageTable is table vertical? ', isVert,  this.tableDef.form.formOption)
      return isVert
    },
    isStacked () {
      return ! this.isVertical
    },
    showTableAddButton () {
      return this.ehrHelp.showTableAddButton()
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableKey)
    }
  },
  methods: {
    showDialog: function () {
      // console.log('EhrPageTable showDialog ', this.tableDef)
      this.ehrHelp.showDialog(this.tableKey)
    },
    clearAllData () {
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    proceedClearAllData () {
      console.log('EhrPageTable clearAllData ', this.tableDef)
      this.ehrHelp.clearTable(this.tableKey)
      const helper = new MarHelper(this.ehrHelp)
      helper.triggerActionByPageKey()      
    },
    refresh () {
      let tableForm = this.ehrHelp.getTable(this.tableKey)
      this.hasData = tableForm.hasData
      // console.log('EhrPageTable refresh ', this.tableKey, this.tableForm)
    }
  },
  mounted: function () {
    const _this = this
    this.showEventHandler = function () {
      _this.showDialog()
    }
    EventBus.$on(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    this.refreshEventHandler = function () {
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.showEventHandler) {
      EventBus.$off(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    }
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
