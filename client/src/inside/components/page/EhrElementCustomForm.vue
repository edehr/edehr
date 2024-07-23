<template lang='pug'>
  div(:id='mainId')
    div(v-if='duplicateIds', class='errorMessage') Can not show the custom form because it contains duplicate identifiers. ---{{ duplicateIds }}---
    div(v-else)
      div(id='customForm',
        v-text-to-html.noAutoLink="customHtml",
        class='ehr-custom-form',
        :class='{ viewOnly: viewOnly}',
        @change='formChanged')
</template>

<script>
import EhrElementCommon from '@/inside/components/page/EhrElementCommon'
import { CustomFormMedOrderHelper} from '@/helpers/custom-form-med-orders'
import { CustomFormHelper } from '@/helpers/custom-form-helper'

const medHelper = new CustomFormMedOrderHelper()


/*
The entry point is when the ehr common sets the initialValues value. This component then creates the inner html and uses the starting values.  See setInitialValueExtended
 */


export default {
  extends: EhrElementCommon,
  components: {},
  props: {
    devMode: { type : Boolean, default: false },
  },
  data () {
    return {
      customHtml: '',
      duplicateIds: undefined,
      initialValues: '',
      formHelper: {}
    }
  },
  computed: {
    mainId () {
      return this.element.elementKey
    }
  },
  methods: {
    getHtml () {
      const fName = this.devMode ? 'atester'  :this.element.formOption
      return require('../../../custom_forms/' + fName + '.txt')
    },
    setInitialValueExtended (value) {
      this.customHtml = '' // clear any previous html content to remove any residual values that may have been cancelled earlier
      // if(value) { // else this element is on a form of the page but is not the one being opened (e.g. another order set
      // this is invoked by EhrElementCommon when the element's initial value is set.
      // Here we rebuild the html with the given input values
      // value = '{"meto_include":true,"pca_drug_hydro":true,"mse8_sui_plan_no":true,"mse8_sui_plan":"no","radioDoseLow":true,"radioDose":"1 to 3 mg","meto_amt_high":true,"meto_amt":"10 to 20 mg","mor_max":"10"}'
      // console.log('EECF setInitialValueExtended', this.elementKey, 'incoming value:', value)
      this.initialValues = value || {}
      // Early development stored the form value directly in the object. We changed this when we started to store medication orders
      this.initialValues = this.initialValues.formValues || this.initialValues
      // no need to extract the med orders stashed in the initial values because they are all generated from the form values
      this.formValues = {}
      this.formHelper = new CustomFormHelper(this.viewOnly, this.initialValues)
      // set the inner html. Vue reactivity will load the dom
      this.customHtml = this.formHelper.buildForm(this.formValues, this.getHtml(), medHelper)
      medHelper.updateAllMedOrders(this.formValues)
      // }
    },
    formChanged (event) {
      let { id, value, checked } = event.target
      // Step 1: UPDATE form values
      this.formHelper.formChanged(id, value, checked, this.formValues)
      // console.log('----- this.formValues', JSON.stringify(this.formValues))
      // UPDATE med orders
      const medOrders = medHelper.updateAllMedOrders(this.formValues)
      // FINAL STEP --- push new EHR value into this.inputVal which will trigger the watch in ehr common
      const combined = { formValues: this.formValues, medOrders: medOrders }
      console.log('Output of custom form', combined)
      if(this.devMode) { return } // skip if form is on dev component
      this.inputVal = combined
    },
  }
}
</script>
