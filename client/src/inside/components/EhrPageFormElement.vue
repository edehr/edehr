<template lang="pug">
  div(:id="element.elementKey", class="ehrdfe", :class="formCss(element)")

    div(v-if="element.inputType === 'label'", class="label_wrapper")
      label(class="text_label") {{element.label}}

    div(v-if="element.inputType === 'text'", class="text_input_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="text_label") {{element.label}}
      input(class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")

    div(v-if="element.inputType === 'date'", class="date_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="date_label") {{element.label}}
      datepicker(class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")

    div(v-if="element.inputType === 'day'", class="day_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="day_label") {{element.label}}
      input(class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")

    div(v-if="element.inputType === 'time'", class="time_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="time_label") {{element.label}}
      input(class="input", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")


    div(v-if="element.inputType === 'textarea'", class="textarea_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="textarea_label") {{element.label}}
      textarea(class="ehr-page-form-textarea", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")

    div(v-if="element.inputType === 'select'", class="select_wrapper")
      label(v-if="!(element.formOption === 'hideLabel')", class="select_label") {{element.label}}
      select(v-bind:name="element.elementKey", v-bind:disabled="notEditing", v-model="inputVal")
        option(disabled,value="")
        option(v-for="option in element.options", v-bind:value="option.text") {{ option.text}}

    div(v-if="element.inputType === 'checkbox'", class="checkbox_wrapper")
      input(class="checkbox", type="checkbox", v-bind:disabled="notEditing", v-bind:name="element.elementKey", v-model="inputVal")
      label(v-if="!(element.formOption === 'hideLabel')", class="checkbox_label") {{element.label}}

    div(v-if="element.inputType === 'assetLink'", class="assetLink")
      a(:href="assetUrl()", target="_blank")
        span {{assetName()}} &nbsp;
        fas-icon(class="linkIcon", icon="file")

    div(v-if="element.inputType === 'fieldset'", class="fieldset_col_wrapper")
      h2(v-show="!!element.label", class="fieldset_label") {{element.label}} &nbsp;
      div(v-for="row in element.formFieldSet.rows", :key="row.formRow" class="fieldset_row_row" )
        div(v-for="fmEl in row.elements", :key="fmEl.elementKey", class="fieldset_row_row_element" )
          ehr-page-form-element(:element="fmEl", :ehrHelp="ehrHelp" )

    div(style="display:none") {{computedValue}} {{inputVal}}
</template>

<script>
// TODO instead of all the following todos combine the table element and page form element into one component.
// TODO the 'label' input type does not appear in the spreadsheet
// TODO set up and test the label_form input type to also render html
// TODO add the spacer element
// TODO implement the fieldRowSet
import EhrPageFormElement from '../components/EhrPageFormElement.vue'
import Datepicker from 'vuejs-datepicker'
import EventBus from '../../helpers/event-bus'
import { PAGE_FORM_INPUT_EVENT } from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'
export default {
  name: 'EhrPageFormElement',
  components: {
    Datepicker,
    EhrPageFormElement
  },
  data: function () {
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
      validator: function (value) {
        return true
      }
    }
  },
  computed: {
    computedValue () {
      // let key = this.element.elementKey
      // console.log('EhrPageFormElement initialValue', key,  this.initialValue)
      // TODO check if this approach to initialization is the best. If so the document it here...
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.inputVal = this.initialValue
      return this.initialValue
    }
  },
  methods: {
    formCss: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },
    assetUrl () {
      let e = this.element
      let url = '/assets/' + e.assetBase + '/' + e.assetName
      return url
    },
    assetName () {
      let e = this.element
      let name = e.label
      if (e.assetBase && e.assetName) {
        name = e.label
      }
      return name
    },
    refresh () {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let key = this.element.elementKey
      let value = pageData[key]
      // console.log('EhrPageFormElement refresh page data ', key, value, this.notEditing)
      this.inputVal = value
    }
  },
  watch: {
    inputVal (val) {
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
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('EhrPageFormElement received page refresh event')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/definitions';
.assetLink a{
  color: $grey60;
  display: block;
  margin-bottom: 10px;

  &:hover {
    color: $black;
    text-decoration: underline;
  }

  .linkIcon {
    color: $grey40;
  }

}
</style>
