<template lang="pug">
div
  div(v-if="showTableAction", class='aux-table-actions')
    div(                          v-if='isDraft(dRow)') &nbsp;
    ui-button(value="ets-action", v-else,
      v-on:buttonClicked="tableAction(rowId)")
      span {{ tableActionLabel(rowId) }} &nbsp;
      fas-icon(icon="notes-medical")
  ui-button(value="ets-view",       v-if="!isDraft(dRow)",
    v-on:buttonClicked="viewReport(rowId)", :title='ehrText.viewButtonLabel')
    fas-icon(icon="file-pdf")
  ui-button(value="ets-edit-draft", v-if="isDraft(dRow) && canEdit",
    v-on:buttonClicked="editDraft(rowId)", :title='ehrText.resumeButtonLabel')
    fas-icon(icon="edit")
  ui-button(value="ets-edit-row",   v-if="canEditSeed(dRow)",
    v-on:buttonClicked="editSeedRow(rowId)", :title='ehrText.editButtonLabel')
    fas-icon(icon="edit")
  ui-button(value="ets-delt-row",   v-if="canEditSeed(dRow)",
    v-on:buttonClicked="deleteSeedRow(rowId)", :title='ehrText.deleteButtonLabel')
    fas-icon(icon="trash")
</template>
<script>
import UiButton from '@/app/ui/UiButton'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  components: { UiButton },
  computed: {
    ehrText () { return t18EhrText() }
  },
  props: {
    rowId: { type: String },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false }
  },

}
</script>

<style lang='scss' scoped>
.table-actions > button {
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
<style>
.table-actions .button .svg-inline--fa {
  min-width: 1.2rem !important;
}
</style>
