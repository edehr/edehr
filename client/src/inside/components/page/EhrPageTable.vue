<template lang="pug">
  div(class="ehr-page-table") EPT pk {{pageDataKey}}
    div(v-if="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div(v-if="isVertical", class="column_table")
      ehr-table-vertical(:ehrHelp="ehrHelp", :tableDef="tableDef")
    div(v-if="isStacked", class="stacked_table")
      h2(v-show="tableDef.label") {{tableDef.label}}
      ehr-table-stacked(:ehrHelp="ehrHelp", :tableDef="tableDef")
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )
</template>

<script>
import EhrDialogForm from './EhrDialogForm.vue'
import EhrTableStacked from './EhrTableStacked'
import EhrTableVertical from './EhrTableVertical'
import UiButton from '../../../app/ui/UiButton.vue'
import EventBus from '../../../helpers/event-bus'
import { SHOW_TABLE_DIALOG_EVENT } from '../../../helpers/event-bus'


export default {
  name: 'EhrPageTable',
  components: {
    EhrTableStacked,
    EhrTableVertical,
    EhrDialogForm,
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
      isTableElement: true,
    }
  },
  computed: {
    isVertical () {
      return this.tableDef.isTransposed
    },
    isStacked () {
      return true // TODO this.tableDef.isStacked
    },
    showTableAddButton () {
      return true // TODO this.ehrHelp.showTableAddButton()
    },
    tableForm () {
      let form = this.tableDef.tableForm
      // console.log('EhrPageTable get table form', this.tableDef)
      return form
    },
    errorList () {
      return this.ehrHelp.getErrorList(this.tableDef.tableKey)
    }
  },
  methods: {
    showDialog: function () {
      // console.log('EhrPageTable showDialog ', this.tableDef)
      this.ehrHelp.showDialog(this.tableDef)
    },
    showDialogHandler: function () {
      // console.log('EhrPageTable showDialogHandler ', this.tableDef)
      this.ehrHelp.showDialog(this.tableDef)
    }
  },
  mounted: function () {
    const _this = this
    this.showEventHandler = function () {
      _this.showDialogHandler()
    }
    EventBus.$on(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)

  },
  beforeDestroy: function () {
    if (this.showEventHandler) {
      EventBus.$off(SHOW_TABLE_DIALOG_EVENT, this.showEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
