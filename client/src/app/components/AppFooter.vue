<template lang="pug">
  footer
    div(class="footer-section")
      div(class="about-list") About
        span &nbsp; the &nbsp;
        ui-link(name="aboutEdEHR")
          span EdEHR project
        span , &nbsp; the &nbsp;
        ui-link(name="aboutSaaS")
          span edehr.org services
        span , &nbsp; and &nbsp;
        ui-link(name="aboutCollaborations")
          span collaborations
      div Open source code <a href="https://github.com/edehr/edehr" target="_blank"> EdEHR github repository </a>
      div Content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a> except where otherwise noted.
      div EdEHR software is licensed under <a href="https://github.com/edehr/edehr/blob/master/LICENSE" target="_blank">GNU Affero General Public License v3.0</a>
      div Application version: {{ appVersion }}.
      a(href="https://github.com/edehr/edehr/wiki/Version-release-notes",  target="_blank") Version release notes.
    div(class="footer-section", v-if="showEdEhrOrg")
      ed-ehr-org-footer
    div(class="footer-section")
      div {{ apiData.appTitle }}
      div {{ authData.timeRemaining }}
    div(v-if="isAdminZone", class="error-testing")
      button(@click="throwError")  error testing
    ui-button(@buttonClicked="toggleAppLms")
      span {{ appLmsEnabled ? 'Disable App LMS ' : 'Enable App LMS' }}
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EdEhrOrgFooter from '@/app/edehr-org/EdEhrOrgFooter'
import edherorg from '@/app/edehr-org/ed-ehr-org'
import UiLink from '@/app/ui/UiLink'
import UiButton from '@/app/ui/UiButton.vue'
export default {
  components: {
    UiButton,
    UiLink,
    EdEhrOrgFooter
  },
  computed: {
    appLmsEnabled () { return this.$store.getters['appLmsStore/appLmsEnabled']},
    apiData () { return StoreHelper.getApiData()   },
    authData () { return StoreHelper.getAuthData() },
    appVersion () {
      return StoreHelper.getAppVersion()
    },
    classMain () {
      return this.showEdEhrOrg ? 'is-6' : 'is-12'
    },
    isAdminZone () { return StoreHelper.inZoneAdmin() },
    showEdEhrOrg () {
      return edherorg.isEdEhrOrg()
    },
  },
  methods: {
    throwError () {
      throw new Error('Sentry Error')
    },
    toggleAppLms () {
      console.log('toggle app lms', this.appLmsEnabled)
      this.$store.dispatch('appLmsStore/setAppLmsEnabled', !this.appLmsEnabled)
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
footer {
  display: flex;
  flex-direction: column;

  .about-list > a{
    display: inline-block;

  }
  a {
    color: white;
  }
  .footer-section {
    margin-bottom: 1rem;
  }
}
.error-testing button {
  background-color: transparent;
  color: black
}
</style>
