<template lang="pug">
  div(class='ehr-table-table')
    div(v-if="showTableAction", class='aux-table-actions')
      div(                          v-if='isDraft(dRow)') &nbsp;
      ui-button(value="ets-action", v-else,
        v-on:buttonClicked="tableAction(getIdFromRow(dRow))")
        span {{ tableActionLabel(getIdFromRow(dRow)) }} &nbsp;
        fas-icon(icon="notes-medical")
    ui-button(value="ets-view",       v-if="!isDraft(dRow)",
      v-on:buttonClicked="viewReport(getIdFromRow(dRow))", :title='ehrText.viewButtonLabel')
      fas-icon(icon="file-pdf")
    ui-button(value="ets-edit-draft", v-if="isDraft(dRow) && canEdit",
      v-on:buttonClicked="editDraft(getIdFromRow(dRow))", :title='ehrText.resumeButtonLabel')
      fas-icon(icon="edit")
    ui-button(value="ets-edit-row",   v-if="canEditSeed(dRow)",
      v-on:buttonClicked="editSeedRow(getIdFromRow(dRow))", :title='ehrText.editButtonLabel')
      fas-icon(icon="edit")
    ui-button(value="ets-delt-row",   v-if="canEditSeed(dRow)",
      v-on:buttonClicked="deleteSeedRow(getIdFromRow(dRow))", :title='ehrText.deleteButtonLabel')
      fas-icon(icon="trash")
</template>
<script>
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'
import EventBus, { TABLE_ACTION_EVENT } from '@/helpers/event-bus'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'

export default {
  components: { UiButton },
  inject: [ 'pageDataKey', 'tableKey'],
  props: {
    ehrHelp: { type: Object },
    dRow: { type: Array },
    tableDef: { type: Object, default: function () {return {}} }
  },

  computed: {
    canEdit () {
      return this.ehrHelp._canEdit()
    },
    showTableAction () {
      const c1 = this.tableDef.tableActionType === EhrTypes.tableActions.actionTypes.openDialog
      return this.isDevContent ? c1 : c1 && !this.isSubmitted
    },
    ehrText () { return t18EhrText() }
  },
  methods: {
    tableLabel (cell) {
      // the cell contains translation
      return cell.tableLabel
    },
    tableActionLabel (sourceRowId) {
      return EhrTableActions.getTableActionLabel(this.tableDef, sourceRowId)
    },
    isDraft (row) {
      let isDraft = false
      row.forEach( e => {
        if (e.isDraft === 'isDraft') {
          isDraft = true
        }
      })
      return isDraft
    },
    canEditSeed (row) {
      return StoreHelper.isSeedEditing() && ! this.isDraft(row)
    },
    getIdFromRow (dbRow) {
      return dbRow[0].value
    },
    tableAction: function (sourceRowId) {
      // console.log('TABLE ACTION EVENT EMIT', sourceRowId)
      EventBus.$emit(TABLE_ACTION_EVENT, this.tableDef, sourceRowId)
    },
    editDraft (rowId) {
      this.$emit('editDraft', rowId)
    },
    editSeedRow (rowId) {
      this.$emit('editSeedRow', rowId)
    },
    deleteSeedRow (rowId) {
      this.$emit('deleteSeedRow', rowId)
    },
    viewReport (rowId) {
      this.$emit('viewReport', rowId)
    }

  },

}
</script>

<style lang='scss' scoped>
</style>
