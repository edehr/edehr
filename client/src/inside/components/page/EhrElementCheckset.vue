<template lang="pug">
  div(class="checkset_wrapper", :class='formCss')
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="checkset_label")
    div(class="checkset_list")
      div(v-for="option in filteredOptions")
        label
          input(class="checkbox", type="checkbox", :disabled="disabled || viewOnly", :value="option.prop", v-model="checkValues")
          span {{ optionText(option) }}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EhrCheckset from '@/ehr-definitions/ehr-checkset'
import { t18ChecksetOption } from '@/helpers/ehr-t18'

const debug = false

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      checkValues: []
    }
  },
  computed : {
    options () { return this.element.options },
    checkOptions () { return EhrCheckset.optionsToChecklist(this.options) },
    filteredOptions () {
      // In view mode remove all unchecked values.
      let opts = this.checkOptions
      if (this.viewOnly) {
        opts = opts.filter( opt => this.checkValues.includes(opt.prop) )
      }
      return opts
    }
  },
  watch: {
    checkValues (val) {
      // val is an array of option props  e.g. [ "retentionSutures", "surgiGlue", "staples", "sutures", "steriStrip" ]
      const newVal = EhrCheckset.checkSetToDbValue(val)
      /*
      newVal is a csv string with the keys (prop) from the checkOptions. For example
      "pressureInjuryStage3,pressureInjuryStage4,pressureInjuryUnstageable,pressureInjuryDeepTissueInjury"
       */
      if (debug) console.log('EhrCheckset input val changed', this.elementKey, newVal)
      this.sendInputEvent(newVal)
    }
  },
  methods: {
    optionText ( option ) { return t18ChecksetOption(this.element, option)},
    setInitialValue (value) {
      // Take the db stored value (csv string) and convert to array of strings
      this.checkValues = EhrCheckset.dbValueToCheckSet(value)
    },
    setup () {
    }
  }
}
</script>
