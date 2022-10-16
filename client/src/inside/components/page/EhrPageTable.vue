<template lang="pug">
  div(class="ehr-page-table")
    div(v-if="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div
      h2(v-show="tableDef.label") {{tableDef.label}}
      ehr-table-vertical(v-if="isVertical", :ehrHelp="ehrHelp", :tableDef="tableDef")
      ehr-table-stacked(v-if="isStacked", :ehrHelp="ehrHelp", :tableDef="tableDef")
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
    div(v-if="hasData", style="text-align: right;") <!-- put the clear button on the far right side -->
      ui-button(class="reset-button",v-on:buttonClicked="clearAllData",
        :title="resetToolTip",
        v-bind:secondary="true") Reset
    ui-confirm(ref="confirmDialog", v-on:confirm="proceedClearAllData", saveLabel='Yes')

</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrTableStacked from './EhrTableStacked'
import EhrTableVertical from './EhrTableVertical'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm'
import EventBus from '@/helpers/event-bus'
import { SHOW_TABLE_DIALOG_EVENT, PAGE_DATA_READY_EVENT, VIEW_REPORT_EVENT } from '@/helpers/event-bus'
import MarHelper from '../mar/mar-helper'

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
      formKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    tableKey () {
      return this.tableDef.tableKey
    },
    resetToolTip () {
      return `Reset your ${this.tableDef.label} data`
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
      return this.ehrHelp.showTableAddButton() && this.tableDef.addButtonText !== 'NONE'
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
      const TEXT = {
        TITLE:  'Clear ' + this.tableDef.label + ' data',
        MSG: 'This action will clear the data you have added to this table. Are you sure you want to delete your data in the table? This can not be undone.'
      }
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
      // console.log('EhrPageTable refresh ', this.tableKey, tableForm)
    }
  },
  mounted: function () {
    const _this = this
    this.showEventHandler = function () {
      _this.showDialog()
    }
    this.refreshEventHandler = function () {
      _this.refresh()
    }
    this.viewReportEventHandler = function (pageKey, tableKey, rowIndex) {
      _this.ehrHelp.showReport(pageKey, tableKey, rowIndex)
    }
    EventBus.$on(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    EventBus.$on(VIEW_REPORT_EVENT, this.viewReportEventHandler)
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.showEventHandler) {
      EventBus.$off(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    }
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    }
    if (this.viewReportEventHandler) {
      EventBus.$off(VIEW_REPORT_EVENT, this.viewReportEventHandler)
    }

  }
}
</script>

<style lang="scss" scoped>
.reset-button {
  margin-top: 1.5rem;
}
</style>
