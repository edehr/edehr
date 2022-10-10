<template lang="pug">
  footer
    div(class="columns")
      div(class="column", :class='classMain')
        div <a href="https://github.com/edehr/edehr"> EdEHR Github repository </a>
        div Content on this site is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a> except where otherwise noted.
        div EdEHR software is licensed under <a href="https://github.com/edehr/edehr/blob/master/LICENSE">GNU Affero General Public License v3.0</a>
        div Application version {{ appVersion }}
      div(v-if="showEdEhrOrg", class="column is-2")
        div &nbsp;
      div(v-if="showEdEhrOrg", class="column is-4")
        ed-ehr-org-footer
    div(class="column")
      div {{ apiData.appTitle }}
      div {{ authData.timeRemaining }}
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EdEhrOrgFooter from '@/app/edehr-org/EdEhrOrgFooter'
import edherorg from '@/app/edehr-org/ed-ehr-org'
export default {
  components: {
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
</style>
