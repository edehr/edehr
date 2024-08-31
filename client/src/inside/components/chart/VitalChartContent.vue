<template lang="pug">
  div
    div(class="flow_across")
      div(class="flow_across menu_space_across flow_across_last_item")
        ui-button(v-if="showTableAddButton", value="v2-show", v-on:buttonClicked="showDialog") {{ buttonLabel }}
        ehr-page-context-menu
    vitals-chart(:tableDef="tableDef", :vitals="tableData", :vitalsModel="vitalsModel")
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :errorList="errorList" )

</template>

<script>
import UiButton from '../../../app/ui/UiButton.vue'
import VitalsChart from './VitalsChart'
import VitalModel from './vitalModel'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import EhrPageContextMenu from '@/inside/components/page/EhrPageContextMenu.vue'
import EhrDialogForm from '../page/EhrDialogForm.vue'
import EhrData from '@/inside/components/page/ehr-data'
import { t18EhrText, t18TableAddButtonLabel } from '@/helpers/ehr-t18'

export default {
  components: {
    EhrPageContextMenu,
    EhrDialogForm,
    UiButton,
    VitalsChart,
  },
  data () {
    return {
      vitalsModel: {}
    }
  },
  props: {
    ehrHelp: {type: Object},
    pageDataKey: { type: String },
    tableDef: { type: Object }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey,
      isPageElement: false,
      isTableElement: true,
      tableKey: this.tableKey,
      formKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    ehrText () { return t18EhrText().customPages.vitals },
    buttonLabel () { return t18TableAddButtonLabel(this.tableDef)},
    errorList () { return this.ehrHelp.getErrorList(this.tableKey)  },
    pageData () { return EhrData.getMergedPageData(this.pageKey) },
    pageKey () { return this.ehrHelp.getPageKey() },
    showTableAddButton () { return this.ehrHelp.showTableAddButton() },
    tableData () { return EhrData.getMergedTableData(this.pageKey, this.tableKey) },
    tableKey () { return this.tableDef.tableKey },
    uiProps () { return this.ehrHelp.getPageDef(this.pageDataKey) },
  },
  methods: {
    showDialog () {
      this.ehrHelp.showDialogForTable(this.pageDataKey, this.tableKey, {})
    },
    refresh () {
    }
  },
  created: function () {
    this.vitalsModel = new VitalModel(this.tableKey)
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('Vitals PAGE_DATA_REFRESH_EVENT')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>
