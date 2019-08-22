<template lang="pug">
  div(class="form-element")
    div(v-if="isType('form_label')", class="label_wrapper")
      div(v-html="label")

    div(v-else-if="isType('assetLink')", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}}

    div(v-else-if="isType('calculatedValue')", class="computed_wrapper")
      ehr-calculated-value(:element="element", :ehrHelp="ehrHelp", :theData="theData", )

    div(v-else-if="isType('checkbox')", class="checkbox_wrapper")
      label(v-if="showLabel", class="checkbox_label")
        input(class="checkbox", type="checkbox", v-bind:disabled="disabled", v-model="inputVal", v-on:change="dependantClickEvent()")
        span {{label}}
        ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")

    div(v-else-if="isType('checkset')", class="checkset_wrapper")
      ehr-check-set(:element="element", :ehrHelp="ehrHelp", :theData="theData", v-bind:notEditing="notEditing", :isPageElement="isPageElement", :dialogTableKey="dialogTableKey")

    div(v-else-if="isType('date')", class="date_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="date_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      date-picker(class="d-picker", typeable, v-bind:disabled="disabled", v-bind:name="key", v-model="inputVal")
        div(v-if="!showLabel", slot="beforeCalendarHeader", class="datepicker-header") {{label}}

    div(v-else-if="isType('day')", class="day_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="day_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="disabled", v-bind:name="key", v-model="inputVal")

    div(v-else-if="isType('select')", class="select_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="select_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      div(class="select")
        select(v-bind:name="elementKey", v-bind:disabled="disabled", v-model="inputVal")
          option(value="")
          option(v-for="option in options", v-bind:value="option.text") {{ option.text}}

    div(v-else-if="isType('spacer')", class="label_wrapper") <!--class="spacer"-->
      div ' &nbsp; '

    div(v-else-if="isType('text')", class="text_input_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="text_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")
      span {{suffix }}

    div(v-else-if="isType('time')", class="time_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="time_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", type="text", v-bind:disabled="disabled", v-bind:name="key", v-model="inputVal")

    div(v-else-if="isType('textarea')", class="textarea_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="textarea_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      textarea(class="ehr-page-form-textarea", v-bind:disabled="disabled", v-bind:name="key", v-model="inputVal")

    div(v-else) ELSE: {{inputType}} {{label}}

</template>

<script>
// import the common component with the .vue extension so that the base component doesn't need to have a template section
import EhrCommon from './EhrCommonElement.vue'
import EhrCalculatedValue from './EhrCalculatedValue'
import DatePicker from 'vuejs-datepicker'

export default {
  extends: EhrCommon,
  components: {
    EhrCalculatedValue,
    DatePicker
  },
  props: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

