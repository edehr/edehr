<template lang="pug">
  div(class="ehr-page-table")
    div(v-show="showTableAddButton")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div(v-if="isVertical", class="column_table")
      ehr-page-table-vertical(:ehrHelp="ehrHelp", :tableDef="tableDef")
    div(v-if="isStacked", class="stacked_table")
      h2(v-show="showTableLabel") {{tableDef.label}}
      ehr-page-table-stacked(:ehrHelp="ehrHelp", :tableDef="tableDef")

    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :inputs="inputs", :errorList="errorList" )
    //div(style="display:none") {{currentData}}
</template>

<script>
/*
    About the CSS in the tables.  EhrHelper inserts column_label class onto the first cell of the
    transposed tables, the header cells.

    */
import EhrDialogForm from '../components/EhrDialogForm.vue'
import EhrPageTableStacked from './tables/EhrPageTableStacked'
import EhrPageTableVertical from './tables/EhrPageTableVertical'
import UiButton from '../../app/ui/UiButton.vue'
import EventBus from '../../helpers/event-bus'
import { SHOW_TABLE_DIALOG_EVENT } from '../../helpers/event-bus'


export default {
  name: 'EhrPageTable',
  components: {
    EhrPageTableStacked,
    EhrPageTableVertical,
    EhrDialogForm,
    UiButton
  },
  data: function () {
    return {
      inputs: {}
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
    showTableLabel: { type: Boolean }
  },
  computed: {
    isVertical () {
      return this.tableDef.isTransposed
    },
    isStacked () {
      return this.tableDef.isStacked
    },
    showTableAddButton () {
      return this.ehrHelp.showTableAddButton()
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
      this.ehrHelp.showDialog(this.tableDef, this.inputs)
    },
    showDialogHandler: function () {
      // console.log('EhrPageTable showDialogHandler ', this.tableDef)
      this.ehrHelp.showDialog(this.tableDef, this.inputs)
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
  @import '../../scss/definitions';

  .EhrPageTable {
  }
</style>
