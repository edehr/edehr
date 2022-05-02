<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ pageDef.pageTitle }}
    ehr-panel-content
      ehr-page-element(v-for="element in pageElements", :key="element.pageDataKey", :element="element", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
    ehr-page-footer(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
</template>

<script>
import EhrPanelHeader from './EhrPanelHeader.vue'
import EhrPanelContent from './EhrPanelContent.vue'
import EhrPageElement from './EhrPageElement'
import EhrPageFooter from './EhrPageFooter'
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
  components: {
    EhrPanelHeader,
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
      return EhrDefs.getPageElements(this.pageDataKey)
    },
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';

.record-header {
    border-bottom: 1px solid $grey20;
    margin-bottom: 2.5em;
    padding-bottom: .75em;
}

.section-divider {
    border-bottom: 1px solid $grey40;
    margin-bottom: 2em;
    padding-bottom: 2em;
}
</style>
