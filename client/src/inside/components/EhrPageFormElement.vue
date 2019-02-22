<template lang="pug">
  div
    label(v-if="showLabel()", v-bind:for="element.elementKey") {{element.label}}
    input(v-if="element.inputType === 'text'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    input(v-if="element.inputType === 'day'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    input(v-if="element.inputType === 'time'", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    datepicker(v-if="element.inputType === 'date'", placeholder="Select Date", class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    textarea(v-if="element.inputType === 'textarea'", class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    div(v-if="element.inputType === 'select'", class="select")
      select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="inputVal")
        option(disabled,value="") Please select one
        option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}
    input(v-if="element.inputType === 'checkbox'", class="checkbox", type="checkbox", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
    label(v-if="element.inputType === 'checkbox'", class="label-checkbox", v-bind:for="element.elementKey") {{element.label}}
    div(v-if="element.inputType === 'assetLink'", class="assetLink")
      a(:href="assetUrl()", target="_blank") {{assetName()}}
    div(v-if="element.inputType === 'fieldset'", class="fieldset")
      // fieldsets on page forms only support read only properties, at this time. Missing method to share theData.
      // fieldsets on page forms lack multi-column support. Missing collection of fieldset in the generator code.
      ehr-page-form-element(v-for="child in element.elements", v-bind:key="child.elementKey", :element="child", :ehrHelp="ehrHelp" )

    div(style="display:none") {{computedValue}} {{inputVal}}
</template>

<script>
import EhrPageFormElement from '../components/EhrPageFormElement.vue'
import Datepicker from 'vuejs-datepicker'
import EventBus from '../../helpers/event-bus'
import { PAGE_FORM_INPUT_EVENT } from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
/*
TODO perhaps the markup could be a series of divs selected by inputType
and their content could then be clean and clear markup for each of the input types.
The way it is now is tight code but it's hard to understand.

TODO date, day and time types

TODO document the hideLabel value in the formOption property

TODO on the Immunization and other pages there are fields that should only be active
if the checkbox is checked. Implement the event based dependency
that I've done in the EhrDialogFormElement
 */

export default {
  name: 'EhrPageFormElement',
  components: {
    Datepicker,
    EhrPageFormElement
  },
  data: function() {
    return {
      inputVal: this.computedValue,
      eventHandler: {}
    }
  },
  props: {
    notEditing: { type: Boolean },
    element: { type: Object },
    ehrHelp: { type: Object },
    initialValue: {
      // to accept any object type we provide a validator that accepts all types
      validator: function(value) {
        return true
      }
    }
  },
  computed: {
    computedValue() {
      // let key = this.element.elementKey
      // console.log('EhrPageFormElement initialValue', key,  this.initialValue)
      // TODO check if this approach to initialization is the best. If so the document it here...
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inputVal = this.initialValue
      return this.initialValue
    }
  },
  methods: {
    showLabel() {
      // console.log('showlabel', this.element.inputType, this.element.label)
      let hide = this.element.formOption === 'hideLabel'
      hide = hide || this.element.inputType === 'checkbox'
      hide = hide || this.element.inputType === 'assetLink'
      return !hide
    },
    assetUrl() {
      let e = this.element
      let url = '/assets/' + e.assetBase + '/' + e.assetName
      return url
    },
    assetName() {
      let e = this.element
      let name = 'wip: ' + e.label
      if (e.assetBase && e.assetName) {
        name = e.label
      }
      return name
    },
    refresh() {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let key = this.element.elementKey
      let value = pageData[key]
      // console.log('EhrPageFormElement refresh page data ', key, value, this.notEditing)
      this.inputVal = value
    }
  },
  watch: {
    inputVal(val) {
      if (this.notEditing) {
        // only broadcast if user is editing the form
        return
      }
      // Send event when any input changes. The listener (EhrHelper) will collect the changes
      // and be ready to send the changes to the server.
      let pageDataKey = this.element.pageDataKey
      let pfuEventChannel = PAGE_FORM_INPUT_EVENT + pageDataKey
      // console.log('EhrPageFormElement watch inputValue', pfuEventChannel, val, this.element)
      EventBus.$emit(pfuEventChannel, { value: val, element: this.element })
    }
  },
  mounted: function() {
    const _this = this
    this.refreshEventHandler = function() {
      // console.log('EhrPageFormElement received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function() {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss"></style>
