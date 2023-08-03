<template lang='pug'>
  div(class="form-element", :class='{invalidElement : !validData, hideTableElement: hideElement}')
    div(v-if="isType('form_label')", :class='formCss')
      div(v-html="label", class='form_label_wrapper')
      ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")


    div(v-else-if="isType('assetLink')", class="assetLink", :class='formCss')
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}}

    div(v-else-if="isType('calculatedValue')", class="computed_wrapper", :class='formCss')
      ehr-element-calculated(:element="element", :ehrHelp="ehrHelp", :elementKey="elementKey" )

    ehr-element-box-checkset(v-else-if="isType('boxcheckset')", :elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    ehr-element-checkset(v-else-if="isType('checkset')", :elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    ehr-element-radioset(v-else-if="isType('radioset')",
      :elementKey="elementKey",
      :ehrHelp="ehrHelp",
      :viewOnly='viewOnly')

    div(v-else-if="isType('checkbox')", class="checkbox_wrapper", :class='formCss')
      input(:id="inputId", class="checkbox", type="checkbox", :disabled="disabled || viewOnly ", :name="elementKey", v-model="inputVal", v-on:change="dependentUIEvent()")
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="checkbox_label, check-label", :forElement="inputId")

    div(v-else-if="isType('custom_form')", class='grid-span-3-columns', :class='formCss')
      ehr-element-custom-form(:element="element", :elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('date')", class="text_wrapper", :class='formCss')
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
      div(class="columns")
        input(v-if="!viewOnly", class="column is-10 input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
        div(v-if="viewOnly") {{ inputVal }}
        ui-info(class="column is-2", title="Time since", text="Describe when this happened prior to the current visit. e.g. '4 years ago'")

    div(v-else-if="isPatientData" )
      ehr-element-patient(:element="element", :elementKey="elementKey", :ehrHelp="ehrHelp")

    div(v-else-if="isType('ehrFile')")
      ehr-element-file(
        :containerInputValue="inputVal",
        :elementKey="elementKey",
        :ehrHelp="ehrHelp",
        :viewOnly='viewOnly',
        @update="childUpdate")

    div(v-else-if="isType('ehr_embedded')")
      ehr-element-embedded(:elementKey="elementKey", :ehrHelp="ehrHelp", :inputVal="inputVal")

    hr(v-else-if="isType('horizontal')")
    // type lookahead should have been named 'medication'
    div(v-else-if="isType('lookahead')", class="text_input_wrapper")
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        ehr-element-medication(
          :domId="_id",
          :disabled="disabled",
          @selected="(selected) => inputVal = selected",
          :inputVal="inputVal"
        )

    div(v-else-if="isType('lab_result')", class="lab_result_wrapper", :class='formCss')
      div(class="lab_result_element")
        ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="lab_result_label")
        input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
        div(v-if="viewOnly") {{ inputVal }}
        div(class="lab_result_suffix", v-text-to-html="element.suffixHtml")

    ehr-element-birth-date(
      v-else-if="isType('mainDOB')"
      :elementKey="elementKey",
      :ehrHelp="ehrHelp",
      :viewOnly='viewOnly',
      :containerInputValue="inputVal"
      @update="childUpdate"
      )

    div(v-else-if="isType('number') || isType('personAge')", class="text_input_wrapper", :class='formCss')
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
      input(v-if="!viewOnly", class="input numb-input", type="text", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}
      span(class="suffix") {{suffix }}

    // new to version v2.1 is practitionerName and practitionerProfession for record headers
    div(v-else-if="isType('practitionerName')", class="text_input_wrapper")
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey",v-model="inputVal")
        //ehr-element-practitioner(
        //  :domId="_id",
        //  :disabled="disabled",
        //  @selected="(selected) => inputVal = selected",
        //  :inputVal="inputVal"
        //)

    div(v-else-if="isType('practitionerProfession')", class="text_input_wrapper")
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey",v-model="inputVal")
        //ehr-element-profession(
        //  :domId="_id",
        //  :disabled="disabled",
        //  @selected="(selected) => inputVal = selected",
        //  :inputVal="inputVal"
        //)

    div(v-else-if="isType('select')", class="select_wrapper", :class='formCss')
      ehr-element-select(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('spacer')", class="label_wrapper") <!--class="spacer"-->
      div &nbsp;

    div(v-else-if="isType('text')", class="text_input_wrapper", :class='formCss')
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
      input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}
      span(class="suffix") {{suffix }}

    div(v-else-if="isType('textarea')", class="textarea_wrapper", :class='formCss')
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="textarea_label")
      textarea(class="ehr-page-form-textarea", :disabled="disabled || viewOnly", :name="elementKey", v-model="inputVal")

    //div(v-else-if="isType('number') || isType('personAge')", class="text_input_wrapper")
    div(v-else-if="isType(dataTypes.visitDay) || isType(dataTypes.visitTime)", class="text_input_wrapper", :class='formCss')
      ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="text_label")
      input(v-if="!viewOnly", class="input numb-input", type="text", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}

    //div(v-else-if="isType(dataTypes.visitDay) || isType(dataTypes.visitTime)", class="select_wrapper")
    //  ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="select_label")
    //  div(v-if="viewOnly") {{ inputVal }}
    //  div(v-if="!viewOnly")
    //    ehr-element-sim-time(
    //      :disabled="disabled",
    //      :domId="_id",
    //      :element="element",
    //      :initalVal="initialVal"
    //      :inputVal="inputVal",
    //      @update="(value) => inputVal = value",
    //    )

    div(v-else) ELSE: {{inputType}} {{label}}

    //div eef {{elementKey}} '{{inputVal}}'
    //div {{ validData ? 'ok': 'bad' }} ddv {{dependentOnValue}}

