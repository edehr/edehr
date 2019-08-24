<template lang="pug">
  div(class="ehr-page-form")
    h2(class="headerClass") {{ form.label }} (pKey: {{pageDataKey}})
    ehr-page-form-controls(class="headerControl", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :formKey="formKey")
    ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp")
</template>

<script>
import EhrPageFormControls from './EhrPageFormControls'
import EhrGroup from './EhrGroup'

export default {
  name: 'EhrPageForm',
  components: {
    EhrPageFormControls,
    EhrGroup,
  },
  inject: [ 'pageDataKey'],
  provide () {
    return {
      isPageElement: true,
      isTableElement: false,
      tableKey: undefined
    }
  },
  data: function () {
    return {
    }
  },
  props: {
    form: {type : Object },
    ehrHelp: { type: Object }
  },
  computed: {
    formKey () {
      return this.form.elementKey
    },
    groups () {
      return this.form.ehr_groups
    },
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },
  },
}
</script>

<style lang="scss" scoped>
.ehr-page-form {
  margin-bottom: .5em;
}

.assignment-save{
  font-style: italic;
  margin-top: 5em;
}
.ehr-page-form {
  position: relative;
}
  .headerClass {
    display: inline-block;
  }
.headerControl {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
