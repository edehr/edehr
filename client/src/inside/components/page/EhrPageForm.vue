<template lang="pug">
  div(class="ehr-page-form")
    h2(class="headerClass")
    div(style="display:inline") {{ form.label }}
    ehr-page-form-controls(class="headerControl", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :formKey="formKey")
    div(v-show="errors.length")
      p Fix the following:
      ul
        li(v-for="error in errors") {{ error }}
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
      tableKey: undefined,
      formKey: this.formKey
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
    errors () {
      return this.ehrHelp.getPageErrors(this.formKey)
    }
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },
  },
}
</script>

<style lang="scss">
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
