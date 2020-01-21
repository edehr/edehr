<template lang="pug">
  div(class="form-element")

    div(v-if="isType('form_label')", class="label_wrapper")
      div(v-html="label")
    div(v-else-if="isType('assetLink')", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}}
    div(v-else-if="isType('spacer')", class="label_wrapper") <!--class="spacer"-->
      div &nbsp;
    hr(v-else-if="isType('horizontal')")


    div(v-else-if="isType('calculatedValue')", class="computed_wrapper")
      ehr-element-calculated(:element="element", :ehrHelp="ehrHelp" )
    div(v-else-if="isType('checkset')", class="checkset_wrapper")
      ehr-element-checkset(:elementKey="elementKey", :ehrHelp="ehrHelp")

    div(v-else-if="isType('checkbox')", class="checkbox_wrapper")
      input(:id="inputId", class="checkbox", type="checkbox", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal", v-on:change="dependentUIEvent()")
      ehr-page-form-label(:element="element", css="checkbox_label, check-label", :forElement="inputId")

    div(v-else-if="isType('date')", class="date_wrapper")
      ehr-page-form-label(:element="element", css="date_label")
      div(class="date-container")
        date-picker(class="d-picker", typeable, v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")
        //div(v-if="!showLabel", slot="beforeCalendarHeader", class="datepicker-header") {{label}}

    div(v-else-if="isType('day')", class="day_wrapper")
      ehr-page-form-label(:element="element", css="day_label")
      input(class="input", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")

    div(v-else-if="isType('select')", class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(class="select")
        select(v-bind:name="elementKey", v-bind:disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          option(value="")
          option(v-for="option in options", :key="option.key", v-bind:value="option.key") {{ option.text}}

    div(v-else-if="isType('text')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      input(class="input text-input", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")
      span(class="suffix") {{suffix }}

    div(v-else-if="isType('time')", class="time_wrapper")
      ehr-page-form-label(:element="element", css="time_label")
      input(class="input", type="text", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")

    div(v-else-if="isType('textarea')", class="textarea_wrapper")
      ehr-page-form-label(:element="element", css="textarea_label")
      textarea(class="ehr-page-form-textarea", v-bind:disabled="disabled", v-bind:name="elementKey", v-model="inputVal")

    div(v-else) ELSE: {{inputType}} {{label}}

</template>

<style scoped>
.date-container {
    min-height: 29vh;
  }
</style>

<script>
// import the common component with the .vue extension so that the base component doesn't need to have a template section
import EhrElementCommon from './EhrElementCommon.vue'
import EhrElementCalculated from './EhrElementCalculated'
import EhrElementCheckset from './EhrElementCheckset'
import DatePicker from 'vuejs-datepicker'

export default {
  extends: EhrElementCommon,
  components: {
    EhrElementCalculated,
    EhrElementCheckset,
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
