<template lang="pug">
  div(class="content app-lms-home")
    hr
    //h4 Start Now
    //div(v-if="hasErrMsg")
    //  div Can not show you the demonstration features because there is a system error.
    //  div.instructions {{ apiErrorMessage }}
    section(v-if="isDemo")
      div Coding error. Do not show this component if user is logged into the old style full demo
    section(v-if="!!appLmsUserToken")
      div You are logged into the App LMS area.
      div(class="enter-lms-buttons")
        ui-button(value="lms-goto", @buttonClicked="gotoAppLmsDashboard")
          span Dashboard
        ui-button(value="lms-goto", @buttonClicked="appLmsLogOut")
          span Log out
    section(v-else-if="isActive")
      div You are logged in as {{ message }} from {{lmsName}}
      div(class="enter-lms-buttons")
        div
          ui-button(value="lms-goto", @buttonClicked="goto") Go to your {{goToLabel}}
        div
          ui-button(value="lms-logout", @buttonClicked="signOut") Sign out
    section(v-else-if="processStage === 'stage1'")
      div(class="instructions").
        Enter your email address, to access the EdEHR.
        We will only use your address to help you use the application.
      div(id="appToEmail")
          input(type='text', v-model='userEmail')
          span &nbsp;
          ui-button(value="lms-start-getEmail", :disabled="!isUserEmailValid", @buttonClicked="submitUserEmail")
            span Submit

    section(v-else-if="processStage === 'stage2'")
      div(class="instructions").
        Go check your inbox and get the access code, that was just sent to you. Copy and Paste or type the code here.
      div(id="appLmsCode")
        input(type='text', v-model='accessCode')
        span &nbsp;
        ui-button(value="lms-start-code", :disabled="!isAccessCodeValid", @buttonClicked="submitAccessCode")
          span Go to EdEHR
      div(v-if="codeNotFound") The code you entered is invalid. Perhaps it has expired?
    section(v-else-if="processStage === 'error'")
      div Something went wrong.
      div {{ apiErrorMessage }}
      ui-button(value="lms-reset-error", @buttonClicked="resetError") Reset
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { appLmsClientSendEmail, appLmsClientVerifyAccessCode } from '@/helpers/app-lms-helper'
import StoreHelper from '@/helpers/store-helper'
import { codeValidate, emailValidate } from '@/ehr-definitions/app-lms/app-lms-utils'

