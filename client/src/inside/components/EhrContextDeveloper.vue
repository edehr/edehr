<template lang="pug">
  div(class="contextDeveloper")
    div(class="contextDeveloper_content columns")
      div(class="is-6 column")
        div(class="textField") Name: {{ sSeedContent.name }}
        div(class="textField") Version: {{ sSeedContent.version}}
        div(class="textField") Description: {{ sSeedContent.description}}
        div(class="textField") Ehr: {{ sSeedContent.ehrData}}
</template>

<script>
import UiInfo from '../../app/ui/UiInfo'

export default {
  name: 'EhrContextDeveloper',
  components: { UiInfo },
  computed: {
    sSeedContent() {
      return this.$store.state.seedStore.sSeedContent || {}
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.contextDeveloper {
  background-color: white;
}
</style>
