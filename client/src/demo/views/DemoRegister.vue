<template lang="pug">
  div(class="columns is-centered")
    section(class="content")
      h2(class="has-text-centered") EdEHR Demonstration
      div(class="columns", v-if="isInstructor")
        div(class="column is-6") You are logged in as an instructor.  &nbsp;
        div(class="column is-3")
          ui-link(:name="'instructor'") Go to your course lists.
        div(class="column is-2")
          ui-button(@buttonClicked="logoutUser") Sign out as instructor
      div(class="columns", v-if="isStudent")
        div(class="column is-6") You are logged in as a student. &nbsp;
        div(class="column is-3")
          ui-link(:name="'ehr'") Go to your assignment.
        div(class="column is-2")
          ui-button(@buttonClicked="logoutUser") Sign out as student
      div(v-if="isDemo")
        div You are already logged into the demonstration. &nbsp;
          ui-link(:name="'demoLms'") Click here to return to the demonstration page.
      div(v-if="!isDemo")
        demo-email-form(v-if="isPendingUserEmail", v-on:email-sent="authUser($event)")
        div(class="mb-2", v-if="email") Email sent to: {{ email }}
        demo-v-code-form(v-if="isPendingVerificationCode", v-on:vcode-sent="verifyUser($event)", v-on:cancel="cancelDemo()")
        p(v-if="errMsg", class="error-text") {{errMsg}}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import DemoHelper from '@/demo/demo-helper'
import DemoEmailForm from '@/demo/DemoFormEmail.vue'
import DemoVCodeForm from '@/demo/DemoFormVCode.vue'
import UiLink from '@/app/ui/UiLink.vue'
import { demoText } from '@/demo/demoText'
/*
p The EdEHR is a prototype web application.
p
input(type="checkbox", v-model="consent", id="consent", name="consent", required)
label(for="consent") I understand

 */
export default {
  components: {
    DemoEmailForm, DemoVCodeForm,
    UiButton, UiLink
  },
  data () {
    return {
      // text
      demoText: demoText,
      // user inputs
      email: '',
      consent: false,
      vcode: '',
      // logic control
      isPendingUserEmail: true,
      isPendingVerificationCode: false,
      errMsg: undefined
    }
  },
  computed: {
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
  },
  methods: {
    cancelDemo () {
      this.email = ''
      this.vcode = ''
      this.consent = false
      this.isPendingUserEmail = true
      this.isPendingVerificationCode = false
    },
    async authUser (email) {
      console.log('authUser with email', email)
      this.errMsg = undefined
      try {
        await StoreHelper.submitDemoUserEmail(email)
        this.email = email
        this.isPendingUserEmail = false
        this.isPendingVerificationCode = true
      } catch (error) {
        let err = error.response ? error.response : error
        let data = err.data ? ( err.data.message ? err.data.message : err.data ) : undefined
        let msg = data ? data : (err.message ? err.message : err)
        // console.log(msg)
        this.errMsg = msg
      }
    },
    async verifyUser (vcode) {
      console.log('user provided vcode and consented too', vcode)
      this.vcode = vcode
      this.isPendingVerificationCode = false
      this.createDemo()
    },
    async logoutUser () {
      await StoreHelper.logUserOutOfEdEHR()
      this.cancelDemo()
      // refresh this page
      this.$router.go(0)
    },
    gotoDemoRegister () {
      this.$router.push({ name: 'demoRegister' })
    },
    createDemo () {
      const demoHelper = new DemoHelper()
      demoHelper.proceedDemoToolConsumerCreation()
        .then( () => {
          console.log('go to lms')
          this.$router.push('demoLms')
        })
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';

  .content {
    font-size: 1.2rem;
    width: 99%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media only screen and (min-width : 1025px) {
      width: 90%;
    }
    @media only screen and (min-width : 1440px) {
      width: 1024px;
    }
  }

</style>
