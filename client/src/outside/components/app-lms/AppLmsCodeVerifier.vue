<template lang="pug">
div(id="appLmsCode")
  div
    input(type='text', v-model='accessCode')
  div
    ui-button(value="lms-start-code", :disabled="!isAccessCodeValid", @buttonClicked="submitAccessCode")
      span Verify
  div(v-if='inDevAccessCode') access code only visible on dev {{ inDevAccessCode }}
</template>

<script>
// emits validateError or validatedCode

import UiButton from '@/app/ui/UiButton.vue'
import { codeValidate } from '@/ehr-definitions/app-lms/app-lms-utils'
import InstoreHelper from '@/store/modules/instoreHelper'
import axios from 'axios'

export default {
  components: {
    UiButton
  },
  data () {
    return {
      accessCode: '',
    }
  },
  computed: {
    inDevAccessCode () { return this.$store.getters['appLmsStore/inDevAccessCode']},
    appLmsAccessToken () { return this.$store.getters['appLmsStore/appLmsAccessToken']},
    appLmsUserToken () { return this.$store.getters['appLmsStore/appLmsUserToken']},
    isAccessCodeValid () { return codeValidate(this.accessCode) },
  },
  methods: {
    async submitAccessCode () {
      let errorMessage = ''
      const accessCode = this.accessCode
      const accessToken = this.appLmsAccessToken
      let url = InstoreHelper.composeUrl(null, 'app-lms', 'verify-access-code')
      let response = await axios.post(url, { accessToken, accessCode })
        .catch(error => {
          response = error.response
          console.log('Error submitAccessCode response', response)
          if (response.status === 401 || response.status === 400) {
            errorMessage = 'That code did not work.'
          } else {
            errorMessage = 'Something else is wrong.'
          }
        })
      if (response) {
        const { status, data } = response
        if (status === 200 && data && data.appLmsUserToken) {
          let appLmsUserToken = data.appLmsUserToken
          await this.$store.dispatch('appLmsStore/setAppLmsUserToken', appLmsUserToken)
          this.$emit('validatedCode')
        } else {
          errorMessage = 'No data in submitAccessCode response.'
        }
      }
      if (!!errorMessage) {
        console.log('emit errorMessage', errorMessage)
        this.$emit('validateError', errorMessage)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
