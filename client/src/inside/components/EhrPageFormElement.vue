<template lang="pug">
  div(:id="key", class="ehrdfe")

    div(v-if="inputType === 'form_label'", class="label_wrapper")
      div(v-html="label")

    div(v-if="inputType === 'spacer'", class="label_wrapper spacer")
      div &nbsp;

    div(v-if="inputType === 'text'", class="text_input_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="text_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")
      div {{suffix }}

    div(v-if="inputType === 'date'", class="date_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="date_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      datepicker(class="d-picker", typeable, v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")
        div(v-if="(element.formOption === 'hideLabel')", slot="beforeCalendarHeader", class="datepicker-header") {{label}}

    div(v-if="inputType === 'day'", class="day_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="day_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")

    div(v-if="inputType === 'time'", class="time_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="time_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")

    div(v-if="inputType === 'textarea'", class="textarea_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="textarea_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      textarea(class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")

    div(v-if="inputType === 'select'", class="select_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="select_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      div(class="select")
        select(v-bind:name="key", v-bind:disabled="notEditing", v-model="inputVal")
          option(value="")
          option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}

    div(v-if="inputType === 'checkbox'", class="checkbox_wrapper")
      label(v-if="showLabel", class="checkbox_label")
        input(class="checkbox", type="checkbox", v-bind:disabled="notEditing", v-model="inputVal")
        span {{label}}
        ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")


    div(v-if="inputType === 'assetLink'", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}} 


    //div(v-if="inputType === 'fieldRowSet'", class="fieldset_row_wrapper")
    div(v-if="inputType === 'fieldset'", class="fieldset_col_wrapper")
      h2(v-show="!!label", class="fieldset_label", v-html="label") &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        div(v-for="fmEl in row.elements", :key="fmEl.elementKey", class="fieldset_row_row_element" )
          ehr-page-form-element(:notEditing="notEditing", :element="fmEl", :ehrHelp="ehrHelp", :inputs="inputs" )

    div(v-if="inputType === 'calculatedValue'", class="computed_wrapper")
      ehr-calculated-value(:inputs="inputs", :element="element")

    div(style="display:none") cv {{computedValue}}
</template>

<script>
/*
  We try to keep the markup in this file, and the related CSS, to match the sister component: EhDialogFormElement.
  These are different components because they have different behaviours. One works to edit form data and the other
  works to create a new row in a table.
*/
import EhrPageFormElement from '../components/EhrPageFormElement.vue'
import EhrPageFormLabel from '../components/EhrPageFormLabel.vue'
import EhrCalculatedValue from './EhrCalculatedValue'
import Datepicker from 'vuejs-datepicker'
import EventBus from '../../helpers/event-bus'
import UiInfo from '../../app/ui/UiInfo'
import { PAGE_FORM_INPUT_EVENT } from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
import {getPageChildElement} from '../../helpers/ehr-defs'

export default {
  name: 'EhrPageFormElement',
  components: {
    Datepicker,
    EhrCalculatedValue,
    EhrPageFormLabel,
    EhrPageFormElement,
    UiInfo
  },
  data: function () {
    return {
      eventHandler: {},
      helperHtml: '',
      helperText: '',
      showLabel: true,
      inputType: '',
      inputVal: this.computedValue,
      key: '',
      label: '',
      suffix: ''
    }
  },
  props: {
    notEditing: { type: Boolean },
    element: { type: Object },
    ehrHelp: { type: Object },
    inputs: { type: Object }
  },
  computed: {
    computedValue () {
      let key = this.key
      let initialValue = this.inputs[key]
      // console.log('EhrPageFormElement computedValue', key, initialValue)
      // TODO check if this approach to initialization is the best. If so the document it here...
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inputVal = initialValue
      return this.inputVal
    }
  },
  methods: {
    formCss: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },
    assetUrl () {
      let e = this.element
      let url = '/assets/' + e.assetBase + '/' + e.assetName
      return url
    },
    assetName () {
      let e = this.element
      let name = e.label
      if (e.assetBase && e.assetName) {
        name = e.label
      }
      return name
    },
    refresh () {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let key = this.key
      let value = pageData[key]
      // console.log('EhrPageFormElement refresh page data ', key, value, this.notEditing)
      this.inputVal = value
    }
  },
  watch: {
    inputVal (val) {
      if (this.notEditing) {
        // only broadcast if user is editing the form
        return
      }
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server. Calculated values also listen.
      EventBus.$emit(PAGE_FORM_INPUT_EVENT, { value: val, element: this.element })
    }
  },
  mounted: function () {
    const _this = this
    const element = this.element
    this.key = element.elementKey
    this.label = element.label
    this.inputType = element.inputType
    this.showLabel = !(element.formOption === 'hideLabel')
    // there is a child element for most elements. Exceptions include fieldsets
    let child = getPageChildElement(element.pageDataKey, element.elementKey) || {}
    this.suffix = child.suffix
    this.helperText = child.helperText
    this.helperHtml = child.helperHtml
    this.refreshEventHandler = function () {
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

<style lang="scss">
@import '../../scss/definitions';
.assetLink a{
  color: $grey60;
  display: block;
  margin-bottom: 10px;

  &:hover {
    color: $black;
    text-decoration: underline;
  }

  .linkIcon {
    color: $grey40;
    margin-right: 5px;
  }

}
</style>
