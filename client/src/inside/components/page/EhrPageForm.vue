<template lang="pug">
  div 
    div(class="ehr-page-form")
      h2(class="headerClass")
      div(style="display:inline") {{ form.label }}
      ehr-page-form-controls(class="headerControl", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :formKey="formKey")
      div(v-show="errors.length")
        p Fix the following:
        ul
          li(v-for="error in errors") {{ error }}
      ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp")
      div(v-if="canEdit", class="resetFormButton")
        ui-button(
          v-on:buttonClicked="promptConfirmDialog", 
          v-bind:secondary="true",
          :disabled="ehrHelp.isEditingForm(formKey)"
        ) Reset form data
    ui-confirm(ref="confirmDialog", @confirm="resetFormData")
</template>

<script>
import EhrPageFormControls from './EhrPageFormControls'
import EhrGroup from './EhrGroup'
import UiConfirm from '../../../app/ui/UiConfirm'
import UiButton from '../../../app/ui/UiButton.vue'

const TEXT = {
  TITLE:  'Reset Form Data',
  MSG: 'Are you sure you want to reset the data? This will reset everything as seed data.'
}


export default {
  name: 'EhrPageForm',
  components: {
    EhrPageFormControls,
    EhrGroup,
    UiConfirm,
    UiButton
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
    canEdit () {
      return this.ehrHelp._canEdit()
    },
    formKey () {
      return this.form.elementKey
    },
    groups () {
      return this.form.ehr_groups
    },
    errors () {
      return this.ehrHelp.getPageErrors(this.formKey)
    },
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : 'noClass'
    },

    promptConfirmDialog : function () {
      this.$refs.confirmDialog.showDialog(TEXT.TITLE, TEXT.MSG)
    },

    resetFormData: function () {
      const children = []
      this.form.ehr_groups.map(g=>{
        g.gChildren.map(k=>{
          children.push(k)
          return k
        })
        return g
      })
      this.ehrHelp.resetFormData(children)
    }
  },
}
</script>

<style lang="scss">

.resetFormButton {
  display: flex;
  justify-content: flex-end;
  button {
    margin-top: 0;
    margin-bottom: 0 !important;
  }
}

.ehr-page-form {
  margin-bottom: .5em;
}

.ehr-page-form {
  position: relative;
}

.headerClass {
    display: inline-block;
  }
.headerControl {
  display: block;
  margin-bottom: 10px;
}

</style>
