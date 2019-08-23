<template lang="pug">
  div(class="ehr-page-form")
    h2(v-if="form.label") {{ form.label }}
    div(slot="controls", v-show="showPageFormControls")
      ehr-edit-controls(:ehrHelp="ehrHelp", :pageDataKey="pageDataKey")
    ehr-group(v-for="group in groups", :group="group", :ehrHelp="ehrHelp", :theData="theData")
</template>

<script>
import EhrEditControls from '../../components/EhrEditControls.vue'
import EhrGroup from './EhrGroup'

export default {
  name: 'EhrPageForm',
  components: {
    EhrEditControls,
    EhrGroup,
  },
  provide () {
    return {
      isPageElement: true,
      pageDataKey: this.pageDataKey
    }
  },
  data: function () {
    return {
      // theData: {}
    }
  },
  props: {
    form: {type : Object },
    ehrHelp: { type: Object },
    pageDataKey: {type: String },
    theData: { type: Object }
    /*
    { "elementKey": "form1", "formKey": "form1", "isPageForm": true, "ehr_groups": { "1": { "gIndex": "1", "gChildren": { "1": "pform_label", "2": "pspacer", "3": "ptext", "4": "pcheckbox", "5": "ptextpcheckbox", "6": "passetLink", "7": "pselect", "8": "pselect2", "9": "p-cValue1" } }, "2": { "gIndex": "2", "gChildren": { "1": { "label": "subgroup 1", "sgChildren": [ "pcheckset" ] }, "2": { "label": "subgroup 2", "sgChildren": [ "ptext1", "ptextarea1", "pselect1", "p-cValue2" ] }, "3": { "label": "subgroup 3", "sgChildren": [ "pcheckbox2", "ptext2", "pform_label2", "pspacer2", "passetLink2", "pdate2" ] } } } } }
     */
  },
  computed: {
    groups () {
      return this.form.ehr_groups
    },
    showPageFormControls () {
      return true //return this.ehrHelp.showPageFormControls()
    },
    showEditControls () {
      return true // return this.ehrHelp.showEditControls()
    },
    notEditing () {
      return !this.ehrHelp.isEditing()
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
  background-color: #87ceeb;
  padding: 5px;
  margin-bottom: .5em;
}

.assignment-save{
  font-style: italic;
  margin-top: 5em;
}
</style>
