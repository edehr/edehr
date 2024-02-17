<template lang="pug">
  div
    div(id='theEhrPageForm', class="ehr-page-form")
      h2(class="headerClass")
      div(style="display:inline") {{ label }}
      ehr-page-form-controls(class="headerControl", :ehrHelp="ehrHelp", :pageDataKey="pageDataKey", :formKey="formKey")
      div(v-show="errors.length")
        p {{ehrText.instructionsFixErrors}}
        ul
          li(v-for="error in errors") {{ error }}
      ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp")
      div(v-if="canEdit", class="resetFormButton")
        ui-button(value="epf-reset",
          v-on:buttonClicked="promptConfirmDialog",
          :disabled="ehrHelp.isEditingForm(formKey)"
        ) {{ ehrText.buttonLabelResetForm }}
    ui-spinner-small(refId='theEhrPageForm', :loading="isLoading")
    ui-confirm(ref="confirmDialog", @confirm="resetFormData")
</template>

<script>
import EhrPageFormControls from './EhrPageFormControls'
import EhrGroup from './EhrGroup'
import UiConfirm from '../../../app/ui/UiConfirm'
import UiButton from '../../../app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import UiSpinnerSmall from '@/app/ui/UiSpinnerSmall.vue'
import { t18EhrText, t18ElementLabel } from '@/helpers/ehr-t18'
export default {
  name: 'EhrPageForm',
  components: {
    UiSpinnerSmall,
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
      formKey: this.formKey,
      isEmbedded: false
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
    ehrText () { return t18EhrText()},
    label () {
      return t18ElementLabel(this.form)
    },
    isLoading () { return StoreHelper.isLoading() },
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
    promptConfirmDialog : function () {
      this.$refs.confirmDialog.showDialog(
        this.ehrText.confirmDialogResetFormDataTitle,
        this.ehrText.confirmDialogResetFormDataBody
      )
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
