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
      div(v-if="isDemo") isDemo {{isDemo}}
        div You are already logged into the demonstration. &nbsp;
          ui-link(:name="'demoLms'") Click here to return to the demonstration page.
      div(v-if="!isDemo")
        form
          div(class="ehr-group-wrapper")
            div
              p The EdEHR is a prototype web application.
              p Any data that you enter while using this demonstration mode may be lost if the application is significantly changed.  If you use the demonstration mode to create any course content then please download your work regularly. Send an email to &nbsp;
                a(href="mailto://info@edehr.org?subject=EdEHR Demo Mode!&body=Hi EdEHR\nMy question is...", target="_blank", rel="noopener noreferrer")
                  span info@edehr.org &nbsp;
                  fas-icon(class="fa", icon="envelope")
                span &nbsp; if you have any questions.
              p To enter the demo mode please provide your email address. Press next and then go to your email and look for a verification code from <strong>no-reply@npuser.org'</strong>.
          div(class="ehr-group-wrapper")
            div(class="text_input_wrapper")
              label(for="email") Enter your email address
              input(type="email", v-model="email", id="email", name="email", required)

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import DemoAccess from '@/demo/DemoAccess.vue'
import UiLink from '@/app/ui/UiLink.vue'
import { demoText } from '@/appText'

export default {
  components: {
    DemoAccess,
    UiButton, UiLink
  },
  data () {
    return {
      persona: '',
      demoText: demoText
    }
  },
  computed: {
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    isFormValid () {
      return Object.keys(this.persona).length > 0
    }
  },
  methods: {
    async logoutUser () {
      await StoreHelper.logUserOutOfEdEHR()
      // refresh this page
      this.$router.go(0)
    },
    proceedDemoToolConsumerCreation () {
      const demoHelper = new DemoHelper()
      demoHelper.proceedDemoToolConsumerCreation()
        .then( () => {
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
