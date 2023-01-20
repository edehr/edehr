<template lang="pug">
  div(class="ehr-page-table")
    div(v-if="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div
      h2(v-show="tableDef.label") {{tableDef.label}}
      ehr-table-vertical(
        v-if="isVertical",
        :ehrHelp="ehrHelp",
        :tableDef="tableDef",
        :cTableForm='cTableForm',
        :cTableData='cTableData',
        :rowTemplate='rowTemplate',
        @editDraft='editDraft',
        @viewReport='showReport'
      )
      ehr-table-stacked(
        v-if="isStacked",
        :ehrHelp="ehrHelp",
        :tableDef="tableDef",
        :cTableForm='cTableForm',
        :cTableData='cTableData',
        :rowTemplate='rowTemplate',
        @editDraft='editDraft',
        @viewReport='showReport'
      )
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
    div(v-if="hasData", style="text-align: right;") <!-- put the clear button on the far right side -->
      ui-button(class="reset-button", v-on:buttonClicked="clearAllData",
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
import MarHelper from '../mar/mar-helper'
import EhrDefs from '@/helpers/ehr-defs-grid'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EhrCheckset from '@/ehr-definitions/ehr-checkset'

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
    hasData () { return this.cTableData.length > 0},
    cTableForm () { return this.ehrHelp.getTableForm(this.tableDef.tableKey) },
    rowTemplate () {
      let rowTemplate = []
      this.tableDef.ehr_list.forEach(stack => {
        let templateCell = {
          stack: []
        }
        stack.items.forEach(cell => {
          let cellDef = EhrDefs.getPageChildElement(this.pageDataKey, cell)
          templateCell.stack.push({
            key: cell,
            inputType: cellDef.inputType
          })
          // column header .. use previous label if set else use special tableLabel value from Inputs else use element label
          templateCell.tableLabel = templateCell.tableLabel || cellDef.tableLabel || cellDef.label
          templateCell.tableCss = templateCell.tableCss || cellDef.tableCss
        })
        rowTemplate.push(templateCell)
      })
      return rowTemplate
    },
    cTableData () {
      const pageDataKey = this.pageDataKey
      const tableKey = this.tableDef.tableKey
      const thePageData = this.ehrHelp.getMergedPageData()
      const dbData = thePageData[tableKey]
      const tableData = []
      const rowTemplate = this.rowTemplate
      if (dbData) {
        dbData.forEach((dbRow) => {
          let dataRow = JSON.parse(JSON.stringify(rowTemplate)) // deep copy the array
          Object.values(dataRow).forEach((templateCell) => {
            templateCell.stack.forEach((cell) => {
              let val = dbRow[cell.key] === 0 ? '0' : dbRow[cell.key]
              if (cell.inputType === EhrTypes.dataInputTypes.checkset) {
                val = EhrCheckset.makeHuman(val, pageDataKey, cell)
              }
              cell.value = val || ''
              cell.tableCss = templateCell.tableCss
            })
          })
          if (dbRow.isDraft) {
            dataRow.push({ isDraft: dbRow.isDraft })
          }
          tableData.push(dataRow)
        })
      }
      return tableData
    },

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
    editDraft (pageKey, tableKey, rowIndex) {
      this.ehrHelp.editDraftRow(pageKey, tableKey, rowIndex)
    },
    showReport (pageKey, tableKey, rowIndex) {
      this.ehrHelp.showReport(pageKey, tableKey, rowIndex)
    },

    showDialog: function () {
      // console.log('EhrPageTable showDialog ', this.tableDef)
      this.ehrHelp.showDialogForTable(this.tableKey, {})
    },
    clearAllData () {
      const TEXT = {
        TITLE:  'Clear ' + this.tableDef.label + ' data',
        MSG: 'This action will clear the data you have added to this table. Are you sure you want to delete your data in the table? This can not be undone.'
      }
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    async proceedClearAllData () {
      console.log('EhrPageTable clearAllData ', this.tableDef)
      await this.ehrHelp.clearTable(this.tableKey)
      const helper = new MarHelper(this.ehrHelp)
      helper.triggerActionByPageKey()
    },
  },
}
</script>

<style lang="scss" scoped>
.reset-button {
  margin-top: 1.5rem;
}
</style>