</template>

<script>
// import the common component with the .vue extension so that the base component doesn't need to have a template section
import EhrElementCommon from './EhrElementCommon.vue'
import EhrElementCalculated from './EhrElementCalculated'
import EhrElementCheckset from './EhrElementCheckset'
import EhrElementEmbedded from '@/inside/components/page/EhrElementEmbedded'
import EhrElementFile from './EhrElementFile'
import EhrElementPatient from '@/inside/components/page/EhrElementPatient'
import EhrElementLookup from './EhrElementLookup.vue'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EhrElementSimTime from '@/inside/components/page/EhrElementSimTime'
import EhrElementBirthDate from '@/inside/components/page/EhrElementBirthDate'
import EhrElementPractitioner from '@/inside/components/page/EhrElementPractitioner'
import EhrElementProfession from '@/inside/components/page/EhrElementProfession'
import EhrElementMedication from '@/inside/components/page/EhrElementMedication'
import UiInfo from '@/app/ui/UiInfo'
import EhrElementCustomForm from '@/inside/components/page/EhrElementCustomForm.vue'
import EhrElementSelect from '@/inside/components/page/EhrElementSelect.vue'
import EhrElementRadioset from '@/inside/components/page/EhrElementRadioset.vue'
import EhrElementBoxCheckset from '@/inside/components/page/EhrElementBoxCheckset.vue'

export default {
  name: 'EhrElementForm',
  extends: EhrElementCommon,
  components: {
    EhrElementBoxCheckset,
    EhrElementRadioset,
    EhrElementSelect,
    EhrElementCustomForm,
    EhrElementMedication,
    EhrElementProfession,
    EhrElementPractitioner,
    EhrElementBirthDate,
    EhrElementSimTime,
    EhrElementCalculated,
    EhrElementCheckset,
    EhrElementEmbedded,
    EhrElementFile,
    EhrElementPatient,
    EhrElementLookup,
    UiInfo
  },
  props: {},
  computed: {
    dataTypes () { return EhrTypes.dataInputTypes },
    isPatientData () {
      const dataTypes = this.dataTypes
      return this.isType(dataTypes.ehrDOB) ||
        this.isType(dataTypes.ehrPHN) ||
        this.isType(dataTypes.ehrPatientName) ||
        this.isType(dataTypes.ehrLocation) }
  },
  methods: {
    childUpdate (update) {
      this.internalSetInputValue(update)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/scss/definitions';

.invalidElement {
  border: 1px $error solid
}
</style>
