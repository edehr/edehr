<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      ehr-page-element(v-for="element in pageElements", :key="element.pageDataKey", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")

    div(class="assignment-save")
      div Page updated: {{ ehrHelp.getPageGeneratedDate() }}
      div Assignment last saved: {{ ehrHelp.getLastPageDataUpdateDate() }}

</template>

<script>
import EhrPanelHeader from '../../components/EhrPanelHeader.vue'
import EhrPanelContent from '../../components/EhrPanelContent.vue'
import EhrPageElement from './EhrPageElement'
import EhrHelpV2 from './ehr-helper'
import EhrDefs from '../../../helpers/ehr-defs-grid'

/*
# EhrPage

EhrPage provides the body on the Ehr pages.  These contain a title banner and a content that contains
a series of forms and tables. Each table has an associated dialog-form to be used either by the student or
the seed data author.

The EhrPage creates and shares an instance of EhrHelp
TODO change how this is shared and use a provide/inject where the helper is constructed in the provide.

EhrPage dynamically builds the content based on the page elements in the page definition.

## Forms
There are two types of forms: page content forms and dialog forms (that support tables).

Both form types are comprised of a series of EhrGroup elements
An EhrGroup generates a list of EhrSubGroup or form elements (subclasses of EhrElementCommon)

On the EhrPageForm the form elements are disabled until the edit controls active them.
On the EhrDialogForm the form elements are enabled when the dialog is open.

The container elements provide the page data key and the isTableElement and isPageElement boolean properties.
All are injected into the EhrElementCommon so they can determine their behavior accordingly.


## Data

Dialog forms (EhrDialogForm) are loaded with default values or empty cells
Page forms (EhrPageForm) are loaded with database data or empty cells (students)
or default values/empty cells (seed editors)

Defaults values are copied from the definitions when the dialog is opened.
Each time the EhrDialogForm opens these values are refreshed.

The elements ask the EhrHelp for their initial value. As the user makes a change to the inputs an event FORM_INPUT_EVENT
is broadcast and captured with the change. The change is then pushed into the page data or form data as appropriate.


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
      ehrHelp: undefined
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
  },
  methods: {
    // refresh () {
    //   let d = this.ehrHelp.getAsLoadedPageData()
    //   // console.log('EhrPageForm refresh for page key', this.pageDataKey)
    //   // console.log('EhrPageForm refresh found data', d)
    //   this.theData = d
    // }
  },
  created () {
    this.ehrHelp = new EhrHelpV2(this, this.$store, this.pageDataKey, this.uiProps)
  },
  // mounted: function () {
  // const _this = this
  // this.refreshEventHandler = function () {
  //   // console.log('received page refresh event')
  //   _this.refresh()
  // }
  // EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
  // },
  beforeRouteLeave (to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  },
  beforeDestroy: function () {
  //   if (this.refreshEventHandler) {
  //     EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  //   }
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
