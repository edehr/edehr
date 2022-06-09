<template lang='pug'>
  div(class="form-element")
    div(v-if="isType('form_label')")
      div(v-html="label", class='form_label_wrapper')

    div(v-else-if="isType('assetLink')", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        fas-icon(class="linkIcon", icon="file-pdf")
        span {{assetName()}}

    div(v-else-if="isType('calculatedValue')", class="computed_wrapper")
      ehr-element-calculated(:element="element", :ehrHelp="ehrHelp" )

    div(v-else-if="isType('checkset')", class="checkset_wrapper")
      ehr-element-checkset(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('checkbox')", class="checkbox_wrapper")
      input(:id="inputId", class="checkbox", type="checkbox", :disabled="disabled || viewOnly ", :name="elementKey", v-model="inputVal", v-on:change="dependentUIEvent()")
      ehr-page-form-label(:element="element", css="checkbox_label, check-label", :forElement="inputId")

    div(v-else-if="isType('date')", class="text_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      div(class="columns")
        input(v-if="!viewOnly", class="column is-10 input text-input", :disabled="disabled", :name="elementKey", v-model="inputVal")
        div(v-if="viewOnly") {{ inputVal }}
        ui-info(class="column is-2", title="Time since", text="Describe when this happened prior to the current visit. e.g. '4 years ago'")

    div(v-else-if="isType(dataTypes.ehrDOB) || isType(dataTypes.ehrPHN) || isType(dataTypes.ehrPatientName) || isType(dataTypes.ehrLocation)" )
      ehr-element-patient(:element="element", :elementKey="elementKey", :ehrHelp="ehrHelp")

    div(v-else-if="isType('ehrFile')")
      ehr-element-file(:elementKey="elementKey", :ehrHelp="ehrHelp", :viewOnly='viewOnly')

    div(v-else-if="isType('ehr_embedded')")
      ehr-element-embedded(:elementKey="elementKey", :ehrHelp="ehrHelp")

    hr(v-else-if="isType('horizontal')")

    div(v-else-if="isType('lookahead')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_input_wrapper")
      ehr-element-lookup(
        v-if="!viewOnly"
        :disabled="disabled",
        :lookaheadKey="element.lookaheadKey",
        @selected="(selected) => inputVal = selected",
        :inputVal="inputVal"
      )
      div(v-else) {{ inputVal }}

    div(v-else-if="isType('number')", class="text_input_wrapper")
      ehr-page-form-label(:element="element", css="text_label")
      input(v-if="!viewOnly", class="input text-input", type="number", :disabled="disabled", :name="elementKey", v-model="inputVal")
      div(v-if="viewOnly") {{ inputVal }}

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

    div(v-else-if="isType('visitDay')", class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(v-if="!viewOnly", class="select")
        select(:name="elementKey", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          option(value="")
          option(v-for="option in [0,1,2,3,4]", :key="option", :value="option") {{ option}}
      div(v-if="viewOnly") {{ inputVal }}

    div(v-else-if="isType('visitTime')", class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(v-if="!viewOnly", class="select")
        select(:name="elementKey", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          option(value="")
          option(v-for="option in timeSeries", :key="option", :value="option") {{ option}}
      div(v-if="viewOnly") {{ inputVal }}

    div(v-else) ELSE: {{inputType}} {{label}}

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
import UiInfo from '@/app/ui/UiInfo'
import EhrTypes from '@/helpers/ehr-types'

export default {
  name: 'EhrElementForm',
  extends: EhrElementCommon,
  components: {
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
    timeSeries () {
      const ts = []
      for(let i = 0; i < 24; i++) {
        let h = (i < 10 ? '0'+i : i)
        ts.push(h + ':00')
        ts.push(h + ':30')
      }
      return ts
    }
  },
  methods: {}
}
</script>
