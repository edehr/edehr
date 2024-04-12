<template lang="pug">
  div(class="ehr-page-table")
    div(class="flow_across menu_space_across")
      h2(v-show="tableLabel") {{tableLabel}}
      div(class="flow_across menu_space_across flow_across_last_item")
        ui-button(v-if="showTableAddButton", value="ept-add", v-on:buttonClicked="showDialog") {{ buttonLabel }}
        ehr-page-context-menu
    div
      ehr-table-table(
        :ehrHelp="ehrHelp",
        :tableDef="tableDef",
        :cTableForm='cTableForm',
        :cTableData='cTableData',
        :rowTemplate='rowTemplate',
        :selectedRow='selectedRow',
        @editDraft='editDraft',
        @editSeedRow='editSeedRow',
        @deleteSeedRow='deleteSeedRow',
        @viewReport='showReport'
      )
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
    div(v-if="canResetTableData", style="text-align: right;") <!-- put the clear button on the far right side -->
      ui-button(value="ept-reset", class="reset-button", v-on:buttonClicked="clearAllData",
        :title="resetToolTip",
        v-bind:secondary="true") Reset
    ui-confirm(ref="confirmDialog", v-on:confirm="proceedClearAllData", saveLabel='Yes')
    ui-confirm(ref="confirmDelete", v-on:confirm="proceedDeleteRow", saveLabel='Yes')

</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrPageContextMenu from '@/inside/components/page/EhrPageContextMenu.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrData from '@/inside/components/page/ehr-data'
import EhrTableDraft from '@/inside/components/page/ehr-table-draft'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import { t18ElementLabel, t18TableAddButtonLabel, t18TableLabel } from '@/helpers/ehr-t18'
import EhrTableTable from '@/inside/components/page/EhrTableTable.vue'
import EhrTypes from '@/ehr-definitions/ehr-types'
export default {
  components: {
    EhrTableTable,
    EhrPageContextMenu,
    EhrDialogForm,
    UiConfirm,
    UiButton
  },
  data: function () {
    return {
      selectedRow: ''
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
      const skipTypes = [EhrTypes.dataInputTypes.ehr_embedded]
      this.tableDef.tableChildren.forEach(key => {
        let cellDef = EhrDefs.getPageChildElement(this.pageDataKey, key)
        if ( ! skipTypes.includes(cellDef.inputType) ) {
          let templateCell = {
            key: key,
            cellDef: cellDef,
            inputType: cellDef.inputType
          }
          templateCell.tableLabel = t18TableLabel(cellDef) || t18ElementLabel(cellDef)
          templateCell.tableSuffix = cellDef.suffixText
          templateCell.tableCss = cellDef.tableCss
          rowTemplate.push(templateCell)
        }
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
          Object.values(dataRow).forEach((cell) => {
            let dbVal = dbRow[cell.key] === 0 ? '0' : dbRow[cell.key]
            dbVal = makeHumanTableCell(this.pageDataKey, cell.key, cell.inputType, dbVal)
            cell.value = dbVal || ''
            cell.tableCss = cell.tableCss
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
    deleteSeedRow (rowId) {
      this.toDeleteRow = rowId
      const TEXT = {
        TITLE: 'Delete row',
        MSG: 'This action will remove the selected row. This can not be undone.'
      }
      this.$refs.confirmDelete.showDialog(TEXT.TITLE, TEXT.MSG)
    },
    proceedDeleteRow () {
      this.ehrHelp.deleteSeedRow(this.toDeleteRow )
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
