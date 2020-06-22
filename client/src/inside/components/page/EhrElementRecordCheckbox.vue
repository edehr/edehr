<template lang="pug">
    div
      input(id="record-checkbox",class="checkbox", type="checkbox", v-model="checked")
      ehr-page-form-label(css="checkbox_label, check-label", forElement="record-checkbox")
</template>

<script>
import StoreHelper from '../../../helpers/store-helper'
import EhrPageFormLabel from './EhrPageFormLabel'
export default {
  data () {
    return {
      checked: false
    }
  },
  components: {
    EhrPageFormLabel
  },
  computed: {
    personaData () {
      return StoreHelper.getAssignmentPersonaData()
    },
  }
}
</script>