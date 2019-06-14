<template lang="pug">
  div(:id="key", class="ehrdfe")

    div(v-if="inputType === 'form_label'", class="label_wrapper")
      div(v-html="label")

    div(v-if="inputType === 'spacer'", class="label_wrapper spacer")
      div &nbsp;

    div(v-if="inputType === 'text'", class="text_input_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="text_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", v-bind:name="key", type="text", v-model="inputVal")
      div {{suffix }}

    div(v-if="inputType === 'date'", class="date_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="date_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      datepicker(class="d-picker", typeable, v-model="inputVal")
        div(v-if="!showLabel", slot="beforeCalendarHeader", class="datepicker-header") {{label}}

    div(v-if="inputType === 'day'", class="day_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="day_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", type="text", v-model="inputVal")

    div(v-if="inputType === 'time'", class="time_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="time_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      input(class="input", type="text", v-model="inputVal")

    div(v-if="inputType === 'textarea'", class="textarea_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="textarea_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      textarea(v-model="inputVal")

    div(v-if="inputType === 'select'", class="select_wrapper")
      ehr-page-form-label(:showLabel="showLabel", css="select_label", :label="label", :helperText="helperText", :helperHtml="helperHtml")
      div(class="select")
        select(v-bind:name="key", v-model="inputVal")
          option(disabled,value="")
          option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}

    div(v-if="inputType === 'checkbox'", class="checkbox_wrapper")
      label(v-if="showLabel", class="checkbox_label")
        input(class="checkbox", type="checkbox", v-model="inputVal")
        span {{label}}
        ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")


    div(v-if="inputType === 'fieldset'", class="fieldset_col_wrapper")
      label(v-show="!!label", class="fieldset_label", v-html="label") &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        div(v-for="fmEl in row.elements", :key="fmEl.elementKey", class="fieldset_row_row_element" )
          ehr-dialog-form-element(:element="fmEl", :ehrHelp="ehrHelp", :inputs="inputs" )


    div(v-if="inputType === 'calculatedValue'", class="computed_wrapper")
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
import EhrPageFormLabel from '../components/EhrPageFormLabel.vue'
import EhrCalculatedValue from './EhrCalculatedValue'
import EventBus from '../../helpers/event-bus'
import { DIALOG_INPUT_EVENT } from '../../helpers/event-bus'
import UiInfo from '../../app/ui/UiInfo'
import {getPageChildElement} from '../../helpers/ehr-defs'

export default {
  name: 'EhrDialogFormElement',
  components: {
    EhrDialogFormElement,
    EhrPageFormLabel,
    EhrCalculatedValue,
    UiInfo,
    Datepicker
  },
  data () {
    return {
      child: {},
      eventHandler: {},
      gotHit: false,
      helperHtml: '',
      helperText: '',
      showLabel: true,
      inputType: '',
      inputVal: '',
      key: '',
      label: '',
      suffix: ''
    }
  },
  props: {
    ehrHelp: { type: Object },
    inputs: { type: Object },
    element: { type: Object }
  },
  computed: {
    parentData () {
      if (this.element.parent) {
        let pVal = this.inputs[this.element.parent.elementKey]
        // console.log('this.inputs', this.inputs)
        // console.log('daf.parent', this.element.parent, 'pVal', pVal)
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
      return 'radio:' + this.key
    },
    tableEventKey () {
      return this.ehrHelp.getDialogEventChannel(this.element.tableKey)
    }
  },
  methods: {
    cssFromDefs: function (element) {
      console.log('cssFromDefs',element.label, element.inputType, element.elementKey, element.formCss)
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
    },
    receiveShowHideEvent (eData) {
      if(eData.value) {
        // console.log('EhrDialogFormElement on show re-init initial value', this.key, eData.value)
        this.inputVal = this.inputs[this.key]
      }
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
    let child = getPageChildElement(element.pageDataKey, element.elementKey)
    if (!child ) {
      child = {}
    }
    this.suffix = child.suffix
    this.helperText = child.helperText
    this.helperHtml = child.helperHtml
    // Don't initialize value here because that would trigger the watch and that only works once the dialog is visible
    // this.inputVal = this.inputs[this.key]
    this.tableEventHandler = function (eData) {
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(this.tableEventKey, this.tableEventHandler)

    if (this.dependentPropertyChangeChannel) {
      this.eventHandler = function (eData) {
        _this.receiveEvent(eData)
      }
      EventBus.$on(this.dependentPropertyChangeChannel, this.eventHandler) // eData => { this.receiveEvent(eData) })
    }
  },
  beforeDestroy: function () {
    if (this.tableEventHandler) {
      EventBus.$off(this.tableEventKey, this.tableEventHandler)
    }
    if (this.dependentPropertyChangeChannel && this.eventHandler) {
      EventBus.$off(this.dependentPropertyChangeChannel, this.eventHandler)
    }
  },
  watch: {
    inputVal (val) {
      // console.log('watch inputValue', val, DIALOG_INPUT_EVENT, this.element)
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      let element = this.element
      EventBus.$emit(DIALOG_INPUT_EVENT, { value: val, element: element })
    }
  }
}
</script>

