<template lang="pug">
  div(:class="css", v-if="showLabel")
    label(v-if="hasLabel", v-html="label", :for="forElement", class="form_label", :class='{form_label_mandatory: useMandatoryCss}')
    //ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")
    span(v-if="helperText") &nbsp; &nbsp;
</template>

<script>
import UiInfo from '../../../app/ui/UiInfo'

export default {
  name: 'EhrPageFormLabel',
  components: { UiInfo},
  data: function () {
    return {
      label: '',
      hasLabel: false,
      helperHtml: '',
      helperText: '',
      showLabel: true,
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
    useMandatoryCss () {
      return !!this.element.mandatory &&
        !this.isEmbedded &&
        this.ehrHelp.isAnythingHappening()
    }
  },
  methods: {
    setupCommon () {
      const element = this.element
      // only show the label if there is label content and the configuration permits it
      // this.showLabel = !(element.formOption === 'hideLabel') && element.label
      this.showLabel = !(element.formOption === 'hideLabel')
      this.label = element.label
      this.hasLabel = !!this.label
      this.helperText = element.helperText
      this.helperHtml = element.helperHtml
    }
  },
  mounted: function () {
    this.setupCommon()
  }
}
</script>
