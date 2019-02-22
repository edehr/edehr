<template lang="pug">
  div
    div(:class="row.classList", class="columns", v-for="row in formDefs.rows", v-bind:key="row.rowNumber")
      div(class="column", :class="[formColClass(element)]", v-for="element in row.elements", v-bind:key="element.elementKey")
        ehr-page-form-element(:notEditing="notEditing", :element="element", :ehrHelp="ehrHelp" :initialValue="theData[element.elementKey]")
    div(style="display:none") {{currentData}}
</template>

<script>
import EhrPageFormElement from '../components/EhrPageFormElement.vue'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
/*
TODO on the History Immunization page we need a header label above all the dates.

TODO The table dialogs are still under development. Tables are not displaying database values. Table's dialogs may not be working

 */

export default {
  name: 'EhrPageForm',
  components: {
    EhrPageFormElement
  },
  data: function() {
    return {
      theData: {}
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  },
  computed: {
    formDefs() {
      let pageDef = this.ehrHelp
        ? this.ehrHelp.getPageDefinition(this.pageDataKey)
        : { page_form: {} }
      return pageDef.page_form
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    currentData() {
      // Note this property is invoked in a div above. Then hidden from view.
      // By invoking this property theData is set (intentional side-effect)
      // and theData contains data from the database
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      // this.theData = this.ehrHelp.mergedProperty(this.pageDataKey)
      this.refresh()
      // console.log('EHR Page Form: page current data', this.theData)
      return this.theData
    }
  },
  methods: {
    formColClass: function(element) {
      // TODO determine correct css class based on form's column count
      // 1, 2, 3, 4, 5, default
      let clses = [
        'fullWidth',
        'is-half',
        'is-one-third',
        'is-one-quarter',
        'is-one-fifth',
        'tooSmall'
      ]
      let cols = this.formDefs.columnsCount - 1
      cols = Math.max(0, cols)
      cols = Math.min(cols, clses.length)
      let css = clses[cols]
      // console.log('EhrPageForm CSS based on col count', css, this.formDefs.columnsCount)
      return element.formCss ? element.formCss : css
    },
    refresh() {
      // console.log('EhrPageForm rehresh for page key', this.pageDataKey)
      this.theData = this.ehrHelp.getAsLoadedPageData(this.pageDataKey)
      // console.log('EhrPageForm rehresh found data', this.theData)
    }
  },
  mounted: function() {
    const _this = this
    this.refreshEventHandler = function() {
      // console.log('received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function() {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss"></style>
