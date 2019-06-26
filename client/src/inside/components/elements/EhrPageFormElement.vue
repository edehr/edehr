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
      date-picker(class="d-picker", typeable, v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")
        div(v-if="!showLabel", slot="beforeCalendarHeader", class="datepicker-header") {{label}}

    div(v-if="inputType === 'day'", class="day_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="day_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")

    div(v-if="inputType === 'time'", class="time_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="time_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", type="text", v-bind:disabled="notEditing", v-bind:name="key", v-model="inputVal")

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

    div(v-if="inputType === 'fieldset'", class="fieldset_col_wrapper")
      h2(v-show="!!label", class="fieldset_label", v-html="label") &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        div(v-for="fmEl in row.elements", :key="fmEl.elementKey", class="fieldset_row_row_element" )
          ehr-page-form-element(:notEditing="notEditing", :element="fmEl", :ehrHelp="ehrHelp", :inputs="inputs", :isPageElement=isPageElement, :isDialogElement=isDialogElement)

    div(v-if="inputType === 'calculatedValue'", class="computed_wrapper")
      ehr-calculated-value(:inputs="inputs", :element="element")

    div(v-if="inputType === 'checkset'", class="checkset_wrapper")
      ehr-check-set(:element="element", :ehrHelp="ehrHelp", :inputs="inputs", v-bind:notEditing="notEditing", :isPageElement=isPageElement, :isDialogElement=isDialogElement)

    div(style="display:none") cv {{computedInitialValue}}

</template>

<script>
/*
  We try to keep the markup in this file, and the related CSS, to match the sister component: EhDialogFormElement.
  These are different components because they have different behaviours. One works to edit form data and the other
  works to create a new row in a table.
*/
import EhrPageFormElement from './EhrPageFormElement.vue'
// import the common component with the .vue extension so that the base component doesn't need to have a template sectopm
import EhrCommon from './EhrCommonElement.vue'
import EhrCalculatedValue from './EhrCalculatedValue'
import EhrCheckSet from './EhrCheckset'
import DatePicker from 'vuejs-datepicker'
import UiInfo from '../../../app/ui/UiInfo'
import EventBus from '../../../helpers/event-bus'
import { PAGE_FORM_INPUT_EVENT } from '../../../helpers/event-bus'

export default {
  name: 'EhrPageFormElement',
  // extend this component with the properties, data, methods etc from ....
  extends: EhrCommon,
  components: {
    DatePicker,
    EhrCalculatedValue,
    EhrCheckSet,
    EhrPageFormElement,
    UiInfo
  },
  // for props see EhrCommon
  methods: {
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
  }
}
</script>


