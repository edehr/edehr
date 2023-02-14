<template lang='pug'>
  div(class="form-element", :class='{invalidElement : !validData}')
    div(v-if="isType('form_label')")
      div(v-html="label", class='form_label_wrapper')
      ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")


    div(v-else-if="isType('assetLink')", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}}

    div(v-else-if="isType('calculatedValue')", class="computed_wrapper")
      ehr-element-calculated(:element="element", :ehrHelp="ehrHelp" )

    div(v-else-if="isType('checkset')", class="checkset_wrapper")
      ehr-element-checkset(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('recordConfirm')")
      ehr-element-record-confirm

    div(v-else-if="isType('checkbox')", class="checkbox_wrapper")
      input(:id="inputId", class="checkbox", type="checkbox", :disabled="disabled || viewOnly ", :name="elementKey", v-model="inputVal", v-on:change="dependentUIEvent()")
      ehr-page-form-label(:element="element", css="checkbox_label, check-label", :forElement="inputId")

    div(v-else-if="isType('date')", class="text_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      div(class="columns")
        input(v-if="!viewOnly", class="column is-10 input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
        div(v-if="viewOnly") {{ inputVal }}
        ui-info(class="column is-2", title="Time since", text="Describe when this happened prior to the current visit. e.g. '4 years ago'")

    div(v-else-if="isPatientData" )
      ehr-element-patient(:element="element", :elementKey="elementKey", :ehrHelp="ehrHelp")

    div(v-else-if="isType('ehrFile')")
      ehr-element-file(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('ehr_embedded')")
      ehr-element-embedded(:elementKey="elementKey", :ehrHelp="ehrHelp", :inputVal="inputVal")

    hr(v-else-if="isType('horizontal')")
    // type lookahead should have been named 'medication'
    div(v-else-if="isType('lookahead')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        ehr-element-medication(
          :domId="_id",
          :disabled="disabled",
          @selected="(selected) => inputVal = selected",
          :inputVal="inputVal"
        )

    div(v-else-if="isType('mainDOB')")
      ehr-element-birth-date(
        :elementKey="elementKey",
        :ehrHelp="ehrHelp",
        :viewOnly='viewOnly',
        :containerInputValue="inputVal"
        @update="dobUpdate"
        )

    div(v-else-if="isType('number') || isType('personAge')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      input(v-if="!viewOnly", class="input numb-input", type="text", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}
      span(class="suffix") {{suffix }}

    // new to version v2.1 is practitionerName and practitionerProfession for record headers
    div(v-else-if="isType('practitionerName')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        ehr-element-practitioner(
          :domId="_id",
          :disabled="disabled",
          @selected="(selected) => inputVal = selected",
          :inputVal="inputVal"
        )

    div(v-else-if="isType('practitionerProfession')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_input_wrapper")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        ehr-element-profession(
          :domId="_id",
          :disabled="disabled",
          @selected="(selected) => inputVal = selected",
          :inputVal="inputVal"
        )

    div(v-else-if="isType('select')", class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(v-if="!viewOnly", class="select", :title='inputVal')
        select(:name="elementKey", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          option(value="")
          option(v-for="option in options", :key="option.key", :value="option.key") {{ option.text}}
      div(v-if="viewOnly") {{ inputVal }}

    div(v-else-if="isType('spacer')", class="label_wrapper") <!--class="spacer"-->
      div &nbsp;

    div(v-else-if="isType('text')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      input(v-if="!viewOnly", class="input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}
      span(class="suffix") {{suffix }}

    div(v-else-if="isType('textarea')", class="textarea_wrapper")
      ehr-page-form-label(:element="element", css="textarea_label")
      textarea(class="ehr-page-form-textarea", :disabled="disabled || viewOnly", :name="elementKey", v-model="inputVal")

    div(v-else-if="isType(dataTypes.visitDay) || isType(dataTypes.visitTime)", class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(v-if="viewOnly") {{ inputVal }}
      div(v-if="!viewOnly")
        ehr-element-sim-time(
          :disabled="disabled",
          :domId="_id",
          :element="element",
          :initalVal="initialVal"
          :inputVal="inputVal",
          @update="(value) => inputVal = value",
        )

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

export default {
  name: 'EhrElementForm',
  extends: EhrElementCommon,
  components: {
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
    dobUpdate (update) {
      console.log('EhrElementForm update', update)
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
