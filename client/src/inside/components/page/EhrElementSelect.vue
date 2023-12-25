<template lang="pug">
  div(class="select_wrapper", :class='formCss')
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="select_label")
    div(v-if="!viewOnly", class="select", :title='inputVal')
      select(:name="elementKey", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
        option(value="")
        option(v-for="option in options", :key="option.key", :value="option.key") {{ optionText(option)}}
    div(v-if="viewOnly") {{ human(inputVal) }}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import { t18SelectOption } from '@/helpers/ehr-t18'


export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
    }
  },
  computed : {
    options () {
      return this.element.options
    }
  },
  methods: {
    optionText ( option ) { return t18SelectOption(this.element, option)},
    human ( d ) {
      return makeHumanTableCell(this.pageDataKey,
        this.elementKey, this.inputType, d)
    },
  },
}
</script>

