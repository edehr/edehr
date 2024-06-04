<template lang="pug">
  div
    section(v-if="!hasErrMsg")
      div(id="appToEmail")
          input(type='text', v-model='userEmail')
          span &nbsp;
          ui-button(value="lms-start-getEmail", :disabled="!isUserEmailValid", @buttonClicked="submitUserEmail")
            span Login
      p.
        We only use your email address to help you use the application.
      p(v-if='inviteCode')  Will include this invite code: "{{inviteCode}}"

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { emailValidate } from '@/ehr-definitions/app-lms/app-lms-utils'
const IS_DEV = window.origin.includes('localhost')
export default {
  components: {
    UiButton
  },
  props: {
    inviteCode: { type: String}
  },
  data () {
    return {
      userEmail: IS_DEV ? 'bryan.gilbert@gmail.com' : ''
    }
  },
  computed: {
    hasErrMsg () { return !!this.apiErrorMessage },
    apiErrorMessage () { return this.$store.getters['system/apiError']},
    isUserEmailValid () { return emailValidate(this.userEmail) },
  },
  methods: {
    async submitUserEmail () {
      console.log('submitUserEmail. ', this.userEmail)
      const payload = {
        toEmail: this.userEmail,
        inviteCode: this.inviteCode
      }
      await this.$store.dispatch('appLmsStore/setAppLmsClientSendEmail', payload)
      if (!this.hasErrMsg) {
        this.$emit('submitUserEmail')
      }
    },
  },
}
</script>

<!--<style lang="scss" scoped>-->
<!--@import '../../../scss/definitions';-->
<!--</style>-->

