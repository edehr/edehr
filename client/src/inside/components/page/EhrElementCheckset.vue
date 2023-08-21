<template lang="pug">
  div(class="checkset_wrapper", :class='formCss')
    ehr-page-form-label(:ehrHelp="ehrHelp", :element="element", css="checkset_label")
    div(class="checkset_list")
      div(v-for="option in checkOptions")
        label
          input(class="checkbox", type="checkbox", :disabled="disabled || viewOnly", :value="option.prop", v-model="checkValues")
          span {{ option.text}}
    //div(style="display:none") computedInitialValue {{computedInitialValue}}
</template>

<script>
import EhrElementCommon from './EhrElementCommon'
import EhrCheckset from '@/ehr-definitions/ehr-checkset'

const debug = false

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  data () {
    return {
      checkValues: [],
    }
  },
  computed : {
    options () { return this.element.options },
    checkOptions () { return EhrCheckset.optionsToChecklist(this.options) }
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
    setInitialValue (value) {
      // Take the db stored value (csv string) and convert to array of strings
      this.checkValues = EhrCheckset.dbValueToCheckSet(value)
    },
    setup () {
    }
  }
}
</script>
