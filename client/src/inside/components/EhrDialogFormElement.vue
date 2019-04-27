<template lang="pug">
  div(:id="element.elementKey", class="ehrdfe")

    div(v-if="element.inputType === 'form_label'", class="label_wrapper")
      div(v-html="element.label")

    div(v-if="element.inputType === 'spacer'", class="label_wrapper spacer")
      div &nbsp;

    div(v-if="element.inputType === 'text'", class="text_input_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="text_input_label") {{element.label}}
      input(class="input", v-bind:name="element.elementKey", type="text", v-model="inputVal")

    div(v-if="element.inputType === 'date'", class="date_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="date_label") {{element.label}}
      datepicker(class="d-picker", typeable, v-model="inputVal")
        div(v-if="(element.formOption === 'hideLabel')", slot="beforeCalendarHeader", class="datepicker-header") {{element.label}}

    div(v-if="element.inputType === 'day'", class="day_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="day_label") {{element.label}}
      input(class="input", type="text", v-model="inputVal")

    div(v-if="element.inputType === 'time'", class="time_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="time_label") {{element.label}}
      input(class="input", type="text", v-model="inputVal")

    div(v-if="element.inputType === 'textarea'", class="textarea_wrapper")
      label {{element.label}}
      textarea(v-model="inputVal")

    div(v-if="element.inputType === 'select'", class="select_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="select_label") {{element.label}}
      div(class="select")
        select(v-bind:name="element.elementKey", v-model="inputVal")
          option(disabled,value="")
          option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}

    div(v-if="element.inputType === 'checkbox'", class="checkbox_wrapper")
      input(class="checkbox", type="checkbox", v-bind:name="element.elementKey", v-model="inputVal")
      label(v-if="!(element.formOption === 'hideLabel')", class="checkbox_label", v-bind:for="element.elementKey") {{element.label}}

    div(v-if="element.inputType === 'fieldset'", class="fieldset_col_wrapper")
      label(v-show="!!element.label", class="fieldset_label") {{element.label}} &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow", class="fieldset_row_row" )
        ehr-dialog-form-element(v-for="fmEl in row.elements", :key="fmEl.elementKey", :inputs="inputs", :element="fmEl")

    div(v-if="element.inputType === 'fieldRowSet'", class="fieldset_row_wrapper")
      label(v-show="!!element.label", class="fieldset_label") {{element.label}} &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        ehr-dialog-form-element(v-for="fmEl in row.elements", :key="fmEl.elementKey", :inputs="inputs", :element="fmEl")

    div(v-if="element.inputType === 'calculatedValue'", class="computed_wrapper")
      ehr-calculated-value(:inputs="inputs", :element="element")

</template>

<script>
/*
  We try to keep the markup in this file, and the related CSS, to match the sister component: EhrPageFormElement
  These are different components because they have different behaviours. One works to edit form data and the other
  works to create a new row in a table.
*/
import Datepicker from 'vuejs-datepicker'
import EhrDialogFormElement from './EhrDialogFormElement.vue'
import EhrCalculatedValue from './EhrCalculatedValue'
import EventBus from '../../helpers/event-bus'
import { DIALOG_INPUT_EVENT } from '../../helpers/event-bus'
import UiInfo from '../../app/ui/UiInfo'
export default {
  name: 'EhrDialogFormElement',
  components: {
    EhrDialogFormElement,
    EhrCalculatedValue,
    UiInfo,
    Datepicker
  },
  data () {
    return {
      inputVal: this.getInputValue,
      gotHit: false,
      eventHandler: {}
    }
  },
  props: {
    ehrHelp: { type: Object },
    inputs: { type: Object },
    element: { type: Object }
  },
  computed: {
    getInputValue () {
      // let cV = this.element.helper.getInputValue(this.element)
      // console.log('getInputValue', cV)
      cV = this.inputs[this.element.elementKey]
      console.log('getInputValue', cV)
      return cV
    },
    parentData () {
      if (this.element.parent) {
        let pVal = this.inputs[this.element.parent.elementKey]
        console.log('this.inputs', this.inputs)
        console.log('daf.parent', this.element.parent, 'pVal', pVal)
        return pVal
      }
      return ''
    },
    dependentPropertyChangeChannel () {
      if (this.element.parent) {
        // console.log('dependentPropertyChangeChannel daf.parent', this.element.parent)
        return 'radio:' + this.element.parent.elementKey
      }
      return null
    },
    eventChannelBroadcast () {
      return 'radio:' + this.element.elementKey
    }
  },
  methods: {
    formCss: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },
    emitGlobalClickEvent () {
      const _this = this
      this.$nextTick(function () {
        // Send an event on our transmission channel with a payload containing this component's value
        let eData = { key: _this.element, value: _this.inputVal }
        // console.log('emit event',eData, _this.eventChannelBroadcast)
        EventBus.$emit(_this.eventChannelBroadcast, eData)
      })
    },
    receiveEvent (eData) {
      // TODO restore the gotHit functionality that can be used to enable text boxes when a checkbox is checked
      // we're receiving an event transmitted by another instance of this component. An instance
      // that has sent a message on the channel this component listens on.
      this.gotHit = this.element.targetValue === eData.value
      // console.log(`On channel ${this.dependentPropertyChangeChannel} from key ${eData.key} got hit? ${this.gotHit}`)
    }
  },
  mounted: function () {
    const _this = this
    if (this.dependentPropertyChangeChannel) {
      this.eventHandler = function (eData) {
        _this.receiveEvent(eData)
      }
      EventBus.$on(this.dependentPropertyChangeChannel, this.eventHandler) // eData => { this.receiveEvent(eData) })
    }
  },
  beforeDestroy: function () {
    if (this.dependentPropertyChangeChannel && this.eventHandler) {
      // console.log('beforeDestroy, remove listener',this.dependentPropertyChangeChannel)
      EventBus.$off(this.dependentPropertyChangeChannel, this.eventHandler)
    }
  },
  watch: {
    inputVal (val) {
      console.log('watch inputValue', val, DIALOG_INPUT_EVENT, this.element)
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      let element = this.element
      EventBus.$emit(DIALOG_INPUT_EVENT, { value: val, element: element })
    }
  }
}
</script>

