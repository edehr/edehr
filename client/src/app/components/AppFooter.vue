<template lang="pug">
  footer
    div(class="footer-section")
      div(class="about-list") About
        ui-link(name="aboutEdEHR")
          span the EdEHR project
        ui-link(name="aboutSaaS")
          span edehr.org services
        ui-link(name="aboutCollaborations")
          span Collaboration
      div Open source code <a href="https://github.com/edehr/edehr"> EdEHR Github repository </a>
      div Content on this site is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a> except where otherwise noted.
      div EdEHR software is licensed under <a href="https://github.com/edehr/edehr/blob/master/LICENSE">GNU Affero General Public License v3.0</a>
      div Application version {{ appVersion }}.   Version release notes here: <a href="https://github.com/edehr/edehr/wiki/Version-release-notes">https://github.com/edehr/edehr/wiki/Version-release-notes</a>
    div(class="footer-section", v-if="showEdEhrOrg")
      ed-ehr-org-footer
    div(class="footer-section")
      div {{ apiData.appTitle }}
      div {{ authData.timeRemaining }}
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EdEhrOrgFooter from '@/app/edehr-org/EdEhrOrgFooter'
import edherorg from '@/app/edehr-org/ed-ehr-org'
import UiLink from '@/app/ui/UiLink'
export default {
  components: {
    UiLink,
    EdEhrOrgFooter
  },
  computed: {
    apiData () { return StoreHelper.getApiData()   },
    authData () { return StoreHelper.getAuthData() },
    appVersion () {
      return StoreHelper.getAppVersion()
    },
    classMain () {
      return this.showEdEhrOrg ? 'is-6' : 'is-12'
    },
    showEdEhrOrg () {
      return edherorg.isEdEhrOrg()
    },
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
    margin-left: 3rem;
  }
  a {
    color: white;
  }
  .footer-section {
    margin-bottom: 1rem;
  }
}
</style>
