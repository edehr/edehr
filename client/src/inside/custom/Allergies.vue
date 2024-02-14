// Custom page for Fluid Balance
<template lang="pug">
  div(class="ehr-page")
    ehr-panel-content
      div(v-if="canEdit || isEditing", id='allergyPageForm', class="ehr-page-form")
        h2(class="headerClass")
        div(style="display:inline") {{ehrText.customPages.allergies.title }}
        div
          <!--div isEditing {{ isEditing}} canEdit {{canEdit}}-->
          ui-button(value="alg-begin", v-on:buttonClicked="beginEdit", v-show="canEdit")
            fas-icon(icon="edit", class="icon-left")
            span {{ ehrText.buttonLabelEditForm }}
          ui-button(value="alg-save", v-on:buttonClicked="saveEdit", v-show="isEditing")
            fas-icon(icon="check-circle", class="icon-left")
            span {{ ehrText.saveButtonLabel }}
          span(v-show="isEditing") &nbsp;
          ui-button(value="alg-cancel", v-on:buttonClicked="cancelEdit", v-show="isEditing")
            fas-icon(icon="times-circle", class="icon-left")
            span {{ ehrText.cancelButtonLabel }}
        allergies-n-k-a(:elementKey="nkaElemKey", :ehrHelp="ehrHelp", :viewOnly='!isEditing')

      ehr-page-table(:tableDef="tableDef", :ehrHelp="ehrHelp")

    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrElementForm from '@/inside/components/page/EhrElementForm.vue'
import EhrPageFooter from '../components/page/EhrPageFooter'
import EhrPageTable from '@/inside/components/page/EhrPageTable.vue'
import EhrPanelContent from '../components/page/EhrPanelContent.vue'
import UiButton from '@/app/ui/UiButton.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrDefs from '../../ehr-definitions/ehr-defs-grid'
import EhrPageHelper from '../components/page/ehr-helper'
import AllergiesNKA from '@/inside/custom/allergies/AllergiesNKA.vue'
import StoreHelper from '@/helpers/store-helper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import { t18EhrText } from '@/helpers/ehr-t18'

const PAGE_KEY = 'allergies'
const TABLE_KEY = 'allergyList'
const NKA_KEY = 'checkbox'
const FORM_KEY = 'pageForm'

export default {
  components: {
    AllergiesNKA,
    EhrElementForm,
    EhrPanelContent,
    EhrPageTable,
    EhrPageFooter,
    UiButton
  },
  data: function () {
    return {
      nkaElemKey: NKA_KEY,
      timeline: [],
      pageDataKey: PAGE_KEY,
      formKey: FORM_KEY,
      theData: {},
      ehrHelp: undefined
    }
  },
  provide () {
    return {
      isPageElement: true,
      isTableElement: false,
      formKey: FORM_KEY,
      pageDataKey: PAGE_KEY,
      tableKey: undefined,
      isEmbedded: false
    }
  },
  computed: {
    ehrText () { return t18EhrText()},
    nkaElem () {
      return EhrDefs.getPageChildElement(PAGE_KEY, NKA_KEY)
    },
    canEdit () {
      const mergedData = StoreHelper.getMergedData()
      const ehrDataModel = new EhrDataModel(mergedData)
      const allergiesData = ehrDataModel.getPageTableData(PAGE_KEY, TABLE_KEY) || []
      const cnt = allergiesData ? allergiesData.length : 0
      return cnt === 0 && this.ehrHelp.canEditForm(this.formKey)
    },
    isEditing () {
      return this.ehrHelp.isEditingForm(this.formKey)
    },
    pageDef () {
      return EhrDefs.getPageDefinition(PAGE_KEY)
    },
    tableDef () {
      const tableDefs = EhrDefs.getPageTables(PAGE_KEY)
      return tableDefs.find( td => td.elementKey === TABLE_KEY)
    },
  },
  methods: {
    beginEdit: function () {
      this.ehrHelp.beginEdit(this.formKey)
    },
    cancelEdit: function () {
      this.ehrHelp.cancelEdit()
    },
    saveEdit: async function () {
      await this.ehrHelp.savePageFormEdit()
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    },
  },
  created () {
    this.ehrHelp = new EhrPageHelper(PAGE_KEY)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    this.ehrHelp.beforeDestroy(PAGE_KEY)
  }
}
</script>

<style lang="scss" scoped>

#allergyPageForm {
  margin-bottom: 1rem;
}

</style>