export default {
  components: {
    UiButton
  },
  data () {
    return {
      readyToVerify: false,
      codeNotFound: false,
      processStage: 'stage1',
      userValue: '',
      accessCode: '',
      accessToken: '',
      userEmail: 'bryan.gilbert@gmail.com',
      tip1: 'See what a medical student will experience when using the EdEHR. Includes a sample patient case study.',
      tip2: 'See how the EdEHR works within a mocked up learning management system. You can log in either as faculty or as a student. Faculty can configure the EdEHR, create course content and see their class lists and evaluate student work.'
    }
  },
  computed: {
    appLmsEnabled () { return this.$store.getters['appLmsStore/appLmsEnabled']},
    goButtonLabel () { return 'Enter' },
    appLmsUserToken () { return this.$store.getters['appLmsStore/appLmsUserToken'] },
    isActive () { return (this.isStudent || this.isInstructor) && ! this.isDemo  },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    lmsName () { return StoreHelper.lmsName() },
    lmsDisplayName () { return this.$store.getters['consumerStore/lmsDisplayName'] },
    hasErrMsg () { return !!this.apiErrorMessage },
    apiErrorMessage () { return this.$store.getters['system/apiError']},
    message () {
      let msg
      if (this.isStudent) {
        msg = 'a student'
      } else if (this.isInstructor) {
        msg = 'an instructor'
      } else {
        msg = 'Tell us how you go to this point. Email us at info@edehr.org'
      }
      return msg
    },
    goToLabel () {
      let msg
      if (this.isStudent) {
        msg = 'activity'
      } else if (this.isInstructor) {
        msg = 'course list'
      } else {
        msg = 'not sure where you need to go'
      }
      return msg
    },
    goToRouteName () {
      let msg
      if (this.isStudent) {
        msg = 'ehr'
      } else if (this.isInstructor) {
        msg = 'courses'
      } else {
        msg = 'demo'
      }
      return msg
    },
    isUserEmailValid () { return emailValidate(this.userEmail) },
    isAccessCodeValid () { return codeValidate(this.accessCode) },
    isUserValueValid () {
      let isEmail = emailValidate(this.userValue)
      let isCode = codeValidate(this.userValue)
      return isEmail || isCode
    },
  },
  methods: {
    signOut () {
      if (this.isDemo) {
        StoreHelper.exitFullDemo()
      } else {
        StoreHelper.logUserOutOfEdEHR()
      }
    },
    gotoAppLmsDashboard () { this.$router.push({ name: 'appLmsHome' }) },
    appLmsLogOut () { this.$store.dispatch('appLmsStore/appLmsLogOut') },
    goto () {
      const routeName = this.goToRouteName
      this.$router.push({ name: routeName })
    },
    goStage1 () {
      this.processStage = 'stage1'
    },
    goStage2 () {
      this.processStage = 'stage2'
    },
    goStageError () {
      this.processStage = 'error'
    },
    async resetError () {
      this.goStage1()
      await StoreHelper.setApiError('')
    },
    async submitUserEmail () {
      console.log('submitUserEmail. ', this.userEmail)
      try {
        const response = await appLmsClientSendEmail(this.userEmail)
        const { status, data } = response
        if (status === 200 && data && data.accessToken) {
          this.accessToken = data.accessToken
          console.log('submitUserEmail. Got this data response', data)
          this.goStage2()
        } else {
          console.error('submitUserEmail. Got this error response', response)
          this.goStageError()
        }
      } catch (err) {
        console.error('submitUserEmail. Try got this error response', err)
        this.goStageError()
      }
    },
    async submitAccessCode () {
      console.log('submitAccessCode. ', this.accessToken, this.accessCode)
      try {
        const response = await appLmsClientVerifyAccessCode(this.accessToken, this.accessCode)
        const { status, data } = response
        if (status === 200 && data && data.appLmsUserToken) {
          const appLmsUserToken = data.appLmsUserToken
          console.log('Got this response', appLmsUserToken)
          await this.$store.dispatch('appLmsStore/setAppLmsUserToken', appLmsUserToken)
          await this.gotoAppLmsDashboard()
        } else {
          console.error('submitAccessCode. Got this error response', response)
          this.goStageError()
        }
      } catch (err) {
        console.error('submitAccessCode. Try got this error response', err)
        this.goStageError()
      }
    },
    proceedDemoToolConsumerCreation () {
      const demoHelper = new DemoHelper()
      demoHelper.proceedDemoToolConsumerCreation()
        .then( () => {
          this.$router.push('demo')
        })
        .catch(err => {
          let msg = err
          if (err && err.response && err.response.status === 429) {
            let msg = 'Too many attempts to create a demo.'
            StoreHelper.setApiError(msg)
            msg += ' For security reasons you will now need to wait a long time. See the page footer to find out how to contact help.'
            console.error(msg)
          } else {
            console.error('Demo consumer creation error: ', msg)
            StoreHelper.setApiError(msg)
          }
        })
    }
  },
  watch: {
    isUserValueValid () {
      if( this.isUserValueValid ) {
        this.readyToVerify = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

.app-lms-home {
  .hidden {
    display: none;
  }
  h4 {
    color: $white;
    background-color: $toolbar-background-color;
    padding: 1rem 0;
    border-radius: 6px;
  }
  .instructions {
    text-align: left;
  }
  .button {
    background-color: $toolbar-background-color;
    color: white;
    border-radius: 8px;
    font-size: 1.5rem;
    padding: 1.5rem 1rem;
  }

  a {
    color: white;
    font-weight: bold;
  }
}
</style>

