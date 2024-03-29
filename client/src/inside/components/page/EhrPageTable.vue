<template lang="pug">
  div(class="ehr-page-table")
    div(v-if="showTableAddButton")
      ui-button(value="ept-add", v-on:buttonClicked="showDialog") {{ buttonLabel }}
    div
      h2(v-show="tableLabel") {{tableLabel}}
      ehr-table-vertical(
        v-if="isVertical",
        :ehrHelp="ehrHelp",
        :tableDef="tableDef",
        :cTableForm='cTableForm',
        :cTableData='cTableData',
        :rowTemplate='rowTemplate',
        @editDraft='editDraft',
        @editSeedRow='editSeedRow',
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
        @editSeedRow='editSeedRow',
        @viewReport='showReport'
      )
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
    div(v-if="canResetTableData", style="text-align: right;") <!-- put the clear button on the far right side -->
      ui-button(value="ept-reset", class="reset-button", v-on:buttonClicked="clearAllData",
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
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrData from '@/inside/components/page/ehr-data'
import EhrTableDraft from '@/inside/components/page/ehr-table-draft'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import { t18ElementLabel, t18TableAddButtonLabel, t18TableLabel } from '@/helpers/ehr-t18'
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
    tableLabel () { return t18ElementLabel(this.tableDef)},
    buttonLabel () { return t18TableAddButtonLabel(this.tableDef)},
    canResetTableData () { return this.hasData &&  this.ehrHelp.canResetTableData() },
    hasData () { return this.cTableData.length > 0},
    hasDraft () { return !!EhrTableDraft.getTableDraftRow(this.pageDataKey, this.tableKey)},
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
          templateCell.tableLabel = t18TableLabel(cellDef) || t18ElementLabel(cellDef)
          templateCell.tableSuffix = cellDef.suffixText
          templateCell.tableCss = templateCell.tableCss || cellDef.tableCss
        })
        rowTemplate.push(templateCell)
      })
      return rowTemplate
    },
    // TABLE DATA IS SORTED BY SIM TIME
    tableData () { return EhrData.getMergedTableData(this.pageDataKey, this.tableDef.tableKey) },
    cTableData () { // STACKED TABLE DATA ...
      const dbData = this.tableData
      const tableData = []
      const rowTemplate = this.rowTemplate
      if (dbData) {
        dbData.forEach((dbRow) => {
          let dataRow = JSON.parse(JSON.stringify(rowTemplate)) // deep copy the array
          Object.values(dataRow).forEach((templateCell) => {
            templateCell.stack.forEach((cell) => {
              let dbVal = dbRow[cell.key] === 0 ? '0' : dbRow[cell.key]
              dbVal = makeHumanTableCell( this.pageDataKey,cell.key, cell.inputType, dbVal)
              cell.value = dbVal || ''
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
      return `Reset your ${this.tableLabel} data`
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
      return this.ehrHelp.showTableAddButton() && t18TableAddButtonLabel(this.tableDef) !== 'NONE'
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableKey)
    }
  },
  methods: {
    editDraft (rowId) {
      this.ehrHelp.editDraftRow(rowId)
    },
    editSeedRow (rowId) {
      this.ehrHelp.editSeedRow(rowId)
    },
    showReport (rowId) {
      this.ehrHelp.showReport(rowId)
    },

    showDialog: function () {
      // console.log('EhrPageTable showDialog ', this.tableDef)
      const options = {}
      options.explicitDraftRowOnly = true
      this.ehrHelp.showDialogForTable(this.pageDataKey, this.tableKey, options)
    },
    clearAllData () {
      const TEXT = {
        TITLE:  'Clear ' + this.tableLabel + ' data',
        MSG: 'This action will clear the data you have added to this table. Are you sure you want to delete your data in the table? This can not be undone.'
      }
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    async proceedClearAllData () {
      console.log('EhrPageTable clearAllData ', this.tableDef)
      await this.ehrHelp.clearTable(this.tableKey)
    },
  },
}
</script>

<style lang="scss" scoped>
.reset-button {
  margin-top: 1.5rem;
}
</style>
