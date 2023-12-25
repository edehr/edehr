<template lang="pug">
  div(:class="css", class="form_label_wrapper", v-if="showLabel")
    label(v-if="hasLabel", v-html="label", :for="forElement", class="form_label", :class='{form_label_mandatory: useMandatoryCss}')
    ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")
    span(v-else, class='ui-info-placeholder') &nbsp;
</template>

<script>
import UiInfo from '../../../app/ui/UiInfo'
import { t18ElementLabel, t18HelperHtmlText, t18HelperText } from '@/helpers/ehr-t18'

export default {
  name: 'EhrPageFormLabel',
  components: { UiInfo},
  data: function () {
    return {
    }
  },
  props: {
    element: { type: Object, require: true },
    ehrHelp: { type: Object, require: true },
    css: { type: String },
    forElement: { type: String }
  },
  inject: ['isEmbedded'],
  computed: {
    label () { return t18ElementLabel(this.element)},
    hasLabel () { return !! this.label},
    helperText () { return t18HelperText(this.element)},
    helperHtml () { return t18HelperHtmlText(this.element)},
    showLabel () { return !(this.element.formOption === 'hideLabel')},
    useMandatoryCss () {
      return !!this.element.mandatory &&
        !this.isEmbedded &&
        this.ehrHelp.isAnythingHappening()
    }
  }
}
</script>
