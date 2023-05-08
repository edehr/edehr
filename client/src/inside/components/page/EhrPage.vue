<template lang="pug">
  div
    div(v-if="pageDef.tableLabel") {{ pageDef.tableLabel }}
    ehr-panel-content
      div(v-if="useTabs")
        tabs
          tab(class='tabContainer', :name="element.label", v-for="(element, index) in pageElements", :key="element.elementKey",  :selected="index===0")
            ehr-page-element(:element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
      div(v-else)
        ehr-page-element(v-for="element in pageElements", :key="element.pageDataKey", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelContent from './EhrPanelContent.vue'
import EhrPageElement from './EhrPageElement'
import EhrPageFooter from './EhrPageFooter'
import EhrDefs from '../../../ehr-definitions/ehr-defs-grid'
import Tabs from '../Tabs'
import Tab from '../Tab'
import EhrData from '@/inside/components/page/ehr-data'

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
  components: {
    Tabs,
    Tab,
    EhrPanelContent,
    EhrPageFooter,
    EhrPageElement
  },
  data: function () {
    return {
    }
  },
  provide () {
    return {
      pageDataKey: this.pageDataKey
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
    pageElements () {
      // convert the object into an array and then sort based on the defined index.
      // pageElementIndex is the value under column fN in the inputs worksheet
      const pElems = EhrDefs.getPageElements(this.pageDataKey)
      let pgElems = Object.keys(pElems).map((k) => pElems[k]).sort( (a,b) => a.pageElementIndex - b.pageElementIndex)
      // Filter out tables that contain "v1" in their labels. These tables have been replaced with "v2" tables.
      // which may or may not have "v2" in their names. This is a crude way of doing the filtering.
      // TODO document this filtering, for developers, in the project readme or a github issue. See MarTabs.vue too.
      const pageData = EhrData.getMergedPageData(this.pageDataKey)
      pgElems = pgElems.filter( element => {
        let show = true
        if (element.label && element.label.toLowerCase().includes('v1')) {
          let data = pageData[element.tableKey]
          show = data && Array.isArray(data) && data.length > 0
          if (show) {
            // TODO after September 2023 add a popup dialog to notify the user that the v1 tables will be deprecated.
            // TODO after x months deprecate. Add a popup dialog to tell user they can get their v1 tables via contacting the edehr team.
            console.log('Found a V1 table with data. Will be deprecated sometime in 2023.', element.label)
          }
        }
        return show
      })
      return pgElems
    },
    useTabs () {
      return this.pageElements.length > 1
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';
.tabContainer {
}
.section-divider {
    border-bottom: 1px solid $grey40;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
}
</style>
