<template lang="pug">
  div(class="ehrdfe", :class="formCss(def)")

    div(v-if="def.inputType === 'form-label'", class="label_wrapper")
      div(v-html="def.label")

    div(v-if="def.inputType === 'spacer'", class="label_wrapper spacer")
      div &nbsp;

    div(v-if="def.inputType === 'text'", class="text_input_wrapper")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")

    div(v-if="def.inputType === 'fieldRowSet'", class="fieldset_row_wrapper")
      label(class="fieldset_label") {{def.label}} &nbsp;
      div(v-for="row in def.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        ehr-dialog-form-element(v-for="fmEl in row.elements", :key="fmEl.elementKey", :inputs="inputs", :def="fmEl")

    div(v-if="def.inputType === 'fieldset'", class="fieldset_col_wrapper")
      label(class="fieldset_label") {{def.label}} &nbsp;
      div(v-for="row in def.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        ehr-dialog-form-element(v-for="fmEl in row.elements", :key="fmEl.elementKey", :inputs="inputs", :def="fmEl")

    div(v-if="def.inputType === 'checkbox'", class="checkbox_wrapper")
      input(class="checkbox", type="checkbox", v-bind:name="def.elementKey", v-model="inputVal")
      label(class="checkbox_label", v-bind:for="def.elementKey") {{def.label}}

    div(v-if="def.inputType === 'select'", class="select_wrapper")
      label(v-if="!(def.formOption === 'noLabel')", class="select_label") {{def.label}}
      div(class="select")
        select(v-bind:name="def.elementKey", v-model="inputVal")
          option(disabled,value="") Please select one
          option(v-for="option in def.options", v-bind:value="option.text") {{ option.text}}

    div(v-if="def.inputType === 'date'", class="date_wrapper")
      label {{def.label}}
      datepicker(v-model="inputVal")

    div(v-if="def.inputType === 'day'", class="day_wrapper")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")

    div(v-if="def.inputType === 'time'", class="time_wrapper")
      label {{def.label}}
      input(class="input", type="text", v-model="inputVal")


    div(v-if="def.inputType === 'textarea'", class="textarea_wrapper")
      label {{def.label}}
      textarea(v-model="inputVal")

</template>

<script>
import Datepicker from 'vuejs-datepicker'
import EhrDialogFormElement from './EhrDialogFormElement.vue'
import EventBus from '../../helpers/event-bus'
import { DIALOG_INPUT_EVENT } from '../../helpers/event-bus'
import UiInfo from '../../app/ui/UiInfo'

// TODO day, time types

/*
  Note that when the dialog is opened each form element definition is given a reference
  to the ehrHelp. See ehrHelp.showDialog()
 */

export default {
  name: 'EhrDialogFormElement',
  components: {
    EhrDialogFormElement,
    UiInfo,
    Datepicker
  },
  props: {
    inputs: { type: Object },
    def: { type: Object }
  },
  data() {
    return {
      inputVal: this.computedValue,
      gotHit: false,
      eventHandler: {}
    }
  },
  computed: {
    computedValue() {
      let cV = this.def.helper.getInputValue(this.def)
      console.log('computedValue', cV)
      return cV
    },
    parentData() {
      if (this.def.parent) {
        let pVal = this.inputs[this.def.parent.elementKey]
        console.log('this.inputs', this.inputs)
        console.log('daf.parent', this.def.parent, 'pVal', pVal)
        return pVal
      }
      return ''
    },
    dependentPropertyChangeChannel() {
      if (this.def.parent) {
        // console.log('dependentPropertyChangeChannel daf.parent', this.def.parent)
        return 'radio:' + this.def.parent.elementKey
      }
      return null
    },
    eventChannelBroadcast() {
      return 'radio:' + this.def.elementKey
    }
  },
  methods: {
    formCss: function(element) {
      return element.formCss ? element.formCss : 'noClass'
    },
    emitGlobalClickEvent() {
      const _this = this
      this.$nextTick(function() {
        // Send an event on our transmission channel with a payload containing this component's value
        let eData = { key: _this.def, value: _this.inputVal }
        // console.log('emit event',eData, _this.eventChannelBroadcast)
        EventBus.$emit(_this.eventChannelBroadcast, eData)
      })
    },
    receiveEvent(eData) {
      // TODO targetValue where is this set?
      // we're receiving an event transmitted by another instance of this component. An instance
      // that has sent a message on the channel this component listens on.
      this.gotHit = this.def.targetValue === eData.value
      // console.log(`On channel ${this.dependentPropertyChangeChannel} from key ${eData.key} got hit? ${this.gotHit}`)
    }
  },
  mounted: function() {
    const _this = this
    if (this.dependentPropertyChangeChannel) {
      this.eventHandler = function(eData) {
        _this.receiveEvent(eData)
      }
      EventBus.$on(this.dependentPropertyChangeChannel, this.eventHandler) // eData => { this.receiveEvent(eData) })
    }
  },
  beforeDestroy: function() {
    if (this.dependentPropertyChangeChannel && this.eventHandler) {
      // console.log('beforeDestroy, remove listener',this.dependentPropertyChangeChannel)
      EventBus.$off(this.dependentPropertyChangeChannel, this.eventHandler)
    }
  },
  watch: {
    inputVal(val) {
      // console.log('watch inputValue', val, DIALOG_INPUT_EVENT)
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      let def = this.def
      EventBus.$emit(DIALOG_INPUT_EVENT, { value: val, def: def })
    }
  }
}
</script>

<style scoped>
.otherForChecklist {
  margin-left: 1rem;
}
</style>
