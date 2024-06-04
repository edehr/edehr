<template lang="pug">
  div(class="centered-wrapper")
    h1 Verification
    section
      p Go check your inbox and get the access code. Copy and paste or type the code here.
      div(id="appLmsCode")
        app-lms-code-verifier(@validateError='validateError', @validatedCode='validatedCode')
    section(v-if="hasErrMsg")
      div {{ errorMessage }}
    section()
      hr
      div Press reset if you wish to start again.
      ui-button(value="lms-reset-error", @buttonClicked="resetVerification") Reset
</template>

<script>
// This VIEW routes to appLmsAccess on reset and xxx on successful verification
import UiButton from '@/app/ui/UiButton.vue'
import { codeValidate } from '@/ehr-definitions/app-lms/app-lms-utils'
import StoreHelper from '@/helpers/store-helper'
import AppLmsCodeVerifier from '@/outside/components/app-lms/AppLmsCodeVerifier.vue'
import { APP_LMS_DASH_ROUTE_NAME, HOME_PAGE } from '@/router'

export default {
  components: {
    AppLmsCodeVerifier,
    UiButton
  },
  data () {
    return {
      accessCode: '',
      errorMessage: ''
    }
  },
  computed: {
    appLmsAccessToken () { return this.$store.getters['appLmsStore/appLmsAccessToken']},
    appLmsUserToken () { return this.$store.getters['appLmsStore/appLmsUserToken']},
    hasErrMsg () { return !!this.errorMessage },
    isAccessCodeValid () { return codeValidate(this.accessCode) },
  },
  methods: {
    resetVerification () {
      StoreHelper.setApiError('')
      this.$store.dispatch('appLmsStore/appLmsReset')
      this.$router.push({name: HOME_PAGE} )
    },
    validateError (err) {
      this.errorMessage = err
    },
    validatedCode () {
      this.$router.push({name: APP_LMS_DASH_ROUTE_NAME} )
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
