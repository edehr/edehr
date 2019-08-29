<template lang="pug">
  div(:class="css")
    label(v-if="showLabel", v-html="label", :for="forElement")
    ui-info(v-if="helperText", :title="label", :html="helperHtml", :text="helperText")
</template>

<script>
import UiInfo from '../../../app/ui/UiInfo'

export default {
  name: 'EhrPageFormLabel',
  components: { UiInfo},
  data: function () {
    return {
      label: '',
      helperHtml: '',
      helperText: '',
      showLabel: true,
    }
  },
  props: {
    element: { type: Object },
    css: { type: String },
    forElement: { type: String }
  },
  methods: {
    setupCommon () {
      const element = this.element
      this.showLabel = !(element.formOption === 'hideLabel')
      this.label = element.label
      this.helperText = element.helperText
      this.helperHtml = element.helperHtml
    }
  },
  mounted: function () {
    this.setupCommon()
  }
}
</script>
