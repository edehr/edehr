<template lang="pug">
  section(v-if="hasErrMsg")
    hr
    div Something went wrong.
    div {{ apiErrorMessage }}
    ui-button(value="lms-reset-error", @buttonClicked="resetError") Reset
    div Press reset if you wish to start again.
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import { HOME_PAGE} from '@/router'

export default {
  components: {
    UiButton
  },
  data () {
    return {
    }
  },
  computed: {
    hasErrMsg () { return !!this.apiErrorMessage },
    apiErrorMessage () { return this.$store.getters['system/apiError']},
  },
  methods: {
    resetError () {
      StoreHelper.setApiError('')
      this.$store.dispatch('appLmsStore/appLmsReset')
      this.$router.push({name: HOME_PAGE} )
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
