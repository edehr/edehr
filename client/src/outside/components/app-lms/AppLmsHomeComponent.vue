<template lang="pug">
  div(class="content app-lms-home")
    hr
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
      // keep and use once app lms is running
      div You are logged in as {{ message }} from {{lmsName}}
      div(class="enter-lms-buttons")
        div
          ui-button(value="lms-goto", @buttonClicked="goToRouteName") Go to your {{goToLabel}}
        div
          ui-button(value="lms-logout", @buttonClicked="signOut") Sign out
    section(v-else)
      ui-button(value="lms-goto", @buttonClicked="gotoAppLmsAccess")
        span Access application
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import { APP_LMS_DASH_ROUTE_NAME } from '@/router'

export default {
  components: {
    UiButton
  },
  data () {
    return {
    }
  },
  computed: {
    appLmsUserToken () { return this.$store.getters['appLmsStore/appLmsUserToken']},
    isActive () { return (this.isStudent || this.isInstructor) && ! this.isDemo  },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    lmsName () { return StoreHelper.lmsName() },
    lmsDisplayName () { return this.$store.getters['consumerStore/lmsDisplayName'] },
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
  },
  methods: {
    signOut () {
      if (this.isDemo) {
        StoreHelper.exitFullDemo()
      } else {
        StoreHelper.logUserOutOfEdEHR()
      }
    },
    gotoAppLmsAccess () { this.$router.push({ name: 'AppLmsAccessS1' }) },
    gotoAppLmsDashboard () { this.$router.push({ name: APP_LMS_DASH_ROUTE_NAME }) },
    appLmsLogOut () { this.$store.dispatch('appLmsStore/appLmsLogOut') },
  },
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

