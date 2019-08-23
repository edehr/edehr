<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      ehr-page-element(v-for="element in pageElements", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    div(class="assignment-save")
      div Page updated: {{ ehrHelp.formatDate(pageDef.generated) }}
      div Assignment last saved: {{ theData.lastUpdate }}
    div(style="display:block") {{currentData}}

</template>

<script>
import EhrPanelHeader from '../../components/EhrPanelHeader.vue'
import EhrPanelContent from '../../components/EhrPanelContent.vue'
import EhrPageElement from './EhrPageElement'
import EhrHelpV2 from './ehr-helper'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'

/*
# EhrPage

EhrPage provides the body on the Ehr pages.  These contain a title banner and a content that contains
a series of forms and tables. Each table has an associated dialog-form to be used either by the student or
the seed data author.

The EhrPage creates and shares an instance of EhrHelp
TODO change how this is shared and use a provide/inject where the helper is constructed in the provide.

EhrPage dynamically builds the content based on the page elements in the page definition.

## Forms
There are two types of forms. Those in the page content and those in dialogs that support tables.

Both form types are comprised of a series of EhrGroup
EhrGroup generates a list of EhrSubGroup or form elements (subclasses of EhrElementCommon)

On the EhrPageForm the form elements are disabled until the edit controls active them.
On the EhrDialogForm the form elements are enabled.

The EhrDialogForm provides the isTableElement boolean property.
The EhrPageForm provides the isPageElement boolean proprty.
Both are injected into the EhrElementCommon so they can determine their behavior accordingly.


## Data

On the EhrPageForm the form elements are populated with the latest page data as stored in the db.  This
data is loaded when the page is loaded (refreshed)

On the EhrDialogForm the form elements are set up using the defined default values. These defaults are
copied from the definitions when the dialog is opened.  Each time the dialog opens these values are refreshed.

The elements ask the EhrHelp for their initial value. As the user makes a change to the inputs an event
is broadcast and captured with the change. The change is pushed into the page data or form data as appropriate.
PAGE_FORM_INPUT_EVENT and DIALOG_INPUT_EVENT events
 */
export default {
  name: 'EhrPageTable',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageElement
  },
  data: function () {
    return {
      ehrHelp: undefined,
      theData: {}
    }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey
    }
  },
  props: {
    pageDataKey: { type: String }
  },
  computed: {
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
    pageElements () {
      return EhrDefs.getPageElements(this.pageDataKey)
    },
    currentData () {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      this.refresh()
      console.log('EHR Page Form: page current data', this.pageDataKey, this.theData)
      return this.theData
    }
  },
  methods: {
    refresh () {
      let d = this.ehrHelp.getAsLoadedPageData(this.pageDataKey)
      // console.log('EhrPageForm refresh for page key', this.pageDataKey)
      // console.log('EhrPageForm refresh found data', d)
      this.theData = d
    }
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey, this.uiProps)
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
    this.ehrHelp.beforeDestroy(this.pageDataKey)
  },
}
</script>

<style lang="scss">
  .assignment-save{
    font-style: italic;
    margin-top: 5em;
    margin-left: 1rem;
  }
</style>
